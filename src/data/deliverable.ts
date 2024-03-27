import { BaseType, Data } from './base_data'
import { BenefitData } from './benefit'
import { CampaignData } from './campaign'
import { MemberData } from './member'
import { UserData } from './user'

interface Attributes {
  readonly completed_at?: string | null
  readonly delivery_status?: string
  readonly due_at?: string
}

interface Relationships {
  readonly benefit?: BaseType<BenefitData>
  readonly campaign?: BaseType<CampaignData>
  readonly member?: BaseType<MemberData>
  readonly user?: BaseType<UserData>
}

export type DeliverableData = Data<'deliverable', Attributes, Relationships>
