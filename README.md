# Youcom Product Catalog Front

```
# Configuração de ambiente no .env (alterar ser necessário)
```

## Comandos

Por primeiro:

```bash
yarn install
```


Rodar localmente:

```bash
yarn dev
```

Rodar em prod:

```bash
yarn start
```

Testes:

```bash
# Todos testes
yarn test

# Todos testes em watch mode
yarn test:watch

# Ver a cobertura de testes
yarn coverage
```

Linting:

```bash
# rodar ESlint
yarn lint

# Corrigir erros do ESLint
yarn lint:fix

# Rodar o prettier
yarn prettier

# Corrigir erros do prettier
yarn prettier:fix
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Porta da API
PORT=3001
# Ambiente que está rodando
NODE_ENV=development
```

## Project Structure

```
src\
 |--src\components      # Componentes
 |--styles\             # Estilização
 |--pages\              # Páginas
```