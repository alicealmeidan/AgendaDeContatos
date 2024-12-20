// Aguarda o carregamento completo da página antes de executar o script
document.addEventListener("DOMContentLoaded", () => {
    // Referência aos elementos do formulário e da interface
    const profileForm = document.getElementById("profile-form");
    const usernameInput = document.getElementById("username");
    const phoneInput = document.getElementById("phone");
    const emailInput = document.getElementById("email");
    const profileUsername = document.getElementById("profile-username");
    const profilePhone = document.getElementById("profile-phone");
    const profileEmail = document.getElementById("profile-email");
    const changePhotoBtn = document.getElementById("change-photo-btn");
    const profileImage = document.getElementById("profile-image");

    // Cria um elemento de input para selecionar uma imagem de perfil
    const fileInput = document.createElement("input");
    fileInput.type = "file"; // Tipo de entrada para arquivo
    fileInput.accept = "image/*"; // Aceita apenas imagens

    // Obtém o nome do usuário armazenado no LocalStorage
    const nomeUsuario = localStorage.getItem("nome_usuario");

    // Se o nome do usuário estiver armazenado, exibe-o na interface
    if (nomeUsuario) {
        const nomeElement = document.querySelector(".user-name");
        nomeElement.textContent = nomeUsuario;
    }

    // Função para carregar os dados do perfil armazenados no LocalStorage
    function loadProfileData() {
        const storedUsername = localStorage.getItem("username");
        const storedPhone = localStorage.getItem("phone");
        const storedEmail = localStorage.getItem("email");
        const storedImage = localStorage.getItem("profileImage");

        // Preenche os campos de entrada e a interface com os dados armazenados
        if (storedUsername) {
            usernameInput.value = storedUsername;
            profileUsername.textContent = storedUsername;
        }
        if (storedPhone) {
            phoneInput.value = storedPhone;
            profilePhone.textContent = storedPhone;
        }
        if (storedEmail) {
            emailInput.value = storedEmail;
            profileEmail.textContent = storedEmail;
        }
        if (storedImage) {
            profileImage.src = storedImage;
        }
    }

    // Função para salvar as alterações feitas pelo usuário
    function saveChanges() {
        const username = usernameInput.value;
        const phone = phoneInput.value;
        const email = emailInput.value;

        // Armazena os dados no LocalStorage
        localStorage.setItem("username", username);
        localStorage.setItem("phone", phone);
        localStorage.setItem("email", email);

        // Atualiza a interface com os novos dados
        profileUsername.textContent = username;
        profilePhone.textContent = phone;
        profileEmail.textContent = email;
        
        alert("Alterações salvas com sucesso!"); // Exibe um alerta de sucesso
    }

    // Adiciona um evento para alterar a foto de perfil
    changePhotoBtn.addEventListener("click", () => {
        fileInput.click(); // Aciona o seletor de arquivos
    });

    // Quando uma nova imagem é selecionada, a foto de perfil é alterada
    fileInput.addEventListener("change", (e) => {
        const file = e.target.files[0]; // Obtém o arquivo selecionado
        if (file) {
            const reader = new FileReader(); // Cria um leitor de arquivos
            reader.onload = (event) => {
                const imageUrl = event.target.result; // Obtém o URL da imagem carregada
                profileImage.src = imageUrl; // Define a imagem no elemento de perfil
                localStorage.setItem("profileImage", imageUrl); // Armazena a imagem no LocalStorage
            };
            reader.readAsDataURL(file); // Lê o arquivo como URL de dados
        }
    });

    // Adiciona funcionalidade de salvar as alterações ao botão
    document.querySelector(".save-button").addEventListener("click", saveChanges);

    // Carrega os dados do perfil ao carregar a página
    loadProfileData();
});

// Adiciona funcionalidade ao menu de opções do usuário
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const userMenu = document.getElementById('userMenu');
    
    // Alterna a visibilidade do menu do usuário ao clicar no botão
    menuToggle.addEventListener('click', function() {
        if (userMenu.style.display === 'none' || userMenu.style.display === '') {
            userMenu.style.display = 'block'; // Exibe o menu
            menuToggle.classList.add('expanded'); // Gira a seta para baixo
        } else {
            userMenu.style.display = 'none'; // Esconde o menu
            menuToggle.classList.remove('expanded'); // Restaura a seta
        }
    });

    // Adiciona funcionalidade para editar o perfil
    document.getElementById('editProfile').addEventListener('click', function() {
        alert('Abrir página de edição de perfil'); // Placeholder para a ação real
    });

    // Adiciona funcionalidade para realizar logout
    document.getElementById('logout').addEventListener('click', function() {
        alert('Fazer logout'); // Placeholder para a ação real
    });
});
