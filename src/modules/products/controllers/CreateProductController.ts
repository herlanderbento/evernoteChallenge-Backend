import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductServices } from "../services/CreateProductServices";

export class CreateProductController {
  public async handle(request: Request, response: Response) {
    const { name, description, category, brand } = request.body;

    const createProductServices = container.resolve(CreateProductServices);

    const product = await createProductServices.execute({
      name,
      description,
      category,
      brand,
    });

    return response.status(201).json(product);
  }
}
