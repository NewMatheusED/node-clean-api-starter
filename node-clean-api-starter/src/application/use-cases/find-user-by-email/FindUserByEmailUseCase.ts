import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { ApplicationError } from "../../errors/ApplicationError";

export class FindUserByEmailUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(email: string): Promise<User> {
    if (!email || email.trim().length === 0) {
      throw new ApplicationError('Email is required');
    }

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new ApplicationError('User not found');
    }

    return user;
  }
}
