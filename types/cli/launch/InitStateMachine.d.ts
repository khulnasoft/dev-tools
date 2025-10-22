import type { DevToolsSys } from "@khulnasoft.com/dev-tools/core";
import { type FusionConfig, type WorkspaceFolder, type InitState, type InitStateStep, type InitStatusLog } from "$/ai-utils";
import type { Credentials } from "../credentials";
import { type GitBackupDownloadResult } from "../backup";
export interface InitConfig {
    fusionConfig: FusionConfig;
    credentials: Credentials;
    sys: DevToolsSys;
    debug?: boolean;
    sentryTags?: Record<string, string>;
}
export interface InitStatus {
    message: string;
    error?: string;
}
export declare class InitStateMachine {
    logIdCounter: number;
    initStatusLogs: InitStatusLog[];
    sys: DevToolsSys;
    config: InitConfig;
    debug: boolean;
    initState: InitState;
    constructor(config: InitConfig);
    checkout(branchName: string, ref: string, repoPath: string): Promise<boolean>;
    execAsync(exec: string, args: string[], cwd?: string): Promise<string>;
    git(args: string[], cwd?: string): Promise<string>;
    init(): Promise<boolean>;
    addInitLog(type: "status" | "log" | "error" | "complete", message: string, options?: {
        step?: InitStateStep;
        error?: string;
        success?: boolean;
    }): void;
    clearInitLogs(): void;
    hasFilesButNoGit(repoPath: string): Promise<boolean>;
    step1CheckDirectories(config: InitConfig, repositories: Required<WorkspaceFolder>[]): Promise<void>;
    step2ConfigureGitRepositories(config: InitConfig, repositories: Required<WorkspaceFolder>[]): Promise<void>;
    step3ConfigureGitUser(config: InitConfig, repositories: Required<WorkspaceFolder>[]): Promise<void>;
    step4StashChanges(config: InitConfig, repositories: Required<WorkspaceFolder>[]): Promise<void>;
    step5CollectRepoInfo(config: InitConfig, repositories: Required<WorkspaceFolder>[]): Promise<void>;
    private isGitConfigured;
    private getGitRemoteUrl;
    private sanitizeGitRemoteUrl;
    private cleanupLockFiles;
    validateGitRepo(repoPath: string): Promise<void>;
    /**
     * If a backup is available, perform a backup recovery (and throw if it fails and cannot be recovered from).
     * If no backup is available, do nothing.
     */
    private restoreFromPartialBackup;
    private initializeGitRepo;
    cloneRepository({ repo, repoPath, backupResult, }: {
        repo: Required<WorkspaceFolder>;
        repoPath: string;
        backupResult: GitBackupDownloadResult | undefined;
    }): Promise<boolean>;
}
