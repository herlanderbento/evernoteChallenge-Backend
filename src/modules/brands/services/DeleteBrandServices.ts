import { Brand } from "@models/Brand";
import { injectable } from "tsyringe";

@injectable()
class DeleteBrandServices {
  public async execute(_id: string) {
    const brand = await Brand.findById(_id);

    if (!brand) {
      throw new Error("Brand does not exists!");
    }

    await brand.remove();
  }
}

export { DeleteBrandServices };
