import { Router } from "express";

import { AuthenticateUserController } from "../../../../modules/account/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "../../../../modules/account/useCases/createUser/CreateUserController";

const userRoutes = Router();

const createuserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

userRoutes.post("/signup", createuserController.handle);
userRoutes.post("/login", authenticateUserController.handle);

export { userRoutes };
