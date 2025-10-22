import { ChildProcess, type ChildProcessWithoutNullStreams, type ChildProcessByStdio, type SpawnOptions, type StdioPipe, type StdioNull } from "child_process";
import type { Readable } from "stream";
import type { DevToolsSys } from "../../types";
import type { DevCommandProcess } from "../launch/dev-server-orchestrator";
/**
 * Global process tracker that keeps track of all spawned processes
 * and ensures they are killed when the main process exits
 */
declare class ProcessTracker {
    private processes;
    private cleanupHandlersRegistered;
    constructor();
    /**
     * Register a spawned process for tracking and cleanup
     */
    track(childProcess: ChildProcess): void;
    /**
     * Untrack a process (useful if you're managing it manually)
     */
    untrack(childProcess: ChildProcess): void;
    /**
     * Kill all tracked processes
     * @param sys - DevToolsSys for logging and Sentry integration
     */
    killAll(sys?: DevToolsSys): Promise<void>;
    /**
     * Register cleanup handlers for various exit signals
     */
    private registerCleanupHandlers;
    /**
     * Get the number of tracked processes
     */
    get count(): number;
}
export declare const processTracker: ProcessTracker;
/**
 * Options for trackedSpawn function
 */
export interface TrackedSpawnOptions {
    /** The command to run */
    command: string;
    /** Arguments for the command */
    args?: readonly string[];
    /** Spawn options */
    options?: SpawnOptions;
}
/**
 * Wrapper around child_process.spawn that automatically tracks the spawned process
 * and ensures it gets killed when the main process exits
 */
export declare function trackedSpawn(config: TrackedSpawnOptions & {
    options: SpawnOptions & {
        stdio: "pipe" | [StdioPipe, StdioPipe, StdioPipe];
    };
}): ChildProcessWithoutNullStreams;
export declare function trackedSpawn(config: TrackedSpawnOptions & {
    options: SpawnOptions & {
        stdio: [StdioNull | "ignore", StdioPipe, StdioPipe];
    };
}): ChildProcessByStdio<null, Readable, Readable>;
export declare function trackedSpawn(config: TrackedSpawnOptions): ChildProcess;
export declare function safeSpawn(shell: string, command: string, options: SpawnOptions & {
    stdio: "pipe" | [StdioPipe, StdioPipe, StdioPipe];
}): ChildProcessWithoutNullStreams;
export declare function safeSpawn(shell: string, command: string, options: SpawnOptions & {
    stdio: [StdioNull | "ignore", StdioPipe, StdioPipe];
}): ChildProcessByStdio<null, Readable, Readable>;
export declare function safeSpawn(shell: string, command: string, options: SpawnOptions): ChildProcess;
export declare const getTempFolder: () => string;
export declare const cleanupTempFolder: () => boolean;
/**
 * Detects if a command is multi-line (contains newlines)
 */
export declare const isMultiLineCommand: (command: string) => boolean;
/**
 * Creates a temporary script file for multi-line commands
 */
export declare const createTempScript: (command: string, shell: string) => string;
/**
 * Cleans up a temporary script file
 */
export declare const cleanupTempScript: (scriptPath: string) => void;
export declare const getCommandWithShellArgs: (command: string, shell: string) => string[];
export declare function killProcess(sys: DevToolsSys, procOrPid: ChildProcess | DevCommandProcess | number | undefined, abortSignal?: AbortSignal, timeout?: number): Promise<boolean>;
export {};
