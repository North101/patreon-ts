import { Webhook } from "../data/webhook"
import { BaseSchema } from "./base_schema"

export class WebhookSchema extends BaseSchema<Webhook> {
  readonly type = 'user'
}
