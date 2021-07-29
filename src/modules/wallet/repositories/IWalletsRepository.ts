import { ICreateWalletDTO } from "../dtos/ICreateWalletDTO";
import { Wallet } from "../infra/typeorm/entities/Wallet";

interface IWalletsRepository {
  create(data: ICreateWalletDTO): Promise<Wallet>;
  findAll(owner_id: string): Promise<Wallet[] | undefined>;
}

export { IWalletsRepository };
