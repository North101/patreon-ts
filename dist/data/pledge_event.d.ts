import { BaseType, IData } from './base_data';
import { Campaign } from './campaign';
import { Tier } from './tier';
import { User } from './user';
interface Attributes {
    readonly amount_cents?: number;
    readonly currency_code?: string;
    readonly date?: Date;
    readonly payment_status?: 'Paid' | 'Declined' | 'Deleted' | 'Pending' | 'Refunded' | 'Fraud' | 'Other' | null;
    readonly tier_id?: string | null;
    readonly tier_title?: string | null;
    readonly type?: 'pledge_start' | 'pledge_upgrade' | 'pledge_downgrade' | 'pledge_delete' | 'subscription';
}
interface Relationships {
    readonly campaign?: Campaign;
    readonly patron?: User;
    readonly tier: Tier;
}
export type PledgeEventData = IData<'pledge_event', Attributes, Relationships>;
export interface PledgeEvent extends BaseType<PledgeEventData> {
}
export interface PledgeEventList extends BaseType<PledgeEventData[]> {
}
export {};
