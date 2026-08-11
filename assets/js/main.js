// ============================================
// CAMPING FRAILEJÓN — JavaScript principal
// ============================================

// Menú móvil
function toggleMenu() {
  var nav = document.getElementById('navLinks');
  nav.classList.toggle('active');
}

// Cerrar menú al hacer clic en un link (móvil)
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function(link) {
    link.addEventListener('click', function() {
      var nav = document.getElementById('navLinks');
      if (nav) nav.classList.remove('active');
    });
  });
});

// Animación de entrada al hacer scroll
function animarEntrada() {
  var elementos = document.querySelectorAll('.card, .gallery-item');
  elementos.forEach(function(el) {
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  });
}

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', function() {
  var elementos = document.querySelectorAll('.card, .gallery-item');
  elementos.forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });
  animarEntrada();
});

window.addEventListener('scroll', animarEntrada);

// Netlify Identity — redirección después de login
if (window.netlifyIdentity) {
  window.netlifyIdentity.on('init', function(user) {
    if (!user) {
      window.netlifyIdentity.on('login', function() {
        document.location.href = '/admin/';
      });
    }
  });
}
