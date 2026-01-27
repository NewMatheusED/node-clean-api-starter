

import { FindUserByEmailUseCase } from '../../application/use-cases/find-user-by-email/FindUserByEmailUseCase';
import { FindUserByEmailController } from '../../interfaces/http/controllers/FindUserByEmailController';
import { userRepository } from './repositories/userRepository';

export function makeFindUserByEmailControllerFactory(): FindUserByEmailController {
  const findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
  return new FindUserByEmailController(findUserByEmailUseCase);
}
