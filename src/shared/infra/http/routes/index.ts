import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { userRoutes } from "./user.routes";
import { walletRoutes } from "./wallet.routes";

const router = Router();

router.use("/auth", userRoutes);
router.use("/wallet", ensureAuthenticated, walletRoutes);

export { router };
