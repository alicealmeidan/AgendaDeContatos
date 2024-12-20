// Seleção dos elementos do formulário
const emailInput = document.getElementById("email"); // Campo de entrada de e-mail
const senhaInput = document.getElementById("senha"); // Campo de entrada de senha
const relembreCheckbox = document.querySelector(".relembre input"); // Caixa de seleção "Relembre-me"

// Função para carregar email e senha, se salvos
document.addEventListener("DOMContentLoaded", () => {
    // Tenta carregar o e-mail e a senha salvos no localStorage
    const emailSalvo = localStorage.getItem("emailLembrado");
    const senhaSalva = localStorage.getItem("senhaLembrada");

    // Se houver e-mail e senha salvos, preenche os campos de entrada e marca o checkbox
    if (emailSalvo && senhaSalva) {
        emailInput.value = emailSalvo;
        senhaInput.value = senhaSalva;
        relembreCheckbox.checked = true; // Marca o checkbox de "relembrar"
    }
});

// Evento de submissão do formulário de login
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário para fazer a validação manual

    // Obtém os valores do e-mail e da senha informados pelo usuário
    const email = emailInput.value;
    const senha = senhaInput.value;

    // Busca o usuário no localStorage, onde os dados do usuário estão armazenados
    const usuario = JSON.parse(localStorage.getItem(email));

    // Verifica se o usuário existe e se a senha fornecida é correta
    if (usuario && usuario.senha === senha) {
        alert("Login realizado com sucesso!"); // Se os dados estiverem corretos, exibe uma mensagem de sucesso

        // Se o checkbox "Relembre-me" estiver marcado, salva o e-mail e a senha
        if (relembreCheckbox.checked) {
            localStorage.setItem("emailLembrado", email); // Salva o e-mail no localStorage
            localStorage.setItem("senhaLembrada", senha); // Salva a senha no localStorage
        } else {
            // Remove o e-mail e a senha salvos, caso o checkbox não esteja marcado
            localStorage.removeItem("emailLembrado");
            localStorage.removeItem("senhaLembrada");
        }

        // Redireciona para a página principal da agenda após login bem-sucedido
        window.location.href = "agenda.html";
    } else {
        alert("E-mail ou senha incorretos."); // Se os dados estiverem incorretos, exibe uma mensagem de erro
    }
});
