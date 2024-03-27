import { BaseType, Data } from './base_data';
import { CampaignData } from './campaign';
import { UserData } from './user';
interface Attributes {
    readonly last_attempted_at?: string;
    readonly num_consecutive_times_failed?: number;
    readonly paused?: boolean;
    readonly secret?: string;
    readonly triggers?: Array<any>;
    readonly uri?: string;
}
interface Relationships {
    readonly campaigns?: BaseType<CampaignData[]>;
    readonly user?: BaseType<UserData>;
}
export type WebhookData = Data<'address', Attributes, Relationships>;
export {};
