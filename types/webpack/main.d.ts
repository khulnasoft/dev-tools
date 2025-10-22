export declare class KhulnaSoftDevToolsPlugin {
    private readonly opts;
    constructor(opts?: WebpackKhulnaSoftDevToolsOptions);
    apply(c: any): void;
}
export interface WebpackKhulnaSoftDevToolsOptions {
    enabled?: boolean;
    devToolsServerPort?: number;
}
