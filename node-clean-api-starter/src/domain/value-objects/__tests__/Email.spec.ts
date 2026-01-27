import { Email } from "../Email";
import { DomainError } from "../../errors/DomainError";

describe("Email Value Object", () => {
    it("should create a valid email", () => {
        const email = Email.create("test@example.com");
        expect(email.getValue()).toBe("test@example.com");
    });

    it("should normalize email to lowercase", () => {
        const email = Email.create("TEST@EXAMPLE.COM");
        expect(email.getValue()).toBe("test@example.com");
    });

    it("should trim whitespace", () => {
        const email = Email.create("  test@example.com  ");
        expect(email.getValue()).toBe("test@example.com");
    });

    it("should throw DomainError when email is empty", () => {
        expect(() => {
            Email.create("");
        }).toThrow(DomainError);
    });

    it("should throw DomainError when email is invalid", () => {
        expect(() => {
            Email.create("invalid-email");
        }).toThrow(DomainError);
    });

    it("should throw DomainError when email starts with dot", () => {
        expect(() => {
            Email.create(".test@example.com");
        }).toThrow(DomainError);
    });

    it("should throw DomainError when email ends with dot", () => {
        expect(() => {
            Email.create("test@example.com.");
        }).toThrow(DomainError);
    });

    it("should throw DomainError when email has consecutive dots", () => {
        expect(() => {
            Email.create("test..test@example.com");
        }).toThrow(DomainError);
    });

    it("should return true when emails are equal", () => {
        const email1 = Email.create("test@example.com");
        const email2 = Email.create("TEST@EXAMPLE.COM");
        expect(email1.equals(email2)).toBe(true);
    });

    it("should return false when emails are different", () => {
        const email1 = Email.create("test1@example.com");
        const email2 = Email.create("test2@example.com");
        expect(email1.equals(email2)).toBe(false);
    });
});
