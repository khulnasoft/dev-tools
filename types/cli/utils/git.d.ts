import type { DevToolsSys } from "types";
export interface RunGitOptions {
    exec?: string;
    cwd?: string;
    debug?: boolean;
    sys: DevToolsSys;
    timeout?: number;
    stdin?: string;
}
export declare function runGit(args: string[], opts: RunGitOptions): Promise<string>;
export declare const isGitRepoCorrupted: (stdout: string, stderr: string) => boolean;
