import { User } from '../../domain/entities/User'
import { IUserRepository } from '../../domain/Repository/IUserRepository'

export class UserRepositoryInMemory implements IUserRepository {
  create(user: User): Promise<void> {
    return this.save(user)
  }
  private users: User[] = []

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(u => u.email === email)
    return user ?? null
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}
