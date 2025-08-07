import fp from "fastify-plugin";
import env from "@fastify/env";

const schema = {
  type: "object",
  required: ["PORT", "DATABASE_URL", "JWT_SECRET"],
  properties: {
    PORT: {
      type: "string",
      default: 3000,
    },
    DATABASE_URL: {
      type: "string",
    },
    JWT_SECRET: {
      type: "string",
    },
  },
};

const options = {
  dotenv: true,
  confKey: "config",
  schema,
};

export default fp(
  async (fastify) => {
    fastify.register(env, options).ready((err) => {
      if (err) fastify.log.error(err);
    });
  },
  { name: "env" }
);
