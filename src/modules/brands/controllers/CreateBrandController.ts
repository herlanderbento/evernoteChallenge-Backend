import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateBrandServices } from "../services/CreateBrandServices";

class CreateBrandController {
  public async handle(request: Request, response: Response) {
    const { name } = request.body;

    const createBrandServices = container.resolve(CreateBrandServices);

    const brand = await createBrandServices.execute({
      name,
    });

    return response.status(200).json(brand);
  }
}

export { CreateBrandController };
