import { AddressData } from './address'
import { BaseType, Data } from './base_data'
import { CampaignData } from './campaign'
import { PledgeEventData } from './pledge_event'
import { TierData } from './tier'
import { UserData } from './user'

interface Attributes {
  readonly campaign_lifetime_support_cents?: number
  readonly currently_entitled_amount_cents?: number
  readonly email?: string
  readonly full_name?: string
  readonly is_follower?: boolean
  readonly last_charge_date?: Date | null
  readonly last_charge_status?: 'Paid' | 'Declined' | 'Deleted' | 'Pending' | 'Refunded' | 'Fraud' | 'Other' | null
  readonly lifetime_support_cents?: number
  readonly next_charge_date?: Date | null
  readonly note?: string
  readonly patron_status?: 'active_patron' | 'declined_patron' | 'former_patron' | null
  readonly pledge_cadence?: number
  readonly pledge_relationship_start?: Date | null
  readonly will_pay_amount_cents?: number
}

interface Relationships {
  readonly address?: BaseType<AddressData>
  readonly campaign?: BaseType<CampaignData>
  readonly currently_entitled_tiers: BaseType<TierData[]>
  readonly pledge_history?: BaseType<PledgeEventData[]>
  readonly user?: BaseType<UserData>
}

export type MemberData = Data<'member', Attributes, Relationships>
