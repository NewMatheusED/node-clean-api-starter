// src/interfaces/http/controllers/ListUsersController.ts
import { Request, Response } from 'express'
import { ListUsersUseCase } from '../../../application/use-cases/list-users/ListUsersUseCase'

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(_: Request, res: Response): Promise<Response> {
    const users = await this.listUsersUseCase.execute()

    return res.status(200).json(users)
  }
}
