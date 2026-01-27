import { NextFunction, Request, Response } from "express";
import { ApplicationError } from "../../application/errors/ApplicationError";
import { DomainError } from "../../domain/errors/DomainError";

export function errorMiddleware(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {

  // Isso já é uma coisa que eu gosto de fazer para erros de domínio e de aplicação, mas é gosto

  // Erros de domínio (validações de negócio)
  if (error instanceof DomainError) {
    return res.status(400).json({
      error: error.message,
      code: "DOMAIN_ERROR",
    });
  }

  // Erros de aplicação (regras de aplicação)
  if (error instanceof ApplicationError) {
    return res.status(400).json({
      error: error.message,
      code: "APPLICATION_ERROR",
    });
  }

  // Log do erro completo em desenvolvimento
  if (process.env.NODE_ENV === "development") {
    console.error("Error details:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });
  } else {
    // Em produção, log apenas informações essenciais
    console.error("Internal server error:", {
      message: error.message,
      name: error.name,
    });
  }

  // Erro genérico (não esperado)
  return res.status(500).json({
    error: "Erro interno do servidor",
    code: "INTERNAL_SERVER_ERROR",
    ...(process.env.NODE_ENV === "development" && {
      details: error.message,
    }),
  });
}
