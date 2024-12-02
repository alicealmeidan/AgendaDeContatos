document.addEventListener('DOMContentLoaded', function() {
    // Função para alternar a visibilidade da seção de contatos
    const toggleFormVisibility = () => {
        const contactForm = document.getElementById('contactForm');
        const toggleButton = document.getElementById('toggleContactForm');
        
        // Alternar a visibilidade do formulário
        if (contactForm.style.display === 'none' || contactForm.style.display === '') {
            contactForm.style.display = 'block';  // Exibe o formulário
            toggleButton.classList.add('expanded');  // Aplica a rotação na seta
        } else {
            contactForm.style.display = 'none';  // Esconde o formulário
            toggleButton.classList.remove('expanded');  // Remove a rotação da seta
        }
    };

    // Função para alternar a visibilidade da lista de contatos
    const toggleContactsListVisibility = () => {
        const contactsList = document.getElementById('contactsList');
        const toggleButton = document.getElementById('toggleContactsList');
        
        // Alternar a visibilidade da lista de contatos
        if (contactsList.style.display === 'none' || contactsList.style.display === '') {
            contactsList.style.display = 'block';  // Exibe a lista de contatos
            toggleButton.classList.add('expanded');  // Aplica a rotação na seta
        } else {
            contactsList.style.display = 'none';  // Esconde a lista de contatos
            toggleButton.classList.remove('expanded');  // Remove a rotação da seta
        }
    };

    // Função para lidar com a submissão do formulário de contato
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Impede o envio do formulário
        
        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const email = document.getElementById('email').value;
        const foto = document.getElementById('foto').files[0];
        
        // Criação de um objeto de contato
        const newContact = {
            nome: nome,
            telefone: telefone,
            email: email,
            foto: foto ? URL.createObjectURL(foto) : 'default-avatar.png' // Se não houver foto, usa uma imagem padrão
        };

        // Salva o novo contato no localStorage
        saveContactToStorage(newContact);

        // Exibe o novo contato na lista
        addContactToList(newContact);

        // Limpar o formulário após envio
        document.getElementById('contactForm').reset();
        toggleFormVisibility(); // Fechar o formulário após o envio
    };

    // Função para adicionar um contato à lista
    const addContactToList = (contact) => {
        const contactsList = document.getElementById('contactsList');
        
        const contactItem = document.createElement('div');
        contactItem.classList.add('contact-item');
        
        // Nome do contato (visível inicialmente)
        const contactName = document.createElement('div');
        contactName.classList.add('contact-name');
        contactName.textContent = contact.nome;
        
        // Ícone de lixeira para excluir o contato
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = '🗑'; // Ícone de lixeira
        deleteButton.addEventListener('click', function() {
            // Exclui o contato da interface
            contactsList.removeChild(contactItem);
            // Exclui o contato do localStorage
            deleteContactFromStorage(contact);
        });

        // Detalhes do contato (inicialmente escondidos)
        const contactDetails = document.createElement('div');
        contactDetails.classList.add('contact-details');
        
        const contactPhone = document.createElement('div');
        contactPhone.classList.add('contact-phone');
        contactPhone.textContent = contact.telefone;
        
        const contactEmail = document.createElement('div');
        contactEmail.classList.add('contact-email');
        contactEmail.textContent = contact.email;
        
        // Botão para expandir/mostrar detalhes do contato
        const toggleButton = document.createElement('button');
        toggleButton.classList.add('toggle-button');
        toggleButton.textContent = '⯆'; // Inicialmente apontando para baixo
        toggleButton.addEventListener('click', function() {
            // Alterna a visibilidade dos detalhes do contato
            contactDetails.style.display = contactDetails.style.display === 'block' ? 'none' : 'block';
            this.classList.toggle('expanded');
        });

        // Adiciona os elementos dentro do item de contato
        contactDetails.appendChild(contactPhone);
        contactDetails.appendChild(contactEmail);

        contactItem.appendChild(contactName);
        contactItem.appendChild(deleteButton);  // Adiciona o botão de exclusão
        contactItem.appendChild(contactDetails);
        contactItem.appendChild(toggleButton);

        // Adiciona o item de contato à lista de contatos
        contactsList.appendChild(contactItem);
    };

    // Função para salvar o contato no localStorage
    const saveContactToStorage = (contact) => {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || []; // Recupera os contatos existentes ou cria uma lista vazia
        contacts.push(contact); // Adiciona o novo contato
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Salva a lista atualizada no localStorage
    };

    // Função para carregar os contatos do localStorage
    const loadContactsFromStorage = () => {
        const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.forEach(contact => addContactToList(contact)); // Adiciona cada contato à lista
    };

    // Função para excluir um contato do localStorage
    const deleteContactFromStorage = (contactToDelete) => {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts = contacts.filter(contact => contact.nome !== contactToDelete.nome); // Filtra o contato a ser excluído
        localStorage.setItem('contacts', JSON.stringify(contacts)); // Atualiza o localStorage
    };

    // Carregar contatos ao iniciar a página
    loadContactsFromStorage();

    // Adicionando ouvintes de eventos
    document.getElementById('toggleContactForm').addEventListener('click', toggleFormVisibility);
    document.getElementById('toggleContactsList').addEventListener('click', toggleContactsListVisibility);
    document.getElementById('contactForm').addEventListener('submit', handleFormSubmit);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const userMenu = document.getElementById('userMenu');

    // Alternar visibilidade do menu
    menuToggle.addEventListener('click', function() {
        if (userMenu.style.display === 'none' || userMenu.style.display === '') {
            userMenu.style.display = 'block'; // Exibe o menu
            menuToggle.classList.add('expanded'); // Gira a seta
        } else {
            userMenu.style.display = 'none'; // Esconde o menu
            menuToggle.classList.remove('expanded'); // Restaura a seta
        }
    });

    // Ação dos botões do menu
    document.getElementById('editProfile').addEventListener('click', function() {
        alert('Abrir página de edição de perfil');
    });

    document.getElementById('logout').addEventListener('click', function() {
        alert('Fazer logout');
    });
});

