import type { DevToolsSys } from "../types";
import type { CLIArgs } from "./index";
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
export type Feature = "component-mapping";
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
export interface Credentials {
    figmaAuth?: FigmaAuth;
    khulnasoftPublicKey?: string;
    khulnasoftPrivateKey?: string;
    spaceName?: string;
    userId?: string;
}
export declare const isCI: (args: CLIArgs) => boolean;
export interface Credentials {
    figmaAuth?: FigmaAuth;
    khulnasoftPublicKey?: string;
    khulnasoftPrivateKey?: string;
    spaceName?: string;
    userId?: string;
}
export declare const getCredentials: (sys: DevToolsSys, args: CLIArgs, opts: CredentialsOptions) => Promise<Credentials>;
export declare function getFigmaAuth(): Promise<FigmaAuth>;
export declare function getKhulnasoftCodegenUsage(khulnasoftPublicKey: string, khulnasoftPrivateKey: string): Promise<KhulnasoftCodegenUsage>;
export declare function getKhulnasoftAuth(sys: DevToolsSys, preferSpaceId?: string): Promise<KhulnasoftAuth>;
