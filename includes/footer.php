<?php
$site = getSiteConfig();
?>
<footer class="bg-footer text-gray-300 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Top grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

            <!-- Brand column -->
            <div class="lg:col-span-1">
                <a href="/index.php" class="flex items-center gap-2 mb-4 group">
                    <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md">
                        <span class="text-white font-bold text-sm">ST</span>
                    </div>
                    <span class="text-xl font-bold text-white">Shyon<span class="text-accent">tech</span></span>
                </a>
                <p class="text-sm text-gray-400 leading-relaxed mb-5">
                    Empowering businesses with innovative IT solutions, professional training, and digital transformation services since 2018.
                </p>
                <!-- Social Links -->
                <div class="flex items-center gap-3">
                    <a href="<?= htmlspecialchars($site['linkedin']) ?>" target="_blank" rel="noopener"
                       class="w-9 h-9 rounded-lg bg-gray-800 hover:bg-primary flex items-center justify-center transition-colors duration-200">
                        <i class="fab fa-linkedin-in text-sm"></i>
                    </a>
                    <a href="<?= htmlspecialchars($site['twitter']) ?>"
                       class="w-9 h-9 rounded-lg bg-gray-800 hover:bg-accent flex items-center justify-center transition-colors duration-200">
                        <i class="fab fa-x-twitter text-sm"></i>
                    </a>
                    <a href="<?= htmlspecialchars($site['facebook']) ?>"
                       class="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200">
                        <i class="fab fa-facebook-f text-sm"></i>
                    </a>
                    <a href="<?= htmlspecialchars($site['instagram']) ?>"
                       class="w-9 h-9 rounded-lg bg-gray-800 hover:bg-pink-600 flex items-center justify-center transition-colors duration-200">
                        <i class="fab fa-instagram text-sm"></i>
                    </a>
                </div>
            </div>

            <!-- Quick Links -->
            <div>
                <h4 class="text-white font-semibold text-base mb-5">Quick Links</h4>
                <ul class="space-y-3 text-sm">
                    <?php $links = [
                        ['href' => '/index.php',    'label' => 'Home'],
                        ['href' => '/about.php',    'label' => 'About Us'],
                        ['href' => '/services.php', 'label' => 'Services'],
                        ['href' => '/blog.php',     'label' => 'Blog'],
                        ['href' => '/contact.php',  'label' => 'Contact Us'],
                    ];
                    foreach ($links as $link): ?>
                    <li>
                        <a href="<?= $link['href'] ?>"
                           class="text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-2">
                            <i class="fas fa-chevron-right text-xs text-primary"></i>
                            <?= $link['label'] ?>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Services -->
            <div>
                <h4 class="text-white font-semibold text-base mb-5">Our Services</h4>
                <ul class="space-y-3 text-sm">
                    <?php $services = [
                        'Web Development', 'WordPress Development',
                        'PHP / Laravel', 'Android Development',
                        'Digital Marketing', 'IT Training',
                    ];
                    foreach ($services as $svc): ?>
                    <li>
                        <a href="/services.php"
                           class="text-gray-400 hover:text-accent transition-colors duration-200 flex items-center gap-2">
                            <i class="fas fa-chevron-right text-xs text-primary"></i>
                            <?= $svc ?>
                        </a>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <!-- Contact -->
            <div>
                <h4 class="text-white font-semibold text-base mb-5">Contact Us</h4>
                <ul class="space-y-4 text-sm">
                    <li class="flex items-start gap-3 text-gray-400">
                        <i class="fas fa-map-marker-alt mt-0.5 text-accent flex-shrink-0"></i>
                        <span><?= htmlspecialchars($site['address']) ?></span>
                    </li>
                    <li>
                        <a href="tel:<?= htmlspecialchars($site['phone']) ?>"
                           class="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors duration-200">
                            <i class="fas fa-phone text-accent flex-shrink-0"></i>
                            <?= htmlspecialchars($site['phone']) ?>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:<?= htmlspecialchars($site['email']) ?>"
                           class="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors duration-200">
                            <i class="fas fa-envelope text-accent flex-shrink-0"></i>
                            <?= htmlspecialchars($site['email']) ?>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Divider -->
        <div class="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; 2018–<?= date('Y') ?> <?= htmlspecialchars($site['company_name']) ?>. All rights reserved.</p>
            <p class="flex items-center gap-1">
                Made with <i class="fas fa-heart text-red-500 mx-1"></i> in Gwalior, MP
            </p>
        </div>
    </div>
</footer>

<!-- Custom JS -->
<script src="/assets/js/main.js"></script>
</body>
</html>
