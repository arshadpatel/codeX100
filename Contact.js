document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear any previous errors
    document.getElementById('emailError').textContent = '';
    document.getElementById('emailError').classList.remove('show');
    document.getElementById('messageError').textContent = '';
    document.getElementById('messageError').classList.remove('show');

    // Get form values
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let isValid = true;

    // Validate Email
    if (!validateEmail(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').classList.add('show');
        isValid = false;
    }

    // Validate Message
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message should be at least 10 characters long.';
        document.getElementById('messageError').classList.add('show');
        isValid = false;
    }

    if (isValid) {
        alert('Thank you for contacting us! We will get back to you soon.');
        document.getElementById('contactForm').reset(); // Reset form after submission
    }
});

// Helper function to validate email format
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
