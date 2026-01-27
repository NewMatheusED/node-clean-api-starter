# 🚀 Node Clean API Starter

**Starter simples em Node.js + TypeScript focado em Clean Architecture e DDD aplicados na prática.**  
Criado para quem quer começar uma API **bem estruturada desde o primeiro commit**, sem over-engineering.

> Sem frameworks pesados.  
> Sem abstrações desnecessárias.  
> Código real, organizado e fácil de evoluir.

---

## 🎯 Por que este projeto existe?

Se você já passou por isso, este starter é para você:

- APIs Node.js que começam simples e viram **difíceis de manter**
- Código **acoplado**, onde tudo depende de tudo
- Dificuldade para **testar regras de negócio**
- Dúvida constante sobre *“onde essa regra deveria ficar?”*
- Estudos de Clean Architecture que nunca saem da teoria

Este projeto mostra **como aplicar arquitetura limpa de forma simples e prática**, sem complicar.

---

## 👥 Para quem é este starter?

- Desenvolvedores **Node.js backend**
- Devs **júnior e pleno** que querem evoluir
- Quem está aprendendo **Clean Architecture / DDD**
- Freelancers que precisam começar projetos rápido e bem
- Quem quer uma base sólida para APIs, micro-SaaS ou startups

---

## 🧠 O que este projeto NÃO é

Para deixar claro (e gerar confiança):

- ❌ Não é um framework
- ❌ Não é um boilerplate inchado
- ❌ Não tenta resolver todos os problemas do mundo
- ❌ Não depende de ORM ou banco específico

👉 É um **starter**, simples, didático e extensível.

---

## 🧱 Arquitetura

O projeto segue os princípios da **Clean Architecture**, com responsabilidades bem definidas:

src
├── domain
│   ├── entities
│   ├── value-objects
│   ├── errors
│   └── repositories
│
├── application
│   ├── use-cases
│   └── errors
│
├── infrastructure
│   └── repositories
│
└── main
    ├── config
    ├── factories
    ├── routes
    └── server.ts

### 🔹 Domain

- Regras de negócio puras
- Entidades e Value Objects
- Não conhece frameworks, HTTP ou banco de dados

### 🔹 Application

- Casos de uso
- Orquestra o domínio
- Fácil de testar

### 🔹 Infrastructure

- Implementações concretas (ex: repositórios)
- Pode ser trocada sem quebrar o domínio

### 🔹 Main

- Bootstrap da aplicação
- Configurações, rotas e composição

---

## 🧪 Testes

- Testes unitários de casos de uso
- Testes de integração simples
- Foco em **testar regra de negócio**, não framework

Executar os testes:

```bash
npm test
```

---

## 🚀 Como executar o projeto

### 1️⃣ Clonar o repositório

```bash
git clone <url-do-repositorio>
cd node-clean-api-starter
```

### 2️⃣ Subir com Docker

```bash
docker-compose up -d
```

A API ficará disponível em:

👉 [http://localhost:3000]

---

## 📌 Status do projeto

- ✅ Estrutura base definida
- ✅ Casos de uso implementados
- ✅ Value Objects e erros de domínio
- 🚧 Evolução contínua

---

## 🛣️ Próximos passos (roadmap)

- [ ] Persistência com banco real
- [ ] DTOs de entrada e saída
- [ ] Autenticação
- [ ] Documentação da API
- [ ] Exemplo com ORM (opcional)

---

## ⭐ Por que dar uma star?

Se este projeto te ajudou a:

- entender Clean Architecture na prática
- começar um projeto melhor estruturado
- evitar código acoplado desde o início

👉 **considere deixar uma ⭐**

Isso ajuda o projeto a alcançar mais desenvolvedores.

---

## 🤝 Contribuições

Contribuições são muito bem-vindas!

- Abra uma **issue**
- Sugira melhorias
- Envie um **PR**
- Use como base para seus projetos

---

## 👨‍💻 Autor

**Wilson Roberto dos Santos Gonçalves**  
Desenvolvedor focado em Clean Architecture, DDD e boas práticas de software.

> “Arquitetura não é sobre frameworks.  
> É sobre decisões.”
