import type { DevToolsSys } from "../types";
import { type Credentials } from "./credentials";
import type { CodegenFeedback, CodeGenToolMap, CodegenTurn, CustomInstruction, FusionConfig, GenerateCompletionState, GenerateCompletionStep, GenerateCompletionStepGit, GenerateUserMessage, UserContext, WorkspaceConfiguration, WorkspaceFolder, LoadWholeSessionOptions, LoadWholeSessionResult, LoadHistoryResult, CodeGenMode, ApplyActionsResult } from "$/ai-utils";
import prettier from "prettier";
import { type FusionContext, type ToolResolution } from "./code-tools";
import EventEmitter from "node:events";
import { type RunGitOptions } from "./utils/git";
export interface SessionContext {
    sessionId: string;
    turns: CodegenTurn[];
    customInstructions: CustomInstruction[];
    userContext: UserContext;
    prettierConfig: prettier.Config | null;
    state: GenerateCompletionState;
    title: string | undefined;
    beforeCommit: string | undefined;
    createdUnixTime: number;
    updatedUnixTime: number;
    canLoadMore: boolean;
}
export interface CodeGenSessionOptionsBase {
    sys: DevToolsSys;
    credentials: Credentials;
    position: string;
    maxTokens?: number;
    encryptKey?: string;
    mode: CodeGenMode;
    builtInCustomInstructions?: CustomInstruction[];
    fusionContext?: FusionContext;
    fusionConfig?: FusionConfig;
    workingDirectory?: string;
    mcpServers?: boolean;
    enabledTools?: (keyof CodeGenToolMap)[];
    modelOverride?: string;
}
export interface CodeGenSessionOptionsSession extends CodeGenSessionOptionsBase {
    sessionOrCompletionId?: string;
}
export interface CodeGenSessionOptionsInitialUrl extends CodeGenSessionOptionsBase {
    initialUrl: string;
}
export type CodeGenSessionOptions = CodeGenSessionOptionsSession | CodeGenSessionOptionsInitialUrl;
export type CodeGenEventEmitter = EventEmitter<{
    step: [GenerateCompletionStep];
    idle: [];
}>;
export declare class CodeGenSession {
    #private;
    constructor(options: CodeGenSessionOptions);
    get fusionConfig(): FusionConfig | undefined;
    get workingDirectory(): string;
    initializeSession(opts?: {
        skipSessionLoading?: boolean;
    }): Promise<void>;
    loadHistory(): Promise<LoadHistoryResult>;
    loadWholeSession(opts?: LoadWholeSessionOptions): Promise<LoadWholeSessionResult>;
    loadMoreTurns(): Promise<CodegenTurn[]>;
    pushRepoV2({ repoFullName }: {
        repoFullName: string;
    }): Promise<{
        success: boolean;
        error: string;
        details?: undefined;
    } | {
        output: string;
        upToDate: boolean;
        createdBranch: boolean;
        setUpToStream: boolean;
        status: GenerateCompletionStepGit | null;
        success: boolean;
        error?: undefined;
        details?: undefined;
    } | {
        success: boolean;
        error: string;
        details: string;
    }>;
    archiveProject(): Promise<string>;
    isIdle(): boolean;
    needsBackup(): Promise<boolean>;
    uploadBackup(): Promise<import("./backup").BackupGitRepoResultValid | import("./backup").BackupGitRepoResultInvalid | {
        success: boolean;
        error: unknown;
    }>;
    getCommitMode(): import("$/ai-utils").CommitMode;
    pushChanges(pullFirst?: boolean): Promise<{
        output: string;
        upToDate: boolean;
        createdBranch: boolean;
        setUpToStream: boolean;
        status: GenerateCompletionStepGit | null;
    }>;
    hasChangesRelativeToRemote(): Promise<boolean>;
    pullLatestFromRemote(): Promise<boolean>;
    syncChangesFromMain(arg: string | {
        mainBranchName: string;
        allowUnrelatedHistory?: boolean;
    }): Promise<{
        success: boolean;
        message: string;
        conflicts?: undefined;
    } | {
        success: boolean;
        conflicts: boolean;
        message: string;
    }>;
    /**
     * Get the current commit hash
     */
    getCurrentCommitHash(branchName?: string): Promise<string | undefined>;
    getCurrentBranch(): Promise<string>;
    /**
     * Get the feature branch name
     */
    getFeatureBranch(): string;
    /**
     * Get the AI branch name
     */
    getAiBranch(): string;
    git(args: string[], opts?: string | RunGitOptions): Promise<string>;
    /**
     * Helper to run git commands
     */
    runCheckCommand(): Promise<{
        code: number;
        logs: string;
    } | null>;
    setDebug(debug: boolean): void;
    getAllFiles(options?: {
        getDotFiles?: boolean;
        pattern?: string;
    }): Promise<string[]>;
    getSessionId(): string;
    getSpaceId(): string | undefined;
    revertToCommitHash(commitHash: string): Promise<void>;
    resetToCommitHash(commitHash: string): Promise<void>;
    /**
     * Core function to restore the codebase to a state that matches a predicate.
     * This is the main function that handles both git-based and file-based restoration.
     *
     * @param predicate Function that takes a turn and its index and returns true if we should restore up to that turn
     * @param dryRun If true, only simulate the restoration without making changes
     * @returns Array of file paths that were changed
     */
    restore({ location, predicate, revert, dryRun, forceReplay, debug, }: {
        location: "before" | "after";
        predicate: (turn: CodegenTurn | null, index: number) => boolean;
        dryRun?: boolean;
        revert?: boolean;
        forceReplay?: boolean;
        debug?: string;
    }): Promise<{
        undone: string[] | null;
        message: string;
    }>;
    restoreHEAD(): Promise<{
        undone: string[] | null;
        message: string;
    }>;
    restoreAll(): Promise<{
        undone: string[] | null;
        message: string;
    }>;
    restoreFromCompletionId({ location, completionId, forceReplay, }: {
        location: "before" | "after";
        completionId: string;
        forceReplay?: boolean;
    }): Promise<{
        undone: string[] | null;
        message: string;
    }>;
    restoreBeforeCompletionId(completionId: string): Promise<{
        undone: string[] | null;
        message: string;
    }>;
    /**
     * Undo all changes back to the last user message
     */
    undoLastUserMessage(dryRun?: boolean): Promise<{
        undone: string[] | null;
        message: string;
    }>;
    getLastCompletionId(): string | undefined;
    getCurrentState(): GenerateCompletionState;
    getLastApplyResultsTurn(): CodegenTurn | undefined;
    getLastTurn(): CodegenTurn | undefined;
    getNextUrl(): string | undefined;
    getNextMessage(): {
        shouldWait: boolean;
        promise: Promise<GenerateUserMessage | undefined>;
    };
    sendFeedback(feedback: Partial<CodegenFeedback>): Promise<void>;
    lastTurnHasChanges(): Promise<boolean>;
    waitUntilState(state: GenerateCompletionState, timeout?: number): Promise<void>;
    clearSession(): Promise<void>;
    sendMessage(message: GenerateUserMessage, immediate?: boolean): Promise<void>;
    getTurns(): CodegenTurn[];
    getSessionContext(): SessionContext;
    runSetupCommand(): Promise<import("./launch/dev-server-orchestrator").SetupCommandResult | undefined>;
    abortSetupCommand(): void;
    toolsRunning(): boolean;
    abortAllTools(): void;
    /**
     * Fulfil a pending tool call (usually AskUser or any passThrough tool)
     * Exposed via websocket as `toolFullfilment` for the Khulnasoft UI to send back
     * the user's response.
     */
    toolFullfilment(id: string, result: ToolResolution | string): boolean;
    fulfillToolCall(id: string, result: ToolResolution): boolean;
    abortToolCall(id: string): boolean;
    abort(cleanCurrentMessage?: boolean): Promise<boolean>;
    stopEventLoop(): Promise<void>;
    requestRefresh(): void;
    configureDevOrchestrator(opts: {
        devCommand?: string;
        setupCommand?: string;
        proxyPort?: number;
        proxyServer?: string;
        env?: Record<string, string | null>;
        replaceEnvs?: boolean;
    }): Promise<{
        devCommand: boolean;
        setupCommand: boolean;
        proxyServer: boolean;
        env: boolean;
    }>;
    close(uploadGitBackup?: boolean): Promise<void>;
    updateLastCommit(lastCommitHash: string): false | Promise<any>;
    emitGitStatus(): Promise<GenerateCompletionStepGit | null>;
    manualCommit(options: {
        add: string;
        commitMessage: string;
    }): Promise<void>;
    connectToEventLoop(shouldReplay: boolean, onStep: (step: GenerateCompletionStep) => void): () => void;
    waitUntilIdle(): Promise<void>;
    waitForEventLoop(): Promise<void>;
    commitWorkInProgress(lastTurn: CodegenTurn): Promise<string | undefined>;
    getChangesReport(): Promise<{
        diff: string;
        files: string[];
    } | undefined>;
    isCleanWorkTree(): Promise<boolean>;
    /**
     * Resolves a workspace file path to its actual file system path
     * @param filePath A file path that may include a workspace prefix (e.g., "workspace1/path/to/file.js")
     * @param forceWorkspace If true, will try the first workspace as fallback when no workspace folder is found
     * @returns The actual file system path and the workspace folder it belongs to
     */
    resolveWorkspacePath(filePath: string, forceWorkspace: boolean): {
        resolvedPath: string;
        workspaceFolder?: WorkspaceFolder;
    };
    /**
     * Converts an absolute file system path to a workspace URL
     * @param absolutePath The absolute file system path to convert
     * @returns The workspace URL if the path can be converted, undefined otherwise
     */
    absolutePathToWorkspaceUrl(absolutePath: string): string | undefined;
    /**
     * Reads a file from the workspace
     * @param filePath A file path that may include a workspace prefix
     * @returns The file content or null if the file doesn't exist
     */
    readFile(filePath: string): Promise<string | null>;
    /**
     * Checks if a file exists in the workspace
     * @param filePath A file path that may include a workspace prefix
     * @returns True if the file exists, false otherwise
     */
    fileExists(filePath: string): Promise<boolean>;
    /**
     * Reads a file from the workspace synchronously
     * @param filePath A file path that may include a workspace prefix
     * @returns The file content or null if the file doesn't exist
     */
    readFileSync(filePath: string): string | null;
    /**
     * Writes content to a file in the workspace
     * @param filePath A file path that may include a workspace prefix
     * @param content The content to write
     * @returns True if the write was successful, false otherwise
     */
    writeFile(filePath: string, content: string | Uint8Array): Promise<boolean>;
    /**
     * Lists files in a directory in the workspace
     * @param dirPath A directory path that may include a workspace prefix
     * @returns Array of file names in the directory or empty array if directory doesn't exist
     */
    listDir(dirPath: string): Promise<string[]>;
    /**
     * Get stats for a file in the workspace
     * @param filePath A file path that may include a workspace prefix
     * @returns The file stats or null if the file doesn't exist
     */
    stat(filePath: string): Promise<{
        isDirectory: () => boolean;
        isFile: () => boolean;
    } | null>;
    /**
     * Deletes a file from the workspace
     * @param filePath A file path that may include a workspace prefix
     * @returns True if the delete was successful, false otherwise
     */
    deleteFile(filePath: string): Promise<boolean>;
    getLinesStats(): {
        net: number;
        added: number;
        removed: number;
    };
    /**
     * Get git diff between current commit and remote branch
     * If remote current branch doesn't exist, gets diff between default branch and current branch
     */
    getDiffFromRemote(): Promise<ApplyActionsResult[]>;
    /**
     * Get the default branch name from remote repository
     * Falls back to checking common default branch names
     */
    private getDefaultBranch;
}
export declare function getUserContext(sys: DevToolsSys, gitWorkingDirectory?: string): Promise<UserContext>;
export declare function makeAsyncIterator<T>(): readonly [AsyncGenerator<T, void, void>, (event: T) => void, () => void];
/**
 * Loads a workspace configuration from a JSON file
 * @param sys DevToolsSys instance
 * @param workspaceFile Path to the workspace JSON file
 * @returns The workspace configuration and working directory
 */
export declare function loadWorkspace(sys: DevToolsSys, workspaceFile: string): Promise<{
    workspace: WorkspaceConfiguration;
    workingDirectory: string;
}>;
export declare function keepAlive(): () => void;
export declare class BashError extends Error {
    readonly code: number | string | undefined;
    readonly stdout: string;
    readonly stderr: string;
    constructor(message: string, code: number | string | undefined, stdout: string, stderr: string, opts: {
        cause?: Error;
    });
}
