import type { VueDevToolsSys } from "./index";
import type { ModifiedFile } from "../../../types";
export declare function vueEnsureKhulnasoftSetup(sys: VueDevToolsSys): Promise<{
  errors: string[];
}>;
export declare function vueEnsureFigmaImportSetup(
  sys: VueDevToolsSys,
): Promise<ModifiedFile[]>;
export declare function vueEnsureKhulnasoftRegistry(
  sys: VueDevToolsSys,
): Promise<ModifiedFile[]>;
