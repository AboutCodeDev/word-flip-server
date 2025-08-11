export default async function (fastify) {
  const { auth } = fastify.services;

  fastify.route({
    method: "POST",
    url: "/registration",
    handler: async function (req, reply) {
      const { username, email, password } = req.body;
      const result = await auth.registration({
        username,
        email,
        password,
      });
      return result;
    },
  });

  fastify.route({
    method: "POST",
    url: "/login",
    handler: async function (req, reply) {
      const { email, password } = req.body;
    },
  });
}
