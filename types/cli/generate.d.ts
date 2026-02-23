import type { ComponentInfo, DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
import { type FigmaComponentInfo } from "./figma-utils";
export declare const runFigmaGenerate: (sys: DevToolsSys, args: CLIArgs) => Promise<undefined>;
export interface MappingCodeV3 {
    componentNames: string[];
    figmaNode: FigmaComponentInfo;
    figmaUrl: string;
    registeredCmp: ComponentInfo;
    previousCompletion?: string;
    prompt?: string;
    meta?: Record<string, any>;
    token?: string;
}
