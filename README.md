# AgendaDeContatos
Projeto criado como forma de avaliação para a disciplina Desenvolvimento Web II

Este projeto é uma aplicação simples de Agenda de Contatos, onde os usuários podem gerenciar seus contatos. Ele utiliza HTML, CSS e JavaScript, com dados armazenados localmente no navegador usando o `localStorage`.

# Funcionalidades
Cadastro de usuário: O cadastro de usuário permite criar uma conta com nome, telefone, e-mail e senha.
Login: É necessário realizar o login com e-mail e senha para acessar suas informações. O login pode ser lembrado, caso selecione a checkbox 'relembre-me'.
Adicionar contatos: Os usuários são capazes de adicionar novos contatos à agenda com nome, telefone, e-mail e foto, sendo esta última, opcional.
Menu lateral: O sistema possui um menu lateral onde se encontram as funções 'Contatos frequentes', 'Contatos', 'Favoritos' e 'Marcadores'.
Anotações: O sistema terá uma área destinada à inclusão de notas sobre o contato. O preenchimento dele fica à critério do usuário.
Armazenamento: Os dados do usuário e seus contatos são armazenados no 'localStorage', de forma que as informações persistam entre as sessões.

# Tecnologias utilizadas
HMTL: Estruturação da página;
CSS: Estilos visuais para a interface;
JavaScript: Interação das funcionalidades;
LocalStorage: Armazenamento de dados no navegador para persistência entre as sessões.

# Como utilizar
Cadastro de usuário:
- Na primeira página ('index.html'), clique em 'Criar conta';
- Você será direcionado para a página 'cadastro.html';
- Preencha os campos com as informações adequadas;
- Clique em 'cadastrar' para criar uma nova conta;
- O usuário será logado automaticamente no sistema e redirecionado para 'agenda.html'.

Login: 
- Na primeira página ('index.html'), preencha os campos de 'e-mail' e 'senha' com as informações adequadas;
- Marque a opção 'relembre-me' se julgar necessário. Caso marque, as informações ficarão salvas para os próximos logins;
- Caso as informações estejam incorretas, o usuário será informado. Se estiverem corretas, o usuário será logado no sistema e redirecionado para 'agenda.html'.

Adicionar contatos:
