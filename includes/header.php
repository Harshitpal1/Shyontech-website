<?php
require_once __DIR__ . '/functions.php';
$site = getSiteConfig();
$currentPage = basename($_SERVER['PHP_SELF'], '.php');
?>
<!DOCTYPE html>
<html lang="en" class="">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="<?= htmlspecialchars($pageDescription ?? $site['tagline']) ?>" />
    <title><?= htmlspecialchars(($pageTitle ?? 'Home') . ' | ' . $site['site_name']) ?></title>

    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              primary:   '#2563EB',
              secondary: '#7C3AED',
              accent:    '#38BDF8',
              background:'#F8FAFC',
              'site-text':'#0F172A',
              card:      '#FFFFFF',
              footer:    '#0F172A',
            },
            fontFamily: {
              sans: ['Inter', 'system-ui', 'sans-serif'],
            },
          }
        }
      }
    </script>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

    <!-- Custom CSS -->
    <link rel="stylesheet" href="/assets/css/style.css" />
</head>
<body class="bg-background text-site-text font-sans antialiased transition-colors duration-300">

<!-- Navigation -->
<nav id="navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 bg-white/90 backdrop-blur-md dark:bg-gray-900/90 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between">

            <!-- Logo -->
            <a href="/index.php" class="flex items-center gap-2 group">
                <div class="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200">
                    <span class="text-white font-bold text-sm">ST</span>
                </div>
                <span class="text-xl font-bold text-site-text dark:text-white">Shyon<span class="text-primary">tech</span></span>
            </a>

            <!-- Desktop Nav Links -->
            <div class="hidden md:flex items-center gap-1">
                <?php
                $navLinks = [
                    'index'       => ['href' => '/index.php',    'label' => 'Home'],
                    'about'       => ['href' => '/about.php',    'label' => 'About'],
                    'services'    => ['href' => '/services.php', 'label' => 'Services'],
                    'blog'        => ['href' => '/blog.php',     'label' => 'Blog'],
                    'contact'     => ['href' => '/contact.php',  'label' => 'Contact'],
                ];
                foreach ($navLinks as $page => $link):
                    $isActive = ($currentPage === $page);
                ?>
                <a href="<?= $link['href'] ?>"
                   class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                          <?= $isActive
                              ? 'text-primary bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                              : 'text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800' ?>">
                    <?= $link['label'] ?>
                </a>
                <?php endforeach; ?>
            </div>

            <!-- Right side controls -->
            <div class="flex items-center gap-3">
                <!-- Dark Mode Toggle -->
                <button id="darkToggle" aria-label="Toggle dark mode"
                        class="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                    <i class="fas fa-moon dark:hidden text-base"></i>
                    <i class="fas fa-sun hidden dark:block text-base"></i>
                </button>

                <!-- CTA Button (desktop) -->
                <a href="/contact.php"
                   class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                    Get Started
                    <i class="fas fa-arrow-right text-xs"></i>
                </a>

                <!-- Hamburger (mobile) -->
                <button id="menuToggle" aria-label="Open menu"
                        class="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200">
                    <i class="fas fa-bars text-lg" id="menuIcon"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobileMenu" class="hidden md:hidden border-t border-gray-200 dark:border-gray-700 mt-4 pt-4 pb-2 px-4 sm:px-6">
        <?php foreach ($navLinks as $page => $link):
            $isActive = ($currentPage === $page); ?>
        <a href="<?= $link['href'] ?>"
           class="flex items-center px-4 py-3 rounded-lg text-sm font-medium mb-1 transition-colors duration-200
                  <?= $isActive
                      ? 'text-primary bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800' ?>">
            <?= $link['label'] ?>
        </a>
        <?php endforeach; ?>
        <a href="/contact.php"
           class="flex items-center justify-center gap-2 mt-3 px-5 py-3 bg-primary text-white text-sm font-semibold rounded-lg">
            Get Started <i class="fas fa-arrow-right text-xs"></i>
        </a>
    </div>
</nav>

<!-- Spacer for fixed nav -->
<div class="h-[72px]"></div>
