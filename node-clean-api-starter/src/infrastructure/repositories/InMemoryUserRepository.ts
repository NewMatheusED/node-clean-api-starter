import { User } from '../../domain/entities/User';
import { UserRepository } from '../../infrastructure/repositories/UserRepository';

export class InMemoryUserRepository implements UserRepository {
  create(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }
  private users: User[] = [];

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) ?? null;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
