import type { AddCliOptions, DevToolsSys, FileNode, SyncInfo } from "../types";
export declare function extractSignatureInfo(content: string): {
    contentId?: string;
    sessionKey?: string;
    snippetId?: string;
};
export declare function getAllProjectFiles(basePath: string): Promise<string[]>;
export declare function findKhulnasoftFiles(basePath: string, targetContentId: string, targetSessionKey: string): Promise<FileNode[]>;
export declare function getIgnorePatterns(basePath: string): (path: string) => boolean;
export declare function watchDirectory(basePath: string, syncInfo: SyncInfo, onChange: (updatedSyncInfo: SyncInfo) => void): () => Promise<void>;
export declare function setupSyncServer(sys: DevToolsSys, initialSyncInfo?: SyncInfo): Promise<void>;
export declare function syncCommand(opts: AddCliOptions): Promise<SyncInfo | undefined>;
