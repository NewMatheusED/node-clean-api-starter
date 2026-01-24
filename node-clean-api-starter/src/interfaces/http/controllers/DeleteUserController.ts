import { NextFunction, Request, Response } from 'express';
import { DeleteUserUseCase } from './../../../application/use-cases/delete-user/DeleteUserUseCase';

export class DeleteUserController {
  constructor(
    private readonly deleteUserUseCaseUseCase: DeleteUserUseCase
  ) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      const user = await this.deleteUserUseCaseUseCase.execute(id);

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
