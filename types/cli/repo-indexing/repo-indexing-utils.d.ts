import type { DevToolsSys } from "../../core";
import { type Credentials } from "../credentials";
import type { DesignSystem, GenerateUserMessage, WorkspaceConfiguration, StoreComponentDocsInput, UpdateDesignSystemInput } from "$/ai-utils";
export declare const AGENT_FILE = "AGENTS.md";
export declare const parseDesignSystem: (sys: DevToolsSys, designSystemPackage?: string) => Promise<{
    name: any;
    version: string | undefined;
}>;
export declare const storeComponentDocs: (credentials: Credentials, body: StoreComponentDocsInput, debug?: boolean) => Promise<any>;
export declare const runCodeGen: (sys: DevToolsSys, credentials: Credentials, sessionId: string, message: GenerateUserMessage, debug?: boolean, designSystemPackage?: string, workspaceConfig?: WorkspaceConfiguration, opts?: {
    tags?: object;
    maxTokens?: number;
}, metadata?: any) => Promise<string>;
export declare const getAllDesignSystems: (credentials: Credentials) => Promise<DesignSystem[]>;
export declare const getDesignSystemByName: (credentials: Credentials, designSystemName: string) => Promise<DesignSystem | null>;
export declare const addDesignSystem: (credentials: Credentials, body: {
    designSystemName: string;
    designSystemVersion?: string;
    designSystemPackage?: string;
    status: string;
}) => Promise<any>;
export declare const updateDesignSystem: (credentials: Credentials, body: UpdateDesignSystemInput) => Promise<any>;
