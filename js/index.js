document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const closeButton = document.querySelector('.close-button');
    const sideMenu = document.querySelector('.side-menu');
  
    menuButton.addEventListener('click', function() {
      sideMenu.style.left = '0'; // Show the menu
    });
  
    closeButton.addEventListener('click', function() {
      sideMenu.style.left = '-100%'; // Hide the menu
    });
  });