import { Category } from "@models/Category";
import { injectable } from "tsyringe";

type IRequest = {
  _id: string;
  name: string;
  description: string;
  updatedAt?: Date;
};

@injectable()
class UpdateCategoryServices {
  public async execute({
    _id,
    name,
    description,
    updatedAt = new Date(),
  }: IRequest) {
    const category = await Category.findById(_id);

    if (!category) {
      throw new Error("Categories not found!");
    }

    if (name !== category.name) {
      const category = await Category.findOne({
        name,
      });

      if (category) {
        throw new Error("Categories already exists!");
      }
    }

    const categories = await Category.findByIdAndUpdate(_id, {
      name,
      description,
      updatedAt,
    });

    return categories;
  }
}

export { UpdateCategoryServices };
