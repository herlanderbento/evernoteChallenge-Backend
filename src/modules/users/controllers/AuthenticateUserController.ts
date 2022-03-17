import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserServices } from "../services/AuthenticateUserServices";

class AuthenticateUserController {
  public async handle(request: Request, response: Response) {
    const { email, password } = request.body;

    const authenticateUserServices = container.resolve(
      AuthenticateUserServices
    );

    const authenticateInfo = await authenticateUserServices.execute({
      email,
      password,
    });

    return response.json(authenticateInfo);
  }
}

export { AuthenticateUserController };
