import { BaseType, IData } from './base_data'
import { Campaign } from './campaign'
import { MemberList } from './member'

interface Attributes {
  readonly about?: string | null
  readonly can_see_nsfw?: boolean | null
  readonly created?: Date
  readonly email?: string
  readonly first_name?: string | null
  readonly full_name?: string
  readonly hide_pledges?: boolean | null
  readonly image_url?: string
  readonly is_email_verified?: boolean
  readonly last_name?: string | null
  readonly like_count?: number
  readonly social_connections?: any
  readonly thumb_url?: string
  readonly url?: string
  readonly vanity?: string | null
}

interface Relationships {
  readonly campaign?: Campaign
  readonly memberships?: MemberList
}

export type UserData = IData<'user', Attributes, Relationships>

export interface User extends BaseType<UserData> { }

export interface UserList extends BaseType<UserData[]> { } { }
