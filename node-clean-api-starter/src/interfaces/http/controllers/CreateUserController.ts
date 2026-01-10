import { Request, Response } from 'express';
import { ApplicationError } from '../../../application/errors/ApplicationError';
import { CreateUserUseCase } from '../../../application/use-cases/create-user/CreateUserUseCase';
import { DomainError } from '../../../domain/errors/DomainError';

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email } = req.body;

      const user = await this.createUserUseCase.execute({
        name,
        email,
      });

      return res.status(201).json(user);
    } catch (error) {
      if (error instanceof DomainError) {
        return res.status(400).json({ message: error.message });
      }

      if (error instanceof ApplicationError) {
        return res.status(409).json({ message: error.message });
      }

      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
