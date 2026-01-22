import { User } from '../../domain/entities/User';
import { IUserRepository } from '../../domain/repositories/IUserRepository';

export class InMemoryUserRepository implements IUserRepository {

  findById(id: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }

async delete(id: string): Promise<void> {
  const userIndex = this.users.findIndex(user => user.id === id);

  if (userIndex === -1) {
    return;
  }

  this.users.splice(userIndex, 1);
}

  
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
