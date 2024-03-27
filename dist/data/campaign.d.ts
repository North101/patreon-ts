import { BaseType, Data } from './base_data';
import { BenefitData } from './benefit';
import { GoalData } from './goal';
import { TierData } from './tier';
import { UserData } from './user';
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
    readonly benefits?: BaseType<BenefitData[]>;
    readonly campaign_installations?: object;
    readonly categories?: object;
    readonly creator?: BaseType<UserData>;
    readonly goals?: BaseType<GoalData[]>;
    readonly tiers?: BaseType<TierData[]>;
}
export type CampaignData = Data<'campaign', Attributes, Relationships>;
export {};
