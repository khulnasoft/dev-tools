/**
 * Use this when you want to throw an error and NOT have the error logged to the
 * user when reporting to sentry
 */
export declare class PrivateError extends Error {
}
/**
 * Standardized network error class with structured properties for better diagnostics
 */
export declare class NetworkError extends PrivateError {
    constructor({ type, cause, message, suggestions, hostname, port, statusCode, errorCode, }: {
        type: NetworkErrorType;
        cause?: Error;
        message: string;
        suggestions?: string[];
        hostname?: string;
        port?: number;
        statusCode?: number;
        errorCode?: string;
    });
    readonly type: NetworkErrorType;
    readonly suggestions: string[];
    readonly hostname?: string;
    readonly port?: number;
    readonly statusCode?: number;
    readonly errorCode?: string;
}
export type NetworkErrorType = "connection_refused" | "connection_timeout" | "dns_not_found" | "ssl_error" | "server_error" | "unknown";
export declare function convertNodeErrorToNetworkError(error: Error & {
    code?: string;
}, hostname: string, port?: number): NetworkError;
export declare function displayNetworkError(error: NetworkError): void;
