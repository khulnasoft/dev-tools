import type { SDK_VERSION_VALUES } from "packages/dev-tools/types";
export declare function createNextTestMemSys(rootDir?: string): Promise<import("./index").NextDevToolsSys>;
export declare function createNextAppTestFixturesSys(): Promise<import("./index").NextDevToolsSys>;
export declare function createNextAppTestFixturesDevTools(sdkVersion?: SDK_VERSION_VALUES): Promise<{
    sys: import("./index").NextDevToolsSys;
    devTools: import("packages/dev-tools/types").DevToolsAdapter;
}>;
export declare function createNextPagesTestFixturesSys(): Promise<import("./index").NextDevToolsSys>;
export declare function createNextPagesTestFixturesDevTools(sdkVersion?: SDK_VERSION_VALUES): Promise<{
    sys: import("./index").NextDevToolsSys;
    devTools: import("packages/dev-tools/types").DevToolsAdapter;
}>;
export declare function createNextAppTestDevTools(): Promise<{
    sys: import("packages/dev-tools/types").DevToolsSys;
    devTools: import("packages/dev-tools/types").DevToolsAdapter;
}>;
