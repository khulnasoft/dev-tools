/**
 * Vite plugin that adds Khulnasoft Devtools to your Vite dev server.
 */
export declare function khulnasoftDevTools(
  opts?: ViteKhulnasoftDevToolsOptions,
): any;
export interface ViteKhulnasoftDevToolsOptions {
  devToolsServerPort?: number;
}
