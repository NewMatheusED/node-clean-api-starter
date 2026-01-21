import { Router } from "express";
import { makeListUsersController } from "../factories/listUsersControllerFactory";
import { makeCreateUserController } from "../factories/makeCreateUserController";

const routes = Router();

routes.post("/users", (req, res, next) =>
  makeCreateUserController().handle(req, res, next),
);

routes.get("/users", (req, res, next) =>
  makeListUsersController().handle(req, res, next),
);

export { routes as userRoutes };
