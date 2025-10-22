import type { DevToolsSys } from "../../types";
import type { ProxyMiddleware } from "../../types/proxy-middleware";
export declare const createProxy: (serverUrl: string, sys: DevToolsSys) => ProxyMiddleware;
/**
 * Detects if HTML was server-side rendered by checking for framework-specific markers.
 * Returns whether SSR was used and whether the header/head was server-rendered.
 */
export declare const detectSSR: (body: string) => {
    hasSSR: boolean;
    hasHeaderSSR: boolean;
};
