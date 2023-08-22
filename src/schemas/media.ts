import { Media } from "../data/media"
import { BaseSchema } from "./base_schema"

export class MediaSchema extends BaseSchema<Media> {
  readonly type = 'media'
}
