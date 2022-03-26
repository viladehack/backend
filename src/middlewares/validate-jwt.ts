import jwt from 'jsonwebtoken';

export const validateToken = (req: any, res: any, next: any) => {
    const accesToken = req.header('authorization') || req.query.accesstoken;
    if (!accesToken) {
        res.json({
            msg: 'Access denied'
        });
    };
    jwt.verify(accesToken, process.env.SECRETPRIVATEKEY as string, (err: any, user: any) => {
        if (err) {
            res.json({
                msg: 'Access denied, token expired or incorrect.'
            });
        } else {
            next();
        };
    });
};