import { User } from "../../domain/entities/User";
import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class InMemoryUserRepository implements IUserRepository {

  private users: User[] = [];

  async findById(id: string): Promise<User | null> {
    const user = this.users.find(user => user.id === id);
    return user ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email.getValue() === email);
    return user ?? null;
  }

  async findAll(): Promise<User[]> {
    return [...this.users];
  }

  async save(user: User): Promise<void> {
    const existingIndex = this.users.findIndex(u => u.id === user.id);

    if (existingIndex !== -1) {
      this.users[existingIndex] = user;
    } else {
      this.users.push(user);
    }
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex(user => user.id === id);

    if (userIndex === -1) {
      return;
    }

    this.users.splice(userIndex, 1);
  }
}
