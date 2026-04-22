document.addEventListener('DOMContentLoaded', function() {
    const themeButtons = document.querySelectorAll('.theme-button');
    const themeLink = document.getElementById('theme-link');

    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const theme = this.getAttribute('data-theme');
            themeLink.setAttribute('href', `css/${theme}.css`);
        });
    });
});

function changeTheme(theme) {
    const themeStylesheet = document.getElementById('themeStylesheet');
    themeStylesheet.href = `css/${theme}.css`;
}

// filepath: /Users/mlaurie/Desktop/Portfolio-2026/DecadesThemeSite/js/contactValidation.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        alert('All fields are required. Please fill out the form completely.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Form submitted successfully!');
    // You can add code here to send the form data to a server
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}