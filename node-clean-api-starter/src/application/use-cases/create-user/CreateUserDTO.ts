export interface CreateUserDTO {
  // id?: string;
  // O id já está sendo gerado no use-case, então não precisa passar no DTO
  name: string;
  email: string;
}
