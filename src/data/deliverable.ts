import { BaseType, IData } from './base_data'
import { Benefit } from './benefit'
import { Campaign } from './campaign'
import { Member } from './member'
import { User } from './user'

interface Attributes {
  readonly completed_at?: string | null
  readonly delivery_status?: string
  readonly due_at?: string
}

interface Relationships {
  readonly benefit?: Benefit
  readonly campaign?: Campaign
  readonly member?: Member
  readonly user?: User
}

export type DeliverableData = IData<'deliverable', Attributes, Relationships>

export interface Deliverable extends BaseType<DeliverableData> { }

export interface DeliverableList extends BaseType<DeliverableData[]> { } { }
