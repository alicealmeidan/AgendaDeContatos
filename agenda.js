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

document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a visibilidade do formulário de contato
    const toggleFormVisibility = () => {
        const contactForm = document.getElementById('contactForm'); // Referência ao formulário de contato
        const toggleButton = document.getElementById('toggleContactForm'); // Referência ao botão de alternância

        // Verifica o estado de exibição do formulário e alterna
        if (contactForm.style.display === 'none' || contactForm.style.display === '') {
            contactForm.style.display = 'block'; // Exibe o formulário
            toggleButton.classList.add('expanded'); // Adiciona a classe 'expanded' ao botão
        } else {
            contactForm.style.display = 'none'; // Esconde o formulário
            toggleButton.classList.remove('expanded'); // Remove a classe 'expanded' do botão
        }
    };

    // Função para alternar a visibilidade da lista de contatos
    const toggleContactsListVisibility = () => {
        const contactsList = document.getElementById('contactsList'); // Referência à lista de contatos
        const toggleButton = document.getElementById('toggleContactsList'); // Referência ao botão de alternância

        // Verifica o estado de exibição da lista de contatos e alterna
        if (contactsList.style.display === 'none' || contactsList.style.display === '') {
            contactsList.style.display = 'block'; // Exibe a lista de contatos
            toggleButton.classList.add('expanded'); // Adiciona a classe 'expanded' ao botão
        } else {
            contactsList.style.display = 'none'; // Esconde a lista de contatos
            toggleButton.classList.remove('expanded'); // Remove a classe 'expanded' do botão
        }
    };

    // Função para lidar com o envio do formulário de contato
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do envio do formulário

        // Obtém os valores dos campos do formulário
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const foto = document.getElementById('foto').files[0];

        let fotoUrl = 'images/default-avatar.jpg'; // Define uma URL de foto padrão

        // Verifica se uma foto foi selecionada, se sim, lê o arquivo
        if (foto) {
            const reader = new FileReader();
            reader.onloadend = function () {
                fotoUrl = reader.result; // Armazena a URL da foto carregada
                processContactForm(nome, telefone, email, fotoUrl); // Processa o formulário
            };
            reader.readAsDataURL(foto); // Lê o arquivo como uma URL de dados
        } else {
            processContactForm(nome, telefone, email, fotoUrl); // Processa o formulário sem foto
        }

        // Reseta o formulário e alterna a visibilidade do formulário
        document.getElementById('contactForm').reset();
        toggleFormVisibility();
    };

    // Função para processar o envio ou atualização do contato
    const processContactForm = (nome, telefone, email, foto) => {
        const isEditing = document.getElementById('contactForm').dataset.editing === 'true'; // Verifica se estamos editando um contato
        const editingContactIndex = document.getElementById('contactForm').dataset.index; // Índice do contato sendo editado

        // Verifica se é edição ou criação de um novo contato
        if (isEditing && editingContactIndex) {
            updateContactInStorage(parseInt(editingContactIndex), { nome, telefone, email, foto }); // Atualiza o contato existente
            refreshContactsList(); // Atualiza a lista de contatos
        } else {
            const newContact = { nome, telefone, email, foto }; // Cria um novo contato
            saveContactToStorage(newContact); // Salva o novo contato no armazenamento
            addContactToList(newContact); // Adiciona o novo contato à lista
        }

        // Reseta o estado de edição
        document.getElementById('contactForm').dataset.editing = 'false';
        document.getElementById('contactForm').dataset.index = '';
    };

    // Função para adicionar um novo contato à lista
    const addContactToList = (contact, index) => {
        const contactsList = document.getElementById('contactsList'); // Referência à lista de contatos
    
        const contactItem = document.createElement('div'); // Cria um item para o contato
        contactItem.classList.add('contact-item');
    
        const contactPhoto = document.createElement('div'); // Cria o elemento para a foto do contato
        contactPhoto.classList.add('contact-photo');
        contactPhoto.style.backgroundImage = `url(${contact.foto})`; // Define a imagem de fundo da foto
    
        const contactName = document.createElement('div'); // Cria o elemento para o nome do contato
        contactName.classList.add('contact-name');
        contactName.textContent = contact.nome; // Define o nome do contato
    
        const deleteButton = document.createElement('button'); // Cria o botão de exclusão
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '🗑'; // Ícone de lixeira
        deleteButton.addEventListener('click', function() {
            const userConfirmed = confirm(`Você realmente deseja apagar o contato "${contact.nome}"?`); // Pergunta ao usuário
            if (userConfirmed) {
                contactsList.removeChild(contactItem); // Remove o item da lista
                deleteContactFromStorage(contact); // Deleta o contato do armazenamento
                alert(`Contato "${contact.nome}" apagado com sucesso.`);
            } else {
                alert('Ação cancelada.');
            }
        });

        const editButton = document.createElement('button'); // Cria o botão de edição
        editButton.classList.add('edit-button');
        editButton.textContent = '✏️'; // Ícone de lápis
        editButton.addEventListener('click', function() {
            openEditContactForm(contact, index); // Abre o formulário de edição do contato
        });
    
        const favoriteButton = document.createElement('button'); // Cria o botão de favorito
        favoriteButton.classList.add('favorite-button');
        favoriteButton.textContent = '❤️'; // Ícone de coração
        favoriteButton.addEventListener('click', function() {
            addToFavorites(contact); // Adiciona o contato aos favoritos
        });
    
        
        const toggleButton = document.createElement('button'); // Cria o botão para alternar detalhes do contato
        toggleButton.classList.add('toggle-button');
        toggleButton.textContent = '⯆'; // Ícone de seta
        toggleButton.addEventListener('click', function() {
            contactDetails.style.display = contactDetails.style.display === 'block' ? 'none' : 'block'; // Alterna a visibilidade dos detalhes
            this.classList.toggle('expanded'); // Altera o estado do botão
        });
    
        const contactDetails = document.createElement('div'); // Cria o elemento de detalhes do contato
        contactDetails.classList.add('contact-details');
    
        const contactPhone = document.createElement('div'); // Cria o elemento para o telefone do contato
        contactPhone.classList.add('contact-phone');
        contactPhone.textContent = contact.telefone; // Define o número de telefone
    
        const contactEmail = document.createElement('div'); // Cria o elemento para o e-mail do contato
        contactEmail.classList.add('contact-email');
        contactEmail.textContent = contact.email; // Define o e-mail
    
        contactDetails.appendChild(contactPhone); // Adiciona o telefone aos detalhes
        contactDetails.appendChild(contactEmail); // Adiciona o e-mail aos detalhes
    
        contactItem.appendChild(contactPhoto); // Adiciona a foto ao item
        contactItem.appendChild(contactName); // Adiciona o nome ao item
        contactItem.appendChild(deleteButton); // Adiciona o botão de exclusão ao item
        contactItem.appendChild(editButton); // Adiciona o botão de edição ao item
        contactItem.appendChild(favoriteButton); // Adiciona o botão de favoritos ao item
        contactItem.appendChild(toggleButton); // Adiciona o botão de alternar aos detalhes
        contactItem.appendChild(contactDetails); // Adiciona os detalhes ao item
    
        contactsList.appendChild(contactItem); // Adiciona o item à lista de contatos
    };

    // Função para abrir o formulário de edição com os dados do contato
    const openEditContactForm = (contact, index) => {
        document.getElementById('nome').value = contact.nome; // Preenche o nome no formulário
        document.getElementById('telefone').value = contact.telefone; // Preenche o telefone no formulário
        document.getElementById('email').value = contact.email; // Preenche o e-mail no formulário
        document.getElementById('contactForm').dataset.editing = 'true'; // Marca o formulário como edição
        document.getElementById('contactForm').dataset.index = index; // Define o índice do contato a ser editado
        toggleFormVisibility(); // Alterna a visibilidade do formulário
    };

    // Função para atualizar o contato no armazenamento local
    const updateContactInStorage = (index, updatedContact) => {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []; // Obtém os contatos armazenados
        contacts[index] = updatedContact; // Atualiza o contato na lista
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Salva a lista atualizada
    };

    // Função para atualizar a lista de contatos na interface
    const refreshContactsList = () => {
        const contactsList = document.getElementById('contactsList'); // Referência à lista de contatos
        contactsList.innerHTML = ''; // Limpa a lista de contatos
        loadContactsFromStorage(); // Recarrega os contatos do armazenamento
    };

    // Função para salvar um novo contato no armazenamento local
    const saveContactToStorage = (contact) => {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []; // Obtém os contatos armazenados
        contacts.push(contact); // Adiciona o novo contato
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Salva a lista atualizada
    };

    // Função para carregar contatos do armazenamento local e adicionar à lista
    const loadContactsFromStorage = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || []; // Obtém os contatos armazenados
        contacts.forEach((contact, index) => addContactToList(contact, index)); // Adiciona cada contato à lista
    };

    // Função para excluir um contato do armazenamento local
    const deleteContactFromStorage = (contactToDelete) => {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []; // Obtém os contatos armazenados
        contacts = contacts.filter(contact => contact.nome !== contactToDelete.nome); // Filtra o contato a ser excluído
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Salva a lista atualizada
    };

    loadContactsFromStorage(); // Carrega os contatos do armazenamento ao carregar a página

    document.getElementById('toggleContactForm').addEventListener('click', toggleFormVisibility); // Alterna a visibilidade do formulário de contato
    document.getElementById('toggleContactsList').addEventListener('click', toggleContactsListVisibility); // Alterna a visibilidade da lista de contatos
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit); // Lida com o envio do formulário
});

