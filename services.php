<?php
$pageTitle       = 'Services';
$pageDescription = 'Explore Shyontech\'s full range of IT services — web development, WordPress, Laravel, Android, digital marketing, IT training, and more.';
require_once __DIR__ . '/includes/header.php';
?>

<!-- ── Page Header ─────────────────────────────────────────── -->
<section class="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="badge badge-primary mb-4">What We Offer</span>
        <h1 class="section-title text-site-text dark:text-white mb-4">Our Services</h1>
        <p class="body-text text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            End-to-end IT solutions crafted for businesses of all sizes — from startups to established enterprises.
        </p>
    </div>
</section>

<!-- ── Services Grid ───────────────────────────────────────── -->
<section class="section bg-background dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Category Filters -->
        <div id="category-filters" class="flex flex-wrap gap-3 justify-center mb-10">
            <div class="spinner"></div>
        </div>

        <!-- Grid -->
        <div id="services-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex justify-center py-16 col-span-full"><div class="spinner"></div></div>
        </div>
    </div>
</section>

<!-- ── Process Section ──────────────────────────────────────── -->
<section class="section bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
            <span class="badge badge-secondary mb-4">How We Work</span>
            <h2 class="section-title text-site-text dark:text-white mb-4">Our Process</h2>
            <p class="body-text text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                A transparent, collaborative process ensures your project is delivered on time and exceeds expectations.
            </p>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <?php
            $steps = [
                ['num' => '01', 'icon' => 'fas fa-comments', 'title' => 'Discovery',     'desc' => 'We start with a deep-dive consultation to understand your goals, audience, and technical requirements.'],
                ['num' => '02', 'icon' => 'fas fa-drafting-compass', 'title' => 'Planning & Design', 'desc' => 'Wireframes, architecture diagrams, and a detailed project plan are shared for your approval before we write a line of code.'],
                ['num' => '03', 'icon' => 'fas fa-code',      'title' => 'Development',  'desc' => 'Our developers build in agile sprints with weekly demos, keeping you involved and in control throughout.'],
                ['num' => '04', 'icon' => 'fas fa-rocket',    'title' => 'Launch & Support', 'desc' => 'After rigorous QA testing, we launch and provide dedicated post-launch support and maintenance.'],
            ];
            foreach ($steps as $i => $s): ?>
            <div class="text-center reveal" style="transition-delay: <?= $i * 100 ?>ms">
                <div class="relative mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-5">
                    <i class="<?= $s['icon'] ?> text-white text-xl"></i>
                    <span class="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 text-primary text-xs font-bold flex items-center justify-center shadow"><?= $s['num'] ?></span>
                </div>
                <h4 class="font-bold text-site-text dark:text-white mb-2"><?= $s['title'] ?></h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"><?= $s['desc'] ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ── CTA ──────────────────────────────────────────────────── -->
<section class="section bg-gradient-to-r from-primary via-secondary to-accent">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2 class="section-title text-white mb-4">Need a Custom Solution?</h2>
        <p class="text-blue-100 body-text mb-8">Tell us about your project and we'll put together a tailored proposal for you.</p>
        <a href="/contact.php"
           class="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            Request a Quote <i class="fas fa-arrow-right text-sm"></i>
        </a>
    </div>
</section>

<!-- ── Service Modal ───────────────────────────────────────── -->
<div id="service-modal" class="modal-overlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div class="modal-content p-0 overflow-hidden">
        <div class="bg-gradient-to-r from-primary to-secondary p-6 text-white">
            <div class="flex items-start justify-between gap-4">
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                        <i id="modal-icon"></i>
                    </div>
                    <div>
                        <span id="modal-category" class="text-xs font-semibold uppercase tracking-widest text-blue-200"></span>
                        <h3 id="modal-title" class="text-xl font-bold"></h3>
                    </div>
                </div>
                <button id="modal-close" aria-label="Close"
                        class="w-9 h-9 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors flex-shrink-0">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="p-6">
            <div id="modal-description" class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6"></div>
            <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <div class="text-xs text-gray-400 mb-1">Price Range</div>
                    <div id="modal-price" class="font-semibold text-primary text-sm"></div>
                </div>
                <div class="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4">
                    <div class="text-xs text-gray-400 mb-1">Duration</div>
                    <div id="modal-duration" class="font-semibold text-secondary text-sm"></div>
                </div>
            </div>
            <a href="/contact.php"
               class="btn-primary w-full justify-center">
                Get a Quote <i class="fas fa-arrow-right text-sm"></i>
            </a>
        </div>
    </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
