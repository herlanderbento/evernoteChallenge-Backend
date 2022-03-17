import { Brand } from "@models/Brand";
import { injectable } from "tsyringe";

type IRequest = {
  _id: string;
  name: string;
  updatedAt?: Date;
};

@injectable()
class UpdateBrandServices {
  public async execute({ _id, name, updatedAt = new Date() }: IRequest) {
    const brand = await Brand.findById(_id);

    if (!brand) {
      throw new Error("Brand not found!");
    }

    if (name !== brand.name) {
      const brand = await Brand.findOne({
        name,
      });

      if (brand) {
        throw new Error("Brand already exists!");
      }
    }

    const brands = await Brand.findByIdAndUpdate(_id, {
      name,
      updatedAt,
    });

    return brands;
  }
}

export { UpdateBrandServices };
