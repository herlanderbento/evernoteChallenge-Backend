import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchBrandServices } from "../services/SearchBrandServices";

export class SearchBrandsController {
  public async handle(request: Request, response: Response) {
    const { name } = request.query;

    const searchBrandServices = container.resolve(SearchBrandServices);

    const brand = await searchBrandServices.execute({
      name: String(name),
    });

    return response.json(brand);
  }
}
