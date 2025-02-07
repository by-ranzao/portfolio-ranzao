var mobileMenu = document.getElementById('mobile-menu');
  var navLinks = document.querySelector('.nav-links');

  mobileMenu.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });