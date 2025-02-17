import * as Amplitude from "@amplitude/analytics-node";
export declare function initTracking(): Promise<void>;
export declare function track(eventName: string, options: Record<string, any>, eventOptions?: Amplitude.Types.EventOptions): Promise<Amplitude.Types.AmplitudeReturn<Amplitude.Types.Result>>;
export declare function setUserId(id: string): Promise<void>;
