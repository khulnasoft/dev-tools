import type { DevToolsSys } from "../../types";
import type { Credentials } from "../credentials";
import type { WorkspaceConfiguration } from "$/ai-utils";
import type { ComponentDocument, ComponentTask } from "./types";
export declare const discoverComponents: (sys: DevToolsSys, credentials: Credentials, sessionId: string, remoteComponents: ComponentDocument[], opts?: {
    force?: boolean;
    designSystemPackage?: string;
    designSystemVersion?: string;
    workspaceConfig?: WorkspaceConfiguration;
    debug?: boolean;
    specificComponents?: string[];
}) => Promise<{
    numComponentsFound: number;
    componentsToIndex: ComponentTask[];
    discoveredComponents: ComponentTask[];
}>;
export declare const computeHash: (sys: DevToolsSys, files: string[]) => Promise<string>;
