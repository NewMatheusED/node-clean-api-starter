import { randomUUID } from 'crypto';
import { User } from '../../../domain/entities/User';
import { IUserRepository } from '../../../domain/Repository/IUserRepository';
import { ApplicationError } from '../../errors/ApplicationError';
import { CreateUserDTO } from './CreateUserDTO';

export class CreateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: CreateUserDTO): Promise<User> {
    const emailAlreadyExists =
      await this.userRepository.findByEmail(data.email);

    if (emailAlreadyExists) {
      throw new ApplicationError('Email já cadastrado');
    }

    const user = User.create({
      id: randomUUID(),
      name: data.name,
      email: data.email,
    });

    await this.userRepository.save(user);

    return user;
  }
}
