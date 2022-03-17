import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetBrandServices } from "../services/GetBrandServices";

export class GetBrandsController {
  public async handle(request: Request, response: Response) {
    const getBrandsServices = container.resolve(GetBrandServices);

    const brands = await getBrandsServices.execute();

    return response.json(brands);
  }
}
