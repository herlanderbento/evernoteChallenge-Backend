import { User } from "@models/User";
import { compare } from "bcrypt";
import { injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserServices {
  public async execute({
    email,
    password,
  }: Omit<User, "createdAt">): Promise<IResponse> {
    const user = await User.findOne({
      email,
    });

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = sign({}, "a6b4c721ed562bec74b20a02757791e0", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserServices };
