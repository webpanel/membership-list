import * as React from 'react';
export interface IMembershipListRole {
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
export declare class MembershipList extends React.Component<IMembershipListProps, IMembershipListState> {
    state: IMembershipListState;
    render(): JSX.Element;
    private rolesSelect;
}
export {};
