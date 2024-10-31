document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const message = document.createElement("div");
    form.appendChild(message);

    form.addEventListener("submit", function(event) {
        event.preventDefault(); 

        const emailCorreto = "usuario@hotmail.com"; 
        const senhaCorreta = "senha123"; 

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (email === emailCorreto && senha === senhaCorreta) {
            message.textContent = "Login bem-sucedido!";
            message.style.color = "green";
        } else {
            message.textContent = "E-mail ou senha incorretos.";
            message.style.color = "red";
        }
    });
});