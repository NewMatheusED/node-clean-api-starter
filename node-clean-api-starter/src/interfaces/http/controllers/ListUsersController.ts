
import { NextFunction, Request, Response } from 'express'
import { ListUsersUseCase } from '../../../application/use-cases/list-users/ListUsersUseCase'

export class ListUsersController {
  constructor(private listUsersUseCase: ListUsersUseCase) {}

  async handle(_: Request, res: Response, next: NextFunction): Promise<Response | void> {
    try {
    const users = await this.listUsersUseCase.execute()
    return res.status(200).json(users)
    } catch (error) {
      next(error) 
    }
  }
}


  
