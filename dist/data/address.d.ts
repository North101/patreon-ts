import { BaseType, Data } from './base_data';
import { CampaignData } from './campaign';
import { UserData } from './user';
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
    readonly campaigns?: BaseType<CampaignData[]>;
    readonly user?: BaseType<UserData>;
}
export type AddressData = Data<'address', Attributes, Relationships>;
export {};
