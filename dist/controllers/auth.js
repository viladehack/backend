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
exports.login = void 0;
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = require("../models/user");
const generate_jwt_1 = require("../helpers/generate-jwt");
const login = (req, res = express_1.response) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        // Verificar si el email existe
        const user = yield user_1.User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'Email / password are not correct. - email'
            });
        }
        ;
        // Si el usuario está activo
        if (!user.status) {
            return res.status(400).json({
                msg: 'Email / password are not correct. - status: false'
            });
        }
        ;
        // Verificar la contraseña
        const validPassword = bcryptjs_1.default.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({
                validPassword,
                msg: 'Email / password are not correct. - Password'
            });
        }
        ;
        // Generar el JWT
        const token = yield (0, generate_jwt_1.generateAccessToken)(user.id);
        res.status(200).json({
            user,
            token
        });
    }
    catch (error) {
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    }
    ;
});
exports.login = login;
//# sourceMappingURL=auth.js.map