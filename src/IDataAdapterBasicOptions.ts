import {EnvType, DataAdapterMode} from './'

export interface IDataAdapterBasicOptions {
  envType?: EnvType
  mode: DataAdapterMode
  timeoutMS?: number
}
