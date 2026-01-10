import { CreateUserUseCase } from '../../application/use-cases/create-user/CreateUserUseCase';
import { InMemoryUserRepository } from '../../infrastructure/repositories/InMemoryUserRepository';
import { CreateUserController } from '../../interfaces/http/controllers/CreateUserController';

export function makeCreateUserController(): CreateUserController {
  const userRepository = new InMemoryUserRepository();
  const useCase = new CreateUserUseCase(userRepository);

  return new CreateUserController(useCase);
}
