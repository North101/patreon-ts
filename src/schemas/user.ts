import { UserData } from "../data/user"
import { BaseSchema } from "./base_schema"

export class UserSchema extends BaseSchema<UserData> {
  readonly type = 'user'
}
