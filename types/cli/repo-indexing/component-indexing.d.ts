import type { DevToolsSys } from "../../types";
import type { Credentials } from "../credentials";
import type { ComponentTask, IndexDocument, Task } from "./types";
import type { WorkspaceConfiguration } from "$/ai-utils";
export declare const processComponent: (sys: DevToolsSys, credentials: Credentials, sessionId: string, component: ComponentTask, opts: {
    designSystemId: string;
    designSystemPackage?: string;
    designSystemVersion?: string;
    retriesAllowed?: number;
    workspaceConfig?: WorkspaceConfiguration;
    debug?: boolean;
}) => Promise<void>;
export declare const processAgent: (sys: DevToolsSys, credentials: Credentials, discoveredComponents: ComponentTask[], opts: {
    hasIcons?: boolean;
    hasDesignTokens?: boolean;
    designSystemId: string;
    retriesAllowed?: number;
    debug?: boolean;
}) => Promise<void>;
export declare const deprecateObsoleteComponents: (credentials: Credentials, localComponents: Task[], remoteComponents: IndexDocument[]) => Promise<void>;
