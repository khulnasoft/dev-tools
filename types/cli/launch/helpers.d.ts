import type { FusionConfig } from "$/ai-utils";
import type { DevToolsSys } from "../../types";
export declare const isInRemoteContainer: () => boolean;
export declare const getVolumePath: (fusionConfig: FusionConfig) => string;
export declare function computeAIBranchName(featureBranch: string, sessionId: string): string;
export declare const getAndParseGitRepoInfo: ({ sys, gitWorkingDirectory, strict, }: {
    sys: DevToolsSys;
    gitWorkingDirectory: string;
    strict: boolean;
}) => Promise<{
    currentBranch: string;
    featureBranch: string;
    sessionId: string | undefined;
}>;
