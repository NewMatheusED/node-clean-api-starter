import { DomainError } from '../errors/DomainError';

export class User {
  private constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly email: string
  ) {}

  static create(props: { id: string; name: string; email: string }) {
    if (!props.name) {
      throw new DomainError('Nome é obrigatório');
    }

    if (!props.email.includes('@')) {
      throw new DomainError('Email inválido');
    }

    return new User(props.id, props.name, props.email);
  }
}
