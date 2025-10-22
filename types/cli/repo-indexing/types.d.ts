export interface Component {
    id?: string;
    name: string;
    description: string;
    relatedComponents: string[];
    relevantFiles: string[];
    designSystemPackage?: string;
    designSystemVersion?: string;
    hash?: string;
    designSystemId?: string | null;
}
export interface ComponentIssue {
    componentName: string;
    error: string;
    sessionId: string;
}
