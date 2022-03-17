import { Router } from "express";
import { brandsRoutes } from "./brands.routes";
import { categoriesRoutes } from "./categories.routes";
import { productsRoutes } from "./products.routes";
import { usersRoutes } from "./user.routes";

const routes = Router();

routes.use("/categories", categoriesRoutes);
routes.use("/brands", brandsRoutes);
routes.use("/products", productsRoutes);

routes.use(usersRoutes);

export { routes };
