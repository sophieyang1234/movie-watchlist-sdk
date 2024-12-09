import { IDataAdapterBasicOptions, ServiceVersionString } from './';
export interface IMicroserviceDataAdapterOptions extends IDataAdapterBasicOptions {
    mode: 'microservice';
    serviceVersion: ServiceVersionString;
    baseURL: string;
    apiKey: string;
}
