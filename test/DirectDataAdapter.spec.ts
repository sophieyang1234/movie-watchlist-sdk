import * as chai from 'chai'
import {expect} from 'chai'
import 'mocha'
import * as sinonChai from 'sinon-chai'
import * as chaiAsPromised from 'chai-as-promised'
import {IDataAdapter, IDirectDataAdapterOptions} from '../src'
import {DirectDataAdapter} from '../src/InternalClasses'
import {defaults} from 'underscore'
import {Cache} from '@classlink/cache/dist'
import {DatabaseFactory, IDatabaseOptions} from '@classlink/database/dist'
import {SecretsManager} from '@classlink/secrets-manager-sdk'
import {Logger} from '@classlink/logger'
import {IMovie} from '../src/IMovie'

const {trace, debug} = Logger.getDebuggers('EndpointContainer')

chai.use(chaiAsPromised)
chai.use(sinonChai)

function getDataAdapter(options: IDirectDataAdapterOptions): IDataAdapter {
  return new DirectDataAdapter(options) as IDataAdapter
}

async function getDefaultOptions(options = {}): Promise<IDirectDataAdapterOptions> {
 /* const secretsManager = SecretsManager.getInstance()*/
/*  const resourceConfig = await secretsManager.getResourceConfigurations({
    exampleCache: {
      resourceType: 'cache',
      resourceId: 'exampleCache'
    },
    exampleDb: {
      resourceType: 'db',
      resourceId: 'exampleDb'
    }
  })*/
  const cache = new Cache({
    'host': 'beta1-m.kt921h.ng.0001.use1.cache.amazonaws.com',
    'db': 1,
    'readHost': 'beta1-m.kt921h.ng.0001.use1.cache.amazonaws.com'
  })
  const db= DatabaseFactory.getInstance({
    host: 'beta2-cluster.cluster-cyyc8oaqv9i2.us-east-1.rds.amazonaws.com',
    schema: 'clroundup24',
    username: 'betabetabeta',
    password: '227b88cb-2288-4d1e-a454-ee8a6ab7bf7e',
    cache
  } as IDatabaseOptions)
  return defaults(options, {
    envType: 'integration',
    mode: 'direct',
    cache,
    db,
  } as IDirectDataAdapterOptions)
}

describe('DirectDataAdapter',
  async () => {
    const options = await getDefaultOptions()
    const OUT = getDataAdapter(options)
/*    it('helloWorld()', async function () {
      const example = await OUT.helloWorld()
      console.log(example.data)
      expect(example).to.be.not.null
      expect(example.data).to.be.a('string')
    }).timeout(10000)*/
    describe('AddMovie',
        async () => {
          const options = await getDefaultOptions()
          const OUT = getDataAdapter(options)
          it('should make a call to the database', async function () {
            const sampleMovie = {
              title: 'Shaun the Sheep: The Flight Before Christmas',
              releaseYear: 2021,
              genre: 'Animation',
              director: 'Steve Cox',
              description: 'Shaun\'s seasonal excitement turns to dismay when a farmhouse raid to get bigger stockings for the Flock inadvertently leads to Timmy going missing. Can Shaun get Timmy back before he becomes someone else\'s present?'
            }

            const resp =  await OUT.addMovie(sampleMovie);
            console.log('RESP',resp);
          })
        })
  })
