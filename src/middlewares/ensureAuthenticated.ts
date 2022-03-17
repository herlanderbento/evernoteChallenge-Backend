import { User } from "@models/User";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error("Token missing");
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(
      token,
      "a6b4c721ed562bec74b20a02757791e0"
    ) as IPayload;

    const user = User.findOne({
      user_id,
    });

    if (!user) {
      throw new Error("User does not exists.");
    }

    request.user = {
      _id: user_id,
    };

    next();
  } catch (err) {
    throw new Error("Invalid token!");
  }
}

export { ensureAuthenticated };
