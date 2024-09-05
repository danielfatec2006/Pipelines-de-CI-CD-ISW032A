# Pipeline de CI/CD para o Projeto ISW032A

## Visão Geral

Este projeto utiliza um pipeline de CI/CD para automatizar o processo de integração e entrega contínua. O objetivo é garantir que o código seja continuamente integrado, testado e implementado de forma eficiente.

## Estrutura do Pipeline

O pipeline é configurado usando GitHub Actions e Vercel. Abaixo está uma visão geral das etapas do pipeline:

1. **Build:** Compila o código fonte e prepara o ambiente de build.
2. **Test:** Executa os testes automatizados para garantir que o código não quebre funcionalidades existentes.
3. **Deploy:** Realiza o deploy do código no ambiente de produção utilizando Vercel.

## Configuração do Pipeline

### GitHub Actions

- O pipeline é definido em um arquivo de workflow localizado em `.github/workflows/deploy.yml`.
- As principais etapas incluem:
  - **Checkout:** Faz o checkout do código do repositório.
  - **Setup Node.js:** Configura a versão do Node.js.
  - **Install Dependencies:** Instala as dependências do projeto.
  - **Run Tests:** Executa os testes.
  - **Deploy to Vercel:** Faz o deploy para o Vercel.

Exemplo de configuração:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

      - name: Deploy to Vercel
        run: npx vercel --prod
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
```
## Vercel

Configure o Vercel para realizar o deploy automático a partir do repositório GitHub. Certifique-se de que as variáveis de ambiente necessárias estejam configuradas no Vercel.

## Contribuindo

Para contribuir com o projeto, siga estas etapas:

1. Faça um fork do repositório.
2. Crie uma nova branch para suas alterações.
3. Realize as alterações e teste-as localmente.
4. Faça um commit e envie suas alterações para o repositório remoto.
5. Crie um pull request com uma descrição clara das alterações.

## Requisitos

- Node.js
- GitHub Actions
- Vercel
