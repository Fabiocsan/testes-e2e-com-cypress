# Testes _end-to-end_ com Cypress

Projeto de exemplo para demonstrar testes de ponta a ponta (e2e) escritos com [Cypress](https://cypress.io) rodando no GitHub Actions.

## Pré-requisitos

Para clonar e executar este projeto, você precisará de:

- [git](https://git-scm.com/downloads) (eu usei a versão `2.47.1(2)` ao escrever este documento)
- [Node.js](https://nodejs.org/pt/) (eu usei a versão `v22.13.0` ao escrever este documento)
- npm (eu usei a versão `11.0.0` ao escrever este documento)

**Nota:** Ao instalar o Node.js, npm é instalado automaticamente. 🚀

## Instalação

Para instalar as dependências dev, execute `npm install` (ou `npm i`)

## Configurando as variáveis de ambiente

Antes de executar os testes, algumas variáveis de ambiente precisam ser configuradas.

Faça uma cópia do arquivo ['cypress.env.example.json'] (./cypress.env.example.json) como 'cypress.env.json', e defina os valores apropriados para todas as variáveis.

**Nota:** O arquivo `cypress.env.json` não é rastreado pelo git, pois está listado no arquivo `.gitignore' por ser dados sensiveis, afim de validar os testes, segue os valores utilizados:

"USER_EMAIL": "e6d0fc1e-bf9a-4194-b7c8-54e3dcf8445f@5m91d6ru.mailosaur.net"

"USER_PASSWORD": "s3Cre7P@sSw0rd"

"MAILOSAUR_SERVER_ID": "5m91d6ru"

"MAILOSAUR_API_KEY": "KGRdAhrMP70lDk4S6QyXHkMhOdqrpCrp"


## Executando os testes

Neste projeto, você pode executar testes em modos interativos e sem cabeça, tanto na janela de visualização do desktop quanto da tela do tablet.

### modo Headless

Execute o teste npm (ou `npm t`) para executar todos os testes no modo sem cabeça usando uma janela de visualização de desktop.

Execute o teste `npm run:tablet` para executar os testes apropriados no modo sem cabeça usando uma janela de visualização do tablet.

### modo interativo

Execute `npm run cy:open` para abrir o __Cypress App__ para executar testes no modo interativo usando uma janela de visualização de desktop.

Execute `npm run cy:open:tablet` para abrir o __Cypress App__ para executar testes no modo interativo usando uma janela de visualização do tablet.

___

Feito com ❤️ por [Fabio Santos](https://github.com/Fabiocsan).

