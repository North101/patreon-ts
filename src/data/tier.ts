import { BaseType, IData } from './base_data'
import { BenefitList } from './benefit'
import { Campaign } from './campaign'

interface Attributes {
  amount_cents?: number
  created_at?: string
  description?: string
  discord_role_ids?: object
  edited_at?: string
  image_url?: string | null
  patron_count?: number
  post_count?: number | null
  published_at?: string
  published?: boolean
  remaining?: number | null
  requires_shipping?: boolean
  title?: string
  unpublished_at?: string | null
  url?: string
  user_limit?: number | null
}

interface Relationships {
  readonly benefits?: BenefitList
  readonly campaign?: Campaign
  readonly tier_image?: Tier
}

export type TierData = IData<'deliverable', Attributes, Relationships>

export interface Tier extends BaseType<TierData> { }

export interface TierList extends BaseType<TierData[]> { } { }
