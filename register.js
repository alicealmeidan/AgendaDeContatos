// Adiciona um evento de "submit" no formulário para interceptar o envio
document.querySelector("form").addEventListener("submit", function (event) {
    // Impede o envio padrão do formulário (que causaria o recarregamento da página)
    event.preventDefault();

    // Obtém os valores inseridos nos campos do formulário
    const nome = document.getElementById("nome").value; // Valor do campo "nome"
    const telefone = document.getElementById("telefone").value; // Valor do campo "telefone"
    const email = document.getElementById("email").value; // Valor do campo "email"
    const senha = document.getElementById("senha").value; // Valor do campo "senha"
    const confirmarSenha = document.getElementById("confirmar-senha").value; // Valor do campo "confirmar senha"
    const emailInput = document.getElementById("email"); // Referência ao campo "email"

    // Remover mensagem de erro anterior, se existir
    const erroAnterior = document.querySelector(".erro-email"); // Verifica se já existe uma mensagem de erro
    if (erroAnterior) {
        erroAnterior.remove(); // Se houver, remove a mensagem de erro anterior
    }

    // Verificar se o e-mail já está cadastrado no localStorage
    if (localStorage.getItem(email)) {
        const erroMensagem = document.createElement("p"); // Cria um novo parágrafo de erro
        erroMensagem.textContent = "E-mail já cadastrado"; // Define a mensagem de erro
        erroMensagem.classList.add("erro-email"); // Adiciona a classe CSS para estilizar o erro
        emailInput.parentNode.insertBefore(erroMensagem, emailInput.nextSibling); // Insere a mensagem de erro abaixo do campo de e-mail
        return; // Interrompe a execução do código se o e-mail já estiver cadastrado
    }

    // Verificar se a senha e a confirmação de senha são iguais
    if (senha !== confirmarSenha) {
        alert("A senha e a confirmação de senha devem ser iguais!"); // Exibe um alerta caso as senhas não coincidam
        return; // Interrompe a execução do código se as senhas não forem iguais
    }

    // Criação de um novo objeto "usuario" com os dados inseridos
    const usuario = {
        nome: nome,
        telefone: telefone,
        email: email,
        senha: senha
    };

    // Salva o novo usuário no localStorage com a chave sendo o e-mail
    localStorage.setItem(email, JSON.stringify(usuario)); // Converte o objeto para string JSON antes de salvar
    alert("Cadastro realizado com sucesso!"); // Exibe um alerta informando que o cadastro foi realizado com sucesso

    // Salva o nome do usuário separadamente no localStorage
    localStorage.setItem("nome_usuario", nome);

    // Redireciona o usuário para a página principal da agenda (agenda.html)
    window.location.href = "agenda.html"; // Realiza a navegação para a página da agenda
});
