import { AddressData } from "./address";
import { CampaignData } from "./campaign";
import { DeliverableData } from "./deliverable";
import { GoalData } from "./goal";
import { MediaData } from "./media";
import { MemberData } from "./member";
import { PostData } from "./post";
import { TierData } from "./tier";
import { UserData } from "./user";
import { WebhookData } from "./webhook";
export interface Links {
    self?: string;
    related?: {
        href: string;
        meta: object;
    };
}
export interface Cursors {
    next: string | null;
}
export interface Pagination {
    cursors: Cursors;
    total: number;
}
export interface Meta {
    pagination: Pagination;
}
export interface Data<T extends string, A, R> {
    id: string;
    type: T;
    attributes?: A;
    relationships?: R;
}
export type DataType = Data<any, any, any>;
export interface BaseType<D extends DataType | DataType[]> {
    data: D;
}
export interface BaseRoot<D extends DataType | DataType[]> extends BaseType<D> {
    links: Links;
    included: (AddressData | CampaignData | DeliverableData | GoalData | MediaData | MemberData | PostData | TierData | UserData | WebhookData)[];
}
export interface Root<D extends DataType> extends BaseRoot<D> {
}
export interface RootList<D extends DataType> extends BaseRoot<D[]> {
    meta: Meta;
}
