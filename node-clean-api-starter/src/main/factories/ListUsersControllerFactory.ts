// src/main/factories/ListUsersControllerFactory.ts
import { ListUsersUseCase } from '../../application/use-cases/list-users/ListUsersUseCase'
import { InMemoryUserRepository } from '../../infrastructure/repositories/InMemoryUserRepository'
import { ListUsersController } from '../../interfaces/http/controllers/ListUsersController'

export function makeListUsersController(): ListUsersController {
  const userRepository = new InMemoryUserRepository()
  const listUsersUseCase = new ListUsersUseCase(userRepository)

  return new ListUsersController(listUsersUseCase)
}
