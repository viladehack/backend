import express, { Application } from 'express';

import registerRouter from '../routes/register';

class Server {
    private app: Application;
    private port: string;
    private path = {
        register: '/register'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT as string;

        this.middlewares();
        this.route();
        this.listen();
    }

    middlewares() {

    }

    route() {
        this.app.use(this.path.register, registerRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Listenner on port ${this.port}`);
        });
    };
};

export default Server;