
import { CreateUserUseCase } from '../../application/use-cases/create-user/CreateUserUseCase'
import { CreateUserController } from '../../interfaces/http/controllers/CreateUserController'
import { userRepository } from '../container/composition-root'

export function makeCreateUserController() {
  const useCase = new CreateUserUseCase(userRepository)
  return new CreateUserController(useCase)
}
