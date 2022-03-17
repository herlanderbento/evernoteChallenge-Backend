import { Router } from "express";

import { CreateCategoryController } from "@modules/categories/controllers/CreateCategoryController";
import { GetCategoriesController } from "@modules/categories/controllers/GetCategoriesController";
import { UpdateCategoryController } from "@modules/categories/controllers/UpdateCategoryController";
import { DeleteCategoryController } from "@modules/categories/controllers/DeleteCategoryController";
import { SearchCategoryController } from "@modules/categories/controllers/SearchCategoriesController";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const getCategoriesController = new GetCategoriesController();
const updateCategoryController = new UpdateCategoryController();
const searchCategoryController = new SearchCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoriesRoutes.use(ensureAuthenticated);

categoriesRoutes.post("/", createCategoryController.handle);
categoriesRoutes.get("/", getCategoriesController.handle);
categoriesRoutes.get("/search", searchCategoryController.handle);
categoriesRoutes.put("/:id", updateCategoryController.handle);
categoriesRoutes.delete("/:id", deleteCategoryController.handle);

export { categoriesRoutes };
