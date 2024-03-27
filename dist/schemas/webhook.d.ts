import { WebhookData } from "../data/webhook";
import { BaseSchema } from "./base_schema";
export declare class WebhookSchema extends BaseSchema<WebhookData> {
    readonly type = "user";
}
