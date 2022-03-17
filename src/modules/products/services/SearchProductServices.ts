import { Product } from "@models/Product";
import { injectable } from "tsyringe";

interface IRequest {
  name: string;
  description: string;
  brand?: string;
  category?: string;
}
@injectable()
export class SearchProductServices {
  public async execute({ name, description }: IRequest) {
    if (name || description) {
      return await Product.find({
        name: new RegExp(name, "i"),
        description: new RegExp(description, "i"),
      })
        .populate("category")
        .populate("brand")
        .exec();
    }

    const products = await Product.find()
      .populate("category")
      .populate("brand")
      .exec();

    return products;
  }
}
