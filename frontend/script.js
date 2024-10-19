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
})
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting by default

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusMessage = document.getElementById('statusMessage');

    // Clear previous status messages
    statusMessage.textContent = '';

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        statusMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    // Validate message
    if (message.trim() === "") {
        statusMessage.textContent = 'Please enter a message.';
        return;
    }

    // If validation passes, simulate form submission
    statusMessage.style.color = 'green';
    statusMessage.textContent = 'Form submitted successfully!';

    // Simulate backend submission
    console.log('Form Data:', {
        name: document.getElementById('name').value,
        email: email,
        message: message
    });
});

