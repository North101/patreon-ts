import { AddressSchema } from './address'
import { BenefitSchema } from './benefit'
import { CampaignSchema } from './campaign'
import { DeliverableSchema } from './deliverable'
import { GoalSchema } from './goal'
import { MediaSchema } from './media'
import { MemberSchema } from './member'
import { PledgeEventSchema } from './pledge_event'
import { PostSchema } from './post'
import { TierSchema } from './tier'
import { UserSchema } from './user'
import { WebhookSchema } from './webhook'

export type SchemaUnion =
  AddressSchema |
  BenefitSchema |
  CampaignSchema |
  DeliverableSchema |
  GoalSchema |
  MediaSchema |
  MemberSchema |
  PledgeEventSchema |
  PostSchema |
  TierSchema |
  UserSchema |
  WebhookSchema

export {
  AddressSchema,
  BenefitSchema,
  CampaignSchema,
  DeliverableSchema,
  GoalSchema,
  MediaSchema,
  MemberSchema,
  PledgeEventSchema,
  PostSchema,
  TierSchema,
  UserSchema,
  WebhookSchema
}
