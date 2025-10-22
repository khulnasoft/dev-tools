import type { ApplyActionsResult } from "../../../ai-utils/src/codegen";
/**
 * Parse git diff output and convert it to ApplyActionsResult array
 * @param diff - The git diff output string
 * @returns Array of ApplyActionsResult objects
 */
export declare function parseGitDiffToApplyActions(diff: string): ApplyActionsResult[];
