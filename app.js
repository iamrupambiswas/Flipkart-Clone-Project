//For the image slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//To put the current year in the footer section
var currentYear = new Date().getFullYear();
document.getElementById("year").textContent = currentYear;


// Click event on image redirecting to the official website of Flipkart
function image(img) {
  var src = img.src;
  window.open("https://www.flipkart.com/");
}

