import { Router } from "express";

import { CreateIncomeController } from "../../../../modules/wallet/useCases/createIncome/CreateIncomeController";
import { CreateOutcomeController } from "../../../../modules/wallet/useCases/createOutcome/CreateOutcomeController";
import { ListWalletController } from "../../../../modules/wallet/useCases/listWallet/ListWalletController";

const walletRoutes = Router();

const createIncomeController = new CreateIncomeController();
const createOutcomeController = new CreateOutcomeController();
const listWalletController = new ListWalletController();

walletRoutes.get("/", listWalletController.handle);
walletRoutes.post("/deposit", createIncomeController.handle);
walletRoutes.post("/withdraw", createOutcomeController.handle);

export { walletRoutes };
