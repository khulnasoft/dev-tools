import type { EnvInfo } from "../../../types";
import type { ReactDevToolsSys } from ".";
export declare function getReactApiKey(sys: ReactDevToolsSys): Promise<EnvInfo>;
export declare function setReactApiKey(sys: ReactDevToolsSys, publicApiKey: string): Promise<EnvInfo>;
export declare const REACT_VITE_KHULNASOFT_KEY_ENV = "VITE_PUBLIC_KHULNASOFT_KEY";
export declare const REACT_WEBPACK_KHULNASOFT_KEY_ENV = "YOUR_PUBLIC_KHULNASOFT_KEY";
