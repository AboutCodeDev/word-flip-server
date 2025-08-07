import fastifyPlugin from "fastify-plugin";
import fastifySensible from "@fastify/sensible";

export default fastifyPlugin(async function (fastify, opts) {
  fastify.register(fastifySensible, {
    errorHandler: false,
  });
});
