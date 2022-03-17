import { Category } from "@models/Category";
import { injectable } from "tsyringe";

interface IRequest {
  name?: string;
  description?: string;
}

@injectable()
export class SearchCategoryServices {
  public async execute({ name, description }: IRequest) {
    if (name) {
      return await Category.find({ name: new RegExp(name, "i") });
    }

    if (description) {
      return await Category.find({ description: new RegExp(description, "i") });
    }

    const categories = await Category.find();

    return categories;
  }
}
