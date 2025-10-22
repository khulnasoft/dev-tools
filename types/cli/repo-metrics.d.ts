import type { RepoMetrics } from "$/ai-utils";
import type { DevToolsSys } from "../types";
/**
 * Collect comprehensive repository metrics
 * @param sys - DevTools system interface
 * @param basePath - Absolute path to the repository root
 * @param rootPath - Relative path within the repository to analyze (default: "/" for entire repo)
 */
export declare function collectRepoMetrics(sys: DevToolsSys, basePath: string): Promise<RepoMetrics>;
