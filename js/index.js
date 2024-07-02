document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sideMenu = document.querySelector('.side-menu');
  
    // Show the menu when the menu button is clicked
    menuButton.addEventListener('click', function() {
      sideMenu.style.left = '0'; // Show the menu
    });
  
    // Hide the menu when the close button is clicked
    closeButton.addEventListener('click', function() {
      sideMenu.style.left = '-100%'; // Hide the menu
    });

    // Show the answer when the question is clicked
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', () => {
            const answer = item.nextElementSibling;
            if (answer.style.display === "none" || !answer.style.display) {
                answer.style.display = "block";
                answer.style.animation = "fadeIn 0.5s ease-in-out";
            } else {
                answer.style.display = "none";
            }
        });
    });
  });