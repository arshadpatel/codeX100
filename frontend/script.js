// JavaScript to handle future interactions

// Placeholder for login function
function login() {
    alert('Login functionality coming soon!');
}

// Placeholder for sign-up function
function signup() {
    alert('Sign-up functionality coming soon!');
}

// Add functionality to hamburger menu
// Select the hamburger icon and navigation links
document.getElementById('hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    const icon = this.querySelector('i');

    // Toggle the 'active' class on the navigation links
    navLinks.classList.toggle('active');
    
    // Change the icon based on the active state
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times'); // Change to cross icon
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars'); // Revert to hamburger icon
    }
});

// Ensure the hamburger icon exists before adding the event listener
const hamburgerIcon = document.getElementById('hamburger');
if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        const icon = this.querySelector('i');

        // Toggle the 'active' class on the navigation links
        navLinks.classList.toggle('active');
        
        // Change the icon based on the active state
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Change to cross icon
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars'); // Revert to hamburger icon
        }
    });
}
