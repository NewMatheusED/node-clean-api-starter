import { Router } from 'express';
import { makeCreateUserController } from '../factories/makeCreateUserController';

const userRoutes = Router();

userRoutes.post('/', async (req, res) => {
  return makeCreateUserController().handle(req, res);
});

export { userRoutes };

