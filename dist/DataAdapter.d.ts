import { IDataAdapter, IDirectDataAdapterOptions } from './';
import { IMicroserviceDataAdapterOptions } from './IMicroserviceDataAdapterOptions';
type DataAdapterOptions = IMicroserviceDataAdapterOptions | IDirectDataAdapterOptions;
export declare class DataAdapter {
    static getDataAdapter(dataAdapterOptions: DataAdapterOptions): IDataAdapter;
}
export {};
