import { UpdateUserUseCase } from '../../application/use-cases/update-user/UpdateUserUseCase';
import { UpdateUserController } from '../../interfaces/http/controllers/UpdateUserController';
import { userRepository } from './repositories/userRepository';

export function makeUpdateUserControllerFactory() {  
  const useCase = new UpdateUserUseCase(userRepository)
  return new UpdateUserController(useCase)
}

