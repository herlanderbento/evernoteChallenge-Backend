import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateBrandServices } from "../services/UpdateBrandServices";

class UpdateBrandController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const { name } = request.body;

    const updateBrandServices = container.resolve(UpdateBrandServices);

    const brand = await updateBrandServices.execute({
      _id: id,
      name,
    });

    return response.json(brand);
  }
}

export { UpdateBrandController };
