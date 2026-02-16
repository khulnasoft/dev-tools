export declare class KhulnasoftDevToolsPlugin {
  private readonly opts;
  constructor(opts?: WebpackKhulnasoftDevToolsOptions);
  apply(c: any): void;
}
export interface WebpackKhulnasoftDevToolsOptions {
  enabled?: boolean;
  devToolsServerPort?: number;
}
