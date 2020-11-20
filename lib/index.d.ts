/// <reference types="react" />
export interface IMembershipListRole {
    id: string;
    name: string;
}
interface IMembershipListProps {
    entity: string;
    entityID: string;
    roles?: IMembershipListRole[];
    readonly?: boolean;
}
export declare const MembershipList: (props: IMembershipListProps) => JSX.Element;
export {};
