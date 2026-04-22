<?php
// filepath: /Users/mlaurie/Desktop/Portfolio-2026/DecadesThemeSite/processContact.php

// Get the user's IP address
$userIP = $_SERVER['REMOTE_ADDR'];

// Check if the form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect and sanitize form inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $subject = htmlspecialchars(trim($_POST['subject']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Validate inputs
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required. Please go back and fill out the form.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address. Please go back and enter a valid email.";
        exit;
    }

    // Log the form data and IP address (for demonstration purposes)
    $logEntry = "IP: $userIP\nName: $name\nEmail: $email\nSubject: $subject\nMessage: $message\n\n";
    file_put_contents('contact_log.txt', $logEntry, FILE_APPEND);

    // Display a success message
    echo "Thank you for contacting me! Your message has been received.";
} else {
    echo "Invalid request method.";
}
?>