import { Email } from "../../../domain/value-objects/Email";
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { ApplicationError } from "../../errors/ApplicationError";
import { CreateUserDTO } from "./CreateUserDTO";
import { randomUUID } from 'crypto';

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
  ) { }

  async execute({ name, email }: CreateUserDTO): Promise<User> {
    const emailValueObject = Email.create(email);
    const emailAlreadyExists =
      await this.userRepository.findByEmail(emailValueObject);

    if (emailAlreadyExists) {
      throw new ApplicationError("Email já cadastrado");
    }

    const user = User.create({
      id: randomUUID(),
      name: name,
      email: email,
    });

    await this.userRepository.save(user);

    return user;
  }
}
