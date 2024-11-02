// Seleciona elementos da página
const mainContent = document.getElementById('main-content');
const contactsList = document.getElementById('contactsList');

// Adiciona event listeners para cada opção do menu
const menuItems = document.querySelectorAll('.sidebar li');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove a classe 'active' de todos os itens
        menuItems.forEach(i => i.classList.remove('active'));
        
        // Adiciona a classe 'active' ao item clicado
        item.classList.add('active');

        // Mostra a seção apropriada
        const section = item.getAttribute('data-section');
        showSection(section);
    });
});

// Função para mostrar a seção apropriada
function showSection(section) {
    contactsList.innerHTML = ''; // Limpa a lista atual
    mainContent.querySelector('form').style.display = 'none'; // Esconde o formulário

    if (section === 'contacts') {
        mainContent.querySelector('form').style.display = 'block'; // Mostra o formulário
    } else if (section === 'frequent') {
        contactsList.innerHTML = '<h2>Contatos Frequentes</h2>';
        // Aqui você pode preencher a lista de contatos frequentes
    } else if (section === 'labels') {
        contactsList.innerHTML = '<h2>Marcadores</h2>';
        // Aqui você pode implementar a lógica de grupos
    } else if (section === 'favorites') {
        contactsList.innerHTML = '<h2>Favoritos</h2>';
        // Aqui você pode implementar a lista de favoritos
    }
}

// Adiciona o evento de submissão do formulário
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const foto = document.getElementById('foto').files[0];

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-item';

    contactDiv.innerHTML = `
        <div class="contact-photo" style="background-image: url('${foto ? URL.createObjectURL(foto) : 'default-photo.jpg'}');"></div>
        <span>${nome}</span>
        <div class="contact-info" style="display: none;">
            <strong>Telefone:</strong> ${telefone} <br>
            <strong>E-mail:</strong> ${email}
        </div>
    `;
    
    // Toggle details on click
    contactDiv.addEventListener('click', function() {
        const info = contactDiv.querySelector('.contact-info');
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });

    contactsList.appendChild(contactDiv);
    
    this.reset(); // Limpa o formulário após a submissão
});
