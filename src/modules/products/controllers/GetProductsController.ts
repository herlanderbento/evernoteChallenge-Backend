import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetProductsServices } from "../services/GetProductsServices";

export class GetProductsController {
  public async handle(request: Request, response: Response) {
    const getProductsServices = container.resolve(GetProductsServices);

    const products = await getProductsServices.execute();

    return response.json(products);
  }
}
