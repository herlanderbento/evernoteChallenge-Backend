import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductServices } from "../services/UpdateProductServices";

export class UpdateProductController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name, description, category, brand } = request.body;

    const updateProductServices = container.resolve(UpdateProductServices);

    const product = await updateProductServices.execute({
      _id: id,
      name,
      description,
      category,
      brand,
    });

    return response.json(product);
  }
}
