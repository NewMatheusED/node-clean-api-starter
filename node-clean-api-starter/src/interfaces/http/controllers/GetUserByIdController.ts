import { NextFunction, Request, Response } from 'express';
import { GetUserByIdUseCase } from '../../../application/use-cases/get-user-by-id/GetUserByIdUseCase';

export class GetUserByIdController {
  constructor(
    private readonly getUserByIdUseCase: GetUserByIdUseCase
  ) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { id } = req.params;

      const user = await this.getUserByIdUseCase.execute(id);

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
}
