import * as React from "react";

import { Button, Form, Select } from "antd";
import { Mutation, MutationFunction, Query, QueryResult } from "react-apollo";

import { MembershipListComponent } from "./list";
import { SelectProps } from "antd/lib/select";
import gql from "graphql-tag";

export interface IMembershipListRole {
  id: string;
  name: string;
}

interface IMembershipListProps {
  entity: string;
  entityID: string;
  roles?: IMembershipListRole[];
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

export const MembershipList = (props: IMembershipListProps) => {
  const [form] = Form.useForm();
  const [inviting, setInviting] = React.useState(false);

  const { entity, entityID, roles } = props;

  const rolesSelect = (props: {
    roles?: IMembershipListRole[];
    value?: string;
    props?: SelectProps<any>;
  }): React.ReactNode | undefined => {
    return (
      props.roles && (
        <Select value={props.value} style={{ width: "120px" }} {...props.props}>
          {props.roles.map((r) => (
            <Select.Option value={r.id}>{r.name}</Select.Option>
          ))}
        </Select>
      )
    );
  };

  return (
    <Mutation mutation={DELETE_MEMBERSHIP_MUTATION}>
      {(deleteMembership: MutationFunction<any, any>) => (
        <Query query={MEMBERSHIPS_QUERY} variables={{ entity, entityID }}>
          {({ data, loading, refetch }: QueryResult<any>) => (
            <MembershipListComponent
              loading={loading}
              memberships={data.memberships}
              roles={roles || []}
              onDelete={async (id) => {
                await deleteMembership({
                  variables: { id },
                });
                refetch();
              }}
              footer={
                <Mutation mutation={INVITE_MEMBER}>
                  {(inviteMember: MutationFunction<any, any>) => (
                    <Form
                      onFinish={async (values) => {
                        setInviting(true);
                        try {
                          await Promise.all(
                            values.members.map((m: string) =>
                              inviteMember({
                                variables: {
                                  email: m,
                                  role: values.role,
                                  entity,
                                  entityID,
                                },
                              })
                            )
                          );
                        } catch (e) {
                          global.console.log("failed to add", e);
                        } finally {
                          setInviting(false);
                          form.resetFields();
                        }
                        refetch();
                      }}
                    >
                      <Form.Item>
                        <Select
                          mode="tags"
                          style={{ width: "250px" }}
                          // size=""
                          notFoundContent=""
                          tokenSeparators={[" ", ","]}
                          placeholder="type email addreses"
                        />
                      </Form.Item>
                      {roles && (
                        <Form.Item label="role" rules={[{ required: true }]}>
                          {rolesSelect({ roles })}
                        </Form.Item>
                      )}{" "}
                      <Button
                        type="primary"
                        htmlType="submit"
                        loading={inviting}
                      >
                        Add
                      </Button>
                    </Form>
                    // <Form
                    //   onSave={async (values: any, context: FormContext) => {
                    //     this.setState({ inviting: true });
                    //     try {
                    //       await Promise.all(
                    //         values.members.map((m: string) =>
                    //           inviteMember({
                    //             variables: {
                    //               email: m,
                    //               role: values.role,
                    //               entity,
                    //               entityID,
                    //             },
                    //           })
                    //         )
                    //       );
                    //     } catch (e) {
                    //       global.console.log("failed to add", e);
                    //     } finally {
                    //       this.setState({ inviting: false });
                    //       context.form.resetFields();
                    //     }
                    //     refetch();
                    //   }}
                    //   render={(context: FormContext) => (
                    //     <>
                    //       <FormFieldDecorator
                    //         name="members"
                    //         formContext={context}
                    //         rules={[{ required: true }]}
                    //       >
                    //         <Select
                    //           mode="tags"
                    //           style={{ width: "250px" }}
                    //           // size=""
                    //           notFoundContent=""
                    //           tokenSeparators={[" ", ","]}
                    //           placeholder="type email addreses"
                    //         />
                    //       </FormFieldDecorator>{" "}
                    //       {roles && (
                    //         <FormFieldDecorator
                    //           name="role"
                    //           rules={[{ required: true }]}
                    //           formContext={context}
                    //         >
                    //           {this.rolesSelect({ roles })}
                    //         </FormFieldDecorator>
                    //       )}{" "}
                    //       <Button
                    //         type="primary"
                    //         htmlType="submit"
                    //         loading={this.state.inviting}
                    //       >
                    //         Add
                    //       </Button>
                    //     </>
                    //   )}
                    // />
                  )}
                </Mutation>
              }
            />
          )}
        </Query>
      )}
    </Mutation>
  );
};
