/// <reference types="@figma/plugin-typings" />
import type { ComponentInfo, ComponentInput, ComponentRegistry, DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
export declare const runFigmaGenerate: (sys: DevToolsSys, args: CLIArgs) => Promise<undefined>;
export interface FigmaComponentInput {
    id: string;
    name: string;
    value?: any;
    type: string;
    baseType: "text" | "variant" | "boolean" | "slot";
    variantOptions?: string[];
    isDefault: boolean;
    ref?: string;
}
export interface FigmaComponentInfo {
    documentName: string;
    key: string;
    tree: string;
    jsx: string;
    name: string;
    inputs: FigmaComponentInput[];
    description: string;
    documentationLinks: string[];
    instanceId: string;
}
export declare const parseFigmaURL: (str: string) => {
    fileID: string;
    nodeId: string;
} | null;
export declare const getFigmaNodeData: (auth: {
    access_token: string;
    oauth: boolean;
}, fileId: string, nodeIds: string, depth?: number) => Promise<any>;
export declare function getInputsSlotsFromComponentPropertyDefinitions(mainComponent: ComponentSetNode | ComponentNode): {
    inputs: FigmaComponentInput[];
    nameMap: (key: string) => string;
};
export declare const REMOVE_EMOJI: RegExp;
export declare function getFigmaComponentName(name: string): string;
export interface MappingCodeV2 {
    figmaInterface: string;
    reactInterface: string;
    componentRegistry: string;
    figmaComponentName: string;
    figmaTree: string;
    meta?: Record<string, any>;
    previousCode?: string;
    prompt?: string;
}
export declare function generateReactInterface(registeredCmp: ComponentInfo, cmpRegistry: ComponentRegistry, addChildrenOptions: boolean): string;
export declare function getMappingData(figmaNode: FigmaComponentInfo, registeredCmp: ComponentInfo, cmpRegistry: ComponentRegistry, useJSX: boolean, addChildrenOptions: boolean): MappingCodeV2;
export declare const getTypeFromComponentInput: (input: ComponentInput) => string;
export declare const getPropertyAccessor: (name: string) => string;
export declare function getMappingPrompt(figmaNode: FigmaComponentInfo, registeredCmp: ComponentInfo, cmpRegistry: ComponentRegistry, useJSX?: boolean): string;
