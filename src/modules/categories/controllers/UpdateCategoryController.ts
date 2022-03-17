import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryServices } from "../services/UpdateCategoryServices";

class UpdateCategoryController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, description } = request.body;

    const updateCategoryServices = container.resolve(UpdateCategoryServices);

    const category = await updateCategoryServices.execute({
      _id: id,
      name,
      description,
    });

    return response.json(category);
  }
}

export { UpdateCategoryController };
