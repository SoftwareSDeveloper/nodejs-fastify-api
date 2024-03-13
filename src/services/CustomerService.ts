import prismaClient from "../prisma";


class CustomerService{
    async createCustomer({name, email}: Customer) {

        const customer = await prismaClient.customer.create(
            {
                data:{
                    name,
                    email,
                    status: true
                }
            }
        );

        return customer;
    }

    async getAllCustomers() {
        const customers = await prismaClient.customer.findMany();

        return customers;
    }

    async deleteCustomer({id}: CustomerDelete){
        if(!id){
            throw new Error("Preencha o id do cliente a eliminar");
        }

        const customer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        });

        if(!customer){
            throw new Error("O cliente não existe!");
        }

        await prismaClient.customer.delete({
            where:{
                id: customer.id
            }
        });

        return { message: "Cliente eliminado com sucesso."}
    }
}

export { CustomerService }