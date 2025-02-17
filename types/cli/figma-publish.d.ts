import type { DevTools, DevToolsSys, RepoInfo } from "../types";
import type { CLIArgs } from "./index";
import { type FigmaKhulnasoftLink } from "./figma-utils";
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
export declare function findMappingsFromFiles({ force, mappingFiles, print, sys, }: {
    force?: boolean;
    mappingFiles: string[];
    print: boolean;
    sys: DevToolsSys;
}): Promise<{
    figmaKhulnasoftLinks: FigmaKhulnasoftLink[];
    foundErrors: boolean;
    figmaLinksToResolve: string[];
}>;
