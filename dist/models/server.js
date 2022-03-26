"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../db/config");
const cors_1 = __importDefault(require("cors"));
const register_1 = __importDefault(require("../routes/register"));
const auth_1 = __importDefault(require("../routes/auth"));
const upload_1 = __importDefault(require("../routes/upload"));
const error_404_1 = __importDefault(require("../routes/error-404"));
class Server {
    constructor() {
        this.path = {
            register: '/register',
            auth: '/login',
            upload: '/upload',
            error: '/*'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.connectMongoDB();
        this.middlewares();
        this.route();
        this.listen();
    }
    connectMongoDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (0, config_1.dbConnectMongo)();
        });
    }
    ;
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    route() {
        this.app.use(this.path.register, register_1.default);
        this.app.use(this.path.auth, auth_1.default);
        this.app.use(this.path.upload, upload_1.default);
        this.app.use(this.path.error, error_404_1.default);
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