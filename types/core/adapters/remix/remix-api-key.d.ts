import type { DevToolsSys, EnvInfo } from "../../../types";
export declare function getRemixApiKey(sys: DevToolsSys): Promise<EnvInfo>;
export declare function setRemixApiKey(
  sys: DevToolsSys,
  publicApiKey: string,
): Promise<EnvInfo>;
export declare const REMIX_KHULNASOFT_API_KEY_ENV = "PUBLIC_KHULNASOFT_KEY";
