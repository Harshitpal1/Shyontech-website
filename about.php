<?php
$pageTitle       = 'About Us';
$pageDescription = 'Learn about Shyontech Software Technology India Pvt. Ltd. — our story, mission, vision, values, and the talented team behind our IT solutions.';
require_once __DIR__ . '/includes/header.php';

$team = [];
try { $team = getTeamMembers(); } catch (Exception $e) {}
?>

<!-- ── Page Header ─────────────────────────────────────────── -->
<section class="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span class="badge badge-primary mb-4">About Us</span>
        <h1 class="section-title text-site-text dark:text-white mb-4">Our Story &amp; Mission</h1>
        <p class="body-text text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Building innovative IT solutions and nurturing the next generation of tech talent from Gwalior since 2018.
        </p>
    </div>
</section>

<!-- ── Company Intro ───────────────────────────────────────── -->
<section class="section bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="reveal">
                <span class="badge badge-secondary mb-4">Who We Are</span>
                <h2 class="section-title text-site-text dark:text-white mb-6">
                    Shyontech Software Technology India Pvt. Ltd.
                </h2>
                <p class="body-text text-gray-600 dark:text-gray-300 mb-4">
                    Founded in 2018 and headquartered in Govind Puri, Gwalior (Madhya Pradesh), Shyontech is a professional
                    IT services company offering software development, web solutions, mobile applications, digital marketing,
                    and industry-focused training programs.
                </p>
                <p class="body-text text-gray-600 dark:text-gray-300 mb-8">
                    With a team of 11–50 dedicated professionals, we have delivered 100+ projects for clients across India.
                    Our training division has helped 500+ students launch successful careers in technology.
                </p>
                <div class="grid grid-cols-2 gap-4">
                    <?php
                    $facts = [
                        ['value' => '2018',  'label' => 'Founded'],
                        ['value' => '11–50', 'label' => 'Team Size'],
                        ['value' => 'Gwalior, MP', 'label' => 'Headquarters'],
                        ['value' => '100+', 'label' => 'Projects'],
                    ];
                    foreach ($facts as $f): ?>
                    <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                        <div class="text-xl font-bold text-primary"><?= $f['value'] ?></div>
                        <div class="text-sm text-gray-500 dark:text-gray-400"><?= $f['label'] ?></div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- Values / Skills -->
            <div class="reveal">
                <div class="card p-8">
                    <h3 class="subheading text-site-text dark:text-white mb-6">Technologies We Master</h3>
                    <?php
                    $skills = [
                        ['PHP / Laravel',    90, '#2563EB'],
                        ['WordPress',        85, '#7C3AED'],
                        ['Java / Android',   80, '#38BDF8'],
                        ['JavaScript / Angular', 75, '#059669'],
                        ['Python',           70, '#F59E0B'],
                        ['Digital Marketing', 88, '#EF4444'],
                    ];
                    foreach ($skills as [$label, $pct, $color]): ?>
                    <div class="mb-4">
                        <div class="flex justify-between text-sm mb-1.5">
                            <span class="font-medium text-site-text dark:text-white"><?= $label ?></span>
                            <span class="text-gray-400"><?= $pct ?>%</span>
                        </div>
                        <div class="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div class="h-full rounded-full" style="width:<?= $pct ?>%;background:<?= $color ?>"></div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ── Mission & Vision ─────────────────────────────────────── -->
<section class="section bg-background dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
            <h2 class="section-title text-site-text dark:text-white mb-4">Mission &amp; Vision</h2>
        </div>
        <div class="grid md:grid-cols-2 gap-8">
            <!-- Mission -->
            <div class="card p-8 reveal bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-0">
                <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <i class="fas fa-bullseye text-2xl text-primary"></i>
                </div>
                <h3 class="subheading text-site-text dark:text-white mb-4">Our Mission</h3>
                <p class="body-text text-gray-600 dark:text-gray-300">
                    To empower businesses through innovative, reliable, and affordable technology solutions while upskilling India's youth
                    with industry-relevant IT education that bridges the gap between academic learning and professional requirements.
                </p>
            </div>
            <!-- Vision -->
            <div class="card p-8 reveal bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-0">
                <div class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                    <i class="fas fa-eye text-2xl text-secondary"></i>
                </div>
                <h3 class="subheading text-site-text dark:text-white mb-4">Our Vision</h3>
                <p class="body-text text-gray-600 dark:text-gray-300">
                    To become the leading IT services and training hub in Central India — recognised for excellence, integrity, and our
                    commitment to making technology accessible to businesses and students in tier-2 cities across India.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- ── Core Values ─────────────────────────────────────────── -->
