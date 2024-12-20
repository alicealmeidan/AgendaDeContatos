// Aguarda o carregamento completo do DOM antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de alternância do menu
    const menuToggle = document.getElementById('menuToggle'); 
    // Seleciona o menu do usuário
    const userMenu = document.getElementById('userMenu'); 

    // Adiciona um evento de clique ao botão de alternância do menu
    menuToggle.addEventListener('click', function() {
        // Verifica se o menu está oculto ou visível
        if (userMenu.style.display === 'none' || userMenu.style.display === '') {
            userMenu.style.display = 'block'; // Torna o menu visível
            menuToggle.classList.add('expanded'); // Adiciona a classe que altera a aparência do botão (ex.: gira a seta)
        } else {
            userMenu.style.display = 'none'; // Oculta o menu
            menuToggle.classList.remove('expanded'); // Remove a classe para restaurar a aparência do botão
        }
    });

    // Adiciona ação ao botão "Editar Perfil"
    document.getElementById('editProfile').addEventListener('click', function() {
        alert('Abrir página de edição de perfil'); // Exibe um alerta simulando a ação de editar perfil
    });

    // Adiciona ação ao botão "Sair"
    document.getElementById('logout').addEventListener('click', function() {
        alert('Fazer logout'); // Exibe um alerta simulando a ação de logout
    });
});

// Recupera o nome do usuário armazenado no localStorage
const nomeUsuario = localStorage.getItem("nome_usuario");

// Verifica se existe um nome de usuário salvo
if (nomeUsuario) {
    // Seleciona o elemento que exibe o nome do usuário na interface
    const nomeElement = document.querySelector(".user-name");
    // Atualiza o conteúdo do elemento com o nome do usuário salvo
    nomeElement.textContent = nomeUsuario;
}
