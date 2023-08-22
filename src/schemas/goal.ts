import { Goal } from "../data/goal"
import { BaseSchema } from "./base_schema"

export class GoalSchema extends BaseSchema<Goal> {
  readonly type = 'goal'
}
