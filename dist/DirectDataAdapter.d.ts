import { IDataAdapter } from './IDataAdapter';
import { IExample } from './IExample';
import { IDirectDataAdapterOptions } from './IDirectDataAdapterOptions';
export declare class DirectDataAdapter implements IDataAdapter {
    private cache;
    private db;
    constructor(options: IDirectDataAdapterOptions);
    helloWorld(): Promise<IExample>;
}
