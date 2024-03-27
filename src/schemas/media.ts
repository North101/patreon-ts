import { MediaData } from "../data/media"
import { BaseSchema } from "./base_schema"

export class MediaSchema extends BaseSchema<MediaData> {
  readonly type = 'media'
}
