import { NextFunction, Request, Response } from 'express';
import { UpdateUserUseCase } from '../../../application/use-cases/update-user/UpdateUserUseCase';

export class UpdateUserController {
  constructor(
    private readonly updateUserUseCase: UpdateUserUseCase
  ) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;
      const { name, email } = req.body;

      const user = await this.updateUserUseCase.execute({
        id,
        name,
        email,
      });

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
