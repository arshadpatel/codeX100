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








function openForm() {
  document.getElementById('backdrop').style.display = 'flex';
}

function closeForm() {
  document.getElementById('backdrop').style.display = 'none';
}

function validateForm() {
  // Get input values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Get error message elements
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Reset error messages
  emailError.textContent = '';
  passwordError.textContent = '';

  let isValid = true;

  // Email validation using regex
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Password validation (minimum 8 characters)
  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long.';
    isValid = false;
  }

  return isValid;  // If true, the form will submit; if false, the form won't submit.
}
