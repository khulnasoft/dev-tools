import type { DevToolsSys } from "@khulnasoft.com/dev-tools/core";
import type { Credentials } from "../credentials";
import type { FusionConfig, LaunchServerStatus } from "$/ai-utils";
interface FusionStatusMonitor {
  start: () => void;
  stop: () => void;
}
export declare function createFusionStatusMonitor(
  sys: DevToolsSys,
  credentials: Credentials,
  fusionConfig: FusionConfig,
  sharedState: LaunchServerStatus,
): FusionStatusMonitor | null;
export {};
