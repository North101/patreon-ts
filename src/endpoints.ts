import { BaseType, Root, RootList } from './data'
import { BaseRoot, DataType, JsonApiErrors } from './data/base_data'
import { CampaignData } from './data/campaign'
import { MemberData } from './data/member'
import { PostData } from './data/post'
import { UserData } from './data/user'
import { WebhookData } from './data/webhook'
import { CampaignSchema, MemberSchema, PostSchema, UserSchema, WebhookSchema } from './schemas'
import { BaseSchema } from './schemas/base_schema'
import { PatreonToken } from './types'

const ApiHost = 'https://www.patreon.com/api/oauth2/v2/'

async function fetchPatreon<T extends BaseType<any>>(query: string, accessToken: PatreonToken): Promise<T | JsonApiErrors> {
  try {
    const response = await fetch(query, {
      headers: {
        Authorization: `Bearer ${accessToken.access_token}`,
      },
    })
    return await response.json()
  } catch (error) {
    return Promise.reject(error)
  }
}

function buildUrl(endpoint: string, search?: URLSearchParams): string {
  const url = new URL(endpoint, ApiHost)
  if (search) {
    url.search = search?.toString()
  }
  return url.toString()
}

const buildFields = (object: BaseSchema<any>, data?: Map<string, Set<string>>) => {
  data ??= new Map()

  if (object.attributes) {
    const field = object.type
    const attributes = data.get(field) ?? new Set()
    for (const [key, value] of Object.entries(object.attributes)) {
      if (value) {
        attributes.add(key)
      }
    }
    data.set(field, attributes)
  }
  if (object.relationships) {
    for (const value of Object.values(object.relationships)) {
      if (value == undefined) continue

      buildFields(value, data)
    }
  }
  return data
}

const buildInclude = (object: BaseSchema<any>, levels?: string[], data?: Set<string>) => {
  levels ??= []
  data ??= new Set()

  if (object.relationships) {
    for (const [key, value] of Object.entries(object.relationships)) {
      if (value == undefined) continue

      const fieldLevels = [...levels, key]
      data.add(fieldLevels.join('.'))

      buildInclude(value, fieldLevels, data)
    }
  }

  return data
}

function BuildEndpointQuery(object: BaseSchema<any>, query?: URLSearchParams): URLSearchParams {
  query ??= new URLSearchParams()

  const fields = buildFields(object)
  for (const [key, value] of fields.entries()) {
    query.set(`fields[${key}]`, [...value].join(','))
  }

  const include = buildInclude(object)
  if (include.size > 0) {
    query.set(`include`, [...include].join(','))
  }

  return query
}

function buildRequest<R extends BaseRoot<T | T[]>, T extends DataType>(endpoint: string, schema: BaseSchema<T>) {
  const url = buildUrl(endpoint, BuildEndpointQuery(schema))
  return (accessToken: PatreonToken) => fetchPatreon<R>(
    url,
    accessToken,
  )
}

function buildComplexRequest<R extends BaseRoot<T | T[]>, T extends DataType, P extends string[]>(endpoint: (...params: P) => string, schema: BaseSchema<T>) {
  const query = BuildEndpointQuery(schema)
  return (accessToken: PatreonToken, ...params: P) => fetchPatreon<R>(
    buildUrl(endpoint(...params), query),
    accessToken,
  )
}

export const campaignById = (schema: CampaignSchema) =>
  buildComplexRequest<Root<CampaignData>, CampaignData, [id: string]>(id => `campaigns/${id}`, schema)

export const campaignMembersById = (schema: MemberSchema) =>
  buildComplexRequest<RootList<MemberData>, MemberData, [id: string]>(id => `campaigns/${id}/members`, schema)

export const campaignPostsById = (schema: PostSchema) =>
  buildComplexRequest<RootList<PostData>, PostData, [id: string]>(id => `campaigns/${id}/posts`, schema)

export const campaigns = (schema: CampaignSchema) =>
  buildRequest<RootList<CampaignData>, CampaignData>('campaigns', schema)

export const identity = (schema: UserSchema) =>
  buildRequest<Root<UserData>, UserData>('identity', schema)

export const memberById = (schema: MemberSchema) =>
  buildComplexRequest<Root<MemberData>, MemberData, [id: string]>(id => `members/${id}`, schema)

export const postById = (schema: PostSchema) =>
  buildComplexRequest<Root<PostData>, PostData, [id: string]>(id => `posts/${id}`, schema)

export const webhookById = (schema: WebhookSchema) =>
  buildComplexRequest<Root<WebhookData>, WebhookData, [id: string]>(id => `webhooks/${id}`, schema)

export const webhooks = (schema: WebhookSchema) =>
  buildRequest<RootList<WebhookData>, WebhookData>('webhooks', schema)
