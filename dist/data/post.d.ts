import { BaseType, IData } from './base_data';
import { Campaign } from './campaign';
import { Tier } from './tier';
import { User } from './user';
interface Attributes {
    app_id?: number;
    app_status?: string | null;
    content?: string | null;
    embed_data?: object;
    embed_url?: string;
    is_paid?: boolean;
    is_public?: boolean;
    published_at?: string | null;
    tiers?: Tier[] | null;
    title?: string | null;
    url?: string;
}
interface Relationships {
    readonly campaign?: Campaign;
    readonly user?: User;
}
export type PostData = IData<'deliverable', Attributes, Relationships>;
export interface Post extends BaseType<PostData> {
}
export interface PostList extends BaseType<PostData[]> {
}
export {};
