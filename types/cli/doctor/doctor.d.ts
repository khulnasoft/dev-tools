import type { DevToolsSys } from "../../types.js";
import type { CLIArgs } from "../index.js";
export declare function runDoctorCommand(
  sys: DevToolsSys,
  _subCommand: string | undefined,
  args: CLIArgs,
): Promise<void>;
