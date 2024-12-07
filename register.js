document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;
    const emailInput = document.getElementById("email");

    // Remover mensagem de erro anterior, se existir
    const erroAnterior = document.querySelector(".erro-email");
    if (erroAnterior) {
        erroAnterior.remove();
    }

    // Verificar se o e-mail já está cadastrado
    if (localStorage.getItem(email)) {
        const erroMensagem = document.createElement("p");
        erroMensagem.textContent = "E-mail já cadastrado";
        erroMensagem.classList.add("erro-email");
        emailInput.parentNode.insertBefore(erroMensagem, emailInput.nextSibling);
        return;
    }

    // Verificar se a senha e a confirmação são iguais
    if (senha !== confirmarSenha) {
        alert("A senha e a confirmação de senha devem ser iguais!");
        return;
    }

    // Criação de um novo usuário
    const usuario = {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha
    };

    // Salvando o novo usuário no localStorage
    localStorage.setItem(email, JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");

    // Salvar o nome do usuário também separadamente
    localStorage.setItem("nome_usuario", nome);

    // Redirecionar para a página principal da agenda
    window.location.href = "agenda.html";
});
