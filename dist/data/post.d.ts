import { BaseType, Data } from './base_data';
import { CampaignData } from './campaign';
import { UserData } from './user';
interface Attributes {
    app_id?: number;
    app_status?: string | null;
    content?: string | null;
    embed_data?: object;
    embed_url?: string;
    is_paid?: boolean;
    is_public?: boolean;
    published_at?: string | null;
    tiers?: object[] | null;
    title?: string | null;
    url?: string;
}
interface Relationships {
    readonly campaign?: BaseType<CampaignData>;
    readonly user?: BaseType<UserData>;
}
export type PostData = Data<'deliverable', Attributes, Relationships>;
export {};
