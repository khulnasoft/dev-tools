import type { DevToolsSys } from "../../types";
import type { TokenDocument, TokenTask } from "./types";
import type { Credentials } from "../credentials";
import type { WorkspaceConfiguration } from "$/ai-utils";
export declare const discoverTokens: (sys: DevToolsSys, credentials: Credentials, sessionId: string, remoteTokens: TokenDocument[], opts?: {
    force?: boolean;
    designSystemPackage?: string;
    workspaceConfig?: WorkspaceConfiguration;
    debug?: boolean;
}) => Promise<{
    tokenGroupsToIndex: TokenTask[];
    discoveredTokenGroups: TokenTask[];
}>;
export declare const processTokens: (sys: DevToolsSys, credentials: Credentials, sessionId: string, group: TokenTask, opts: {
    designSystemId: string;
    designSystemPackage?: string;
    designSystemVersion?: string;
    debug?: boolean;
    workspaceConfig?: WorkspaceConfiguration;
    retriesAllowed?: number;
}) => Promise<void>;
