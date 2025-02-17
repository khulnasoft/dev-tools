import type { NextConfig } from "next";

declare function NextKhulnasoftDevTools(options?: {
  enabled?: boolean;
  devToolsServerPort?: number;
}): (config?: NextConfig) => NextConfig;

export default NextKhulnasoftDevTools;
