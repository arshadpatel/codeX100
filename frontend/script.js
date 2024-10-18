document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    // Get values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const isEmailValid = emailPattern.test(email);

    // Validate password length
    const isPasswordValid = password.length >= 8;

    let isValid = true;

    if (!isEmailValid) {
        displayError(emailError, "Please enter a valid email address");
        isValid = false;
    }

    if (!isPasswordValid) {
        displayError(passwordError, "Password must be at least 8 characters");
        isValid = false;
    }

    // If the form is valid, proceed
    if (isValid) {
        // Here you can submit the form or do something like redirecting
        displaySuccess("Login successful!");
    }
});

// Function to display error messages with animation
function displayError(element, message) {
    element.textContent = message;
    element.style.display = 'block';
    element.style.opacity = 0;  // Start from transparent
    element.style.transition = 'opacity 0.5s ease-in-out';
    setTimeout(() => { element.style.opacity = 1; }, 100);  // Fade in
}

// Function to display success message or actions
function displaySuccess(message) {
    const successMessage = document.createElement('div');
    successMessage.classList.add('success');
    successMessage.textContent = message;
    document.body.appendChild(successMessage);

    successMessage.style.opacity = 0;
    successMessage.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
    successMessage.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        successMessage.style.opacity = 1;
        successMessage.style.transform = 'translateY(0)';
    }, 100);

    // Remove the success message after 2 seconds
    setTimeout(() => {
        successMessage.style.opacity = 0;
        successMessage.style.transform = 'translateY(-20px)';
        setTimeout(() => successMessage.remove(), 500);
    }, 2000);
}
