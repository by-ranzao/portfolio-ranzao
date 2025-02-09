var mobileMenu = document.getElementById('mobile-menu');
var navLinks = document.querySelector('.nav-links');
var body = document.body; // Referencia al body

mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Bloquea/desbloquea el scroll
});

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        body.classList.remove('no-scroll'); // Rehabilita el scroll
    });
});
