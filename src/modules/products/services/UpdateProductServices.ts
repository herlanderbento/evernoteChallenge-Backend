import { Product } from "@models/Product";
import { Category } from "@models/Category";
import { injectable } from "tsyringe";
import { Brand } from "@models/Brand";

type IRequest = {
  _id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  updatedAt?: Date;
};

@injectable()
export class UpdateProductServices {
  public async execute({
    _id,
    name,
    description,
    category,
    brand,
    updatedAt = new Date(),
  }: IRequest) {
    const categoryExists = await Category.findById(category);

    if (!categoryExists) {
      throw new Error("Categories not found!");
    }

    const brandExists = await Brand.findById(brand);

    if (!brandExists) {
      throw new Error("Brands not found!");
    }

    const product = await Product.findById(_id);

    if (name !== product.name) {
      const product = await Product.findOne({
        name,
      });

      if (product) {
        throw new Error("Products already exists!");
      }
    }

    const products = await Product.findByIdAndUpdate(_id, {
      name,
      description,
      category,
      brand,
      updatedAt,
    });

    return products;
  }
}
