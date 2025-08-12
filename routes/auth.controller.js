export default async function (fastify) {
  const { auth } = fastify.services;

  fastify.register(
    async function (instance) {
      instance.route({
        method: "POST",
        url: "/registration",
        handler: async function (req, reply) {
          const { username, email, password } = req.body;
          const result = await auth.registration({ username, email, password });
          reply.send({ data: result });
        },
      });

      instance.route({
        method: "POST",
        url: "/login",
        handler: async function (req, reply) {
          const { email, password } = req.body;
          const result = await auth.login({ email, password });
          reply.send({ data: result });
        },
      });
    },
    { prefix: "/auth" },
  );
}
