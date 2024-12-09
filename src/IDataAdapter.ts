import {IExample} from './IExample'
import {IMovie} from './IMovie'

export interface IDataAdapter {
  helloWorld(): Promise<IExample>
  addMovie(movie: IMovie): Promise<string>

}
