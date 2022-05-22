<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

# NestJS Example

Exemplo de uma implementação simples baseado em NestJS em que abstrai:

- Validators - camada entre a `request` e o `controller`
- Services - camada intermediária entre os `controllers` e os `repositórios`
- Repositories - camada de comunicação com o banco de dados

## Instalação

```bash
$ npm install
```

## Configure o banco de dados

Configure o arquivo `./db/db.module.ts` com as credenciais do seu banco de dados. Documentação de
referência: [NestJS - configurando db](https://docs.nestjs.com/techniques/database)

## Executando a aplicação

Execute em watch mode (live reload):

```bash
$ npm run start:dev
```

## Quero criar uma rota nova, como faço?

1. Crie um `model`
2. Crie o `controller`
3. Crie o serviço apenas extendendo a classe base `ServiceManager`
4. Crie o repositório apenas extendendo a classe base `RepositoryManager`
5. Adicione os `decorator` do swagger para que sua rota fique documentada.
    1. Para que o `model` fique visível no swagger,
       é preciso adicionar um decorator a mais no controllador, como por exemplo no controller de User:

```typescript
@ApiExtraModels(User)
```

É preciso fazer isso por conta que o NestJS não detecta/implementa os retornos do controllador, mais detalhes sobre isso
pode ser consultado na documentação do Nesjs.

P.S.: a estrutura de pastas é apenas para fins didáticos. Altere conforme o `freguês`. Lembre-se, isso é apenas um exemplo.
