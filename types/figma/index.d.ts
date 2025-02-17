/// <reference types="@figma/plugin-typings" />
export type FigmaNodeType = "COMPONENT" | "ELLIPSE" | "FRAME" | "GROUP" | "INSTANCE" | "LINE" | "POLYGON" | "RECTANGLE" | "STAR" | "TEXT" | "VECTOR";
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
export interface FigmaNode {
    "@type": "passedNode";
    $id: string;
    $name: string;
    $type: FigmaNodeType;
    $inputs: readonly FigmaComponentInput[];
    $componentName?: string;
    $rawNode: SceneNode;
    /** Represents the text content of the node and its descendants */
    $textContent: string;
    /** URL to the rasterized image of this node */
    $imageUrl: string;
    $children: readonly FigmaNode[];
    /** Recursively finds the first node that matches the callback */
    $findOne(callback: (node: SceneNode) => boolean): FigmaNode | undefined;
    /** Recursively finds the first figma child with the given name */
    $findOneByName(name: string | RegExp): FigmaNode | undefined;
    /** @deprecated Use $type instead */
    type: FigmaNodeType;
    /** @deprecated - */
    props: {};
    /** @deprecated - */
    key: string | null;
}
export interface BaseFigmaProps {
    $id: string;
    $name: string;
    $type: FigmaNodeType;
    $inputs: readonly FigmaComponentInput[];
    $componentName?: string;
    /** Represents the text content of the node and its descendants */
    $textContent: string;
    $css: Readonly<Record<string, string>>;
    /** URL to the rasterized image of this node */
    $imageUrl: string;
    /** Direct children of the root component node or instance */
    $children: readonly FigmaNode[];
    /** Recursively finds the first figma child with the given name */
    $findOneByName(name: string | RegExp): FigmaNode | undefined;
    /** Recursively finds the first node that matches the callback */
    $findOne(callback: (node: SceneNode) => boolean): FigmaNode | undefined;
}
interface FigmaProps extends BaseFigmaProps {
    [key: string]: any;
}
export type FigmaURL = `https://www.figma.com/design/${string}/${string}${"?" | "&"}node-id=${string}`;
export interface FigmaMappingWithKeyMapper<T extends BaseFigmaProps> {
    url?: FigmaURL;
    componentKey: string;
    mapper?: (figma: T) => any;
}
export interface FigmaMappingWithUrlMapper<T extends BaseFigmaProps> {
    url: FigmaURL;
    componentKey?: string;
    mapper?: (figma: T) => any;
}
export interface FigmaGenericMapper {
    genericMapper: (figma: FigmaProps) => any;
}
export interface FigmaTokenMapper {
    designTokenMapper: (token: string) => string | undefined | boolean;
}
export declare function figmaMapping<T extends BaseFigmaProps = FigmaProps>(_config: FigmaMappingWithKeyMapper<T> | FigmaMappingWithUrlMapper<T> | FigmaGenericMapper | FigmaTokenMapper): void;
export declare function explicitFalse(value: any): any;
export interface ChildElement<P = any> {
    type: any;
    props: P;
    key: string | null;
}
export type ChildrenNode = ChildElement | string | number | Iterable<ChildrenNode> | boolean | null | undefined;
export type ComponentProps<T> = T extends (props: infer P) => any ? P : any;
export {};
