import type { VueDevToolsSys } from "./index";
import type { EnvInfo } from "../../../types";
export declare function getVueApiKey(sys: VueDevToolsSys): Promise<EnvInfo>;
export declare function setVueApiKey(
  sys: VueDevToolsSys,
  publicApiKey: string,
): Promise<EnvInfo>;
export declare const VUE_VITE_KHULNASOFT_KEY_ENV = "VITE_PUBLIC_KHULNASOFT_KEY";
export declare const VUE_WEBPACK_KHULNASOFT_KEY_ENV = "PUBLIC_KHULNASOFT_KEY";
