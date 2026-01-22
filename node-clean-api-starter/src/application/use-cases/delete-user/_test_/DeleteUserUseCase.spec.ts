import { User } from "../../../../domain/entities/User";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { ApplicationError } from "../../../errors/ApplicationError";
import { DeleteUserUseCase } from "../DeleteUserUseCase";

const userRepositoryMock: IUserRepository = {
  save: jest.fn(),
  findByEmail: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
  delete: jest.fn(),
};

describe('DeleteUserUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should delete user successfully when user exists', async () => {
    const user = User.create({
      id: '1',
      name: 'Wilson',
      email: 'wilson@email.com',
    });

    userRepositoryMock.findById = jest.fn().mockResolvedValue(user);
    userRepositoryMock.delete = jest.fn().mockResolvedValue(undefined);

    const useCase = new DeleteUserUseCase(userRepositoryMock);

    await useCase.execute('1');

    expect(userRepositoryMock.findById).toHaveBeenCalledWith('1');
    expect(userRepositoryMock.delete).toHaveBeenCalledWith('1');
  });

  it('should throw ApplicationError when user does not exist', async () => {
    userRepositoryMock.findById = jest.fn().mockResolvedValue(null);

    const useCase = new DeleteUserUseCase(userRepositoryMock);

    await expect(useCase.execute('1')).rejects.toThrow(ApplicationError);

    expect(userRepositoryMock.delete).not.toHaveBeenCalled();
  });
});
