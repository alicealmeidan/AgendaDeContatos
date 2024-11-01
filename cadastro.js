document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar-senha").value;

    //Verificar se a senha e a confirmação são iguais
    if (senha !== confirmarSenha) {
        alert("A senha e a confirmação de senha devem ser iguais!");
        return;
    }

    // Criação novo usuário
    const usuario = {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha
    };

    // Salvando novo usuário
    localStorage.setItem(email, JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
});
