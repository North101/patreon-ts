import { AccessToken } from 'simple-oauth2';
declare enum PatreonTokenType {
    Refresh = "refresh_token",
    Access = "access_token"
}
interface ExpiredFunction {
    (expirationWindowSeconds?: number): boolean;
}
interface RefreshFunction {
    (params?: {}): Promise<PatreonToken>;
}
interface RevokeFunction {
    (tokenType: PatreonTokenType): Promise<void>;
}
interface RevokeAllFunction {
    (): Promise<void>;
}
interface PatreonToken {
    readonly access_token: string;
    readonly expires_at: Date;
    readonly expires_in: number;
    readonly refresh_token: string;
    readonly scope: string;
    readonly token_type: string;
    readonly version: string;
    readonly accessToken: AccessToken;
    isExpired: ExpiredFunction;
    refresh: RefreshFunction;
    revoke: RevokeFunction;
    revokeAll: RevokeAllFunction;
}
declare function toPatreonToken(accessToken: AccessToken): PatreonToken;
export { toPatreonToken, PatreonTokenType as TokenType, type PatreonToken, };
