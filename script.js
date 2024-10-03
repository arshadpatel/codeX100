// // JavaScript to handle future interactions

// // Placeholder for login function
// function login() {
//     alert('Login functionality coming soon!');
// }

// // Placeholder for sign-up function
// function signup() {
//     alert('Sign-up functionality coming soon!');
// }

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.getElementById('emailError').innerText = '';
    document.getElementById('messageError').innerText = '';

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let valid = true;

    // Simple email validation
    if (!validateEmail(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        valid = false;
    }

    // Message validation (must be at least 10 characters)
    if (message.length < 10) {
        document.getElementById('messageError').innerText = 'Message must be at least 10 characters long.';
        valid = false;
    }

    // If valid, display a success message
    if (valid) {
        alert('Message sent successfully!');
        document.getElementById('contact-form').reset(); // Reset form after submission
    }
});

// Simple email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


