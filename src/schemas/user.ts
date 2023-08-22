import { User } from "../data/user"
import { BaseSchema } from "./base_schema"

export class UserSchema extends BaseSchema<User> {
  readonly type = 'user'
}
