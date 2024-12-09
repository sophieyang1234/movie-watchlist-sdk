"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAdapter = void 0;
const logger_1 = require("@classlink/logger");
const MicroserviceDataAdapter_1 = require("./MicroserviceDataAdapter");
const InternalClasses_1 = require("./InternalClasses");
const { trace, debug } = logger_1.Logger.getDebuggers('DataAdapter');
class DataAdapter {
    static getDataAdapter(dataAdapterOptions) {
        trace('getDataAdapter');
        if (dataAdapterOptions.mode === 'direct') {
            debug(`Getting a DirectDataAdapter`);
            return new InternalClasses_1.DirectDataAdapter(dataAdapterOptions);
        }
        else if (dataAdapterOptions.mode === 'microservice') {
            debug(`Getting a MicroserviceDataAdapter`);
            return new MicroserviceDataAdapter_1.MicroserviceDataAdapter(dataAdapterOptions);
        }
    }
}
exports.DataAdapter = DataAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YUFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGF0YUFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQXdDO0FBRXhDLHVFQUFpRTtBQUVqRSx1REFBbUQ7QUFFbkQsTUFBTSxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsR0FBRyxlQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBR3pELE1BQWEsV0FBVztJQUNmLE1BQU0sQ0FBQyxjQUFjLENBQUMsa0JBQXNDO1FBQ2pFLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN4QyxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtZQUNwQyxPQUFPLElBQUksbUNBQWlCLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUNqRDthQUFNLElBQUksa0JBQWtCLENBQUMsSUFBSSxLQUFLLGNBQWMsRUFBRTtZQUNyRCxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtZQUMxQyxPQUFPLElBQUksaURBQXVCLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtTQUN2RDtJQUNILENBQUM7Q0FDRjtBQVhELGtDQVdDIn0=