import type {
  CreateDevToolsOptions,
  DevToolsAdapter,
  DevToolsSys,
} from "../../../types";
export declare function createVueDevTools(
  sys: CreateDevToolsOptions,
): Promise<DevToolsAdapter>;
export declare function createVueDevToolsSys(
  sys: DevToolsSys,
): Promise<VueDevToolsSys>;
export interface VueDevToolsSys extends DevToolsSys {
  srcDir: string | null;
  componentsDir: string;
  khulnasoftComponentPath: string;
  registryPath: string;
  vueConfigPath: string;
  typescriptEnabled: boolean;
  configType: "webpack" | "vite" | "";
  isNuxt: boolean;
  addExternalPackage: (pkgName: string) => void;
}
