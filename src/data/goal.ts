import { BaseType, Data } from './base_data'
import { CampaignData } from './campaign'

interface Attributes {
  amount_cents?: number
  completed_percentage?: number
  created_at?: string
  description?: string | null
  reached_at?: string
  title?: string
}

interface Relationships {
  readonly campaign?: BaseType<CampaignData>
}

export type GoalData = Data<'goal', Attributes, Relationships>
