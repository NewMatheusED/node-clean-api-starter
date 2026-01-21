import { Request, Response, Router } from "express";

export const healthRoute = Router();

// O express já tem tipagem para req e res
healthRoute.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});
