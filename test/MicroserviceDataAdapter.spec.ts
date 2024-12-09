import * as chai from 'chai'
import {expect} from 'chai'
import 'mocha'
import * as sinonChai from 'sinon-chai'
import * as chaiAsPromised from 'chai-as-promised'
import {IMicroserviceDataAdapterOptions} from '../src'
import {MicroserviceDataAdapter} from '../src/MicroserviceDataAdapter'

chai.use(chaiAsPromised)
chai.use(sinonChai)

function getDataAdapter(options) {
  return new MicroserviceDataAdapter(options)
}

function getDefaultOptions(options = {}): IMicroserviceDataAdapterOptions {
  return {apiKey: '########', baseURL: 'https://devbox-first-last.classlink.io', mode: 'microservice', serviceVersion: '/v1'}
}

describe('MicroserviceDataAdapter',
  () => {
    const options = getDefaultOptions()
    const OUT = getDataAdapter(options)

    it('helloWorld()', async function () {
      const example = await OUT.helloWorld()
      console.log(example.data)
      expect(example).to.be.not.null
      expect(example.data).to.be.a('string')
    }).timeout(10000)
  })
