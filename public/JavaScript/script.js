document.addEventListener('DOMContentLoaded', function() {
    const demoButton = document.getElementById('demoButton');
    const formContainer = document.getElementById('formContainer');
    const closeFormButton = document.getElementById('closeForm');
    const contentContainer = document.querySelector('.content-container');
    const body = document.body;

    demoButton.addEventListener('click', function() {
        formContainer.style.display = 'block';
        contentContainer.style.opacity = '0.5';
        contentContainer.style.pointerEvents = 'none'; // Disable clicks on content
        body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeFormButton.addEventListener('click', function() {
        formContainer.style.display = 'none';
        contentContainer.style.opacity = '1';
        contentContainer.style.pointerEvents = 'auto'; // Enable clicks on content
        body.style.overflow = 'auto'; // Enable scrolling
    });
});


let slideIndex = 1;
showSlides(slideIndex);

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(function() {
  slideIndex++;
  if (slideIndex > document.getElementsByClassName("slide").length) {
      slideIndex = 1;
  }
  showSlides(slideIndex);
}, 2000);


document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  const carousel = document.querySelector(".carousel");

  let scrollPosition = 0;
  const cardWidth = document.querySelector(".card").offsetWidth; // Assuming all cards have the same width

  // Disable the prev button initially since there's no left portion to show
  prevButton.disabled = true;

  // Function to check and update button states based on scroll position
  function updateButtonStates() {
      if (scrollPosition <= 0) {
          prevButton.disabled = true;
      } else {
          prevButton.disabled = false;
      }

      if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
          nextButton.disabled = true;
      } else {
          nextButton.disabled = false;
      }
  }

  // Event listener for the prev button
  prevButton.addEventListener("click", function() {
      // Calculate the maximum scrollable distance to the left
      const maxScrollLeft = 0;

      // Decrease scrollPosition by the width of one card
      scrollPosition -= cardWidth;
      if (scrollPosition < maxScrollLeft) {
          scrollPosition = maxScrollLeft;
      }
      carousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
      });

      // Update button states based on scroll position
      updateButtonStates();
  });


  // Event listener for the next button
  nextButton.addEventListener("click", function() {
      // Calculate the maximum scrollable distance to the right
      const maxScrollRight = carousel.scrollWidth - carousel.clientWidth;

      // Increase scrollPosition by the width of one card
      scrollPosition += cardWidth;
      if (scrollPosition > maxScrollRight) {
          scrollPosition = maxScrollRight;
      }
      carousel.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
      });

      // Update button states based on scroll position
      updateButtonStates();
  });

  // Handle initial button states based on scroll position
  updateButtonStates();

  // Event listener for scrolling within the carousel
  carousel.addEventListener("scroll", function() {
      // Update scrollPosition based on carousel's scrollLeft
      scrollPosition = carousel.scrollLeft;

      // Update button states whenever the carousel scrolls
      updateButtonStates();
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev-1");
    const nextButton = document.querySelector(".next-1");
    const carousel = document.querySelector(".carousel-1");
  
    let scrollPosition = 0;
    const cardWidth = document.querySelector(".card-1").offsetWidth;
  
    prevButton.disabled = true;
  
    function updateButtonStates() {
        if (scrollPosition <= 0) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }
  
        if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    }
  
    prevButton.addEventListener("click", function() {
        const maxScrollLeft = 0;
  
        scrollPosition -= cardWidth;
        if (scrollPosition < maxScrollLeft) {
            scrollPosition = maxScrollLeft;
        }
        carousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
  
        updateButtonStates();
    });
  
  
    nextButton.addEventListener("click", function() {
        const maxScrollRight = carousel.scrollWidth - carousel.clientWidth;
  
        scrollPosition += cardWidth;
        if (scrollPosition > maxScrollRight) {
            scrollPosition = maxScrollRight;
        }
        carousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
  
        updateButtonStates();
    });
  
    updateButtonStates();
  
    carousel.addEventListener("scroll", function() {
        scrollPosition = carousel.scrollLeft;
  
        updateButtonStates();
    });
  });