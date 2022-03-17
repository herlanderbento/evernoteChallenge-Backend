import { Router } from "express";

import { CreateUserController } from "@modules/users/controllers/CreateUserController";
import { AuthenticateUserController } from "@modules/users/controllers/AuthenticateUserController";
import { ensureAuthenticated } from "middlewares/ensureAuthenticated";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

usersRoutes.post("/users", ensureAuthenticated, createUserController.handle);
usersRoutes.post("/sessions", authenticateUserController.handle);

export { usersRoutes };
