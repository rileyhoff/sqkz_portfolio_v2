<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit('Method not allowed');
}

$name = trim($_POST['name'] ?? '');
$email = strtolower(trim($_POST['email'] ?? ''));
$phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');
$artwork = trim($_POST['art'] ?? '');
$honeypot = trim($_POST['info'] ?? '');

$redirect = '/contact.html?status=error';

if ($honeypot !== '' || $name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: ' . $redirect);
    exit;
}

$name = str_replace(["\r", "\n"], '', $name);
$phone = str_replace(["\r", "\n"], '', $phone);
$phoneDigits = preg_replace('/\D/', '', $phone);

if ($phone !== '' && (
    !preg_match('/^\+?[0-9().\s-]+$/', $phone) ||
    strlen($phoneDigits) < 7 ||
    strlen($phoneDigits) > 15
)) {
    header('Location: ' . $redirect);
    exit;
}

if ($name === '' || $name === 'HenryDef') {
    header('Location: ' . $redirect);
    exit;
}

$emailBody = $message . "\n\n";
$emailBody .= "---\n" . $name . "\n";
$emailBody .= "E: " . $email . "\n";
$emailBody .= "P: " . $phone . "\n";
$emailBody .= "Artwork id: " . $artwork . "\n";

$headers = "From: inquiry@sqkz.art\r\n";
$subject = 'SQKZ - Art inquiry from ' . $name . '!';

if (mail('rileyhoff@outlook.com', $subject, $emailBody, $headers)) {
    header('Location: /contact.html?status=sent');
    exit;
}

header('Location: ' . $redirect);
exit;
