export interface CLIArgs {
    /** Khulnasoft.com private API key */
    privateKey?: string;
    /** Figma access token */
    figmaToken?: string;
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
    /** Khulnasoft.com space ID */
    spaceId?: string;
    /** Component name to use */
    componentName?: string;
    /** Mapping directory to use */
    mappingOutput?: string;
    /** Skip package installation step */
    skipInstallation?: boolean;
    /** Token to use for figma */
    token?: string;
    /** Url to start from */
    url?: string;
    /** Prompt text for non-interactive mode */
    prompt?: string;
    /** Generation mode - either 'exact' for precise matches or 'creative' for more flexibility */
    mode?: "precise" | "creative";
    /** Working directory to run commands from */
    cwd?: string;
    /** Raw command line arguments */
    _: string[];
}
