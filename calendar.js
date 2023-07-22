// Select the element where you want to display the clock
var clock = document.getElementById("clock");

// Define a function that updates the clock
function updateClock() {
  // Create a new Date object and get the current date and time
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  // Format the hours, minutes, and seconds with leading zeros if needed
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Display the clock in the element
  clock.textContent = hours + ":" + minutes + ":" + seconds;
}

// Call the updateClock function once
updateClock();

// Call the updateClock function every second using setInterval
setInterval(updateClock, 1000);
