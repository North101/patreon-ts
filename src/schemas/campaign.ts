import { Campaign } from "../data/campaign"
import { BaseSchema } from "./base_schema"

export class CampaignSchema extends BaseSchema<Campaign> {
  readonly type = 'campaign'
}
