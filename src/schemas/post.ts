import { PostData } from "../data/post"
import { BaseSchema } from "./base_schema"

export class PostSchema extends BaseSchema<PostData> {
  readonly type = 'post'
}
