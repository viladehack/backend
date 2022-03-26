import express, { Application } from 'express';
import { dbConnectMongo } from '../db/config';

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

        this.connectMongoDB();
        this.middlewares();
        this.route();
        this.listen();
    }

    async connectMongoDB(){
        await dbConnectMongo();
    };

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