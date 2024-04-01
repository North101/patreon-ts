import { Root, RootList } from './data';
import { JsonApiErrors } from './data/base_data';
import { CampaignData } from './data/campaign';
import { MemberData } from './data/member';
import { PostData } from './data/post';
import { UserData } from './data/user';
import { WebhookData } from './data/webhook';
import { CampaignSchema, MemberSchema, PostSchema, UserSchema, WebhookSchema } from './schemas';
import { PatreonToken } from './types';
export declare const campaignById: (schema: CampaignSchema) => (accessToken: PatreonToken, id: string) => Promise<JsonApiErrors | Root<CampaignData>>;
export declare const campaignMembersById: (schema: MemberSchema) => (accessToken: PatreonToken, id: string) => Promise<JsonApiErrors | RootList<MemberData>>;
export declare const campaignPostsById: (schema: PostSchema) => (accessToken: PatreonToken, id: string) => Promise<JsonApiErrors | RootList<PostData>>;
export declare const campaigns: (schema: CampaignSchema) => (accessToken: PatreonToken) => Promise<JsonApiErrors | RootList<CampaignData>>;
export declare const identity: (schema: UserSchema) => (accessToken: PatreonToken) => Promise<JsonApiErrors | Root<UserData>>;
export declare const memberById: (schema: MemberSchema) => (accessToken: PatreonToken, id: string) => Promise<JsonApiErrors | Root<MemberData>>;
export declare const postById: (schema: PostSchema) => (accessToken: PatreonToken, id: string) => Promise<JsonApiErrors | Root<PostData>>;
export declare const webhookById: (schema: WebhookSchema) => (accessToken: PatreonToken, id: string) => Promise<JsonApiErrors | Root<WebhookData>>;
export declare const webhooks: (schema: WebhookSchema) => (accessToken: PatreonToken) => Promise<JsonApiErrors | RootList<WebhookData>>;
