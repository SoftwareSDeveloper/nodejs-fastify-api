import Fastify from 'fastify';
import { CustomerRouter } from './routes/CustomerRouter';
import { Init } from './register';

const app = Fastify({logger: true});


const start = async () => {

    try{
        await Init(app);
    }
    catch(err){
        process.exit(1);
    }
}

start();