const create = async (payload, { repo }) => {
  return await repo.create({
    data: payload,
  });
};

const findByEmail = async (email, { repo }) => {
  return repo.findFirst({
    where: { email },
  });
};

export const userService = ({ db }) => {
  const repo = db["user"];
  return {
    create: (payload) => create(payload, { repo }),
    findByEmail: (email) => findByEmail(email, { repo }),
  };
};
