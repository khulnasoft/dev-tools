import type { Express } from "express";
import type { LaunchServerStatus } from "$/ai-utils";
export declare const KHULNASOFT_ENDPOINT_PREFIX = "/_khulnasoft.com";
export declare const KHULNASOFT_API_ENDPOINT_PREFIX: string;
/**
 * Endpoints that are not authenticated because they are used by the fly.io health check.
 */
export declare const NON_AUTHENTICATED_ENDPOINTS: {
    readonly STATUS: "/status";
    readonly PROXY_STATUS: "/proxy-status";
    readonly STATUS_V2: "/status-v2";
    readonly INIT_LOGS: "/init-logs";
};
export declare const configureServer: ({ app, validKhulnasoftPrivateKey, authenticateProxy, isLocal, sharedState, }: {
    app: Express;
    validKhulnasoftPrivateKey: string | undefined;
    authenticateProxy: boolean;
    isLocal: boolean;
    sharedState: LaunchServerStatus;
}) => void;
