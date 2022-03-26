"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require("dotenv/config");
const generateAccessToken = (uid = '') => {
    return new Promise((resolve, reject) => {
        const user = { uid };
        jsonwebtoken_1.default.sign(user, process.env.SECRETPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('Failed to generate JWT');
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateAccessToken = generateAccessToken;
//# sourceMappingURL=generate-jwt.js.map