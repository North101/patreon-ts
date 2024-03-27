import { PledgeEventData } from "../data/pledge_event"
import { BaseSchema } from "./base_schema"

export class PledgeEventSchema extends BaseSchema<PledgeEventData> {
  readonly type = 'pledge'
}
