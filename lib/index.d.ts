/// <reference types="react" />
import { IPopoverContentHandler } from "./list";
export interface IMembershipListRole {
    id: string;
    name: string;
}
interface IMembershipListProps {
    entity: string;
    entityID: string;
    roles?: IMembershipListRole[];
    readonly?: boolean;
    memberFields?: string[];
    listPopoverContent?: IPopoverContentHandler;
}
export declare const MembershipList: (props: IMembershipListProps) => JSX.Element;
export {};
