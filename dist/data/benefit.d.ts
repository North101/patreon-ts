import { BaseType, Data } from './base_data';
import { CampaignData } from './campaign';
import { DeliverableData } from './deliverable';
import { TierData } from './tier';
interface Attributes {
    readonly app_external_id?: string | null;
    readonly app_meta?: object | null;
    readonly benefit_type?: string | null;
    readonly created_at?: string;
    readonly deliverables_due_today_count?: number;
    readonly delivered_deliverables_count?: number;
    readonly description?: string;
    readonly is_deleted?: boolean;
    readonly is_ended?: boolean;
    readonly is_published?: boolean;
    readonly next_deliverable_due_date?: string;
    readonly not_delivered_deliverables_count?: number;
    readonly rule_type?: string | null;
    readonly tiers_count?: number;
    readonly title?: string;
}
interface Relationships {
    readonly campaign?: BaseType<CampaignData>;
    readonly campaign_installation?: object;
    readonly deliverables: BaseType<DeliverableData[]>;
    readonly tiers?: BaseType<TierData[]>;
}
export type BenefitData = Data<'benefit', Attributes, Relationships>;
export {};
