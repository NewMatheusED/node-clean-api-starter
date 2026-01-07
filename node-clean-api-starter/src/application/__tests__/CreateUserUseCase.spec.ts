import { CreateUserUseCase } from '../../application/use-cases/create-user/CreateUserUseCase'
import { UserRepository } from "../../infrastructure/repositories/UserRepository"
import { ApplicationError } from '../errors/ApplicationError'

const userRepositoryMock: UserRepository = {
  findByEmail: jest.fn(),
  save: jest.fn(),
  create: jest.fn()
}

describe('CreateUserUseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should create user successfully', async () => {
    userRepositoryMock.findByEmail = jest.fn().mockResolvedValue(null)

    const useCase = new CreateUserUseCase(userRepositoryMock)

    await useCase.execute({
      id: '1',
      name: 'Wilson',
      email: 'wilson@email.com'
    })

    expect(userRepositoryMock.save).toHaveBeenCalled()
  })

  it('should throw DomainError if email already exists', async () => {
    userRepositoryMock.findByEmail = jest.fn().mockResolvedValue({} as any)

    const useCase = new CreateUserUseCase(userRepositoryMock)

    await expect(
      useCase.execute({
        id: '1',
        name: 'Wilson',
        email: 'wilson@email.com'
      })
    ).rejects.toThrow(ApplicationError)
  })
})
