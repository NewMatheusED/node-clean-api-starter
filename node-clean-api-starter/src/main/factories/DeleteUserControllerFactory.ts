import { DeleteUserUseCase } from '../../application/use-cases/delete-user/DeleteUserUseCase';
import { DeleteUserController } from '../../interfaces/http/controllers/DeleteUserController';
import { userRepository } from './repositories/userRepository';

export function makeDeleteUserControllerFactory() {
  const useCase = new DeleteUserUseCase(userRepository);
  return new DeleteUserController(useCase);
}
