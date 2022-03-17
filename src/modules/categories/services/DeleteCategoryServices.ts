import { Category } from "@models/Category";
import { injectable } from "tsyringe";

@injectable()
class DeleteCategoryServices {
  public async execute(_id: string) {
    const categories = await Category.findById(_id);

    if (!categories) {
      throw new Error("Categories does not exists!");
    }

    await categories.remove();
  }
}

export { DeleteCategoryServices };
