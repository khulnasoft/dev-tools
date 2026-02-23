import type { DevToolsSys, EnvInfo } from "../../../types";
export declare function getNextApiKey(sys: DevToolsSys): Promise<EnvInfo>;
export declare function setNextApiKey(
  sys: DevToolsSys,
  publicApiKey: string,
): Promise<EnvInfo>;
export declare const NEXT_KHULNASOFT_API_KEY_ENV =
  "NEXT_PUBLIC_KHULNASOFT_API_KEY";
