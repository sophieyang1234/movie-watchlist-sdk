import {IDataAdapterBasicOptions} from './IDataAdapterBasicOptions'
import {Database} from '@classlink/database'
import {Cache} from '@classlink/cache'
import {EnvType} from './index'

export interface IDirectDataAdapterOptions extends IDataAdapterBasicOptions {
  mode: 'direct'
  cache: Cache
  db?: Database
  env?: EnvType
}
