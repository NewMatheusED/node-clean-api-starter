import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export class InMemoryUserRepository implements IUserRepository {
  
  private users: User[] = [];
  
  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(user => user.email === email) ?? null;
  }

  async findAll(): Promise<User[]> {
  return this.users;
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }
}
