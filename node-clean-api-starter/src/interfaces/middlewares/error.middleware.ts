import { NextFunction, Request, Response } from 'express'
import { ApplicationError } from '../../application/errors/ApplicationError'
import { DomainError } from '../../domain/errors/DomainError'

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (error instanceof DomainError) {
    return res.status(400).json({
      error: error.message
    })
  }

  if (error instanceof ApplicationError) {
    return res.status(400).json({
      error: error.message
    })
  }

  console.error(error)

  return res.status(500).json({
    error: 'Erro interno do servidor'
  })
}
