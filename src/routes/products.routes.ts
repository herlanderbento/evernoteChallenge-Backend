import { Router } from "express";

import { CreateProductController } from "@modules/products/controllers/CreateProductController";
import { GetProductsController } from "@modules/products/controllers/GetProductsController";
import { UpdateProductController } from "@modules/products/controllers/UpdateProductController";
import { DeleteProductController } from "@modules/products/controllers/DeleteProductController";
import { SearchProductController } from "@modules/products/controllers/SearchProductController";

const productsRoutes = Router();

const createProductController = new CreateProductController();
const getProductsController = new GetProductsController();
const searchProductController = new SearchProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productsRoutes.get("/", getProductsController.handle);
productsRoutes.get("/search", searchProductController.handle);
productsRoutes.post("/", createProductController.handle);
productsRoutes.put("/:id", updateProductController.handle);
productsRoutes.delete("/:id", deleteProductController.handle);

export { productsRoutes };
