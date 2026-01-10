import { User } from '../../../../domain/entities/User';
import { IUserRepository } from '../../../../domain/repositories/IUserRepository';
import { ListUsersUseCase } from '../ListUsersUseCase';

describe('ListUsersUseCase', () => {
  it('should return all users', async () => {
    const userRepository: IUserRepository = {
      findByEmail: jest.fn(),
      save: jest.fn(),
      findAll: jest.fn().mockResolvedValue([
        User.create({ id: '1', name: 'Wilson', email: 'wilson@email.com' }),
        User.create({ id: '2', name: 'Ana', email: 'ana@email.com' }),
      ]),
    };

    const useCase = new ListUsersUseCase(userRepository);

    const users = await useCase.execute();

    expect(users).toHaveLength(2);
    expect(users[0].email).toBe('wilson@email.com');
  });
});
