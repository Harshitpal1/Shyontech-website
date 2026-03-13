<?php
$pageTitle       = 'Home';
$pageDescription = 'Shyontech Software Technology India Pvt. Ltd. – Professional IT Services, Web Development, Android, Digital Marketing & IT Training in Gwalior, MP.';
require_once __DIR__ . '/includes/header.php';
?>

<!-- ── Hero ────────────────────────────────────────────────── -->
<section class="hero-section min-h-[calc(100vh-72px)] flex items-center relative overflow-hidden">
    <!-- Blobs -->
    <div class="hero-blob w-96 h-96 bg-primary top-10 -left-20" style="background:#2563EB"></div>
    <div class="hero-blob w-80 h-80 bg-secondary bottom-10 right-0" style="background:#7C3AED"></div>
    <div class="hero-blob w-64 h-64 bg-accent top-1/2 right-1/4" style="background:#38BDF8;opacity:.15"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Text -->
            <div>
                <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 mb-6 reveal">
                    <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span class="text-sm font-medium text-primary dark:text-blue-400">Trusted IT Partner Since 2018</span>
                </div>

                <h1 class="hero-heading text-site-text dark:text-white mb-6 reveal text-balance">
                    Transform Your Business with
                    <span class="gradient-text"> Innovative IT Solutions</span>
                </h1>

                <p class="body-text text-gray-600 dark:text-gray-300 mb-8 reveal max-w-xl">
                    From custom web development and mobile apps to digital marketing and professional IT training —
                    Shyontech delivers end-to-end technology solutions that drive real growth.
                </p>

                <div class="flex flex-wrap gap-4 reveal">
                    <a href="/services.php" class="btn-primary">
                        Explore Services <i class="fas fa-arrow-right text-sm"></i>
                    </a>
                    <a href="/contact.php" class="btn-secondary">
                        Talk to Us <i class="fas fa-phone text-sm"></i>
                    </a>
                </div>

                <!-- Trust badges -->
                <div class="flex flex-wrap items-center gap-6 mt-10 reveal">
                    <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <i class="fas fa-check-circle text-green-500"></i>
                        <span>100+ Projects Delivered</span>
                    </div>
                    <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <i class="fas fa-check-circle text-green-500"></i>
                        <span>50+ Happy Clients</span>
                    </div>
                    <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <i class="fas fa-check-circle text-green-500"></i>
                        <span>500+ Students Trained</span>
                    </div>
                </div>
            </div>

            <!-- Illustration / Card stack -->
            <div class="hidden lg:block relative">
                <div class="relative mx-auto w-full max-w-md">
                    <!-- Main card -->
                    <div class="glass rounded-2xl p-8 shadow-2xl relative z-10">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                <i class="fas fa-code text-white"></i>
                            </div>
                            <div>
                                <div class="text-sm font-bold text-site-text dark:text-white">Project Status</div>
                                <div class="text-xs text-gray-400">Live Dashboard</div>
                            </div>
                            <div class="ml-auto flex items-center gap-1.5 text-xs text-green-500 font-medium">
                                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Live
                            </div>
                        </div>
                        <div class="space-y-3">
                            <?php
                            $items = [
                                ['Web Development', 85, '#2563EB'],
                                ['Mobile Apps',     70, '#7C3AED'],
                                ['Digital Marketing', 90, '#38BDF8'],
                                ['IT Training',     95, '#059669'],
                            ];
                            foreach ($items as [$label, $pct, $color]): ?>
                            <div>
                                <div class="flex justify-between text-xs mb-1">
                                    <span class="text-gray-600 dark:text-gray-300 font-medium"><?= $label ?></span>
                                    <span class="text-gray-400"><?= $pct ?>%</span>
                                </div>
                                <div class="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div class="h-full rounded-full transition-all duration-1000"
                                         style="width:<?= $pct ?>%;background:<?= $color ?>"></div>
                                </div>
                            </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <!-- Floating stat cards -->
                    <div class="absolute -top-6 -right-6 glass rounded-xl px-5 py-3 shadow-lg z-20">
                        <div class="text-2xl font-bold text-primary">100+</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">Projects</div>
                    </div>
                    <div class="absolute -bottom-6 -left-6 glass rounded-xl px-5 py-3 shadow-lg z-20">
                        <div class="text-2xl font-bold text-secondary">6+</div>
                        <div class="text-xs text-gray-500 dark:text-gray-400">Years Exp.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ── Stats ─────────────────────────────────────────────── -->
<section class="py-16 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <?php
            $stats = [
                ['value' => 100, 'suffix' => '+', 'label' => 'Projects Delivered'],
                ['value' => 50,  'suffix' => '+', 'label' => 'Happy Clients'],
                ['value' => 500, 'suffix' => '+', 'label' => 'Students Trained'],
                ['value' => 6,   'suffix' => '+', 'label' => 'Years Experience'],
            ];
            foreach ($stats as $stat): ?>
            <div class="reveal">
                <div class="stat-number" data-target="<?= $stat['value'] ?>" data-suffix="<?= $stat['suffix'] ?>">0<?= $stat['suffix'] ?></div>
                <div class="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium"><?= $stat['label'] ?></div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ── Services Preview ────────────────────────────────────── -->
<section class="section bg-background dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
            <span class="badge badge-primary mb-4">Our Expertise</span>
            <h2 class="section-title text-site-text dark:text-white mb-4">Services We Offer</h2>
            <p class="body-text text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                From concept to deployment, we provide comprehensive IT solutions tailored to your business goals.
            </p>
        </div>

        <div id="home-services-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Loaded by JS -->
            <div class="flex justify-center py-16 col-span-full"><div class="spinner"></div></div>
        </div>

        <div class="text-center mt-10 reveal">
            <a href="/services.php" class="btn-primary">
                View All Services <i class="fas fa-arrow-right text-sm"></i>
            </a>
        </div>
    </div>
