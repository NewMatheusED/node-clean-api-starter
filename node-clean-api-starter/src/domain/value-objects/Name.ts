import { DomainError } from "../errors/DomainError";

export class Name {
    private constructor(private readonly value: string) { }

    static create(name: string): Name {
        if (!name || typeof name !== "string") {
            throw new DomainError("Nome é obrigatório");
        }

        const trimmedName = name.trim();

        if (trimmedName.length === 0) {
            throw new DomainError("Nome não pode estar vazio");
        }

        if (trimmedName.length < 2) {
            throw new DomainError("Nome deve ter pelo menos 2 caracteres");
        }

        if (trimmedName.length > 100) {
            throw new DomainError("Nome deve ter no máximo 100 caracteres");
        }

        // // Validação: nome deve conter apenas letras, espaços e alguns caracteres especiais
        // const nameRegex = /^[a-zA-ZÀ-ÿ\s'-]+$/;

        // Normaliza acentos (NFD separa letra + acento)
        const normalized = trimmedName.normalize("NFD");

        // Letras + acentos unicode + espaço + ' -
        const nameRegex = /^[a-zA-Z\s'-]+$/u;

        // Remove marcas diacríticas antes de testar
        const withoutAccents = normalized.replace(/[\u0300-\u036f]/g, "");

        if (!nameRegex.test(withoutAccents)) {
            throw new DomainError("Nome contém caracteres inválidos");
        }

        return new Name(trimmedName);
    }

    getValue(): string {
        return this.value;
    }
}
