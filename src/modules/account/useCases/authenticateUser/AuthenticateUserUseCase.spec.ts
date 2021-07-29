import { AppError } from "../../../../shared/errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { CreateUserUseCase } from "../createUser/CreateuserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let createUserUseCase: CreateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
  });

  it("Should be able authenticate an user", async () => {
    await createUserUseCase.execute({
      email: "test@gmail.com",
      name: "user",
      password: "12346",
    });

    const userAuthenticated = await authenticateUserUseCase.execute({
      email: "test@gmail.com",
      password: "12346",
    });

    expect(userAuthenticated).toHaveProperty("token");
  });
  it("Should not be able authenticate with wrong email", async () => {
    await createUserUseCase.execute({
      email: "test@gmail.com",
      name: "user",
      password: "12346",
    });

    await expect(
      authenticateUserUseCase.execute({
        email: "wrong-test",
        password: "12346",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
  it("Should not be able authenticate with wrong password", async () => {
    await createUserUseCase.execute({
      email: "test@gmail.com",
      name: "user",
      password: "12346",
    });

    await expect(
      authenticateUserUseCase.execute({
        email: "test@gmail.com",
        password: "wrong-password",
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