</section>

<!-- ── Why Choose Us ───────────────────────────────────────── -->
<section class="section bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Left -->
            <div class="reveal">
                <span class="badge badge-secondary mb-4">Why Shyontech</span>
                <h2 class="section-title text-site-text dark:text-white mb-6">Your Trusted Technology Partner</h2>
                <p class="body-text text-gray-600 dark:text-gray-300 mb-8">
                    We combine technical expertise with a deep understanding of business needs to deliver solutions that create lasting value.
                </p>
                <?php
                $reasons = [
                    ['icon' => 'fas fa-bolt', 'title' => 'Fast Delivery', 'desc' => 'Agile sprints and clear milestones ensure on-time delivery without compromising quality.'],
                    ['icon' => 'fas fa-shield-alt', 'title' => 'Secure & Reliable', 'desc' => 'Best practices in security, testing, and code review baked into every project.'],
                    ['icon' => 'fas fa-headset', 'title' => '24/7 Support', 'desc' => 'Dedicated post-launch support so your website or app always runs smoothly.'],
                    ['icon' => 'fas fa-rupee-sign', 'title' => 'Affordable Pricing', 'desc' => 'Transparent, competitive pricing with no hidden fees — perfect for SMEs and startups.'],
                ];
                foreach ($reasons as $r): ?>
                <div class="flex items-start gap-4 mb-5">
                    <div class="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                        <i class="<?= $r['icon'] ?> text-primary"></i>
                    </div>
                    <div>
                        <h4 class="font-semibold text-site-text dark:text-white mb-0.5"><?= $r['title'] ?></h4>
                        <p class="text-sm text-gray-500 dark:text-gray-400"><?= $r['desc'] ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>

            <!-- Right: Feature grid -->
            <div class="grid grid-cols-2 gap-5">
                <?php
                $features = [
                    ['icon' => 'fas fa-mobile-alt',   'label' => 'Mobile First',       'bg' => 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'],
                    ['icon' => 'fas fa-tachometer-alt','label' => 'High Performance',   'bg' => 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20'],
                    ['icon' => 'fas fa-search',        'label' => 'SEO Optimised',      'bg' => 'from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20'],
                    ['icon' => 'fas fa-layer-group',   'label' => 'Scalable Code',      'bg' => 'from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20'],
                    ['icon' => 'fas fa-universal-access','label' => 'Accessible',       'bg' => 'from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20'],
                    ['icon' => 'fas fa-cloud',         'label' => 'Cloud Ready',        'bg' => 'from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20'],
                ];
                foreach ($features as $i => $f): ?>
                <div class="reveal card bg-gradient-to-br <?= $f['bg'] ?> border-0 p-6 text-center"
                     style="transition-delay: <?= $i * 80 ?>ms">
                    <i class="<?= $f['icon'] ?> text-2xl text-primary mb-3 block"></i>
                    <span class="text-sm font-semibold text-site-text dark:text-white"><?= $f['label'] ?></span>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- ── Testimonials ─────────────────────────────────────────── -->
<section class="section bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
            <span class="badge badge-accent mb-4">Testimonials</span>
            <h2 class="section-title text-site-text dark:text-white mb-4">What Our Clients Say</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
            <?php
            $testimonials = [
                ['name' => 'Vikram Mehta', 'role' => 'CEO, TechStartup Gwalior', 'text' => 'Shyontech built our entire SaaS platform from scratch. The team is professional, communicative, and delivered on time. Highly recommended!', 'rating' => 5],
                ['name' => 'Sunita Joshi', 'role' => 'Owner, ShopEasy', 'text' => 'Our WooCommerce store looks amazing and loads super fast. The digital marketing team has doubled our organic traffic in 3 months.', 'rating' => 5],
                ['name' => 'Ravi Kumar', 'role' => 'Recent Graduate', 'text' => 'I enrolled in Shyontech\'s PHP + Laravel course and landed a job within 2 months of completing it. The real-project approach made all the difference.', 'rating' => 5],
            ];
            foreach ($testimonials as $i => $t): ?>
            <div class="testimonial-card reveal" style="transition-delay: <?= $i * 100 ?>ms">
                <div class="flex text-yellow-400 mb-4">
                    <?php for ($j = 0; $j < $t['rating']; $j++): ?>
                    <i class="fas fa-star text-sm"></i>
                    <?php endfor; ?>
                </div>
                <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5 italic">"<?= $t['text'] ?>"</p>
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        <?= strtoupper(substr($t['name'], 0, 1)) ?>
                    </div>
                    <div>
                        <div class="font-semibold text-sm text-site-text dark:text-white"><?= $t['name'] ?></div>
                        <div class="text-xs text-gray-400"><?= $t['role'] ?></div>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ── CTA Banner ───────────────────────────────────────────── -->
<section class="section bg-gradient-to-r from-primary via-secondary to-accent">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2 class="section-title text-white mb-4">Ready to Build Something Amazing?</h2>
        <p class="body-text text-blue-100 mb-8">
            Let's discuss your project. Our team is ready to turn your ideas into a powerful digital product.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
            <a href="/contact.php"
               class="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                Start Your Project <i class="fas fa-rocket text-sm"></i>
            </a>
            <a href="tel:+919876543210"
               class="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/30 hover:bg-white/20 transition-all duration-200">
                <i class="fas fa-phone text-sm"></i> Call Us Now
            </a>
        </div>
    </div>
</section>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
