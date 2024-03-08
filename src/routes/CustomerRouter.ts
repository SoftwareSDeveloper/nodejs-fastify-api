import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "../controllers/CustomerController";

export async function CustomerRouter(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.post(
        "/customer",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateCustomerController().handle(request, reply);
        }
    );

}