import { type DevToolsSys, type SPACE_KIND_VALUES } from "packages/dev-tools/types";
export declare function hasKhulnasoftContentViaQueryAPI(opts: {
    publicApiKey: string;
    privateAuthKey: string;
    model: string;
    pageUrl: string;
}): Promise<any>;
export declare function hasKhulnasoftContentUrl(sys: DevToolsSys, opts: {
    publicApiKey: string;
    privateAuthKey: string;
    model: string;
    pageUrl: string;
    kind: SPACE_KIND_VALUES;
}): Promise<boolean>;
export declare function getKhulnasoftContent(sys: DevToolsSys, opts: {
    publicApiKey: string;
    model: string;
    pageUrl?: string;
    id?: string;
}): Promise<{
    results: any[];
}>;
export declare function writeKhulnasoftContent(sys: DevToolsSys, opts: {
    privateAuthKey: string;
    body: string;
    model: string;
}): Promise<void>;
