const login = async ({ email, password }, { common, userService }) => {
  if (!email || !password) throw new Error("Invalid data");
  const currentUser = await userService.findByEmail({
    where: { email },
  });
  if (currentUser) throw new Error("Wrong email or password");
  const correctPassword = common.crypto.verify(currentUser.password, password);
  if (!correctPassword) throw new Error("Wrong email or password");
  const generatedSession = await common.crypto.generate(currentUser.id);
  return { newUser, session: generatedSession };
};

const registration = async (payload, { common, userService }) => {
  const { email, username, password } = payload;
  console.log(userService);
  if (!email || !username || !password) throw new Error("Invalid data");
  const registratedUser = await userService.findByEmail({
    where: { email },
  });
  if (registratedUser) throw new Error(`User ${email} already exist`);
  const hashPassword = await common.crypto.hash(password);
  const regastratedUser = await userService.create({
    email,
    password: hashPassword,
    username,
  });
  return regastratedUser;
};

export const authService = (app) => {
  return {
    login: (payload) => login(payload, app),
    registration: (payload) => registration(payload, app),
  };
};
