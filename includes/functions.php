<?php
require_once __DIR__ . '/../config/db.php';

function sanitize(string $input): string {
    return htmlspecialchars(strip_tags(trim($input)), ENT_QUOTES, 'UTF-8');
}

function truncate(string $text, int $length = 150): string {
    $text = strip_tags($text);
    if (mb_strlen($text) <= $length) return $text;
    return mb_substr($text, 0, $length) . '…';
}

function timeAgo(string $datetime): string {
    $now  = new DateTime();
    $then = new DateTime($datetime);
    $diff = $now->diff($then);

    if ($diff->y > 0) return $diff->y . ' year' . ($diff->y > 1 ? 's' : '') . ' ago';
    if ($diff->m > 0) return $diff->m . ' month' . ($diff->m > 1 ? 's' : '') . ' ago';
    if ($diff->d > 0) return $diff->d . ' day' . ($diff->d > 1 ? 's' : '') . ' ago';
    if ($diff->h > 0) return $diff->h . ' hour' . ($diff->h > 1 ? 's' : '') . ' ago';
    if ($diff->i > 0) return $diff->i . ' minute' . ($diff->i > 1 ? 's' : '') . ' ago';
    return 'Just now';
}

function formatDate(string $datetime, string $format = 'M j, Y'): string {
    return (new DateTime($datetime))->format($format);
}

function jsonResponse(array $data, int $status = 200): void {
    http_response_code($status);
    header('Content-Type: application/json');
    echo json_encode($data);
    exit;
}

function validateEmail(string $email): bool {
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function getServices(string $category = '', int $limit = 0): array {
    $db = getDB();
    $sql = 'SELECT * FROM services WHERE is_active = 1';
    $params = [];
    if ($category !== '') {
        $sql .= ' AND category = :category';
        $params[':category'] = $category;
    }
    $sql .= ' ORDER BY sort_order ASC, id ASC';
    if ($limit > 0) {
        $stmt = $db->prepare($sql . ' LIMIT :limit');
        $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
        foreach ($params as $key => $value) {
            $stmt->bindValue($key, $value);
        }
        $stmt->execute();
        return $stmt->fetchAll();
    }
    $stmt = $db->prepare($sql);
    $stmt->execute($params);
    return $stmt->fetchAll();
}

function getBlogPosts(int $page = 1, int $perPage = 6, string $search = '', string $category = ''): array {
    $db = getDB();
    $offset = ($page - 1) * $perPage;
    $where  = 'WHERE is_published = 1';
    $params = [];

    if ($search !== '') {
        $where .= ' AND (title LIKE :search OR excerpt LIKE :search OR content LIKE :search)';
        $params[':search'] = '%' . $search . '%';
    }
    if ($category !== '') {
        $where .= ' AND category = :category';
        $params[':category'] = $category;
    }

    $countStmt = $db->prepare("SELECT COUNT(*) FROM blog_posts $where");
    $countStmt->execute($params);
    $total = (int)$countStmt->fetchColumn();

    $params[':limit']  = $perPage;
    $params[':offset'] = $offset;
    $stmt = $db->prepare("SELECT * FROM blog_posts $where ORDER BY published_at DESC LIMIT :limit OFFSET :offset");
    $stmt->bindValue(':limit',  $perPage, PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset,  PDO::PARAM_INT);
    foreach ($params as $key => $value) {
        if ($key !== ':limit' && $key !== ':offset') {
            $stmt->bindValue($key, $value);
        }
    }
    $stmt->execute();
    $posts = $stmt->fetchAll();

    return [
        'posts'      => $posts,
        'total'      => $total,
        'page'       => $page,
        'per_page'   => $perPage,
        'total_pages' => ceil($total / $perPage),
    ];
}

function getTeamMembers(): array {
    $db   = getDB();
    $stmt = $db->query('SELECT * FROM team_members WHERE is_active = 1 ORDER BY sort_order ASC, id ASC');
    return $stmt->fetchAll();
}

function getSiteConfig(): array {
    return [
        'site_name'    => 'Shyontech',
        'company_name' => 'Shyontech Software Technology India Pvt. Ltd.',
        'tagline'      => 'Empowering Businesses with Innovative IT Solutions',
        'email'        => 'info@shyontech.com',
        'phone'        => '+91 98765 43210',
        'address'      => 'H 50, Govind Puri, Gwalior, Madhya Pradesh 474001',
        'founded'      => '2018',
        'website'      => 'http://www.pdpandey.com',
        'linkedin'     => 'https://www.linkedin.com/company/shyontech',
        'twitter'      => '#',
        'facebook'     => '#',
        'instagram'    => '#',
    ];
}
