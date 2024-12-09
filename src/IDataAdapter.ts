import {IExample} from './IExample'

export interface IDataAdapter {
  helloWorld(): Promise<IExample>
}
