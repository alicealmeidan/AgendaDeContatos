// Código para alternar a visibilidade do menu do usuário
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle'); // Botão de alternância do menu
    const userMenu = document.getElementById('userMenu'); // Menu do usuário

    // Alterna a visibilidade do menu
    menuToggle.addEventListener('click', function() {
        if (userMenu.style.display === 'none' || userMenu.style.display === '') {
            userMenu.style.display = 'block'; // Exibe o menu
            menuToggle.classList.add('expanded'); // Gira a seta
        } else {
            userMenu.style.display = 'none'; // Esconde o menu
            menuToggle.classList.remove('expanded'); // Restaura a seta
        }
    });

    // Ações dos botões do menu
    document.getElementById('editProfile').addEventListener('click', function() {
        alert('Abrir página de edição de perfil');
    });

    document.getElementById('logout').addEventListener('click', function() {
        alert('Fazer logout');
    });
});

// Recupera o nome do usuário do localStorage
const nomeUsuario = localStorage.getItem("nome_usuario");

// Exibe o nome do usuário na interface (se existir)
if (nomeUsuario) {
    const nomeElement = document.querySelector(".user-name");
    nomeElement.textContent = nomeUsuario;
}