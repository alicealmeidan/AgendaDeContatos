document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    //Consulta o localStorage
    const usuario = JSON.parse(localStorage.getItem(email));

    //Verifica se o usuário existe e se a senha está correta
    if (usuario && usuario.senha === senha) {
        alert("Login realizado com sucesso!");
        //Redireciona para a lista de contatos
        window.location.href = "listaDeContatos.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
