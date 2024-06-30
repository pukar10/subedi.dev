// js/index.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('menu-toggle');
    const body = document.body;

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('menu-open');
    });
});