<?php
require_once __DIR__ . '/../includes/functions.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    jsonResponse(['success' => false, 'message' => 'Method not allowed.'], 405);
}

$name    = sanitize($_POST['name']    ?? '');
$email   = sanitize($_POST['email']   ?? '');
$phone   = sanitize($_POST['phone']   ?? '');
$subject = sanitize($_POST['subject'] ?? '');
$message = sanitize($_POST['message'] ?? '');

// Validation
$errors = [];

if (mb_strlen($name) < 2) {
    $errors['name'] = 'Name must be at least 2 characters.';
}
if (!validateEmail($email)) {
    $errors['email'] = 'Please enter a valid email address.';
}
if ($phone !== '' && !preg_match('/^[\d\s\+\-\(\)]{7,20}$/', $phone)) {
    $errors['phone'] = 'Please enter a valid phone number.';
}
if (mb_strlen($subject) < 3) {
    $errors['subject'] = 'Subject must be at least 3 characters.';
}
if (mb_strlen($message) < 10) {
    $errors['message'] = 'Message must be at least 10 characters.';
}

if (!empty($errors)) {
    jsonResponse(['success' => false, 'errors' => $errors], 422);
}

try {
    $db   = getDB();
    $stmt = $db->prepare('
        INSERT INTO contact_submissions (name, email, phone, subject, message, ip_address, created_at)
        VALUES (:name, :email, :phone, :subject, :message, :ip, NOW())
    ');
    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':phone'   => $phone,
        ':subject' => $subject,
        ':message' => $message,
        ':ip'      => $_SERVER['REMOTE_ADDR'] ?? '',
    ]);

    jsonResponse(['success' => true, 'message' => 'Your message has been received. We will contact you shortly.']);
} catch (Exception $e) {
    jsonResponse(['success' => false, 'message' => 'Failed to save your message. Please try again.'], 500);
}
