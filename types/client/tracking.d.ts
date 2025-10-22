export declare const dispatch: (eventName: TriggerName) => void;
export declare const initTracking: () => Promise<void>;
export declare const getKhulnasoftUserId: () => string;
export declare const setKhulnasoftUserId: (khulnasoftUserId: string) => void;
export declare const getTracking: () => ClientTracking;
export declare const hasCTA: (ctaName: string) => boolean;
export declare const setCTA: (ctaName: string) => ClientTracking;
interface ClientTracking {
    /**
     * first time visit timestamp
     */
    firstVisitTs: number;
    /**
     * Name of the call to actions and timestamps when they happened
     */
    ctas: {
        [ctaName: string]: number;
    };
    khulnasoftUserId: string;
}
export type TriggerName = "init" | "menuOpen" | "menuClose" | "registryUpdate";
export {};
