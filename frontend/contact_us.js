document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous errors
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";
    document.getElementById("formSuccess").style.display = "none";

    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let formSuccess = document.getElementById("formSuccess");

    // Email validation
    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        emailError.style.display = "block";
        return;
    }

    // Message validation
    if (message.trim() === "") {
        messageError.textContent = "Message cannot be empty.";
        messageError.style.display = "block";
        return;
    }

    // Simulate form submission
    formSuccess.textContent = "Thank you for your message!";
    formSuccess.style.display = "block";

    // Send the form data to the backend
    const feedbackData = {
        email: email,
        message: message
    };

    fetch('/sendFeedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            formSuccess.textContent = "Thank you for your message! We will get back to you soon.";
        } else {
            formSuccess.textContent = "There was an issue submitting your feedback. Please try again.";
        }
    })
    .catch(error => {
        formSuccess.textContent = "Error sending feedback. Please try again.";
        console.error("Error:", error);
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
