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

$returnPage = $_POST['return_to'] ?? 'index.html';
if (!in_array($returnPage, ['index.html', 'contact.html'], true)) {
    $returnPage = 'index.html';
}

$artParam = ctype_digit($artwork) ? $artwork : '';
$redirect = static function (string $status) use ($returnPage, $artParam): void {
    $query = ['status' => $status];
    if ($returnPage === 'contact.html' && $artParam !== '') {
        $query['art'] = $artParam;
    }

    header('Location: ' . $returnPage . '?' . http_build_query($query), true, 303);
    exit;
};

if ($honeypot !== '' || $name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $redirect('error');
}

$name = str_replace(["\r", "\n"], '', $name);
$phone = str_replace(["\r", "\n"], '', $phone);
$phoneDigits = preg_replace('/\D/', '', $phone);

if ($phone !== '' && (
    !preg_match('/^\+?[0-9().\s-]+$/', $phone) ||
    strlen($phoneDigits) < 7 ||
    strlen($phoneDigits) > 15
)) {
    $redirect('error');
}

if ($name === '' || $name === 'HenryDef') {
    $redirect('error');
}

$emailBody = $message . "\n\n";
$emailBody .= "---\n" . $name . "\n";
$emailBody .= "Email: " . $email . "\n";
$emailBody .= "Phone: " . $phone . "\n";
$emailBody .= "Artwork id: " . $artwork . "\n";

$headers = "From: inquiry@sqkz.art\r\n";
$subject = 'SQKZ - Art inquiry from ' . $name . '!';

if (mail('rileyhoff@outlook.com', $subject, $emailBody, $headers)) {
    $redirect('sent');
}

$redirect('error');
