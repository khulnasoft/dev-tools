export interface DevServerUrlInfo {
    url: string;
    port: number;
}
/**
 * Parse dev server output to extract URL and port information
 *
 * @param output - The command output string to parse
 * @param customPatterns - Optional array of custom regex patterns to try first
 * @returns Object with url and port, or null if no valid URL found
 */
export declare function parseDevServerOutput(output: string, customPatterns?: string[]): DevServerUrlInfo | null;
