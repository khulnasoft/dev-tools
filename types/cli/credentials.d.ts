import type { DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
import type { Feature } from "$/ai-utils";
export interface CredentialsOptions {
    forceSpaceId?: string;
    khulnasoftPublicKey?: boolean;
    khulnasoftPrivateKey?: boolean;
    figmaAuth?: boolean;
    force?: boolean;
}
export interface FigmaAuth {
    access_token: string;
    oauth: boolean;
}
export interface KhulnasoftCodegenUsage {
    total: number | undefined;
    fast: number | undefined;
    quality: number | undefined;
    features?: Feature[];
    limits?: {
        aiGeneration: number;
        aiGenerationContextWindow: number;
    };
}
export interface KhulnasoftAuth {
    privateKey: string;
    spaceId: string;
    spaceName: string;
    userId: string;
}
export declare const isCI: (args: CLIArgs) => boolean;
export interface Credentials {
    figmaAuth?: FigmaAuth;
    khulnasoftPublicKey?: string;
    khulnasoftPrivateKey?: string;
    spaceName?: string;
    userId?: string;
    timestamp?: string;
}
export declare const readCredentials: (sys: DevToolsSys, args: CLIArgs) => {
    spaceName: string | undefined;
    userId: string | undefined;
    khulnasoftPublicKey: string | undefined;
    khulnasoftPrivateKey: string | undefined;
    figmaAuth: FigmaAuth | undefined;
    timestamp: string | undefined;
};
export declare const getCredentials: (sys: DevToolsSys, args: CLIArgs, opts: CredentialsOptions) => Promise<Credentials>;
export declare function getFigmaAuth(sys: DevToolsSys): Promise<FigmaAuth>;
export declare function getKhulnasoftCodegenUsage(khulnasoftPublicKey: string, khulnasoftPrivateKey: string): Promise<KhulnasoftCodegenUsage>;
export declare function getKhulnasoftAuth(sys: DevToolsSys, preferSpaceId?: string): Promise<KhulnasoftAuth>;
export declare function storeCredentials(sys: DevToolsSys, credentials: Credentials): void;
export declare function clearCredentials(sys: DevToolsSys): boolean;
