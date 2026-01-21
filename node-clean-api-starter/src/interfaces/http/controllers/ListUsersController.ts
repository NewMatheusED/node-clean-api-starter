import { NextFunction, Request, Response } from "express";
import { ListUsersUseCase } from "../../../application/use-cases/list-users/ListUsersUseCase";
import type { UserResponseDTO } from "../dtos/UserResponseDTO";

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) { }

  async handle(
    _: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> {
    try {
      const users = await this.listUsersUseCase.execute();

      const usersResponse: UserResponseDTO[] = users.map((user) => ({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      }));

      return res.status(200).json(usersResponse);
    } catch (error) {
      next(error);
    }
  }
}
