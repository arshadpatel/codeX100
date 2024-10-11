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
document.getElementById('hamburger').addEventListener('click', function () {
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

//login 

const loginModal = document.getElementById('loginModal');
const overlay = document.getElementById('overlay');
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    overlay.style.display = 'block';
});

overlay.addEventListener('click', () => {
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
});

// Email validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function handleLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Empty ?
    if (!email || !password) {
        alert('Email and password cannot be empty!');
        return;
    }

    // Email Validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address!');
        return;
    }

    // password length Validation
    if (password.length < 8) {
        alert('Password must be at least 8 characters long!');
        return;
    }

    // Success
    alert('Login successful!');

    // Close modal
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
}

