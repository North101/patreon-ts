import { BaseType, IData } from './base_data'
import { Campaign } from './campaign'
import { DeliverableList } from './deliverable'
import { TierList } from './tier'

interface Attributes {
  readonly app_external_id?: string | null
  readonly app_meta?: object | null
  readonly benefit_type?: string | null
  readonly created_at?: string
  readonly deliverables_due_today_count?: number
  readonly delivered_deliverables_count?: number
  readonly description?: string
  readonly is_deleted?: boolean
  readonly is_ended?: boolean
  readonly is_published?: boolean
  readonly next_deliverable_due_date?: string
  readonly not_delivered_deliverables_count?: number
  readonly rule_type?: string | null
  readonly tiers_count?: number
  readonly title?: string
}

interface Relationships {
  readonly campaign?: Campaign
  readonly campaign_installation?: object//CampaignInstallation
  readonly deliverables: DeliverableList
  readonly tiers?: TierList
}

export type BenefitData = IData<'benefit', Attributes, Relationships>

export interface Benefit extends BaseType<BenefitData> { }

export interface BenefitList extends BaseType<BenefitData[]> { } { }
