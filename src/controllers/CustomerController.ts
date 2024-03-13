import { FastifyRequest, FastifyReply } from 'fastify';

import { CustomerService } from '../services/CustomerService';

class CustomerController {

    customerService = new CustomerService();

    async createCustomer(request: FastifyRequest, reply: FastifyReply){
        
        const {name, email} = request.body as {name: string, email: string};
        const customer = await this.customerService.createCustomer({name, email});

        reply.send(customer);
    }

    async getAllCustomers(request: FastifyRequest, reply: FastifyReply){

        const customersList = await this.customerService.getAllCustomers();

        reply.send(customersList);
    }

    async deleteCustomer(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as {id: string};

        const customer = await this.customerService.deleteCustomer({id});

        reply.send(customer);
    }

}

export { CustomerController };