// Select the video and the button elements 
var video = document.getElementById("movie"); 
var button = document.getElementById("mute-button");

// Add a click event listener to the button 
button.addEventListener("click", function() { 
  // Check if the video is muted or not 
  if (video.muted) { 
    // If muted, unmute the video and change the button text 
    video.muted = false; 
    button.textContent = "Mute"; 
  } else { 
    // If not muted, mute the video and change the button text 
    video.muted = true; 
    button.textContent = "Unmute"; 
  } 
});

// Select the video, the slider, and the span elements 
var video = document.getElementById("movie"); 
var slider = document.getElementById("speed-slider"); 
var span = document.getElementById("speed-value");

// Add an input event listener to the slider 
slider.addEventListener("input", function() { 
  // Get the value of the slider 
  var speed = slider.value; 
  // Set the playback rate of the video to the value of the slider 
  video.playbackRate = speed; 
  // Display the value of the slider in the span element 
  span.textContent = speed + "x"; 
});
