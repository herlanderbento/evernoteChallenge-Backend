import { Category } from "@models/Category";
import { injectable } from "tsyringe";

@injectable()
class CreateCategoryServices {
  public async execute({
    name,
    description,
  }: Omit<Category, "createAt, updatedAt">) {
    const CategoryAlreadyExists = await Category.findOne({
      name,
    });

    if (CategoryAlreadyExists) {
      throw new Error("Category already exists!");
    }

    const Categories = await Category.create({
      name,
      description,
    });

    return Categories;
  }
}

export { CreateCategoryServices };
