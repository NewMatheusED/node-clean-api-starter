# 🚀 Node Clean API Starter

Starter profissional para criação de APIs em Node.js seguindo **Clean Architecture**, **DDD** e boas práticas reais de mercado.

Este projeto não é um exemplo acadêmico. Ele foi pensado para **uso real**, seja em projetos profissionais, freelas, startups ou como base para um micro‑SaaS.

---

## 🎯 Objetivo

Fornecer uma base sólida, organizada e escalável para APIs Node.js, separando corretamente:

- Regras de negócio
- Casos de uso
- Infraestrutura
- Interfaces (HTTP)

Tudo isso **sem acoplamento desnecessário** a frameworks.

---

## 🧱 Arquitetura

A estrutura segue os princípios da **Clean Architecture**:

```
src/
├── domain/          # Regras de negócio puras
│   ├── entities
│   ├── value-objects
│   ├── repositories
│   └── exceptions
│
├── application/     # Casos de uso
│   └── use-cases
│
├── interfaces/      # Camada de entrada (HTTP, Controllers)
│   └── http
│
├── infrastructure/ # Banco, ORM, serviços externos
│   └── database
│
└── main/            # Bootstrap da aplicação
    ├── config
    ├── routes
    └── server.ts
```

### 🔹 Domain

- Não conhece frameworks
- Não conhece banco de dados
- Contém apenas regras de negócio

### 🔹 Application

- Orquestra o negócio
- Executa casos de uso
- Depende apenas do **Domain**

### 🔹 Interfaces

- Camada de entrada (HTTP, controllers)
- Traduz requisições para casos de uso

### 🔹 Infrastructure

- Implementações concretas (DB, APIs externas)
- Detalhes técnicos isolados

---

## ⚙️ Tecnologias

- Node.js
- TypeScript
- Express
- Docker / Docker Compose
- ESLint
- Prettier

---

## ▶️ Executando o projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
cd node-clean-api-starter
```

### 2️⃣ Subir com Docker

```bash
docker-compose up -d
```

A API estará disponível em:

```
http://localhost:3000
```

---

## 📌 Status do projeto

✅ API rodando
✅ Estrutura de pastas definida
✅ Arquitetura limpa
🚧 Casos de uso em implementação

---

## 🧠 Para quem é este projeto?

- Desenvolvedores que querem **arquitetura limpa de verdade**
- Quem está cansado de projetos Node.js desorganizados
- Freelancers que precisam entregar rápido e bem
- Base para micro‑SaaS ou startups

---

## 🛣️ Próximos passos planejados

- [ ] Caso de uso real (CreateEntity)
- [ ] Persistência com banco de dados
- [ ] Testes unitários no Domain
- [ ] Autenticação
- [ ] Documentação da API

---

## 👨‍💻 Autor

**Wilson Gonçalves**  
Desenvolvedor focado em Clean Architecture, DDD e boas práticas de software.

---

## ⭐ Contribuições

Sinta‑se à vontade para abrir issues, sugerir melhorias ou adaptar o projeto para seu uso.

---

> "Arquitetura não é sobre frameworks. É sobre decisões."
