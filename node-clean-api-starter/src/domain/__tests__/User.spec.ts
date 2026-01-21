import { User } from "../entities/User";
import { DomainError } from "../errors/DomainError";

describe("User Entity", () => {
  it("should create a valid user", () => {
    const user = User.create({
      id: "123",
      name: "Wilson",
      email: "wilson@email.com",
    });

    expect(user.getId()).toBe("123");
    expect(user.getName()).toBe("Wilson");
    expect(user.getEmail()).toBe("wilson@email.com");
  });

  it("should throw DomainError when name is empty", () => {
    expect(() => {
      User.create({
        id: "123",
        name: "",
        email: "wilson@email.com",
      });
    }).toThrow(DomainError);
  });

  it("should throw DomainError when email is invalid", () => {
    expect(() => {
      User.create({
        id: "123",
        name: "Wilson",
        email: "email-invalido",
      });
    }).toThrow(DomainError);
  });

  it("should throw DomainError when name is too short", () => {
    expect(() => {
      User.create({
        id: "123",
        name: "A",
        email: "wilson@email.com",
      });
    }).toThrow(DomainError);
  });

  it("should throw DomainError when email format is invalid", () => {
    expect(() => {
      User.create({
        id: "123",
        name: "Wilson",
        email: "@email.com",
      });
    }).toThrow(DomainError);
  });

  it("should normalize email to lowercase", () => {
    const user = User.create({
      id: "123",
      name: "Wilson",
      email: "WILSON@EMAIL.COM",
    });

    expect(user.getEmail()).toBe("wilson@email.com");
  });
});
