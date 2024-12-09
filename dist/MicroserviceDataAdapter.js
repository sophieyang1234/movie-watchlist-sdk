"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MicroserviceDataAdapter = void 0;
const logger_1 = require("@classlink/logger");
const needle = require("needle");
const { trace, debug } = logger_1.Logger.getDebuggers('MicroserviceDataAdapter');
class MicroserviceDataAdapter {
    constructor(options) {
        this.baseURL = options.baseURL;
        this.serviceVersion = options.serviceVersion;
        this.apiKey = options.apiKey;
        this.timeoutMS = options.timeoutMS;
    }
    async helloWorld() {
        trace(`helloWorld()`);
        const url = `${this.baseURL}${this.serviceVersion}/helloWorld`;
        const needleResponse = await needle('get', url, {}, {
            json: false,
            parse_response: true,
            response_timeout: this.timeoutMS,
            headers: {
                authorization: this.apiKey
            }
        });
        debug(`statusCode: ${needleResponse.statusCode}`);
        switch (needleResponse.statusCode) {
            case 200:
                return needleResponse.body;
            case 401:
                return Promise.reject('Invalid or missing APIKey');
            case 404:
                return null;
            default:
                console.error('Unexpected response', JSON.stringify({
                    body: needleResponse.body,
                    statusCode: needleResponse.statusCode
                }));
                return Promise.reject(new Error('Unexpected response'));
        }
    }
}
exports.MicroserviceDataAdapter = MicroserviceDataAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWljcm9zZXJ2aWNlRGF0YUFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvTWljcm9zZXJ2aWNlRGF0YUFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQXdDO0FBRXhDLGlDQUFpQztBQUVqQyxNQUFNLEVBQUMsS0FBSyxFQUFFLEtBQUssRUFBQyxHQUFHLGVBQU0sQ0FBQyxZQUFZLENBQUMseUJBQXlCLENBQUMsQ0FBQTtBQUVyRSxNQUFhLHVCQUF1QjtJQU1sQyxZQUFtQixPQUF3QztRQUN6RCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUE7UUFDOUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFBO1FBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUE7SUFDcEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVO1FBQ3JCLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNyQixNQUFNLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsYUFBYSxDQUFBO1FBQzlELE1BQU0sY0FBYyxHQUFHLE1BQU0sTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFO1lBQ2xELElBQUksRUFBRSxLQUFLO1lBQ1gsY0FBYyxFQUFFLElBQUk7WUFDcEIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDaEMsT0FBTyxFQUFFO2dCQUNQLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTTthQUMzQjtTQUNGLENBQUMsQ0FBQTtRQUNGLEtBQUssQ0FBQyxlQUFlLGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFBO1FBQ2pELFFBQVEsY0FBYyxDQUFDLFVBQVUsRUFBRTtZQUNqQyxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxjQUFjLENBQUMsSUFBSSxDQUFBO1lBQzVCLEtBQUssR0FBRztnQkFDTixPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsMkJBQTJCLENBQUMsQ0FBQTtZQUNwRCxLQUFLLEdBQUc7Z0JBQ04sT0FBTyxJQUFJLENBQUE7WUFDYjtnQkFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2xELElBQUksRUFBRSxjQUFjLENBQUMsSUFBSTtvQkFDekIsVUFBVSxFQUFFLGNBQWMsQ0FBQyxVQUFVO2lCQUN0QyxDQUFDLENBQUMsQ0FBQTtnQkFDSCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFBO1NBQzFEO0lBQ0gsQ0FBQztDQUNGO0FBeENELDBEQXdDQyJ9