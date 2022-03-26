"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const register_1 = __importDefault(require("../routes/register"));
class Server {
    constructor() {
        this.path = {
            register: '/register'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.middlewares();
        this.route();
        this.listen();
    }
    middlewares() {
    }
    route() {
        this.app.use(this.path.register, register_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=server.js.map