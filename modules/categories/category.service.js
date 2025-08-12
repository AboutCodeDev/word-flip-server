const create = async ({ name, userId }, { repo }) => {
  const alreadyExist = await repo.findFirst({
    where: { name, userId },
  });
  if (alreadyExist) throw new Error(`Category ${name} already exist`);
  const newCategory = await repo.create({
    data: { name, userId },
  });
  return newCategory.id;
};

const getUserCategories = async (userId, { repo }) => {
  return repo.findMany({
    where: { userId },
  });
};

export const categoryService = ({ db }) => {
  const repo = db["category"];
  return {
    create: (payload) => create(payload, { repo }),
    getUserCategories: (id) => getUserCategories(id, { repo }),
  };
};
