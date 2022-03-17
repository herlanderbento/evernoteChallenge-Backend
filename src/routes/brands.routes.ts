import { CreateBrandController } from "@modules/brands/controllers/CreateBrandController";
import { DeleteBrandController } from "@modules/brands/controllers/DeleteBrandController";
import { GetBrandsController } from "@modules/brands/controllers/GetBrandsController";
import { SearchBrandsController } from "@modules/brands/controllers/SearchBrandsController";
import { UpdateBrandController } from "@modules/brands/controllers/UpdateBrandController";
import { Router } from "express";

const brandsRoutes = Router();

const createBrandController = new CreateBrandController();
const getBrandsController = new GetBrandsController();
const updateBrandController = new UpdateBrandController();
const searchBrandsController = new SearchBrandsController();
const deleteBrandController = new DeleteBrandController();

brandsRoutes.post("/", createBrandController.handle);
brandsRoutes.get("/", getBrandsController.handle);
brandsRoutes.get("/search", searchBrandsController.handle);
brandsRoutes.put("/:id", updateBrandController.handle);
brandsRoutes.delete("/:id", deleteBrandController.handle);

export { brandsRoutes };
