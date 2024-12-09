"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectDataAdapter = void 0;
const logger_1 = require("@classlink/logger");
const { trace, debug } = logger_1.Logger.getDebuggers('DirectDataAdapter');
class DirectDataAdapter {
    constructor(options) {
        this.cache = options.exampleCache;
        this.db = options.exampleDB;
    }
    async helloWorld() {
        trace(`helloWorld()`);
        return {
            data: 'Hello World'
        };
    }
}
exports.DirectDataAdapter = DirectDataAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlyZWN0RGF0YUFkYXB0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvRGlyZWN0RGF0YUFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQXdDO0FBT3hDLE1BQU0sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLEdBQUcsZUFBTSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0FBRS9ELE1BQWEsaUJBQWlCO0lBSTVCLFlBQW1CLE9BQWtDO1FBQ25ELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQTtRQUNqQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUE7SUFDN0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxVQUFVO1FBQ3JCLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUNyQixPQUFPO1lBQ0wsSUFBSSxFQUFFLGFBQWE7U0FDcEIsQ0FBQTtJQUNILENBQUM7Q0FDRjtBQWZELDhDQWVDIn0=