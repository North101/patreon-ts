import { Post } from "../data/post"
import { BaseSchema } from "./base_schema"

export class PostSchema extends BaseSchema<Post> {
  readonly type = 'post'
}
