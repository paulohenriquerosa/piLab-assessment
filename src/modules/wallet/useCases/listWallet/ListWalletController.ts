import { Response, Request } from "express";
import { container } from "tsyringe";

import { ListWalletUseCase } from "./ListWalletUseCase";

class ListWalletController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listWalletUseCase = container.resolve(ListWalletUseCase);

    const wallets = await listWalletUseCase.execute(id);

    return response.status(200).json(wallets);
  }
}

export { ListWalletController };
