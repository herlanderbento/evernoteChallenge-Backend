import { Product } from "@models/Product";
import { injectable } from "tsyringe";

@injectable()
export class GetProductsServices {
  public async execute() {
    const product = await Product.find()
      .populate("category")
      .populate("brand")
      .exec();

    return product;
  }
}
