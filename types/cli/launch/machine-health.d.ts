import type { DevToolsSys } from "@khulnasoft.com/dev-tools/core";
import type { Credentials } from "../credentials";
import type { FusionConfig, LaunchServerStatus } from "$/ai-utils";
interface FusionStatusMonitor {
    start: () => void;
    stop: () => void;
}
/**
 * Creates a fusion status monitor that pings the status endpoint periodically
 */
export declare function createFusionStatusMonitor(sys: DevToolsSys, credentials: Credentials, fusionConfig: FusionConfig, sharedState: LaunchServerStatus): FusionStatusMonitor | null;
export {};
