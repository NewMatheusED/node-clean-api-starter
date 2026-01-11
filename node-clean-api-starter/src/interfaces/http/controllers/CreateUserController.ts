import { NextFunction, Request, Response } from 'express';
import { CreateUserUseCase } from '../../../application/use-cases/create-user/CreateUserUseCase';

export class CreateUserController {
  constructor(private readonly useCase: CreateUserUseCase) {}

  async handle(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const user = await this.useCase.execute(req.body)
      return res.status(201).json(user)
    } catch (error) {
      next(error) 
    }
  }
}

