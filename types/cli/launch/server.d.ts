import type { Express } from "express";
import type { LaunchServerStatus } from "$/ai-utils";
import type { DevToolsSys } from "../../types";
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
  readonly TUNNEL_STATUS: "/tunnel/status";
};
export declare const configureServer: ({
  sys,
  app,
  validKhulnasoftPrivateKey,
  authenticateProxy,
  isLocal,
  sharedState,
}: {
  sys: DevToolsSys;
  app: Express;
  validKhulnasoftPrivateKey: string | undefined;
  authenticateProxy: boolean;
  isLocal: boolean;
  sharedState: LaunchServerStatus;
}) => void;
