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
document.getElementById('hamburger').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  const icon = this.querySelector('i');

  navLinks.classList.toggle('active');
  
  if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times'); // Change to cross icon
  } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars'); // Revert to hamburger icon
  }
});

