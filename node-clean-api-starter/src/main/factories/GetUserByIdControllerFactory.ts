import { GetUserByIdUseCase } from '../../application/use-cases/get-user-by-id/GetUserByIdUseCase';
import { GetUserByIdController } from '../../interfaces/http/controllers/GetUserByIdController';
import { userRepository } from './repositories/userRepository';

export function makeGetUserByIdControllerFactory() {
  const useCase = new GetUserByIdUseCase(userRepository);
  return new GetUserByIdController(useCase);
}
