import { Address } from './address'
import { BaseType, IData } from './base_data'
import { Campaign } from './campaign'
import { PledgeEventList } from './pledge_event'
import { TierList } from './tier'
import { User } from './user'

interface Attributes {
  readonly currently_entitled_amount_cents?: number
  readonly email?: string
  readonly full_name?: string
  readonly is_follower?: boolean
  readonly last_charge_date?: Date | null
  readonly last_charge_status?: 'Paid' | 'Declined' | 'Deleted' | 'Pending' | 'Refunded' | 'Fraud' | 'Other' | null
  readonly lifetime_support_cents?: number
  readonly note?: string
  readonly patron_status?: 'active_patron' | 'declined_patron' | 'former_patron' | null
  readonly pledge_relationship_start?: Date | null
  readonly will_pay_amount_cents?: number
}

interface Relationships {
  readonly address?: Address
  readonly campaign?: Campaign
  readonly currently_entitled_tiers: TierList
  readonly pledge_history?: PledgeEventList
  readonly user?: User
}

export type MemberData = IData<'member', Attributes, Relationships>

export interface Member extends BaseType<MemberData> { }

export interface MemberList extends BaseType<MemberData[]> { } { }
