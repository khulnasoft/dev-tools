export interface CLIArgs {
    /** Figma access token */
    figmaToken?: string;
    /** GitHub access token */
    githubToken?: string;
    /** Run in CI mode without interactive prompts */
    ci?: boolean;
    /** Show help text */
    help?: boolean;
    /** Force operation even if there are warnings */
    force?: boolean;
    /** Print output as JSON */
    verbose?: boolean;
    /** Run in dry-run mode without making changes */
    dryrun?: boolean;
    /** Auto-confirm all prompts */
    yes?: boolean;
    /** khulnasoft.com space ID */
    spaceId?: string;
    /** Component name to use */
    componentName?: string;
    /** Mapping directory to use */
    mappingOutput?: string;
    /** Skip package installation step */
    skipInstallation?: boolean;
    /** Skip detailed grouping in repo indexing */
    skipDetailedGrouping?: boolean;
    /** Skip display of header in repo indexing */
    skipHeader?: boolean;
    /** NPM package name to index */
    designSystemPackage?: string;
    /**
     * A user-friendly design system name to index.
     *
     * This can be used in conjunction with designSystemPackage to index components
     * where the design system name is different than the npm package name.
     * Example: --designSystemPackage=@adobe/react-spectrum --designSystemName="Adobe React Spectrum"
     *
     * This flag can also be used with includeDirectories to specify a name for design systems
     * that are not npm packages.
     * Example: --includeDirectories="path/to/swift/ui/components" --designSystemName="Native UI"
     **/
    designSystemName?: string;
    /**
     * Comma separated string of directories to look in for repo indexing.
     * Use this when component implementations live in a different place
     * than the workspace package you are indexing.
     * Example: --includeDirectories "packages/foo, packages/bar"
     **/
    includeDirectories?: string;
    /** Token to use for figma */
    token?: string;
    /** Url to start from */
    url?: string;
    /** Node ID from Figma URL */
    nodeId?: string;
    /** Prompt text for non-interactive mode */
    prompt?: string;
    /** Generation mode */
    mode?: "quality" | "quality-v3";
    /** Working directory to run commands from */
    cwd?: string;
    /** Debug mode */
    debug?: boolean;
    /** Raw command line arguments */
    _: string[];
    /** Khulnasoft private key, used for authentication. */
    khulnasoftPrivateKey?: string;
    /** Khulnasoft public key, used for authentication. */
    khulnasoftPublicKey?: string;
    /** Khulnasoft user ID, used for authentication. */
    khulnasoftUserId?: string;
    /** Path to workspace configuration file */
    workspace?: string;
    /** Output structured JSON data instead of human-readable logs */
    jsonOutput?: boolean;
    /** Remove all mappings from the space, publishing zero mappings even if mapper files exist */
    clearMappings?: boolean;
    /** Enabled tools, list of strings separated by commas */
    enabledTools?: string;
    /** If true run brief indexing before running code generation */
    index?: boolean;
    /** If true list indexed repositories */
    listIndexedRepos?: boolean;
    /** Disable MCP support */
    disableMcp?: boolean;
    /** Clear all stored credentials (logout) */
    reset?: boolean;
    /** Comma-separated list of component names to reindex */
    components?: string;
    nativeApp?: boolean;
}
