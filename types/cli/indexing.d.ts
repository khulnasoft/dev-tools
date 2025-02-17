import type { DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
import { type Credentials } from "./credentials";
export interface ArtifactItem {
    type: "shell" | "file" | "text" | "delta" | "done";
    id?: string;
    content: string;
    filePath?: string;
    artifactTitle?: string;
    incomplete?: boolean;
}
export declare const runCodeIndexing: (sys: DevToolsSys, args: CLIArgs) => Promise<void>;
export declare const codeIndexing: (sys: DevToolsSys, credentials: Credentials) => Promise<void>;
