import { Router } from 'express';
import { makeCreateUserControllerFactory } from '../factories/CreateUserControllerFactory';
import { makeDeleteUserControllerFactory } from '../factories/DeleteUserControllerFactory';
import { makeFindUserByEmailControllerFactory } from '../factories/FindUserByEmailControllerFactory';
import { makeGetUserByIdControllerFactory } from '../factories/GetUserByIdControllerFactory';
import { makeListUsersControllerFactory } from '../factories/ListUsersControllerFactory';
import { makeUpdateUserControllerFactory } from '../factories/UpdateUserControllerFactory';
const routes = Router();




const createUserController  = makeCreateUserControllerFactory();
const listUsersController   = makeListUsersControllerFactory();
const getUserByIdController = makeGetUserByIdControllerFactory();
const updateUserController  = makeUpdateUserControllerFactory();
const deleteUserController  = makeDeleteUserControllerFactory();
const findUserByEmailController = makeFindUserByEmailControllerFactory();

routes.post('/users', (req, res, next) =>
  createUserController.handle(req, res, next)
);

routes.get('/users/email/:email', (req, res, next) =>
  findUserByEmailController.handle(req, res, next)
);

routes.get('/users', (req, res, next) =>
  listUsersController.handle(req, res, next)
);

routes.get('/users/:id', (req, res, next) =>
  getUserByIdController.handle(req, res, next)
);

routes.put('/users/:id', (req, res, next) =>
  updateUserController.handle(req, res, next)
);

routes.delete('/users/:id', (req, res, next) =>
  deleteUserController.handle(req, res, next)
);

export { routes as userRoutes };

