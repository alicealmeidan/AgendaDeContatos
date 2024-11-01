document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const foto = document.getElementById('foto').files[0];

    const contactDiv = document.createElement('div');
    contactDiv.className = 'contact';

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

    document.getElementById('contactsList').appendChild(contactDiv);
    
    this.reset();
});
