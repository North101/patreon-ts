import { DeliverableData } from "../data/deliverable"
import { BaseSchema } from "./base_schema"

export class DeliverableSchema extends BaseSchema<DeliverableData> {
  readonly type = 'deliverable'
}
