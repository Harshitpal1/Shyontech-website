<?php
require_once __DIR__ . '/../includes/functions.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$page     = max(1, (int)($_GET['page'] ?? 1));
$perPage  = max(1, min(24, (int)($_GET['per_page'] ?? 6)));
$search   = sanitize($_GET['search'] ?? '');
$category = sanitize($_GET['category'] ?? '');

// Single post
if (!empty($_GET['id'])) {
    $id = (int)$_GET['id'];
    try {
        $db   = getDB();
        $stmt = $db->prepare('SELECT * FROM blog_posts WHERE id = :id AND is_published = 1');
        $stmt->execute([':id' => $id]);
        $post = $stmt->fetch();
        if (!$post) {
            jsonResponse(['success' => false, 'message' => 'Post not found.'], 404);
        }
        // Related posts
        $rel  = $db->prepare('SELECT id, title, featured_image, author, published_at, category FROM blog_posts WHERE id != :id AND is_published = 1 ORDER BY published_at DESC LIMIT 3');
        $rel->execute([':id' => $id]);
        $related = $rel->fetchAll();
        jsonResponse(['success' => true, 'post' => $post, 'related' => $related]);
    } catch (Exception $e) {
        jsonResponse(['success' => false, 'message' => 'Failed to load post.'], 500);
    }
}

try {
    $result = getBlogPosts($page, $perPage, $search, $category);
    $result['success'] = true;
    jsonResponse($result);
} catch (Exception $e) {
    jsonResponse(['success' => false, 'message' => 'Failed to load blog posts.'], 500);
}
