import {Logger} from '@classlink/logger'
import {IDataAdapter} from './IDataAdapter'
import {IExample} from './IExample'
import {IDirectDataAdapterOptions} from './IDirectDataAdapterOptions'
import {Cache} from '@classlink/cache/dist'
import {Database} from '@classlink/database/dist'

const {trace, debug} = Logger.getDebuggers('DirectDataAdapter')

export class DirectDataAdapter implements IDataAdapter {
  private cache: Cache
  private db: Database

  public constructor(options: IDirectDataAdapterOptions) {
    this.cache = options.exampleCache
    this.db = options.exampleDB
  }

  public async helloWorld(): Promise<IExample> {
    trace(`helloWorld()`)
    return {
      data: 'Hello World'
    }
  }
}
