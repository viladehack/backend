import { connect } from 'mongoose';

export const dbConnectMongo = async () => {
    try {
        await connect(process.env.MONGODB || 'mongodb://localhost:27017/viladehack');
        console.log('MongoDB started')
    } catch (error) {
        throw new Error('Error to start the database.')
    };
};