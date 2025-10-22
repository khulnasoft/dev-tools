import type { DevToolsSys } from "@khulnasoft.com/dev-tools/core";
import type { ProxyMiddleware } from "../../types/proxy-middleware";
import type { DevCommandResult, DevCommandState, EnvironmentVariable, HttpServerState, SetupCommandResult, SetupDependency } from "$/ai-utils";
import EventEmitter from "events";
import type { FusionConfig, SetupCommandState } from "$/ai-utils";
export type DevServerState = Exclude<SetupCommandState | DevCommandState, "installed" | "starting">;
export interface DevCommandProcess {
    type: "devCommandProcess";
    getPid: () => number | undefined;
    getExitCode: () => number | null;
    kill: (signal?: NodeJS.Signals) => boolean;
    onSpawn: (listener: () => void) => void;
    onError: (listener: (err: Error) => void) => void;
    onClose: (listener: (code: number | null, signal: NodeJS.Signals | null) => void) => void;
    resize?: (cols: number | undefined, rows: number | undefined) => void;
    write?: (data: string) => void;
    stdout: {
        on: (event: "data", callback: (data: Buffer) => void) => void;
    };
    stderr: {
        on: (event: "data", callback: (data: Buffer) => void) => void;
    };
    removeAllListeners: () => void;
}
export interface DevCommandProcessOptions {
    command: string;
    shell: string;
    cwd: string | undefined;
    env: Record<string, string>;
}
export interface DevServerOrchestrator {
    devCommand: string;
    setupCommand: string | undefined;
    setupState: SetupCommandState;
    lastServerBody: string | undefined;
    lastServerStatus: number | undefined;
    devState: DevCommandState;
    httpServerState: HttpServerState;
    state: DevServerState;
    proxyTarget: string | undefined;
    proxyPort: number | undefined;
    environmentVariables: EnvironmentVariable[];
    envVars: Record<string, string>;
    proxyMiddleware: ProxyMiddleware | undefined;
    pid: number | undefined;
    autoDetectedUrl: boolean;
    autoDetectDevServer: boolean;
    devCommandProcess: DevCommandProcess | undefined;
    autoDetectDevServerPatterns: string[] | undefined;
    abortSetupCommand: () => void;
    clearEnvVariables: () => void;
    setEnvVariable: (key: string, value: string | undefined) => boolean;
    ensureDevCommand: (abortSignal?: AbortSignal) => Promise<boolean>;
    ensureSetupCommand: (abortSignal?: AbortSignal) => Promise<boolean>;
    setupCommandPromise: Promise<SetupCommandResult> | undefined;
    runSetupCommand: (signal?: AbortSignal) => Promise<SetupCommandResult>;
    setSetupCommand: (opts: {
        setupDependencies?: SetupDependency[] | null;
        setupCommand?: string | null;
        forceRestart?: boolean;
        signal?: AbortSignal;
    }) => Promise<SetupCommandResult | null>;
    setDevCommand: (newCommand: string | undefined, forceRestart?: boolean, signal?: AbortSignal) => Promise<DevCommandResult>;
    setProxyServer: (newProxyServer: string) => Promise<{
        updatedProxyServer: boolean;
        updatedHosts: boolean;
    }>;
    setPort: (newPort: number) => Promise<boolean>;
    setAutoDetectSettings: (enabled: boolean, patterns?: string[]) => Promise<boolean>;
    addCheckpoint: () => void;
    getOpenPorts: () => Promise<number[]>;
    getCheckpoints: (n: number, mode: "all" | "out" | "err") => string;
    getAllStdout: () => string;
    getAllStderr: () => string;
    getOutput: () => string;
    getSetupWrite: () => string;
    getDevWrite: () => string;
    getSetupOutput: () => string;
    waitUntilIdle: (initialWaitMs?: number, idleTimeMs?: number) => Promise<void>;
    onClose: (callback: (code: number | null) => void) => void;
    restart: (abortSignal?: AbortSignal) => Promise<DevCommandResult>;
    emitter: EventEmitter<{
        close: [number | null];
        stdout: [string];
        stderr: [string];
        installStdout: [string];
        installStderr: [string];
        setupState: [SetupCommandState];
        devState: [DevCommandState];
        httpServerState: [HttpServerState];
        urlDetected: [string];
    }>;
    close: () => Promise<void>;
}
export declare const importPty: (sys: DevToolsSys) => typeof import("@lydell/node-pty") | undefined;
export declare function devServerOrchestrator(sys: DevToolsSys, fusionConfig: FusionConfig, initialSetupState: "installed" | "not-installed" | "install-failed"): Promise<DevServerOrchestrator>;
export declare const checkPortsListenedByPid: (pid: number) => number[];
