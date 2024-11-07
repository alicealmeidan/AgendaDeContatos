// Seleciona elementos da página
const mainContent = document.getElementById('main-content');
const contactsList = document.getElementById('contactsList');
const contactForm = document.getElementById('contactForm');

// Adiciona o evento de submissão do formulário
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const foto = document.getElementById('foto').files[0];

    // Cria um objeto de contato
    const contato = {
        nome: nome,
        telefone: telefone,
        email: email,
        foto: foto ? URL.createObjectURL(foto) : 'default-photo.jpg'
    };

    // Salva o contato no localStorage
    let contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.push(contato);
    localStorage.setItem('contatos', JSON.stringify(contatos));

    // Atualiza a lista de contatos na tela
    adicionarContatoNaLista(contato);

    // Limpa o formulário após a submissão
    contactForm.reset();
});

// Função para exibir um contato na lista
function adicionarContatoNaLista(contato) {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-item';

    contactDiv.innerHTML = `
        <div class="contact-photo" style="background-image: url('${contato.foto}');"></div>
        <span>${contato.nome}</span>
        <div class="contact-info" style="display: none;">
            <strong>Telefone:</strong> ${contato.telefone} <br>
            <strong>E-mail:</strong> ${contato.email}
        </div>
    `;

    // Toggle para exibir ou ocultar detalhes do contato
    contactDiv.addEventListener('click', function () {
        const info = contactDiv.querySelector('.contact-info');
        info.style.display = info.style.display === 'block' ? 'none' : 'block';
    });

    contactsList.appendChild(contactDiv);
}

// Carrega os contatos salvos no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const contatos = JSON.parse(localStorage.getItem('contatos')) || [];
    contatos.forEach(adicionarContatoNaLista);
});

// Função para exibir um contato na lista
function adicionarContatoNaLista(contato) {
    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact-item';

    // Criação da imagem do contato
    const contactImage = document.createElement('img');
    contactImage.className = 'contact-photo';  // Aplique a classe para o estilo
    contactImage.src = contato.foto || 'default-photo.jpg'; // Use uma foto padrão se não houver imagem
    contactImage.alt = `${contato.nome}'s photo`;
    contactImage.style.width = '50px'; // Ajuste o tamanho da imagem
    contactImage.style.height = '50px'; // Ajuste o tamanho da imagem
    contactImage.style.objectFit = 'cover'; // Faz a imagem se ajustar ao tamanho sem distorcer
    contactImage.style.borderRadius = '50%'; // Faz a imagem redonda (opcional)

    // Adiciona o nome e as informações de contato
    contactDiv.appendChild(contactImage);
    contactDiv.innerHTML += `<span>${contato.nome}</span>`;

    const contactInfo = document.createElement('div');
    contactInfo.className = 'contact-info';
    contactInfo.style.display = 'none';  // Inicia com as informações ocultas
    contactInfo.innerHTML = `
        <strong>Telefone:</strong> ${contato.telefone} <br>
        <strong>E-mail:</strong> ${contato.email}
    `;
    contactDiv.appendChild(contactInfo);

    // Toggle para exibir ou ocultar detalhes do contato
    contactDiv.addEventListener('click', function () {
        contactInfo.style.display = contactInfo.style.display === 'block' ? 'none' : 'block';
    });

    contactsList.appendChild(contactDiv);
}


