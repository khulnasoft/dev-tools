import type { DevToolsSys } from "packages/dev-tools/types";
export declare function createKhulnasoftPage(sys: DevToolsSys, opts: {
    templateContentId: string;
    publicApiKey: string;
    privateAuthKey: string;
    pathname: string;
    title: string;
}): Promise<void>;
