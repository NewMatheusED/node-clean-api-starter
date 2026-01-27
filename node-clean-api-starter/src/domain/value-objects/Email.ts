import { DomainError } from "../errors/DomainError";

export class Email {
    private constructor(private readonly value: string) { }

    static create(email: string): Email {
        if (!email || typeof email !== "string") {
            throw new DomainError("Email é obrigatório");
        }

        const trimmedEmail = email.trim().toLowerCase();

        if (trimmedEmail.length === 0) {
            throw new DomainError("Email não pode estar vazio");
        }

        // Validação robusta de email usando regex
        const emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        if (!emailRegex.test(trimmedEmail)) {
            throw new DomainError("Email inválido");
        }

        // Validação adicional: não pode começar ou terminar com ponto
        if (
            trimmedEmail.startsWith(".") ||
            trimmedEmail.endsWith(".") ||
            trimmedEmail.includes("..")
        ) {
            throw new DomainError("Email inválido");
        }

        return new Email(trimmedEmail);
    }

    getValue(): string {
        return this.value;
    }

    equals(other: Email): boolean {
        return this.value === other.value;
    }
}