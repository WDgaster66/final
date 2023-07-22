function validateForm() { // Get form field values var name = document.getElementById(“myName”).value.trim(); var email = document.getElementById(“myEmail”).value.trim(); var contactReason = document.getElementById(“contactReason”).value.trim(); var phone = document.getElementById(“myPhone”).value.trim(); var address = document.getElementById(“myAddress”).value.trim(); var comments = document.getElementById(“myComments”).value.trim();
// Check if name is empty
if (name == "") {
  alert("Please enter your name.");
  return false;
}

// Check if email is empty or not in a valid format
var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (email == "" || !emailRegex.test(email)) {
  alert("Please enter a valid email address.");
  return false;
}

// Check if contact reason is empty
if (contactReason == "") {
  alert("Please enter a contact reason.");
  return false;
}

// Check if phone is not in a valid format
var phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
if (phone != "" && !phoneRegex.test(phone)) {
  alert("Please enter a valid phone number in the format 555-555-5555.");
  return false;
}

// Check if comments are empty
if (comments == "") {
  alert("Please enter your comments.");
  return false;
}

// If all conditions are met, return true
return true;
}

