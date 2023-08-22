import { BaseType, IData } from './base_data';
import { CampaignList } from './campaign';
import { User } from './user';
interface Attributes {
    readonly addressee?: string | null;
    readonly city?: string;
    readonly country?: string;
    readonly created_at?: string;
    readonly line_1?: string | null;
    readonly line_2?: string | null;
    readonly phone_number?: string | null;
    readonly postal_code?: string | null;
    readonly state?: string | null;
}
interface Relationships {
    readonly campaigns?: CampaignList;
    readonly user?: User;
}
export type AddressData = IData<'address', Attributes, Relationships>;
export interface Address extends BaseType<AddressData> {
}
export interface AddressList extends BaseType<AddressData[]> {
}
export {};
