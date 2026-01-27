import { User } from "../../../../domain/entities/User";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { ApplicationError } from "../../../errors/ApplicationError";
import { CreateUserUseCase } from "../CreateUserUseCase";

const userRepositoryMock: IUserRepository = {
  save: jest.fn(),
  findByEmail: jest.fn(),  
  findAll: jest.fn(),
  findById: jest.fn(),
  delete: jest.fn(),
  
  
}

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create user successfully", async () => {
    userRepositoryMock.findByEmail = jest.fn().mockResolvedValue(null);

    const useCase = new CreateUserUseCase(
      userRepositoryMock,
    );

    const result = await useCase.execute({
      name: "Wilson",
      email: "wilson@email.com",
    });

    expect(userRepositoryMock.save).toHaveBeenCalled();
    expect(result.getName()).toBe("Wilson");
    expect(result.getEmail()).toBe("wilson@email.com");
  });

  it("should throw ApplicationError if email already exists", async () => {
    const existingUser = User.create({
      id: "existing-id",
      name: "Existing User",
      email: "wilson@email.com",
    });

    userRepositoryMock.findByEmail = jest
      .fn()
      .mockResolvedValue(existingUser);

    const useCase = new CreateUserUseCase(
      userRepositoryMock,
    );

    await expect(
      useCase.execute({
        name: "Wilson",
        email: "wilson@email.com",
      }),
    ).rejects.toThrow(ApplicationError);
  });
});
