import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/Repository/IUserRepository';

export class InMemoryUserRepository implements IUserRepository {
  async create(user: User): Promise<void> {
    await this.save(user);
  }
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) ?? null;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
