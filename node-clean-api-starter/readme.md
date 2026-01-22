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
├── infrastructure
│ └── repositories
│
├── interfaces
│ └── http
│ ├── controllers
│ └── middlewares
│
└── main
├── routes
├── factories
├── app.ts
└── server.ts


### Responsabilidade das camadas

- **Domain**  
  Contém regras de negócio puras, entidades e contratos.  
  Não depende de frameworks ou detalhes técnicos.

- **Application**  
  Contém os casos de uso da aplicação.  
  Orquestra o domínio, sem conhecer HTTP, banco de dados ou frameworks.

- **Infrastructure**  
  Implementações técnicas como repositórios (InMemory, banco de dados, etc).

- **Interfaces**  
  Camada de adaptação (controllers HTTP, middlewares).

- **Main**  
  Ponto de composição da aplicação (rotas, factories, inicialização).

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
```bash
npm install

##  Ambiente de desenvolvimento
npm run dev

##  Build
npm run build
npm start


npm run build
npm start


##  O projeto possui testes de domínio e de casos de uso.
npm test


## 🔄 Infraestrutura substituível
O projeto inicia utilizando um repositório InMemory, ideal para testes e MVPs.

A infraestrutura pode ser substituída facilmente por:

Prisma

TypeORM

Sequelize

Qualquer banco de dados

Sem necessidade de alterar:

Entidades

Casos de uso

Controllers 

O projeto inicia utilizando um repositório InMemory, ideal para testes e MVPs.

A infraestrutura pode ser substituída facilmente por:

Prisma

TypeORM

Sequelize

Qualquer banco de dados

Sem necessidade de alterar:

Entidades

Casos de uso

Controllers

📌 Status do projeto

✔ Estrutura base concluída
✔ Casos de uso de exemplo (CreateUser, ListUsers)
✔ Middleware global de erros
✔ Testes unitários
✔ Pronto para expansão