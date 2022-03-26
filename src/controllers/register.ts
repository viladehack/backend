import { User } from '../models/user';
import bcryptjs from 'bcryptjs';

export const registerPost = async (req: any, res: any) => {
    try {
        const { firstName, lastName, email, password } = req.body;
        const date = new Date();

        const user = await new User({ firstName, lastName, email, date, password });

        // Verificar si el correo existe
        const existEmail = await User.findOne({ email });
        if (existEmail) {
            return res.status(400).json({
                msg: 'That email is already registered.'
            })
        }

        // Encriptar la contraseña
        const salt = bcryptjs.genSaltSync(10)
        user.password = bcryptjs.hashSync(password, salt)

        // Guardar en DB
        await user.save();
        res.status(200).json({ user });
    } catch (error: any) {
        throw new Error(error)
        // res.status(500).json({
        //     msg: 'No lee'
        // });
    };
};