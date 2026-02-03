import { randomUUID } from 'crypto';
import { User } from "../../../domain/entities/User";
import { IUserRepository } from "../../../domain/repositories/IUserRepository";
import { Email } from "../../../domain/value-objects/Email";
import { Name } from "../../../domain/value-objects/Name";
import { ApplicationError } from "../../errors/ApplicationError";
import { CreateUserDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
  ) { }

  async execute({ name, email }: CreateUserDTO): Promise<User> {
    const nameValueObject = Name.create(name);
    const emailValueObject = Email.create(email);
    const emailAlreadyExists =
      await this.userRepository.findByEmail(emailValueObject.getValue());

    if (emailAlreadyExists) {
      throw new ApplicationError("Email já cadastrado");
    }

    const user = User.create({
      id: randomUUID(),
      name: nameValueObject.getValue(),
      email: emailValueObject.getValue(),
    });

    await this.userRepository.save(user);

    return user;
  }
}
