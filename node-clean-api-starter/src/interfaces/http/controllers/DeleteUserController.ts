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

      await this.deleteUserUseCaseUseCase.execute(id);

      return res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
