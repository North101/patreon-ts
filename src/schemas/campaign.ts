import { CampaignData } from "../data/campaign"
import { BaseSchema } from "./base_schema"

export class CampaignSchema extends BaseSchema<CampaignData> {
  readonly type = 'campaign'
}
