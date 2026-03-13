<?php
require_once __DIR__ . '/includes/functions.php';

$id   = (int)($_GET['id'] ?? 0);
$post = null;
$related = [];

if ($id > 0) {
    try {
        $db   = getDB();
        $stmt = $db->prepare('SELECT * FROM blog_posts WHERE id = :id AND is_published = 1');
        $stmt->execute([':id' => $id]);
        $post = $stmt->fetch();

        if ($post) {
            $rel  = $db->prepare('SELECT id, title, featured_image, author, published_at, category, excerpt FROM blog_posts WHERE id != :id AND is_published = 1 ORDER BY published_at DESC LIMIT 3');
            $rel->execute([':id' => $id]);
            $related = $rel->fetchAll();
        }
    } catch (Exception $e) {}
}

if (!$post) {
    header('Location: /404.php');
    exit;
}

$pageTitle       = $post['title'];
$pageDescription = $post['excerpt'];
require_once __DIR__ . '/includes/header.php';
?>

<!-- ── Post Header ─────────────────────────────────────────── -->
<section class="py-14 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div class="max-w-3xl mx-auto px-4 sm:px-6">
        <div class="mb-6">
            <a href="/blog.php" class="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <i class="fas fa-arrow-left text-xs"></i> Back to Blog
            </a>
        </div>
        <span class="badge badge-primary mb-4"><?= htmlspecialchars($post['category']) ?></span>
        <h1 class="section-title text-site-text dark:text-white mb-5 text-balance"><?= htmlspecialchars($post['title']) ?></h1>
        <div class="flex flex-wrap items-center gap-5 text-sm text-gray-500 dark:text-gray-400">
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                    <?= strtoupper(substr($post['author'], 0, 1)) ?>
                </div>
                <span><?= htmlspecialchars($post['author']) ?></span>
            </div>
            <span class="flex items-center gap-1.5"><i class="fas fa-calendar text-xs"></i><?= formatDate($post['published_at']) ?></span>
            <span class="flex items-center gap-1.5"><i class="fas fa-clock text-xs"></i><?= htmlspecialchars($post['read_time'] ?? '5 min read') ?></span>
        </div>
    </div>
</section>

<!-- ── Post Content ─────────────────────────────────────────── -->
<section class="section bg-background dark:bg-gray-950">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-10">

            <!-- Article -->
            <article class="lg:col-span-2">
                <?php if (!empty($post['featured_image'])): ?>
                <img src="<?= htmlspecialchars($post['featured_image']) ?>"
                     alt="<?= htmlspecialchars($post['title']) ?>"
                     class="w-full h-72 object-cover rounded-2xl mb-8 shadow-md"
                     onerror="this.style.display='none'" />
                <?php endif; ?>

                <div class="prose prose-lg prose-gray dark:prose-invert max-w-none">
                    <?php
                    // Content is admin-authored HTML stored in the database.
                    // Strip script/iframe tags as a defence-in-depth measure.
                    $safeContent = preg_replace(
                        '#<(script|iframe|object|embed|form)[^>]*>.*?</\1>#is',
                        '',
                        $post['content']
                    );
                    echo $safeContent;
                    ?>
                </div>

                <?php if (!empty($post['tags'])): ?>
                <div class="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <h4 class="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Tags:</h4>
                    <div class="flex flex-wrap gap-2">
                        <?php foreach (explode(',', $post['tags']) as $tag): ?>
                        <span class="badge badge-primary"><?= htmlspecialchars(trim($tag)) ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endif; ?>

                <!-- Author card -->
                <div class="mt-10 card p-6 flex items-start gap-5">
                    <div class="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
                        <?= strtoupper(substr($post['author'], 0, 1)) ?>
                    </div>
                    <div>
                        <div class="font-bold text-site-text dark:text-white mb-1"><?= htmlspecialchars($post['author']) ?></div>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            A member of the Shyontech expert team, sharing knowledge to help businesses and developers grow in the digital era.
                        </p>
                    </div>
                </div>
            </article>

            <!-- Sidebar -->
            <aside class="space-y-8">
                <!-- Related Posts -->
                <?php if (!empty($related)): ?>
                <div class="card p-5">
                    <h3 class="font-bold text-site-text dark:text-white mb-4 text-base">Related Articles</h3>
                    <div class="space-y-4">
                        <?php foreach ($related as $rel): ?>
                        <a href="/blog-single.php?id=<?= $rel['id'] ?>" class="flex items-start gap-3 group">
                            <div class="w-14 h-14 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 overflow-hidden">
                                <?php if (!empty($rel['featured_image'])): ?>
                                <img src="<?= htmlspecialchars($rel['featured_image']) ?>" alt="" class="w-full h-full object-cover" onerror="this.style.display='none'" />
                                <?php else: ?>
                                <div class="w-full h-full flex items-center justify-center text-primary text-lg"><i class="fas fa-newspaper"></i></div>
                                <?php endif; ?>
                            </div>
                            <div class="flex-1 min-w-0">
                                <p class="text-sm font-medium text-site-text dark:text-white group-hover:text-primary transition-colors line-clamp-2"><?= htmlspecialchars($rel['title']) ?></p>
                                <p class="text-xs text-gray-400 mt-0.5"><?= htmlspecialchars(formatDate($rel['published_at'])) ?></p>
                            </div>
                        </a>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endif; ?>

                <!-- CTA -->
                <div class="card p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-0 text-center">
                    <i class="fas fa-rocket text-3xl text-primary mb-3 block"></i>
                    <h4 class="font-bold text-site-text dark:text-white mb-2">Ready to Start?</h4>
                    <p class="text-xs text-gray-500 dark:text-gray-400 mb-4">Let's build something amazing together.</p>
                    <a href="/contact.php" class="btn-primary w-full justify-center text-sm">Contact Us</a>
                </div>
            </aside>
        </div>
    </div>
</section>

<style>
.prose h2 { font-size: 1.5rem; font-weight: 700; margin: 2rem 0 1rem; color: var(--text); }
.dark .prose h2 { color: #E2E8F0; }
.prose h3 { font-size: 1.25rem; font-weight: 600; margin: 1.5rem 0 .75rem; color: var(--text); }
.dark .prose h3 { color: #E2E8F0; }
.prose p { margin-bottom: 1.25rem; color: #475569; font-size: 1rem; line-height: 1.8; }
.dark .prose p { color: #94A3B8; }
.prose ul, .prose ol { margin: 1rem 0 1.5rem 1.5rem; }
.prose li { margin-bottom: .5rem; color: #475569; line-height: 1.7; }
.dark .prose li { color: #94A3B8; }
.prose code { background: #F1F5F9; color: var(--primary); padding: .15rem .4rem; border-radius: .3rem; font-size: .875em; }
.dark .prose code { background: #334155; }
.prose strong { font-weight: 600; color: var(--text); }
.dark .prose strong { color: #E2E8F0; }
</style>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
