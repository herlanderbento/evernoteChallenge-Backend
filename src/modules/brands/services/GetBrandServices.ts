import { Brand } from "@models/Brand";
import { injectable } from "tsyringe";

@injectable()
export class GetBrandServices {
  public async execute() {
    const brands = await Brand.find();

    return brands;
  }
}
