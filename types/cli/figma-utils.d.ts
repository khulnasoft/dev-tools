import type { Credentials, FigmaAuth } from "./credentials";
import type { ExportType } from "../types";
export interface FigmaComponentInput {
    id: string;
    name: string;
    value?: any;
    type: string;
    baseType: "text" | "variant" | "boolean" | "slot";
    variantOptions?: string[];
    isDefault: boolean;
    ref?: string;
}
export interface FigmaKhulnasoftLink {
    khulnasoftName: string;
    figmaName: string;
    figmaKey: string;
    figmaUrl?: string;
    inputMapper?: string;
    originalInputMapper?: string;
    exportType?: ExportType;
    importName?: string;
    importPath?: string;
    source: string;
    loc?: string;
}
export interface FigmaComponentInfo {
    documentName: string;
    key: string;
    tree: string;
    jsx: string;
    name: string;
    inputs: FigmaComponentInput[];
    description: string;
    documentationLinks: string[];
    instanceId: string;
}
export declare const REMOVE_EMOJI: RegExp;
export declare const parseFigmaURL: (str: string) => {
    fileID: string;
    nodeId: string;
} | null;
export declare const getFigmaNodeData: (auth: {
    access_token: string;
    oauth: boolean;
}, fileId: string, nodeIds: string, depth?: number) => Promise<any>;
export declare function getFigmaComponentName(name: string): string;
export declare function getImportDataFromToken(credentials: Credentials, token: string, verbose: boolean): Promise<(readonly [string, FigmaComponentInfo])[]>;
export declare function needsFigmaAuth(urls: string[]): boolean;
export declare function getFigmaNodeDataFromURLs(figmaAuth: {
    access_token: string;
    oauth: boolean;
} | undefined, khulnasoftAuth: {
    privateKey: string;
    spaceId: string;
}, urls: string[]): Promise<(readonly [string, FigmaComponentInfo])[]>;
export declare function inPlaceResolveFigmaURLs(figmaAuth: FigmaAuth, figmaKhulnasoftLinks: FigmaKhulnasoftLink[], figmaLinksToResolve: string[]): Promise<void>;
