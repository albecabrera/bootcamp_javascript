/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    const contactoForm = document.getElementById('contacto-form');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileNavLinks = document.querySelector('.mobile-nav-links');

    if (contactoForm) {
        contactoForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Aquí podrías añadir lógica para validar el formulario
            // y enviar los datos a un servidor (esto requeriría código del lado del servidor).
            alert('Nachricht wurde gesendet (funktionale Implementierung fehlt).');
            contactoForm.reset();
        });
    }

    if (hamburgerMenu && mobileNavLinks) {
        hamburgerMenu.addEventListener('click', function() {
            mobileNavLinks.classList.toggle('open');
        });
    }
});