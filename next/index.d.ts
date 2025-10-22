import type { NextConfig } from "next";

declare function NextKhulnaSoftDevTools(options?: {
  enabled?: boolean;
  devToolsServerPort?: number;
}): (config?: NextConfig) => NextConfig;

export default NextKhulnaSoftDevTools;
