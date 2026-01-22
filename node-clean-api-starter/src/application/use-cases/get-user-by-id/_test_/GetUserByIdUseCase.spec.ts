import { User } from "../../../../domain/entities/User";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { ApplicationError } from "../../../errors/ApplicationError";
import { GetUserByIdUseCase } from "../GetUserByIdUseCase";

const userRepositoryMock: IUserRepository = {
  save: jest.fn(),
  findByEmail: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
  delete: jest.fn(),
};

describe('GetUserByIdUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return user when found', async () => {
    const user = User.create({
      id: '1',
      name: 'Wilson',
      email: 'wilson@email.com',
    });

    userRepositoryMock.findById = jest.fn().mockResolvedValue(user);

    const useCase = new GetUserByIdUseCase(userRepositoryMock);

    const result = await useCase.execute('1');

    expect(result).toEqual(user);
  });

  it('should throw ApplicationError if user not found', async () => {
    userRepositoryMock.findById = jest.fn().mockResolvedValue(null);

    const useCase = new GetUserByIdUseCase(userRepositoryMock);

    await expect(useCase.execute('1')).rejects.toThrow(ApplicationError);
  });
});
