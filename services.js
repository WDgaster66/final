// Select the image container and the images
var imageContainer = document.getElementById("image-container");
var images = imageContainer.getElementsByTagName("img");

// Select the prev and next buttons
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

// Select the dots container and the dots
var dotsContainer = document.getElementById("dots-container");
var dots = dotsContainer.getElementsByClassName("dot");

// Define a variable for the current image index
var currentIndex = 0;

// Define a function that changes the image
function changeImage() {
  // Hide all images
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    dots[i].classList.remove("active");
  }
  
  // Increment the current index
  currentIndex++;

  // If the current index is larger than the number of images, reset it to zero
  if (currentIndex > images.length) {
    currentIndex = 1;
  }

  // Show the current image and highlight the corresponding dot
  images[currentIndex - 1].style.display = "block";
  dots[currentIndex -1].classList.add("active");
}

// Call the changeImage function every three seconds using setInterval
var timer = setInterval(changeImage,3000);

// Define a function that changes the image by user interaction
function changeImageByUser(n) {
  
   // Clear the timer
   clearInterval(timer);

   // Hide all images
   for (var i =0; i<images.length; i++) {
     images[i].style.display ="none";
     dots[i].classList.remove("active");
   }

   // Update the current index by adding n
   currentIndex += n;

   // If the current index is larger than the number of images, reset it to one
   if (currentIndex > images.length) {
     currentIndex = 1;
   }

   // If the current index is smaller than one, set it to the number of images
   if (currentIndex < 1) {
     currentIndex = images.length;
   }

   // Show the current image and highlight the corresponding dot
   images[currentIndex - 1].style.display = "block";
   dots[currentIndex - 1].classList.add("active");

   // Restart the timer
   timer = setInterval(changeImage,3000);
}

// Add a click event listener to the prev button
prevButton.addEventListener("click", function() {
  // Call the changeImageByUser function with -1 as argument
  changeImageByUser(-1);
});

// Add a click event listener to the next button
nextButton.addEventListener("click", function() {
  // Call the changeImageByUser function with 1 as argument
  changeImageByUser(1);
});

// Add a click event listener to each dot
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    // Get the index of the clicked dot
    var dotIndex = Array.prototype.indexOf.call(dots, this);

    // Call the changeImageByUser function with the difference between the dot index and the current index as argument
    changeImageByUser(dotIndex - currentIndex + 1);
  });
}
