import { BaseType, IData } from './base_data';
import { BenefitList } from './benefit';
import { GoalList } from './goal';
import { TierList } from './tier';
import { User } from './user';
interface Attributes {
    readonly created_at?: string;
    readonly creation_name?: string | null;
    readonly discord_server_id?: string | null;
    readonly google_analytics_id?: string | null;
    readonly has_rss?: boolean;
    readonly has_sent_rss_notify?: boolean;
    readonly image_small_url?: string;
    readonly image_url?: string;
    readonly is_charged_immediately?: boolean | null;
    readonly is_monthly?: boolean;
    readonly is_nsfw?: boolean;
    readonly main_video_embed?: string | null;
    readonly main_video_url?: string | null;
    readonly one_liner?: string | null;
    readonly patron_count?: number;
    readonly pay_per_name?: string | null;
    readonly pledge_url?: string;
    readonly published_at?: string | null;
    readonly rss_artwork_url?: string | null;
    readonly rss_feed_title?: string;
    readonly show_earnings?: boolean;
    readonly summary?: string | null;
    readonly thanks_embed?: string | null;
    readonly thanks_msg?: string | null;
    readonly thanks_video_url?: string | null;
    readonly url?: string;
    readonly vanity?: string | null;
}
interface Relationships {
    readonly benefits?: BenefitList;
    readonly campaign_installations?: object;
    readonly categories?: object;
    readonly creator?: User;
    readonly goals?: GoalList;
    readonly tiers?: TierList;
}
export type CampaignData = IData<'campaign', Attributes, Relationships>;
export interface Campaign extends BaseType<CampaignData> {
}
export interface CampaignList extends BaseType<CampaignData[]> {
}
export {};
