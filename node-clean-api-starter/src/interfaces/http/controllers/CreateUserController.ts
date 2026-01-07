
import { Request, Response } from 'express';
import { ApplicationError } from '../../../application/errors/ApplicationError';
import { CreateUserUseCase } from '../../../application/use-cases/create-user/CreateUserUseCase';
import { DomainError } from '../../../domain/errors/DomainError';

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.createUserUseCase.execute(req.body);
      return res.status(201).json(user);
    } catch (error: any) {
      if (
        error instanceof DomainError ||
        error instanceof ApplicationError
      ) {
        return res.status(400).json({ error: error.message });
      }

      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
  }
}
