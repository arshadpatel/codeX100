// JavaScript to handle future interactions

// Placeholder for login function
function login() {
    alert('Login functionality coming soon!');
}

// Placeholder for sign-up function
function signup() {
    alert('Sign-up functionality coming soon!');
}

// add functionality to  hamburger 
// Select the hamburger icon and navigation links
const hamburger = document.querySelector('.hide');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show-nav-links');
  if (navLinks.classList.contains('show-nav-links')) {
    navLinks.classList.remove('hide1');
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    navLinks.classList.add('hide1');
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});

