import { Product } from "@models/Product";
import { injectable } from "tsyringe";

@injectable()
export class DeleteProductServices {
  public async execute(_id: string) {
    const products = await Product.findById(_id);

    if (!products) {
      throw new Error("products does not exists!");
    }

    await products.remove();
  }
}
