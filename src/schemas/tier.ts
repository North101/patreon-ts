import { TierData } from "../data/tier"
import { BaseSchema } from "./base_schema"

export class TierSchema extends BaseSchema<TierData> {
  readonly type = 'tier'
}
