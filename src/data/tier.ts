import { BaseType, Data } from './base_data'
import { BenefitData } from './benefit'
import { CampaignData } from './campaign'

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
  readonly benefits?: BaseType<BenefitData[]>
  readonly campaign?: BaseType<CampaignData>
  readonly tier_image?: BaseType<TierData>
}

export type TierData = Data<'deliverable', Attributes, Relationships>
