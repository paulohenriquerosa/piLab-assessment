import { inject, injectable } from "tsyringe";

import { Wallet } from "../../infra/typeorm/entities/Wallet";
import { IWalletsRepository } from "../../repositories/IWalletsRepository";

@injectable()
class ListWalletUseCase {
  constructor(
    @inject("WalletsRepository")
    private walletsRepository: IWalletsRepository
  ) {}

  async execute(owner_id: string): Promise<Wallet[] | []> {
    const wallets = await this.walletsRepository.findAll(owner_id);
    if (wallets) {
      return wallets;
    }
    return [];
  }
}

export { ListWalletUseCase };
