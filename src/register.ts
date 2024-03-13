import { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import { CustomerRouter } from "./routes/CustomerRouter";
import cors from "@fastify/cors";

export async function Init(app: any) {
  //routes  
  await app.register(CustomerRouter);

  //erro handle
  app.setErrorHandler((error: FastifyError, request: FastifyRequest, reply: FastifyReply) => {
    reply.code(400).send({
      message: error.message
    })
  });

  //cors
  await app.register(cors);
  
  //run
  await app.listen({port: 3333});
}
