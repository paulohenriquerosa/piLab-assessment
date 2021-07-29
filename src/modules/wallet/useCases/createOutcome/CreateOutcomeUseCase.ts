import { inject, injectable } from "tsyringe";

import { Wallet } from "../../infra/typeorm/entities/Wallet";
import { IWalletsRepository } from "../../repositories/IWalletsRepository";

interface IRequest {
  description: string;
  value: number;
  owner_id: string;
}

@injectable()
class CreateOutcomeUseCase {
  constructor(
    @inject("WalletsRepository")
    private walletsRepository: IWalletsRepository
  ) {}

  async execute({ description, value, owner_id }: IRequest): Promise<Wallet> {
    const wallet = await this.walletsRepository.create({
      description,
      owner_id,
      value,
      type: "outcome",
    });

    return wallet;
  }
}

export { CreateOutcomeUseCase };
