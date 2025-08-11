import { authService } from "./modules/auth/auth.service.js";
import { cryptoService } from "./modules/auth/crypto.service.js";
import { categoryService } from "./modules/categories/category.service.js";
import { userService } from "./modules/users/user.service.js";

export const appServices = (db, common) => {
  const user = userService({ db, common });
  const auth = authService({ common, userService: user });
  const category = categoryService({ db });
  return { user, auth, category };
};

export const appCommon = {
  crypto: cryptoService,
};
