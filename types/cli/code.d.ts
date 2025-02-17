import type { DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
export interface CustomInstruction {
    id: string;
    name: string;
    content: string;
}
export interface ArtifactItem {
    type: "shell" | "file" | "text" | "delta" | "done" | "diff";
    id?: string;
    content: string;
    filePath?: string;
    artifactTitle?: string;
    actionTitle?: string;
    synthetic?: boolean;
    incomplete?: boolean;
}
export declare const runCodeCommand: (sys: DevToolsSys, subCommand: string, args: CLIArgs) => Promise<void>;
export declare const runCodeGen: (sys: DevToolsSys, args: CLIArgs) => Promise<void>;
export declare function createApp(userId: string, spaceId: string, privateKey: string, body: any): Promise<void>;
export declare function transformStream(body: ReadableStream<Uint8Array> | null): AsyncGenerator<string, void, unknown>;