<section class="section bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
            <span class="badge badge-primary mb-4">What Drives Us</span>
            <h2 class="section-title text-site-text dark:text-white">Our Core Values</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <?php
            $values = [
                ['icon' => 'fas fa-medal',          'title' => 'Excellence',    'desc' => 'We hold ourselves to the highest standards in every line of code and every training session.',    'color' => 'text-yellow-500'],
                ['icon' => 'fas fa-handshake',       'title' => 'Integrity',     'desc' => 'Transparent pricing, honest timelines, and straightforward communication — always.',               'color' => 'text-blue-500'],
                ['icon' => 'fas fa-lightbulb',       'title' => 'Innovation',    'desc' => 'We embrace new technologies and methodologies to keep our clients ahead of the curve.',           'color' => 'text-purple-500'],
                ['icon' => 'fas fa-users',           'title' => 'Community',     'desc' => 'From Gwalior to the world — we invest in local talent and contribute to the regional tech ecosystem.','color' => 'text-green-500'],
            ];
            foreach ($values as $i => $v): ?>
            <div class="card p-6 text-center reveal" style="transition-delay: <?= $i * 80 ?>ms">
                <i class="<?= $v['icon'] ?> text-3xl <?= $v['color'] ?> mb-4 block"></i>
                <h4 class="font-bold text-site-text dark:text-white mb-2"><?= $v['title'] ?></h4>
                <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed"><?= $v['desc'] ?></p>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ── Team ─────────────────────────────────────────────────── -->
<section class="section bg-background dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-14 reveal">
            <span class="badge badge-secondary mb-4">Meet the Team</span>
            <h2 class="section-title text-site-text dark:text-white mb-4">The People Behind Shyontech</h2>
            <p class="body-text text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                Our diverse team of developers, designers, and educators is united by a passion for technology and a drive to deliver excellence.
            </p>
        </div>

        <?php if (!empty($team)): ?>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <?php foreach ($team as $i => $member): ?>
            <div class="team-card reveal" style="transition-delay: <?= $i * 80 ?>ms">
                <!-- Avatar -->
                <div class="h-52 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 relative flex items-center justify-center">
                    <?php if (!empty($member['photo'])): ?>
                    <img src="<?= htmlspecialchars($member['photo']) ?>"
                         alt="<?= htmlspecialchars($member['name']) ?>"
                         class="w-full h-full object-cover"
                         loading="lazy" />
                    <?php else: ?>
                    <div class="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                        <?= strtoupper(substr($member['name'], 0, 1)) ?>
                    </div>
                    <?php endif; ?>

                    <!-- Social overlay -->
                    <div class="social-links absolute inset-0 bg-primary/80 flex items-center justify-center gap-3 opacity-0 team-card-overlay transition-all duration-300">
                        <?php if (!empty($member['linkedin'])): ?>
                        <a href="<?= htmlspecialchars($member['linkedin']) ?>" target="_blank" rel="noopener"
                           class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <?php endif; ?>
                        <?php if (!empty($member['email'])): ?>
                        <a href="mailto:<?= htmlspecialchars($member['email']) ?>"
                           class="w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors">
                            <i class="fas fa-envelope"></i>
                        </a>
                        <?php endif; ?>
                    </div>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-site-text dark:text-white"><?= htmlspecialchars($member['name']) ?></h3>
                    <p class="text-sm text-primary font-medium mb-2"><?= htmlspecialchars($member['designation']) ?></p>
                    <?php if (!empty($member['bio'])): ?>
                    <p class="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3"><?= htmlspecialchars($member['bio']) ?></p>
                    <?php endif; ?>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
        <?php else: ?>
        <p class="text-center text-gray-400">Team information is currently unavailable.</p>
        <?php endif; ?>
    </div>
</section>

<!-- ── CTA ──────────────────────────────────────────────────── -->
<section class="section bg-gradient-to-r from-primary via-secondary to-accent">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2 class="section-title text-white mb-4">Ready to Work With Us?</h2>
        <p class="text-blue-100 body-text mb-8">Let's build something great together. Reach out and let's start the conversation.</p>
        <a href="/contact.php"
           class="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
            Get In Touch <i class="fas fa-arrow-right text-sm"></i>
        </a>
    </div>
</section>

<style>
.team-card:hover .team-card-overlay { opacity: 1 !important; }
</style>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
