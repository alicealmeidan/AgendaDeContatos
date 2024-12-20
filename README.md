# AgendaDeContatos
Projeto criado como forma de avaliação para a disciplina Desenvolvimento Web II e Engenharia de Software da turma TS451.

Este projeto é uma aplicação simples de gerenciamento de contatos, permitindo que os usuários organizem e administrem suas informações de contato de maneira prática e eficiente. Ele utiliza HTML, CSS e JavaScript, *com dados armazenados localmente no navegador usando o 'LocalStorage'*. Tem como principais tarefas o cadastro do usuário, login no sistema, cadastro de novos contatos, lista para visualização de contatos, onde é possível visualizar suas principais informções como foto, telefone e e-mail. O sistema também exibe os contatos mais frequentes, além de permitir classificar alguns contatos como favoritos.

# Funcionalidades
- Cadastro de usuário: O processo de cadastro permite criar uma conta informando nome, telefone, e-mail e senha, com a opção de adicionar uma foto;
- Login: E necessario realizar o login com e-mail e senha previamente cadastrados para acessar suas informações. Voce pode optar por salvar os dados de login nos campos correspondentes, marcando a opção "relembre-me" para facilitar o acesso em futuras visitas.
- Adicionar contatos: Os usuários são capazes de adicionar novos contatos à agenda com nome, telefone, e-mail e foto, sendo esta última, opcional;
- Menu lateral: O sistema possui um menu lateral onde se encontram as opções 'Contatos frequentes', 'Contatos', 'Favoritos' e 'Marcadores';
  *- Anotações: O sistema terá uma área destinada à inclusão de notas sobre o contato. O preenchimento dele fica à critério do usuário;*
*- Armazenamento: Os dados do usuário e seus contatos são armazenados no 'localStorage', de forma que as informações persistam entre as sessões.*

# Tecnologias utilizadas
HMTL: Estruturação da página; 
CSS: Estilos visuais para a interface; 
JavaScript: Interação das funcionalidades; 
*LocalStorage: Armazenamento de dados no navegador para persistência entre as sessões.*

# Como utilizar
**Cadastro de usuário:**
- Na primeira página ('login.html'), clique em 'Criar conta';
- Você será direcionado para a página 'cadastro.html';
- Preencha os campos com as informações adequadas;
- Clique em 'cadastrar' para criar uma nova conta;
- O usuário será logado automaticamente no sistema e redirecionado para 'agenda.html'.

**Login:** 
- Na primeira página ('login.html'), preencha os campos de 'e-mail' e 'senha' com as informações adequadas;
- É possível salvar suas informações de login marcando a checkbox 'relembre-me', facilitando os proximos logins. Marcar essa opção é totalmente opcional;
- As informações serão testadas. Caso estejam incorretas, o usuário será informado e não será possível logar no sistema. Se estiverem corretas, o usuário será logado no sistema e redirecionado para 'agenda.html'.

**Adicionar contatos:**
- Após o login no sistema, será possível adicionar novos contatos;
- Ao expandir o container 'Cadastrar Novo Contato', serão solicitadas informações como 'Nome', 'Telefone', 'E-mail' e uma foto que poderá ser adicionada, também, para identificar o contato. Ao clicar em 'salvar', as informações serão armazenadas no **LocalStorage**
- Os contatos salvos poderão ser visualizados clicando em 'Lista de contatos'. Para exibir os detalhes, basta clicar na seta ao lado, expandindo o cartão do contato.
- É possível remover contatos da lista, clicando no ícone de lixeira no cartão de cada contato;
- Ao clicar no botão em formato de lápis ao lado do nome do contato, é possível editá-lo para alterar quaisquer informações que desejar.
- Nessa tela também é possível visualizar qual usuário está logado. No canto superior direito exibirá o nome de usuário e sua foto. Ao clicar na seta ao lado o usuário poderá editar o perfil ou, ainda, deslogar do sistema clicando em 'sair'.
- O menu localizado na lateral esquerda oferece as opções 'Contatos' (Tela atual), 'Contatos Frequentes' e 'Favoritos'.

**Contatos frequentes:**
- Nessa página serão exibidos os 5 contatos mais visualizados pelo usuário. As visualizações são contadas de acordo com os cliques para exibir os detalhes dos contatos.

**Favoritos:**
Os contatos poderão ser sinalizados como favoritos ao clicar no botão em formato de coração, ao lado do nome do contato. Eles serão exibidos separadamente em uma aba direcionada a eles.
