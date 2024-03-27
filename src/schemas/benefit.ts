import { BenefitData } from "../data/benefit"
import { BaseSchema } from "./base_schema"

export class BenefitSchema extends BaseSchema<BenefitData> {
  readonly type = 'benefit'
}
