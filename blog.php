<?php
$pageTitle       = 'Blog';
$pageDescription = 'Stay updated with Shyontech\'s blog — articles on web development, digital marketing, Android, PHP, Laravel, Python, and IT career tips.';
require_once __DIR__ . '/includes/header.php';
?>

<!-- ── Page Header ─────────────────────────────────────────── -->
<section class="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
            <span class="badge badge-primary mb-4">Our Blog</span>
            <h1 class="section-title text-site-text dark:text-white mb-4">Insights &amp; Tutorials</h1>
            <p class="body-text text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                Expert articles on web development, digital marketing, mobile apps, and IT career guidance.
            </p>
        </div>
        <!-- Search -->
        <div class="max-w-lg mx-auto">
            <div class="relative">
                <i class="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                <input type="search" id="blog-search" placeholder="Search articles…"
                       class="form-input pl-11 pr-4" autocomplete="off" />
            </div>
        </div>
    </div>
</section>

<!-- ── Blog Grid ───────────────────────────────────────────── -->
<section class="section bg-background dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="blog-grid" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <div class="flex justify-center py-16 col-span-full"><div class="spinner"></div></div>
        </div>

        <!-- Pagination -->
        <div id="blog-pagination" class="flex flex-wrap justify-center gap-2 mt-12"></div>
    </div>
</section>

<!-- ── Newsletter CTA ─────────────────────────────────────── -->
<section class="section-sm bg-white dark:bg-gray-900">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <h3 class="subheading text-site-text dark:text-white mb-2">Stay in the Loop</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">Get the latest articles and company news delivered to your inbox.</p>
        <div class="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="Your email address" class="form-input flex-1" />
            <button class="btn-primary whitespace-nowrap">Subscribe <i class="fas fa-paper-plane text-xs"></i></button>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
