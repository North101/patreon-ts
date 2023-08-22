import { PledgeEvent } from "../data/pledge_event";
import { BaseSchema } from "./base_schema";
export declare class PledgeEventSchema extends BaseSchema<PledgeEvent> {
    readonly type = "pledge";
}
