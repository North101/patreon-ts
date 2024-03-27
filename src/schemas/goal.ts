import { GoalData } from "../data/goal"
import { BaseSchema } from "./base_schema"

export class GoalSchema extends BaseSchema<GoalData> {
  readonly type = 'goal'
}
