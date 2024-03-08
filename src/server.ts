import Fastify from 'fastify';
import cors from '@fastify/cors';
import { CustomerRouter } from './routes/CustomerRouter';

const app = Fastify({logger: true});


const start = async () => {

    await app.register(CustomerRouter);
    await app.register(cors);

    try{
        await app.listen({port: 3333});
    }
    catch(err){
        process.exit(1);
    }
}

start();