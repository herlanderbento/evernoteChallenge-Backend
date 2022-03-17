import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCategoryServices } from "../services/CreateCategoryServices";

class CreateCategoryController {
  public async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCategoryServices = container.resolve(CreateCategoryServices);

    const products = await createCategoryServices.execute({
      name,
      description,
    });

    return response.status(200).json(products);
  }
}

export { CreateCategoryController };
