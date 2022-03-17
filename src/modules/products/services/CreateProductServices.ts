import { Brand } from "@models/Brand";
import { Category } from "@models/Category";
import { Product } from "@models/Product";
import { injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  brand: string;
}

@injectable()
export class CreateProductServices {
  public async execute({
    name,
    description,
    price,
    stock,
    category,
    brand,
  }: IRequest): Promise<Product> {
    const productAlreadyExists = await Product.findOne({ name });

    if (productAlreadyExists) {
      throw new Error("Product already exists!");
    }

    const categories = await Category.findById(category);

    if (!categories) {
      throw new Error("Category doesn't exists!");
    }

    const brands = await Brand.findById(brand);

    if (!brands) {
      throw new Error("Brand doesn't exists!");
    }

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
      brand,
    });

    return product;
  }
}
