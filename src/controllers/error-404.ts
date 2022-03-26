export const error404 = (req: any, res: any) => {
    res.status(404).json({
        msg: 'Error 404 - Page not found'
    });
};