// cypress/support/commands.d.ts

/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      /**
       * Faz login no aplicativo Scratch através da interface gráfica do usuário (GUI).
       *
       * @param username string - O email do usuário com o qual você deseja fazer login
       * @param password string - A senha do usuário com o qual você deseja fazer login
       *
       * @example cy.guiLogin() // Faz logon no aplicativo usando o e-mail e a senha padrão (definidos como envs)
       * @example cy.guiLogin('user@email.com', 'S3cRe7P@ssW0rd') // Faz logon no aplicativo usando as credenciais fornecidas
       */
      guiLogin(username?: string, password?: string): void | Cypress.Chainable<null>
  
      /**
       * Faz logon no aplicativo Scratch via GUI **once**, e cria uma sessão neste processo
       * para uma restauração mais adicional. Desta forma, não há tempo a perder quando a autenticação é apenas
       * pré-condição do teste em vez de seu foco principal.
       *
       * O nome de usuário é usado como o id da sessão, o que significa que se ele mudar, por exemplo, quando
       * Fazendo login com um usuário diferente, uma nova sessão é criada (via GUI) e salva para
       * mais restauração.
       *
       * @param username string - O email do usuário com o qual você deseja fazer login
       * @param password string - A senha do usuário com o qual você deseja fazer login
       *
       * @example cy.sessionLogin() // Faz logon no aplicativo (ou simplesmente restaura a sessão) usando o e-mail e a senha padrão (definidos como envs)
       * @example cy.sessionLogin('user@email.com', 'S3cRe7P@ssW0rd') // Faz logon no aplicativo (ou simplesmente restaura a sessão) usando as credenciais fornecidas
       */
      sessionLogin(username?: string, password?: string): void | Cypress.Chainable<null>
  
      /**
       * Cria uma nova nota com a possibilidade de anexar o arquivo `example.json'fixture file.
       *
       * @param note string - O texto da nota que você deseja criar
       * @param attachFile boolean - Um booleano ('verdadeiro', ou 'falso') que define se você quer ou não anexar um arquivo ao criar a nota (o padrão é 'falso')
       *
       * @example cy.createNote('Feed the cat') // Cria uma nota com a descrição fornecida
       * @example cy.createNote('Learn Cypress', true) // Cria uma nota com a descrição fornecida e anexa o arquivo de dispositivo `example.json`
       */
      createNote(note: string, attachFile?: boolean): Cypress.Chainable<undefined>
  
      /**
       * Edita uma nota já existente.
       *
       * @param note string - O texto da nota que você deseja editar
       * @param newNoteValue string - O novo valor para a nota que você deseja editar
       * @param attachFile boolean - Um booleano ('verdadeiro', ou 'falso') que define se você quer ou não anexar um arquivo ao editar a nota (o padrão é 'falso')
       *
       * @example cy.editNote('Alimentar o Gato', 'Alimentar o Gato pela manhã') // Edita a descrição da nota com o texto 'Alimentar o Gato' para 'Alimentar o Gato pela manhã'
       * @example cy.editNote('Alimentar o Gato', 'Alimentar o Gato pela manhã', true) // Edita a descrição da nota com o texto 'Alimentar o Gato' para 'Alimentar o Gato pela manhã', e anexa o arquivo de fixação `example.json`
       */
      editNote(note: string, newNoteValue: string, attachFile?: boolean): Cypress.Chainable<undefined>
  
      /**
       * Exclui uma nota.
       *
       * @param note string - O texto da nota que você deseja excluir
       *
       * @example cy.deleteNote('Alimentar o gato') // Exclui uma nota com a descrição fornecida
       */
      deleteNote(note: string): Cypress.Chainable<undefined>
  
      /**
       * Preenche o formulário de configuração com dados de amostra e envia-o.
       *
       * @example cy.fillSettingsFormAndSubmit() // Visita a página de configurações, preenche o formulário com dados de amostra e envia-o
       */
      fillSettingsFormAndSubmit(): Cypress.Chainable<JQuery<HTMLButtonElement>>
  
      /**
       * Preencha o formulário de inscrição e envie-o com as credenciais fornecidas.
       *
       * Depois disso, insere um código de seis dígitos enviado para o e-mail utilizado no
       * passo, e envia o segundo formulário.
       *
       * Finalmente, espera pelo pedido `@getStories` para garantir que a inscrição tenha sido bem-sucedida.
       *
       * @param email string - O e-mail de um usuário ainda não registrado
       * @param password string - T senha para o usuário que está sendo registrado
       *
       * @example cy.fillSignupFormAndSubmit('some-user@example.com', 'sEcR37-p@s5w0rD')
       */
      fillSignupFormAndSubmit(email: string, password: string): Cypress.Chainable<JQuery<HTMLElement>>
    }
  }
  