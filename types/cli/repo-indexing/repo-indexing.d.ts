import type { DevToolsSys } from "../../types";
import type { CLIArgs } from "../index";
import { type Credentials } from "../credentials";
import type { Component, ComponentIssue } from "./types";
export declare const displayComponentLibrarySummary: (components: Component[], indexedComponents: Component[], startTime: number, numFailed: number | undefined, isForce: boolean | undefined, designSystemName: string, issues?: ComponentIssue[]) => void;
export interface RepoIndexingDoc {
    name: string;
    content: string | {
        name: string;
        description: string;
        components: string[];
        relevantFiles: string[];
    }[];
    createdDate: string;
    description: string;
    id: string;
    ownerId: string;
    userId: string;
}
export declare const runRepoIndexing: (sys: DevToolsSys, args: CLIArgs) => Promise<void>;
export declare const isFeatureAllowed: (credentials: Credentials, debug?: boolean) => Promise<{
    isAllowed: boolean;
    reason?: string;
}>;
