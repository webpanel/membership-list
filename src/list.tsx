import * as React from 'react';

import { Button, List, Popconfirm, Popover, Select } from 'antd';

import { SelectProps } from 'antd/lib/select';

interface IMembershipListRole {
  id: string;
  name: string;
}

interface IMembership {
  id: string;
  role: string;
  member: { id: string; email: string };
}

interface IMembershipListProps {
  loading: boolean;
  footer: React.ReactNode;
  memberships: IMembership[];
  roles: IMembershipListRole[];
  onDelete: (id: string) => Promise<void>;
}

export class MembershipListComponent extends React.Component<
  IMembershipListProps
> {
  public render() {
    const { loading, footer, memberships, roles, onDelete } = this.props;

    return (
      <List
        size="small"
        loading={loading}
        footer={footer}
        bordered={false}
        dataSource={memberships}
        itemLayout="horizontal"
        renderItem={(item: IMembership) => {
          return (
            <List.Item
              actions={[
                <Popconfirm
                  key="delete"
                  title="Are you sure?"
                  okText="Yes"
                  cancelText="No"
                  icon="user"
                  onConfirm={() => {
                    if (onDelete) {
                      (async function() {
                        await onDelete(item.id);
                      })();
                    }
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
