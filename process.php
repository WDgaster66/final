<?php 
// Get the form data 
$name = $_POST[‘myName’]; $email = $_POST[‘myEmail’]; $source = $_POST[‘contactReason’]; $phone = $_POST[‘myPhone’]; $address = $_POST[‘myAddress’]; $comments = $_POST[‘myComments’];

// Validate and sanitize the email address 
if (filter_var($email, FILTER_VALIDATE_EMAIL)) { $email = filter_var($email, FILTER_SANITIZE_EMAIL); } else { $email = “Invalid email address”; }

// Trim and escape the other form fields 
$name = trim($name); $name = htmlspecialchars($name); $source = trim($source); $source = htmlspecialchars($source); $phone = trim($phone); $phone = htmlspecialchars($phone); $address = trim($address); $address = htmlspecialchars($address); $comments = trim($comments); $comments = htmlspecialchars($comments);

// Print out the form data 
echo “<h1>Thank you for contacting us</h1>”; echo “<p>Your name: $name</p>”; echo “<p>Your email: $email</p>”; echo “<p>Contact reason: $source</p>”; echo “<p>Your phone: $phone</p>”; echo “<p>Your address: $address</p>”; echo “<p>Your comments: $comments</p>”; 
?>