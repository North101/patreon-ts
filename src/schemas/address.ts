import { Address } from "../data/address"
import { BaseSchema } from "./base_schema"

export class AddressSchema extends BaseSchema<Address> {
  readonly type = 'address'
}
