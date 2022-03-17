import { Router } from "express";

import { CreateProductController } from "@modules/products/controllers/CreateProductController";
import { GetProductsController } from "@modules/products/controllers/GetProductsController";
import { UpdateProductController } from "@modules/products/controllers/UpdateProductController";
import { DeleteProductController } from "@modules/products/controllers/DeleteProductController";

const productsRoutes = Router();

const createProductController = new CreateProductController();
const getProductsController = new GetProductsController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productsRoutes.get("/", getProductsController.handle);
productsRoutes.post("/", createProductController.handle);
productsRoutes.put("/:id", updateProductController.handle);
productsRoutes.delete("/:id", deleteProductController.handle);

export { productsRoutes };
