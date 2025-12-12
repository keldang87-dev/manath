// Navbar elements
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.navigation');
const burgerIcon = burgerMenu.querySelector('ion-icon');
const navbar = document.getElementById('navbar');

// Toggle mobile menu
function toggleMenu() {
  navLinks.classList.toggle('active');

  // Change burger icon
  if (navLinks.classList.contains('active')) {
    burgerIcon.setAttribute('name', 'close-outline');
  } else {
    burgerIcon.setAttribute('name', 'menu-outline');
  }
}

// Event listener for burger menu
burgerMenu.addEventListener('click', toggleMenu);

// Close menu when a nav link is clicked
document.querySelectorAll('.navigation li a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    burgerIcon.setAttribute('name', 'menu-outline');
  });
});

// Add shadow on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
const scrollUp = document.getElementById('scroll-up');

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
