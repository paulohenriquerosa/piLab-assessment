import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "./CreateuserUseCase";

let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Create User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able authenticate an user", async () => {
    await createUserUseCase.execute({
      email: "test@gmail.com",
      name: "user",
      password: "12346",
    });
  });

  it("Should not be able create with already exists email", async () => {
    await createUserUseCase.execute({
      email: "test@gmail.com",
      name: "user",
      password: "12346",
    });

    await expect(
      createUserUseCase.execute({
        email: "test@gmail.com",
        name: "user",
        password: "12346",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
