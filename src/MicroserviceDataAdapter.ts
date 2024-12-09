import {Logger} from '@classlink/logger'
import {IDataAdapter, IExample, IMicroserviceDataAdapterOptions, ServiceVersionString} from './'
import needle = require('needle')

const {trace, debug} = Logger.getDebuggers('MicroserviceDataAdapter')

export class MicroserviceDataAdapter implements IDataAdapter {
  private baseURL: string
  private serviceVersion: ServiceVersionString
  private apiKey: string
  private timeoutMS: number

  public constructor(options: IMicroserviceDataAdapterOptions) {
    this.baseURL = options.baseURL
    this.serviceVersion = options.serviceVersion
    this.apiKey = options.apiKey
    this.timeoutMS = options.timeoutMS
  }

  public async helloWorld(): Promise<IExample> {
    trace(`helloWorld()`)
    const url = `${this.baseURL}${this.serviceVersion}/helloWorld`
    const needleResponse = await needle('get', url, {}, {
      json: false,
      parse_response: true,
      response_timeout: this.timeoutMS,
      headers: {
        authorization: this.apiKey
      }
    })
    debug(`statusCode: ${needleResponse.statusCode}`)
    switch (needleResponse.statusCode) {
      case 200:
        return needleResponse.body
      case 401:
        return Promise.reject('Invalid or missing APIKey')
      case 404:
        return null
      default:
        console.error('Unexpected response', JSON.stringify({
          body: needleResponse.body,
          statusCode: needleResponse.statusCode
        }))
        return Promise.reject(new Error('Unexpected response'))
    }
  }
}
