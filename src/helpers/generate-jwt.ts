import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generateAccessToken = (uid = '') => {

    return new Promise((resolve: any, reject: any) => {

        const user = { uid };

        jwt.sign(user, process.env.SECRETPRIVATEKEY as string, {
            expiresIn: '4h'
        }, (err: any, token: any) => {
            if (err) {
                console.log(err);
                reject('Failed to generate JWT');
            } else {
                resolve(token);
            }
        });
    })
};