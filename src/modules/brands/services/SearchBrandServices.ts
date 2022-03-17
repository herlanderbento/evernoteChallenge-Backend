import { Brand } from "@models/Brand";
import { injectable } from "tsyringe";

interface IRequest {
  name: string;
}

@injectable()
export class SearchBrandServices {
  public async execute({ name }: IRequest) {
    if (name) {
      return await Brand.find({ name: new RegExp(name, "i") });
    }

    const brand = await Brand.find();

    return brand;
  }
}
