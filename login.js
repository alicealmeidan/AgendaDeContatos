// Seleção dos elementos do formulário
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const relembreCheckbox = document.querySelector(".relembre input");

// Função para carregar email e senha, se salvos
document.addEventListener("DOMContentLoaded", () => {
    const emailSalvo = localStorage.getItem("emailLembrado");
    const senhaSalva = localStorage.getItem("senhaLembrada");

    // Se houver email e senha salvos, preenche os campos e marca o checkbox
    if (emailSalvo && senhaSalva) {
        emailInput.value = emailSalvo;
        senhaInput.value = senhaSalva;
        relembreCheckbox.checked = true;
    }
});

// Evento de submissão do formulário de login
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = emailInput.value;
    const senha = senhaInput.value;

    // Busca o usuário no localStorage
    const usuario = JSON.parse(localStorage.getItem(email));

    // Verifica se o usuário existe e se a senha está correta
    if (usuario && usuario.senha === senha) {
        alert("Login realizado com sucesso!");

        // Se o checkbox "Relembre-me" estiver marcado, salva o email e a senha
        if (relembreCheckbox.checked) {
            localStorage.setItem("emailLembrado", email);
            localStorage.setItem("senhaLembrada", senha);
        } else {
            // Remove o email e a senha salvos se o checkbox não estiver marcado
            localStorage.removeItem("emailLembrado");
            localStorage.removeItem("senhaLembrada");
        }

        // Redirecionar para a página principal ou dashboard
        window.location.href = "dashboard.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
