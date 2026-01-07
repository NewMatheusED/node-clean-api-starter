import { User } from '../entities/User'
import { DomainError } from '../errors/DomainError'

describe('User Entity', () => {
  it('should create a valid user', () => {
    const user = User.create({
      id: '123',
      name: 'Wilson',
      email: 'wilson@email.com'
    })

    expect(user.id).toBe('123')
    expect(user.name).toBe('Wilson')
    expect(user.email).toBe('wilson@email.com')
  })

  it('should throw DomainError when name is empty', () => {
    expect(() => {
       User.create({
        id: '123',
        name: '',
        email: 'wilson@email.com'
      })
    }).toThrow(DomainError)
  })

  it('should throw DomainError when email is invalid', () => {
    expect(() => {
       User.create({
        id: '123',
        name: 'Wilson',
        email: 'email-invalido'
      })
    }).toThrow(DomainError)
  })
})
