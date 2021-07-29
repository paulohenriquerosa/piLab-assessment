import { container } from "tsyringe";

import { UsersRepository } from "../../modules/account/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUsersRepository";
import { WalletsRepository } from "../../modules/wallet/infra/typeorm/repositories/WalletsRepository";
import { IWalletsRepository } from "../../modules/wallet/repositories/IWalletsRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
container.registerSingleton<IWalletsRepository>(
  "WalletsRepository",
  WalletsRepository
);
