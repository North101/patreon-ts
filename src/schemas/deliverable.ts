import { Deliverable } from "../data/deliverable"
import { BaseSchema } from "./base_schema"

export class DeliverableSchema extends BaseSchema<Deliverable> {
  readonly type = 'deliverable'
}
