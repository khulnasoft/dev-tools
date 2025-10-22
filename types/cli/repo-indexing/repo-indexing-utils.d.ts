import type { DevToolsSys } from "../../core";
import { type Credentials } from "../credentials";
import type { DesignSystem, GenerateUserMessage, WorkspaceConfiguration, UpdateDesignSystemInput, DesignSystemScope, DisplayDesignSystem } from "$/ai-utils";
import type { IndexDocument } from "./types";
export declare const AGENT_FILE = "AGENTS.md";
export declare const ICONS_FILE = "icons.mdx";
export declare const TOKENS_FILE = "tokens.mdx";
export declare const REPO_INDEXING_FOLDER = "repo-indexing";
export interface UserSettings {
    isAdminInOrganization: boolean;
    email: string;
}
export declare const promptForDesignSystemScope: (credentials: Credentials, userSettings: UserSettings | null) => Promise<DesignSystemScope | undefined>;
export declare const parseDesignSystem: (sys: DevToolsSys, designSystemPackage?: string) => Promise<{
    name: any;
    version: string | undefined;
}>;
export declare const storeComponentDocs: (credentials: Credentials, body: IndexDocument, debug?: boolean) => Promise<any>;
export declare const runCodeGen: (sys: DevToolsSys, credentials: Credentials, sessionId: string, message: GenerateUserMessage, debug?: boolean, designSystemPackage?: string, workspaceConfig?: WorkspaceConfiguration, opts?: {
    tags?: object;
    maxTokens?: number;
}, metadata?: any) => Promise<string>;
interface GetAllDesignSystemsOpts {
    /**
     * If true, only design systems that the user has permission to edit will be
     * returned. If false, all design systems that the user has permission to edit
     * as well as design systems that the user has permission to read but not edit
     * will be returned. Defaults to false.
     */
    onlyEditAccess?: boolean;
    /**
     * If true, design systems that are scoped to the global space will be included.
     * Defaults to false.
     */
    includeGlobalScopeDesignSystems?: boolean;
    /**
     * If true, the # of component docs in each design system will also be returned.
     * Defaults to false.
     */
    includeDocumentCount?: boolean;
}
export declare function getAllDesignSystems(credentials: Credentials, opts: {
    includeDocumentCount: true;
} & Omit<GetAllDesignSystemsOpts, "includeDocumentCount">): Promise<DisplayDesignSystem[]>;
export declare function getAllDesignSystems(credentials: Credentials, opts?: GetAllDesignSystemsOpts): Promise<DesignSystem[]>;
export declare const getDesignSystemsByScope: (scope: DesignSystemScope, designSystems: DesignSystem[]) => DesignSystem[];
export declare const getDesignSystemByName: (designSystemName: string, designSystems: DesignSystem[]) => DesignSystem | null;
export declare const getDesignSystemByNameAndScope: (credentials: Credentials, designSystemName: string, scope: DesignSystemScope, designSystems: DesignSystem[]) => DesignSystem | null;
export declare const addDesignSystem: (credentials: Credentials, body: {
    designSystemName: string;
    designSystemVersion?: string;
    designSystemPackage?: string;
    status: string;
    scope: DesignSystemScope;
}) => Promise<any>;
export declare const updateDesignSystem: (credentials: Credentials, body: UpdateDesignSystemInput) => Promise<any>;
export declare const checkRepoIndexingFolder: (sys: DevToolsSys) => Promise<boolean>;
export {};
