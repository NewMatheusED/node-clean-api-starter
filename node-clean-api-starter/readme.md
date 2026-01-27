# Node Clean API Starter

Starter profissional para criação de APIs Node.js utilizando **Clean Architecture**, com foco em organização, testabilidade e evolução segura do código.

Este projeto foi criado a partir de prática real, estudos contínuos e aplicação consciente de princípios de arquitetura de software.

---

## 🎯 Para quem é este projeto?

Este projeto é ideal para:

- Desenvolvedores **backend Node.js**
- Devs **júnior e pleno** que desejam evoluir tecnicamente
- Profissionais que querem **aprender Clean Architecture na prática**
- Quem precisa **acelerar o início de novos projetos**
- Desenvolvedores que já estudaram arquitetura, mas sentem dificuldade em aplicá-la em projetos reais

---

## 🧩 Qual problema este setup resolve?

Ao longo do desenvolvimento de sistemas backend, é comum enfrentar problemas como:

- Código excessivamente **acoplado**
- Dificuldade de **manutenção e evolução**
- Necessidade de começar **sempre do zero**
- Falta de clareza sobre **onde cada regra deve ficar**
- Dificuldade para **testar regras de negócio**
- Projetos que funcionam, mas são difíceis de entender

Este setup resolve esses problemas oferecendo:

- Separação clara de responsabilidades
- Arquitetura organizada desde o primeiro commit
- Casos de uso bem definidos
- Facilidade para criação de testes
- Base sólida para projetos pequenos ou grandes

---

## 🧱 Arquitetura

O projeto segue os princípios da **Clean Architecture**, com separação explícita entre camadas:

    src
├── domain
│ ├── entities
│ ├── errors
│ └── repositories
│
├── application
│ ├── use-cases
│ └── errors
│
├── infrastructure/ # Banco, ORM, serviços externos
│   └── database
│
└── main/            # Bootstrap da aplicação
    ├── config
    ├── routes
    └── server.ts

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

## 🚀 Tecnologias utilizadas

- Node.js
- TypeScript
- Express
- Jest
- Docker

---

## ▶️ Como executar o projeto

### Instalação

bash
git clone < url-do-repositorio >

cd node-clean-api-starter

### 2️⃣ Subir com Docker

bash
docker-compose up -d

A API estará disponível em:

<http://localhost:3000>

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
