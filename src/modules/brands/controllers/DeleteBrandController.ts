import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteBrandServices } from "../services/DeleteBrandServices";

class DeleteBrandController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteBrandServices = container.resolve(DeleteBrandServices);

    await deleteBrandServices.execute(id);

    return response.send({ message: "Brand deleted successfully" });
  }
}

export { DeleteBrandController };
