// src/main/factories/ListUsersControllerFactory.ts
import { ListUsersUseCase } from '../../application/use-cases/list-users/ListUsersUseCase';
import { ListUsersController } from '../../interfaces/http/controllers/ListUsersController';
import { userRepository } from './repositories/userRepository';

export function makeListUsersControllerFactory(): ListUsersController {
  
  const listUsersUseCase = new ListUsersUseCase(userRepository)
  return new ListUsersController(listUsersUseCase)
}
