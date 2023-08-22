import { Tier } from "../data/tier"
import { BaseSchema } from "./base_schema"

export class TierSchema extends BaseSchema<Tier> {
  readonly type = 'tier'
}
