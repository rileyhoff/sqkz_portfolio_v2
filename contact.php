<?php
$query = $_SERVER['QUERY_STRING'] ?? '';
$params = [];
parse_str($query, $params);

$redirect = '/contact.html';
$redirectParams = [];

if (isset($params['art']) && ctype_digit((string) $params['art'])) {
    $redirectParams['art'] = $params['art'];
}

if (($params['email'] ?? '') === 'sent') {
    $redirectParams['status'] = 'sent';
}

if ($redirectParams) {
    $redirect .= '?' . http_build_query($redirectParams);
}

header('Location: ' . $redirect, true, 301);
exit;
