import express from 'express';
import { CreateUserUseCase } from '../application/use-cases/create-user/CreateUserUseCase';
import { InMemoryUserRepository } from '../infrastructure/repositories/InMemoryUserRepository';
import { CreateUserController } from '../interfaces/http/controllers/CreateUserController';
import { userRoutes } from './routes/user.routes';

const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

app.post('/users', (req, res) =>
  createUserController.handle(req, res)
);

app.use('/users', userRoutes);
export { app };

