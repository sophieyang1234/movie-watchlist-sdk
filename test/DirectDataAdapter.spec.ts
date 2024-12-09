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

const {trace, debug} = Logger.getDebuggers('EndpointContainer')

chai.use(chaiAsPromised)
chai.use(sinonChai)

function getDataAdapter(options: IDirectDataAdapterOptions): IDataAdapter {
  return new DirectDataAdapter(options) as IDataAdapter
}

async function getDefaultOptions(options = {}): Promise<IDirectDataAdapterOptions> {
  const secretsManager = SecretsManager.getInstance()
  const resourceConfig = await secretsManager.getResourceConfigurations({
    exampleCache: {
      resourceType: 'cache',
      resourceId: 'exampleCache'
    },
    exampleDb: {
      resourceType: 'db',
      resourceId: 'exampleDb'
    }
  })
  const exampleCache = new Cache(resourceConfig.exampleCache)
  const exampleDB = DatabaseFactory.getInstance(resourceConfig.exampleDb as IDatabaseOptions)
  return defaults(options, {
    envType: 'integration',
    mode: 'direct',
    exampleCache,
    exampleDB,
  } as IDirectDataAdapterOptions)
}

describe('DirectDataAdapter',
  async () => {
    const options = await getDefaultOptions()
    const OUT = getDataAdapter(options)
    it('helloWorld()', async function () {
      const example = await OUT.helloWorld()
      console.log(example.data)
      expect(example).to.be.not.null
      expect(example.data).to.be.a('string')
    }).timeout(10000)
  })
