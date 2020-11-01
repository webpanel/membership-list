/// <reference types="react" />
export interface IMembershipListRole {
    id: string;
    name: string;
}
interface IMembershipListProps {
    entity: string;
    entityID: string;
    roles?: IMembershipListRole[];
}
export declare const MembershipList: (props: IMembershipListProps) => JSX.Element;
export {};
