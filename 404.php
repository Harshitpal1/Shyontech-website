<?php
$pageTitle       = '404 – Page Not Found';
$pageDescription = 'The page you are looking for could not be found.';
http_response_code(404);
require_once __DIR__ . '/includes/header.php';
?>

<section class="min-h-[calc(100vh-72px)] flex items-center bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 text-center py-20">
        <!-- Big number -->
        <div class="relative mb-6">
            <div class="text-[10rem] font-black leading-none gradient-text select-none">404</div>
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-32 h-32 rounded-full bg-primary/10 animate-ping"></div>
            </div>
        </div>

        <h1 class="section-title text-site-text dark:text-white mb-4">Page Not Found</h1>
        <p class="body-text text-gray-500 dark:text-gray-400 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div class="flex flex-wrap justify-center gap-4 mb-10">
            <a href="/index.php" class="btn-primary">
                <i class="fas fa-home text-sm"></i> Go Home
            </a>
            <a href="/contact.php" class="btn-secondary">
                <i class="fas fa-envelope text-sm"></i> Contact Us
            </a>
        </div>

        <!-- Quick links -->
        <div class="flex flex-wrap justify-center gap-3">
            <?php $links = [
                ['/services.php', 'Services'],
                ['/about.php', 'About'],
                ['/blog.php', 'Blog'],
            ];
            foreach ($links as [$href, $label]): ?>
            <a href="<?= $href ?>" class="text-sm text-primary hover:underline font-medium"><?= $label ?></a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
