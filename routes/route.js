export default async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    const user = await fastify.prisma.users.findUnique({
      where: { id: 1 },
      include: {
        categories: true,
        sessions: true,
      },
    });
    return user;
  });
}
