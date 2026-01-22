import { User } from "../../../../domain/entities/User";
import { IUserRepository } from "../../../../domain/repositories/IUserRepository";
import { ApplicationError } from "../../../errors/ApplicationError";
import { UpdateUserUseCase } from "../UpdateUserUseCase";


const userRepositoryMock: IUserRepository = {
  save: jest.fn(),
  findByEmail: jest.fn(),
  findById: jest.fn(),
  findAll: jest.fn(),
  delete: jest.fn(),
};

describe('UpdateUserUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update user successfully', async () => {
    const existingUser = User.create({
      id: '1',
      name: 'Wilson',
      email: 'wilson@email.com',
    });

    userRepositoryMock.findById = jest.fn().mockResolvedValue(existingUser);
    userRepositoryMock.findByEmail = jest.fn().mockResolvedValue(null);

    const useCase = new UpdateUserUseCase(userRepositoryMock);

    const result = await useCase.execute({
      id: '1',
      name: 'Wilson Updated',
    });

    expect(result.name).toBe('Wilson Updated');
    expect(result.email).toBe(existingUser.email);
    expect(userRepositoryMock.save).toHaveBeenCalled();
  });

  it('should throw ApplicationError when user does not exist', async () => {
    userRepositoryMock.findById = jest.fn().mockResolvedValue(null);

    const useCase = new UpdateUserUseCase(userRepositoryMock);

    await expect(
      useCase.execute({
        id: '1',
        name: 'New Name',
      })
    ).rejects.toThrow(ApplicationError);
  });

  it('should throw ApplicationError when email is already in use', async () => {
    const existingUser = User.create({
      id: '1',
      name: 'Wilson',
      email: 'wilson@email.com',
    });

    userRepositoryMock.findById = jest.fn().mockResolvedValue(existingUser);
    userRepositoryMock.findByEmail = jest
      .fn()
      .mockResolvedValue({} as User);

    const useCase = new UpdateUserUseCase(userRepositoryMock);

    await expect(
      useCase.execute({
        id: '1',
        email: 'duplicate@email.com',
      })
    ).rejects.toThrow(ApplicationError);
  });
});
