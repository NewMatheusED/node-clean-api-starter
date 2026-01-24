import { CreateUserUseCase } from '../../application/use-cases/create-user/CreateUserUseCase';
import { CreateUserController } from '../../interfaces/http/controllers/CreateUserController';
import { userRepository } from './repositories/userRepository';

export function makeCreateUserControllerFactory() {
  const useCase = new CreateUserUseCase(userRepository);
  return new CreateUserController(useCase);
}
