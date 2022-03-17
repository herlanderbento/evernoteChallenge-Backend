import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCategoryServices } from "../services/DeleteCategoryServices";

class DeleteCategoryController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCategoryServices = container.resolve(DeleteCategoryServices);

    await deleteCategoryServices.execute(id);

    return response.send({ message: "Category deleted successfully" });
  }
}

export { DeleteCategoryController };
