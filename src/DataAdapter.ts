import {Logger} from '@classlink/logger'
import {IDataAdapter, IDirectDataAdapterOptions} from './'
import {MicroserviceDataAdapter} from './MicroserviceDataAdapter'
import {IMicroserviceDataAdapterOptions} from './IMicroserviceDataAdapterOptions'
import {DirectDataAdapter} from './InternalClasses'

const {trace, debug} = Logger.getDebuggers('DataAdapter')
type DataAdapterOptions = IMicroserviceDataAdapterOptions | IDirectDataAdapterOptions

export class DataAdapter {
  public static getDataAdapter(dataAdapterOptions: DataAdapterOptions): IDataAdapter {
    trace('getDataAdapter')
    if (dataAdapterOptions.mode === 'direct') {
      debug(`Getting a DirectDataAdapter`)
      return new DirectDataAdapter(dataAdapterOptions)
    } else if (dataAdapterOptions.mode === 'microservice') {
      debug(`Getting a MicroserviceDataAdapter`)
      return new MicroserviceDataAdapter(dataAdapterOptions)
    }
  }
}
