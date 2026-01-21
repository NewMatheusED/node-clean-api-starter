import { NextFunction, Request, Response } from "express";
import { CreateUserUseCase } from "../../../application/use-cases/create-user/CreateUserUseCase";
import type { CreateUserDTO } from "../../../application/use-cases/create-user/CreateUserDTO";
import type { UserResponseDTO } from "../dtos/UserResponseDTO";

export class CreateUserController {
  constructor(private readonly useCase: CreateUserUseCase) { }

  async handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const { name, email } = req.body as CreateUserDTO;
      if (!name || !email) {
        return res.status(400).json({ error: "Nome e email são obrigatórios" });
      }
      const user = await this.useCase.execute({ name, email });

      // Fazer um DTO para a resposta é mais seguro, pq não expõe a estrutura interna do domínio
      const userResponse: UserResponseDTO = {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      };

      return res.status(201).json(userResponse);
    } catch (error) {
      next(error);
    }
  }
}
