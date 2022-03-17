import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProductServices } from "../services/DeleteProductServices";

export class DeleteProductController {
  public async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteProductServices = container.resolve(DeleteProductServices);

    await deleteProductServices.execute(id);

    return response.send({ message: "Product deleted successfully" });
  }
}
