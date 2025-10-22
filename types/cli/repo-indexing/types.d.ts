export type IndexDocument = ComponentDocument | TokenDocument | IconDocument | AgentDocument;
export interface DocumentBase {
    id?: string;
    name: string;
    description: string;
    content: string;
    designSystemId: string;
    designSystemPackage?: string;
    designSystemVersion?: string;
    tokens?: number;
    sessionId?: string;
}
export declare const isAgentDocument: (doc: IndexDocument) => doc is AgentDocument;
export declare const isIconDocument: (doc: IndexDocument) => doc is IconDocument;
export declare const isTokenDocument: (doc: IndexDocument) => doc is TokenDocument;
export declare const isComponentDocument: (doc: IndexDocument) => doc is ComponentDocument;
export interface ComponentDocument extends DocumentBase {
    type: "component";
    relatedComponents: string[];
    relevantFiles: string[];
    hash: string;
}
export interface TokenDocument extends DocumentBase {
    type: "token";
    hash: string;
    relevantFiles: string[];
}
export interface IconDocument extends DocumentBase {
    type: "icon";
    hash: string;
}
export interface AgentDocument extends DocumentBase {
    type: "agent";
}
interface BaseTask {
    name: string;
}
export interface ComponentTask extends BaseTask {
    type: "component";
    description: string;
    relevantFiles: string[];
    relatedComponents: string[];
    designSystemPackage?: string;
    designSystemVersion?: string;
    hash: string;
}
export interface TokenTask extends BaseTask {
    type: "token";
    relevantFiles: string[];
    tokens: string[];
    hash: string;
}
export interface IconTask extends BaseTask {
    type: "icon";
}
export type Task = ComponentTask | TokenTask | IconTask;
export {};
