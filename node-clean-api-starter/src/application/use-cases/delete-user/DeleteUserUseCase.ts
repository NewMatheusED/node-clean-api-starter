import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { ApplicationError } from '../../errors/ApplicationError';

export class DeleteUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(id: string): Promise<void> {
    if (!id || id.trim().length === 0) {
      throw new ApplicationError('ID is required');
    }

    const userExists = await this.userRepository.findById(id);

    if (!userExists) {
      throw new ApplicationError('User not found');
    }

    await this.userRepository.delete(id);
  }
}
