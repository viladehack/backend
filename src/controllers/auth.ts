import { response } from "express";
import bcryptjs from 'bcryptjs';

import { User } from "../models/user";
import { generateAccessToken } from "../helpers/generate-jwt";

export const login = async (req: any, res = response) => {
    const { email, password } = req.body;

    try {
        // Verificar si el email existe
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({
                msg: 'Email / password are not correct. - email'
            });
        };

        // Si el usuario está activo
        if (!user.status) {
            return res.status(400).json({
                msg: 'Email / password are not correct. - status: false'
            });
        };
        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password);

        if (!validPassword) {
            return res.status(400).json({
                validPassword,
                msg: 'Email / password are not correct. - Password'
            });
        };

        // Generar el JWT

        const token = await generateAccessToken(user.id);


        res.status(200).json({
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Talk to the administrator'
        });
    };
};