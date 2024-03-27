import { BaseType, Data } from './base_data'
import { CampaignData } from './campaign'
import { TierData } from './tier'
import { UserData } from './user'

interface Attributes {
  readonly amount_cents?: number
  readonly currency_code?: string
  readonly date?: Date
  readonly payment_status?: 'Paid' | 'Declined' | 'Deleted' | 'Pending' | 'Refunded' | 'Fraud' | 'Other' | null
  readonly tier_id?: string | null
  readonly tier_title?: string | null
  readonly type?: 'pledge_start' | 'pledge_upgrade' | 'pledge_downgrade' | 'pledge_delete' | 'subscription'
}

interface Relationships {
  readonly campaign?: BaseType<CampaignData>
  readonly patron?: BaseType<UserData>
  readonly tier: BaseType<TierData>
}

export type PledgeEventData = Data<'pledge_event', Attributes, Relationships>
