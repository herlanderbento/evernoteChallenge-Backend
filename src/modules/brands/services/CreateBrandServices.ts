import { Brand } from "@models/Brand";
import { injectable } from "tsyringe";

@injectable()
class CreateBrandServices {
  public async execute({ name }: Omit<Brand, "createAt, updatedAt">) {
    const brandAlreadyExists = await Brand.findOne({
      name,
    });

    if (brandAlreadyExists) {
      throw new Error("Brand already exists!");
    }

    const brand = await Brand.create({
      name,
    });

    return brand;
  }
}

export { CreateBrandServices };
