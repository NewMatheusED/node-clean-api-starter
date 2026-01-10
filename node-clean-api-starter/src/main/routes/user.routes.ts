import { Router } from 'express'
import { makeListUsersController } from '../factories/ListUsersControllerFactory'
import { makeCreateUserController } from '../factories/makeCreateUserController'

const routes = Router()

// Criar usuário
routes.post('/users', (req, res) =>
  makeCreateUserController().handle(req, res)
)

// Listar usuários
routes.get('/users', (req, res) =>
  makeListUsersController().handle(req, res)
)

export { routes as userRoutes }

