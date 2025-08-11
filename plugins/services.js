import fp from "fastify-plugin";
import { appCommon, appServices } from "../setup.js";

async function servicesPlugin(fastify) {
  fastify.decorate("common", appCommon);
  fastify.decorate("services", appServices(fastify.prisma, fastify.common));
}

export default fp(servicesPlugin, {
  name: "services",
  dependencies: ["prisma"],
});
