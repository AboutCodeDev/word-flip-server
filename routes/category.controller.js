export default async function (fastify) {
  const { category } = fastify.services;

  fastify.register(
    async function (instance) {
      instance.route({
        method: "POST",
        url: "/",
        handler: async function (req, reply) {
          const { name, userId } = req.body;
          const result = await category.create({ name, userId });
          reply.send({ data: result });
        },
      });

      // TODO: add session check, remove params
      instance.route({
        method: "GET",
        url: "/:userId",
        handler: async function (req, reply) {
          const { userId } = req.params;
          const result = await category.getUserCategories(Number(userId));
          reply.send({ data: result });
        },
      });
    },
    { prefix: "/category" },
  );
}
