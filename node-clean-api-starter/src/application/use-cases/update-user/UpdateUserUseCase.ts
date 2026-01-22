import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { ApplicationError } from "../../errors/ApplicationError";

interface UpdateUserDTO {
  id: string;
  name?: string;
  email?: string;
}

export class UpdateUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async execute(data: UpdateUserDTO): Promise<User> {
    const user = await this.userRepository.findById(data.id);

    if (!user) {
      throw new ApplicationError('User not found');
    }

    if (data.email && data.email !== user.email) {
      const emailAlreadyExists =
        await this.userRepository.findByEmail(data.email);

      if (emailAlreadyExists) {
        throw new ApplicationError('Email already in use');
      }
    }

    const updatedUser = User.create({
      id: user.id,
      name: data.name ?? user.name,
      email: data.email ?? user.email,
    });

    await this.userRepository.save(updatedUser);

    return updatedUser;
  }
}