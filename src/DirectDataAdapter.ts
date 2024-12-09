import {Logger} from '@classlink/logger'
import {IDataAdapter} from './IDataAdapter'
import {IExample} from './IExample'
import {IDirectDataAdapterOptions} from './IDirectDataAdapterOptions'
import {Cache} from '@classlink/cache/dist'
import {Database} from '@classlink/database/dist'
import {IMovie} from './IMovie'

const {trace, debug} = Logger.getDebuggers('DirectDataAdapter')

export class DirectDataAdapter implements IDataAdapter {
  private cache: Cache
  private db: Database

  public constructor(options: IDirectDataAdapterOptions) {
    this.cache = options.cache
    this.db = options.db
  }

  public async helloWorld(): Promise<IExample> {
    trace(`helloWorld()`)
    return {
      data: 'Hello World'
    }
  }

  public async addMovie(movie: IMovie): Promise<string> {
    trace(`addMovie(${movie.title})`)
    await this.db.w.query("INSERT INTO movies (title, releaseYear, genre, director, description) VALUES (:title, :releaseYear, :genre, :director, :description);", {
      title: movie.title,
      releaseYear: movie.releaseYear,
      genre: movie.genre,
      director: movie.director,
      description: movie.description
    })
    return "Movie successfully added to watchlist";
  }

}
