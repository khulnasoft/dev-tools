import { type DevToolsServerContext, type ConnectedKhulnasoft, type ValidatedKhulnasoft, type SPACE_KIND_VALUES } from "../types";
export declare function connectKhulnasoft(ctx: DevToolsServerContext, publicApiKey: string, privateAuthKey: string, kind: SPACE_KIND_VALUES): Promise<ConnectedKhulnasoft | {
    success: boolean;
    pathname: string;
}>;
export declare function validateKhulnasoft(ctx: DevToolsServerContext): Promise<ValidatedKhulnasoft>;
