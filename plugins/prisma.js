import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";

async function prismaPlugin(fastify, _opts) {
  const prisma = new PrismaClient();
  await prisma.$connect();

  fastify.decorate("prisma", prisma);
  fastify.addHook("onClose", async (app, done) => {
    await app.prisma.$disconnect();
    done();
  });
}

export default fp(prismaPlugin, { name: "prisma" });
