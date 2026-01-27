import { NextFunction, Request, Response } from 'express';
import { FindUserByEmailUseCase } from '../../../application/use-cases/find-user-by-email/FindUserByEmailUseCase';
import type { UserResponseDTO } from "../dtos/UserResponseDTO";

export class FindUserByEmailController {
  constructor(private readonly findUserByEmailUseCase: FindUserByEmailUseCase) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const { email } = req.params;

      const user   = await this.findUserByEmailUseCase.execute(email);
      
      const userResponse: UserResponseDTO = {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      };          

      res.status(200).json(userResponse);
    } catch (error) {
      next(error);
    }
  }
}
