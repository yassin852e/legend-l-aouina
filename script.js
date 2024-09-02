// JavaScript for responsive menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('header nav ul');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('');
    });
});

