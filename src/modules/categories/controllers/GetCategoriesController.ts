import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCategoriesServices } from "../services/GetCategoriesServices";

export class GetCategoriesController {
  public async handle(request: Request, response: Response) {
    const getCategoriesServices = container.resolve(GetCategoriesServices);

    const categories = await getCategoriesServices.execute();

    return response.json(categories);
  }
}
