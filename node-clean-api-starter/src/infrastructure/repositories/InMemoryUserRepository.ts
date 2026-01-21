import { Email } from "../../domain/value-objects/Email";
import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class InMemoryUserRepository implements IUserRepository {
  private users: User[] = [];

  async findByEmail(email: Email): Promise<User | null> {
    return (
      this.users.find((user) => user.getEmail() === email.getValue()) ?? null
    );
  }

  async findAll(): Promise<User[]> {
    return this.users;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
