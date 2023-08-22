import { BaseType, IData } from './base_data'
import { Campaign } from './campaign'

interface Attributes {
  amount_cents?: number
  completed_percentage?: number
  created_at?: string
  description?: string | null
  reached_at?: string
  title?: string
}

interface Relationships {
  readonly campaign?: Campaign
}

export type GoalData = IData<'goal', Attributes, Relationships>

export interface Goal extends BaseType<GoalData> { }

export interface GoalList extends BaseType<GoalData[]> { } { }
