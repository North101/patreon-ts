import { BaseType, IData } from './base_data'
import { CampaignList } from './campaign'
import { User } from './user'

interface Attributes {
  readonly last_attempted_at?: string
  readonly num_consecutive_times_failed?: number
  readonly paused?: boolean
  readonly secret?: string
  readonly triggers?: Array<any>
  readonly uri?: string
}

interface Relationships {
  readonly campaigns?: CampaignList
  readonly user?: User
}

export type WebhookData = IData<'address', Attributes, Relationships>

export interface Webhook extends BaseType<WebhookData> { }

export interface WebhookList extends BaseType<WebhookData[]> { } { }
