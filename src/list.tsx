import * as React from 'react';

import { Button, List, Popconfirm, Popover, Select } from 'antd';
import { Form, FormFieldDecorator } from 'webpanel-antd';
import { Mutation, MutationFunction, Query, QueryResult } from 'react-apollo';

import { FormContext } from 'webpanel-antd/lib/form/form/Form';
import { SelectProps } from 'antd/lib/select';
import gql from 'graphql-tag';

interface IMembershipListRole {
  id: string;
  name: string;
}

interface IMembershipListProps {
  entity: string;
  entityID: string;
  roles?: IMembershipListRole[];
}
interface IMembershipListState {
  inviting: boolean;
}

const MEMBERSHIPS_QUERY = gql`
  query($entityID: ID!, $entity: String!) {
    memberships(entity: $entity, entityID: $entityID) {
      id
      role
      member {
        id
        email
        given_name
        family_name
      }
    }
  }
`;

const INVITE_MEMBER = gql`
  mutation($email: String!, $entity: String!, $entityID: ID!, $role: String) {
    inviteMember(
      input: {
        email: $email
        entity: $entity
        entityID: $entityID
        role: $role
      }
    ) {
      id
    }
  }
`;

const DELETE_MEMBERSHIP_MUTATION = gql`
  mutation($id: ID!) {
    deleteMembership(id: $id) {
      id
    }
  }
`;

export class MembershipList extends React.Component<
  IMembershipListProps,
  IMembershipListState
> {
  public state: IMembershipListState = {
    inviting: false
  };

  public render() {
    const { entity, entityID, roles } = this.props;

    return (
      <Mutation mutation={DELETE_MEMBERSHIP_MUTATION}>
        {(deleteMembership: MutationFunction<any, any>) => (
          <Query query={MEMBERSHIPS_QUERY} variables={{ entity, entityID }}>
            {({ data, loading, refetch }: QueryResult<any>) => (
              <List
                size="small"
                loading={loading}
                footer={
                  <Mutation mutation={INVITE_MEMBER}>
                    {(inviteMember: MutationFunction<any, any>) => (
                      <Form
                        onSave={async (values: any, context: FormContext) => {
                          this.setState({ inviting: true });
                          try {
                            await Promise.all(
                              values.members.map((m: string) =>
                                inviteMember({
                                  variables: {
                                    email: m,
                                    role: values.role,
                                    entity,
                                    entityID
                                  }
                                })
                              )
                            );
                          } catch (e) {
                            global.console.log('failed to add', e);
                          } finally {
                            this.setState({ inviting: false });
                            context.form.resetFields();
                          }
                          refetch();
                        }}
                        render={(context: FormContext) => (
                          <>
                            <FormFieldDecorator
                              name="members"
                              formContext={context}
                              rules={[{ required: true }]}
                            >
                              <Select
                                mode="tags"
                                style={{ width: '250px' }}
                                size="default"
                                notFoundContent=""
                                tokenSeparators={[' ', ',']}
                                placeholder="type email addreses"
                              />
                            </FormFieldDecorator>{' '}
                            {roles && (
                              <FormFieldDecorator
                                name="role"
                                rules={[{ required: true }]}
                                formContext={context}
                              >
                                {this.rolesSelect({ roles })}
                              </FormFieldDecorator>
                            )}{' '}
                            <Button
                              type="primary"
                              htmlType="submit"
                              loading={this.state.inviting}
                            >
                              Add
                            </Button>
                          </>
                        )}
                      />
                    )}
                  </Mutation>
                }
                bordered={false}
                dataSource={data.memberships}
                itemLayout="horizontal"
                renderItem={(item: any) => {
                  return (
                    <List.Item
                      actions={[
                        <Popconfirm
                          key="delete"
                          title="Are you sure?"
                          okText="Yes"
                          cancelText="No"
                          icon="user"
                          onConfirm={async () => {
                            await deleteMembership({
                              variables: { id: item.id }
                            });
                            refetch();
                          }}
                        >
                          <Button
                            key="delete"
                            icon="delete"
                            size="small"
                            type="danger"
                          />
                        </Popconfirm>
                      ]}
                    >
                      <List.Item.Meta
                        title={
                          <Popover content={`ID: ${item.member.id}`}>
                            {item.member.email}
                          </Popover>
                        }
                      />
                      {this.rolesSelect({
                        roles,
                        value: item.role,
                        props: { size: 'small', disabled: true }
                      })}
                    </List.Item>
                  );
                }}
              />
            )}
          </Query>
        )}
      </Mutation>
    );
  }

  private rolesSelect(props: {
    roles?: IMembershipListRole[];
    value?: string;
    props?: SelectProps;
  }): React.ReactNode | undefined {
    return (
      props.roles && (
        <Select value={props.value} style={{ width: '120px' }} {...props.props}>
          {props.roles.map(r => (
            <Select.Option value={r.id}>{r.name}</Select.Option>
          ))}
        </Select>
      )
    );
  }
}
