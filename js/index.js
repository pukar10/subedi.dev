document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar
    var navbar = document.querySelector('.navbar');

    // Add the large class initially
    navbar.classList.add('navbar-large');

    window.onscroll = function() {
        // When the scroll is more than 50px
        if (window.pageYOffset > 50) {
            navbar.classList.add('navbar-small');
            navbar.classList.remove('navbar-large');
        } else {
            navbar.classList.add('navbar-large');
            navbar.classList.remove('navbar-small');
        }
    };
});