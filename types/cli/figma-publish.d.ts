import type { DevTools, DevToolsSys, ExportType, RepoInfo } from "../types";
import type { CLIArgs } from "./index";
import { type FigmaAuth } from "./credentials";
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
export declare const runFigmaPublish: (sys: DevToolsSys, args: CLIArgs) => Promise<undefined>;
export declare const FIGMA_CONNECT_CALL = "figmaMapping";
export declare function findAllMappingFiles(sys: DevToolsSys): Promise<string[]>;
export interface FigmaKhulnasoftData {
    figmaKhulnasoftLinks: FigmaKhulnasoftLink[];
}
export declare function setPublicKey(sys: DevToolsSys, publicKey: string, devTools: DevTools | undefined, ensureFigmaImportPage?: boolean): Promise<boolean>;
export interface PublishedMapping {
    repoInfo: RepoInfo | undefined;
    figmaKhulnasoftLinks: FigmaKhulnasoftLink[];
    spaceId: string;
    privateKey: string;
    userId: string;
}
export declare function findMappingsFromFiles({ figmaAuth, force, mappingFiles, print, sys, }: {
    figmaAuth?: FigmaAuth;
    force?: boolean;
    mappingFiles: string[];
    print: boolean;
    sys: DevToolsSys;
}): Promise<{
    figmaKhulnasoftLinks: FigmaKhulnasoftLink[];
    foundErrors: boolean;
}>;
