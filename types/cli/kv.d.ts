interface KVGetRequest {
    privateKey: string;
    spaceId: string;
    docId: string;
}
interface KVPutRequest {
    privateKey: string;
    spaceId: string;
    docId: string;
    /**
     * Must be an object but not an array. TS is a fool sometimes.
     * https://stackoverflow.com/a/70448528/1520787
     */
    data: Record<string, any> & {
        length?: never;
    };
}
export declare function putKhulnasoftSpaceKv(kvReq: KVPutRequest): Promise<any>;
export declare function getKhulnasoftSpaceKv(kvReq: KVGetRequest): Promise<any>;
export {};
