<?php
require_once __DIR__ . '/../includes/functions.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$category = sanitize($_GET['category'] ?? '');
$limit    = max(0, min(50, (int)($_GET['limit'] ?? 0)));

try {
    $services = getServices($category, $limit);
    jsonResponse([
        'success'  => true,
        'services' => $services,
        'total'    => count($services),
    ]);
} catch (Exception $e) {
    jsonResponse(['success' => false, 'message' => 'Failed to load services.'], 500);
}
