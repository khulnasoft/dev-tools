import type { DevToolsSys } from "../../types";
import type { Credentials } from "../credentials";
import type { WorkspaceConfiguration } from "$/ai-utils";
import type { Component } from "./types";
export declare const discoverComponents: (sys: DevToolsSys, credentials: Credentials, sessionId: string, remoteComponents: Component[], opts?: {
    force?: boolean;
    designSystemPackage?: string;
    designSystemVersion?: string;
    workspaceConfig?: WorkspaceConfiguration;
    debug?: boolean;
}) => Promise<{
    numComponentsFound: number;
    componentsToIndex: Component[];
    discoveredComponents: Component[];
}>;
