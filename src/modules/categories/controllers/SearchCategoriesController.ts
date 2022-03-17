import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchCategoryServices } from "../services/SearchCategoryServices";

export class SearchCategoryController {
  public async handle(request: Request, response: Response) {
    const { name, description } = request.query;

    const searchCategoryServices = container.resolve(SearchCategoryServices);

    const categories = await searchCategoryServices.execute({
      name: String(name),
      description: String(description),
    });

    return response.json(categories);
  }
}
