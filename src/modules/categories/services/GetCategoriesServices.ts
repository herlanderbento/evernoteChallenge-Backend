import { Category } from "@models/Category";
import { injectable } from "tsyringe";

@injectable()
export class GetCategoriesServices {
  public async execute() {
    const categories = await Category.find();

    return categories;
  }
}
