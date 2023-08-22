import { Benefit } from "../data/benefit"
import { BaseSchema } from "./base_schema"

export class BenefitSchema extends BaseSchema<Benefit> {
  readonly type = 'benefit'
}
