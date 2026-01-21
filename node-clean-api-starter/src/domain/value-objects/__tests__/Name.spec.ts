import { Name } from "../Name";
import { DomainError } from "../../errors/DomainError";

describe("Name Value Object", () => {
    it("should create a valid name", () => {
        const name = Name.create("Wilson");
        expect(name.getValue()).toBe("Wilson");
    });

    it("should trim whitespace", () => {
        const name = Name.create("  Wilson  ");
        expect(name.getValue()).toBe("Wilson");
    });

    it("should accept names with accents", () => {
        const name = Name.create("José");
        expect(name.getValue()).toBe("José");
    });

    it("should accept names with spaces", () => {
        const name = Name.create("Wilson Gonçalves");
        expect(name.getValue()).toBe("Wilson Gonçalves");
    });

    it("should accept names with hyphens", () => {
        const name = Name.create("Maria-José");
        expect(name.getValue()).toBe("Maria-José");
    });

    it("should throw DomainError when name is empty", () => {
        expect(() => {
            Name.create("");
        }).toThrow(DomainError);
    });

    it("should throw DomainError when name is too short", () => {
        expect(() => {
            Name.create("A");
        }).toThrow(DomainError);
    });

    it("should throw DomainError when name is too long", () => {
        const longName = "A".repeat(101);
        expect(() => {
            Name.create(longName);
        }).toThrow(DomainError);
    });

    it("should throw DomainError when name contains invalid characters", () => {
        expect(() => {
            Name.create("Wilson123");
        }).toThrow(DomainError);
    });

    it("should throw DomainError when name contains special characters", () => {
        expect(() => {
            Name.create("Wilson@Gonçalves");
        }).toThrow(DomainError);
    });
});
