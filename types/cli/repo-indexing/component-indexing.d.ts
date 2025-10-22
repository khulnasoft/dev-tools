import type { DevToolsSys } from "../../types";
import type { Credentials } from "../credentials";
import type { Component, ComponentIssue } from "./types";
import type { WorkspaceConfiguration } from "$/ai-utils";
export declare const processComponent: (sys: DevToolsSys, credentials: Credentials, sessionId: string, component: Component, opts?: {
    designSystemId?: string | null;
    designSystemPackage?: string;
    designSystemVersion?: string;
    retriesAllowed?: number;
    storeRepoIndexing?: boolean;
    workspaceConfig?: WorkspaceConfiguration;
    debug?: boolean;
    onIssue?: (issue: ComponentIssue) => void;
}) => Promise<void>;
export declare const processAgent: (sys: DevToolsSys, credentials: Credentials, sessionId: string, discoveredComponents: Component[], opts?: {
    designSystemId?: string | null;
    designSystemPackage?: string;
    designSystemVersion?: string;
    retriesAllowed?: number;
    storeRepoIndexing?: boolean;
    workspaceConfig?: WorkspaceConfiguration;
    debug?: boolean;
}) => Promise<void>;
export declare const deprecateObsoleteComponents: (credentials: Credentials, localComponents: Component[], remoteComponents: Component[]) => Promise<void>;
