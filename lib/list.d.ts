import * as React from "react";
interface IMembershipListRole {
    id: string;
    name: string;
}
interface IMembership {
    id: string;
    role: string;
    member: {
        id: string;
        email: string;
    };
}
interface IMembershipListProps {
    loading: boolean;
    footer: React.ReactNode;
    memberships: IMembership[];
    roles: IMembershipListRole[];
    onDelete: (id: string) => Promise<void>;
    readonly?: boolean;
}
export declare class MembershipListComponent extends React.Component<IMembershipListProps> {
    render(): JSX.Element;
    private rolesSelect;
}
export {};
