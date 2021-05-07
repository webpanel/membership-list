import * as React from "react";
interface IMembershipListRole {
    id: string;
    name: string;
}
interface IMember {
    id: string;
    email: string;
    [key: string]: any;
}
interface IMembership {
    id: string;
    role: string;
    member: IMember;
}
export declare type IPopoverContentHandler = (memberships: IMembership) => React.ReactNode;
interface IMembershipListProps {
    loading: boolean;
    footer: React.ReactNode;
    memberships: IMembership[];
    roles: IMembershipListRole[];
    onDelete: (id: string) => Promise<void>;
    readonly?: boolean;
    popoverContent?: IPopoverContentHandler;
}
export declare class MembershipListComponent extends React.Component<IMembershipListProps> {
    render(): JSX.Element;
    private rolesSelect;
}
export {};
