// Select the element where you want to display the user's location
var location = document.getElementById("location");

// Define a function that gets the user's location
function getLocation() {
  // Check if the geolocation object is supported by the browser
  if (navigator.geolocation) {
    // If supported, get the user's location using the getCurrentPosition() method
    navigator.geolocation.getCurrentPosition(showLocation);
  } else {
    // If not supported, display an error message
    location.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Define a function that displays the user's location
function showLocation(position) {
  // Get the latitude and longitude from the position object
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  // Display the latitude and longitude in the element
  location.innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

// Call the getLocation function
getLocation();
