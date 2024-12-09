export {IMicroserviceDataAdapterOptions} from './IMicroserviceDataAdapterOptions'
export type ServiceVersionString = `/v${number}`

export {DataAdapter} from './DataAdapter'
export {IDataAdapter} from './IDataAdapter'
export {IDataAdapterBasicOptions} from './IDataAdapterBasicOptions'
export {IDirectDataAdapterOptions} from './IDirectDataAdapterOptions'
export {IExample} from './IExample'
export {IMovie} from './IMovie'

export declare type EnvType = 'beta' | 'integration' | 'prod'
export type DataAdapterMode = 'direct' | 'microservice'
