import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CustomerController } from "../controllers/CustomerController";

export async function CustomerRouter(fastify: FastifyInstance, options: FastifyPluginOptions){

    fastify.get(
        "/getAllCustomers",
        async(request: FastifyRequest, reply: FastifyReply) => {
            return new CustomerController().getAllCustomers(request, reply);
        }
    );
    
    fastify.post(
        "/createCustomer",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CustomerController().createCustomer(request, reply);
        }
    );

    fastify.delete(
        "/deleteCustomer",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CustomerController().deleteCustomer(request, reply);
        }
    );

}