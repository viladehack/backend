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
exports.registerPost = void 0;
const user_1 = require("../models/user");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const registerPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, password } = req.body;
        const date = new Date();
        console.log(req.body);
        const user = yield new user_1.User({ firstName, lastName, email, date, password });
        // Verificar si el correo existe
        const existEmail = yield user_1.User.findOne({ email });
        if (existEmail) {
            return res.status(400).json({
                msg: 'That email is already registered.'
            });
        }
        // Encriptar la contraseña
        const salt = bcryptjs_1.default.genSaltSync(10);
        user.password = bcryptjs_1.default.hashSync(password, salt);
        // Guardar en DB
        yield user.save();
        res.status(200).json({ user });
    }
    catch (error) {
        // throw new Error(error)
        res.status(500).json({
            msg: 'No lee'
        });
    }
    ;
});
exports.registerPost = registerPost;
//# sourceMappingURL=register.js.map