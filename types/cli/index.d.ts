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
    printJson?: boolean;
    /** Run in dry-run mode without making changes */
    dryrun?: boolean;
    /** Auto-confirm all prompts */
    yes?: boolean;
    /** Khulnasoft.com space ID */
    spaceId?: string;
    /** Skip package installation step */
    skipInstallation?: boolean;
    /** Url to start from */
    url?: string;
    /** Prompt text for non-interactive mode */
    prompt?: string;
    /** Generation mode - either 'exact' for precise matches or 'creative' for more flexibility */
    mode?: "exact" | "creative";
    /** Working directory to run commands from */
    cwd?: string;
    /** Raw command line arguments */
    _: string[];
}
