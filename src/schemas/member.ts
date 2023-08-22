import { Member } from "../data/member"
import { BaseSchema } from "./base_schema"

export class MemberSchema extends BaseSchema<Member> {
  readonly type = 'member'
}
