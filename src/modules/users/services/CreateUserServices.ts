import { User } from "@models/User";
import { hash } from "bcrypt";
import { injectable } from "tsyringe";

@injectable()
class CreateUserServices {
  public async execute({ name, email, password }: Omit<User, "createdAt">) {
    const usersAlreadyExists = await User.findOne({
      email,
    });

    if (usersAlreadyExists) {
      throw new Error("User already exists!");
    }

    const passwordHash = await hash(password, 8);

    const user = await User.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserServices };
