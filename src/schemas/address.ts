import { AddressData } from "../data/address"
import { BaseSchema } from "./base_schema"

export class AddressSchema extends BaseSchema<AddressData> {
  readonly type = 'address'
}
