import { Email } from "../value-objects/Email";
import { Name } from "../value-objects/Name";

export class User {
  private constructor(
    public readonly id: string,
    public readonly name: Name,
    public readonly email: Email,
  ) { }

  static create(props: { id: string; name: string; email: string }) {
    // Acaba sendo melhor deixar a validação dos dados para uma classe de Value Object
    const name = Name.create(props.name);
    const email = Email.create(props.email);

    return new User(props.id, name, email);
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name.getValue();
  }

  getEmail(): string {
    return this.email.getValue();
  }

  equals(other: User): boolean {
    return this.id === other.id && this.email.equals(other.email);
  }
}
