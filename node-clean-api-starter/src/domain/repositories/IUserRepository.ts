import { Email } from "../value-objects/Email";
import { User } from "../entities/User";

export interface IUserRepository {
  findByEmail(email: Email): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<void>;
}
