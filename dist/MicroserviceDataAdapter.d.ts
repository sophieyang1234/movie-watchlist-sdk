import { IDataAdapter, IExample, IMicroserviceDataAdapterOptions } from './';
export declare class MicroserviceDataAdapter implements IDataAdapter {
    private baseURL;
    private serviceVersion;
    private apiKey;
    private timeoutMS;
    constructor(options: IMicroserviceDataAdapterOptions);
    helloWorld(): Promise<IExample>;
}
