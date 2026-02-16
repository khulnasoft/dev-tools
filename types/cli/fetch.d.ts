import { type RequestInit, Dispatcher } from "undici";
import { NetworkError } from "../common/errors";
/**
 * Detect PAC (Proxy Auto-Configuration) URL from macOS system settings
 * Only runs on macOS and caches the result
 */
declare function getActiveServicePacUrl(): string | null;
/**
 * Resolve proxy for a URL using PAC resolver
 * Returns proxy URL string or undefined for direct connection
 */
declare function resolveProxyFromPac(url: string): Promise<string | undefined>;
declare function getAgent(url?: string): Promise<Dispatcher>;
export declare const safeFetch: (
  input: string | URL,
  init?: RequestInit,
) => ReturnType<typeof globalThis.fetch>;
/**
 * Checks the health of the Khulnasoft.com API by attempting to fetch the health endpoint.
 * Retries up to 3 times with a delay between attempts.
 * @param delayMs - The delay in milliseconds between retry attempts (default: 1000ms)
 * @returns undefined if all attempts fail
 * @throws NetworkError if all retry attempts fail
 */
export declare function checkKhulnasoftHealth(
  delayMs?: number,
): Promise<NetworkError | undefined>;
export declare const __testing__: {
  getActiveServicePacUrl: typeof getActiveServicePacUrl;
  resolveProxyFromPac: typeof resolveProxyFromPac;
  getAgent: typeof getAgent;
  resetCache: () => void;
};
export {};
