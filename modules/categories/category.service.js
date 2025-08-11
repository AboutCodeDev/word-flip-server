const create = async (payload, { repo }) => {
  const alreadyExist = await repo.findFirst({
    where: { name: payload.name, userId: payload.userId },
  });
  if (alreadyExist) throw new Error("Current category already exist");
  const newCategory = await repo.create({
    data: payload,
  });
  return newCategory.id;
};

export const categoryService = ({ db }) => {
  const repo = db["category"];
  return {
    create: (payload) => create(payload, { repo }),
    findAll: () => findAll(),
  };
};
