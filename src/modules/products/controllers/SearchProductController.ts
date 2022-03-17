import { Request, Response } from "express";
import { container } from "tsyringe";
import { SearchProductServices } from "../services/SearchProductServices";

export class SearchProductController {
  public async handle(request: Request, response: Response) {
    const { name, description } = request.query;

    const searchProductServices = container.resolve(SearchProductServices);

    const categories = await searchProductServices.execute({
      name: String(name),
      description: String(description),
    });

    return response.json(categories);
  }
}
