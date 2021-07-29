import { getRepository, Repository } from "typeorm";

import { ICreateWalletDTO } from "../../../dtos/ICreateWalletDTO";
import { IWalletsRepository } from "../../../repositories/IWalletsRepository";
import { Wallet } from "../entities/Wallet";

class WalletsRepository implements IWalletsRepository {
  repository: Repository<Wallet>;

  constructor() {
    this.repository = getRepository(Wallet);
  }

  async create({
    description,
    value,
    type,
    owner_id,
  }: ICreateWalletDTO): Promise<Wallet> {
    const wallet = this.repository.create({
      description,
      value,
      type,
      owner_id,
    });
    await this.repository.save(wallet);

    return wallet;
  }

  async findAll(owner_id: string): Promise<Wallet[] | undefined> {
    const wallet = await this.repository.find({
      where: { owner_id, type: "outcome" },
    });
    return wallet;
  }
}

export { WalletsRepository };
