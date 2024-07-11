document.addEventListener('DOMContentLoaded', function() {
    // Side menu --
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
    
    // Slideshow -- 
    var slideIndex = 0;
     showSlides(); // Call with initial index

    function plusSlides(n) {
        slideIndex += n; // Update slideIndex based on n
        if (slideIndex >= document.getElementsByClassName("mySlides").length) {
            slideIndex = 0; // Wrap to first slide if out of bounds
        } else if (slideIndex < 0) {
            slideIndex = document.getElementsByClassName("mySlides").length - 1; // Wrap to last slide if out of bounds
        }
        showSlides(slideIndex); // Show the new slide
    }

    function currentSlide(n) {
	    showSlides(slideIndex = n);
    }

    function showSlides() {
	    var i;
	    var slides = document.getElementsByClassName("mySlides");
	    var dots = document.getElementsByClassName("dot");
	    for (i = 0; i < slides.length; i++) {
		    slides[i].style.display = "none";  
	    }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.display = "block";  
        dots[slideIndex].className += " active";
    }
    // Attach events to prev/next buttons
    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });
});