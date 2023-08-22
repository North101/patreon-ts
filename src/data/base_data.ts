import { AddressData } from "./address"
import { CampaignData } from "./campaign"
import { DeliverableData } from "./deliverable"
import { GoalData } from "./goal"
import { MediaData } from "./media"
import { MemberData } from "./member"
import { PostData } from "./post"
import { TierData } from "./tier"
import { UserData } from "./user"
import { WebhookData } from "./webhook"

export interface ILinks {
  self?: string
  related?: {
    href: string
    meta: object
  }
}

export interface Cursors {
  next: string | null
}

export interface Pagination {
  cursors: Cursors
  total: number
}

export interface Meta {
  pagination: Pagination
}

export interface IData<T extends string, A, R> {
  id: string
  type: T
  attributes?: A
  relationships?: R
}

type IDataAny = IData<any, any, any>

type IDataType = IDataAny | IDataAny[]

export interface BaseType<D extends IDataType> {
  data: D
}

interface BaseRoot<D extends BaseType<IDataType>> {
  data: D['data']
  links: ILinks
  included: (AddressData | CampaignData | DeliverableData | GoalData | MediaData | MemberData | PostData | TierData | UserData | WebhookData)[]
}

export interface Root<D extends BaseType<IDataAny>> extends BaseRoot<D> { }

export interface RootList<D extends BaseType<IDataAny[]>> extends BaseRoot<D> {
  meta: Meta
}
