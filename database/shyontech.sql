-- ============================================================
-- Shyontech Software Technology India Pvt. Ltd.
-- Database: shyontech
-- Created: 2024
-- ============================================================

CREATE DATABASE IF NOT EXISTS `shyontech`
  DEFAULT CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE `shyontech`;

-- ── Services ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `services` (
  `id`                INT UNSIGNED     NOT NULL AUTO_INCREMENT,
  `title`             VARCHAR(150)     NOT NULL,
  `short_description` VARCHAR(300)     NOT NULL,
  `description`       TEXT             NOT NULL,
  `category`          VARCHAR(80)      NOT NULL DEFAULT 'Development',
  `icon`              VARCHAR(80)      NOT NULL DEFAULT 'fas fa-code',
  `price_range`       VARCHAR(100)              DEFAULT NULL,
  `duration`          VARCHAR(100)              DEFAULT NULL,
  `is_active`         TINYINT(1)       NOT NULL DEFAULT 1,
  `sort_order`        SMALLINT         NOT NULL DEFAULT 0,
  `created_at`        DATETIME         NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── Blog Posts ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `blog_posts` (
  `id`              INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  `title`           VARCHAR(250)  NOT NULL,
  `slug`            VARCHAR(260)  NOT NULL,
  `excerpt`         VARCHAR(500)  NOT NULL,
  `content`         LONGTEXT      NOT NULL,
  `featured_image`  VARCHAR(300)           DEFAULT NULL,
  `author`          VARCHAR(100)  NOT NULL DEFAULT 'Shyontech Team',
  `category`        VARCHAR(80)   NOT NULL DEFAULT 'Technology',
  `tags`            VARCHAR(300)           DEFAULT NULL,
  `read_time`       VARCHAR(30)            DEFAULT '5 min read',
  `is_published`    TINYINT(1)    NOT NULL DEFAULT 1,
  `published_at`    DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_at`      DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── Team Members ─────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS `team_members` (
  `id`          INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  `name`        VARCHAR(120)  NOT NULL,
  `designation` VARCHAR(120)  NOT NULL,
  `bio`         TEXT                   DEFAULT NULL,
  `photo`       VARCHAR(300)           DEFAULT NULL,
  `linkedin`    VARCHAR(300)           DEFAULT NULL,
  `twitter`     VARCHAR(300)           DEFAULT NULL,
  `email`       VARCHAR(150)           DEFAULT NULL,
  `is_active`   TINYINT(1)    NOT NULL DEFAULT 1,
  `sort_order`  SMALLINT      NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ── Contact Submissions ──────────────────────────────────────
CREATE TABLE IF NOT EXISTS `contact_submissions` (
  `id`         INT UNSIGNED  NOT NULL AUTO_INCREMENT,
  `name`       VARCHAR(120)  NOT NULL,
  `email`      VARCHAR(150)  NOT NULL,
  `phone`      VARCHAR(30)            DEFAULT NULL,
  `subject`    VARCHAR(200)  NOT NULL,
  `message`    TEXT          NOT NULL,
  `ip_address` VARCHAR(45)            DEFAULT NULL,
  `is_read`    TINYINT(1)    NOT NULL DEFAULT 0,
  `created_at` DATETIME      NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


-- ============================================================
-- SEED DATA
-- ============================================================

-- ── Services Seed ────────────────────────────────────────────
INSERT INTO `services` (`title`, `short_description`, `description`, `category`, `icon`, `price_range`, `duration`, `sort_order`) VALUES

('Web Development',
 'Custom responsive websites and web applications built with modern technologies like PHP, Laravel, and JavaScript.',
 'We build high-performance, scalable web solutions tailored to your business needs. Our expertise spans full-stack development using PHP, Laravel, HTML5, CSS3, JavaScript, and MySQL.\n\nOur process:\n• Discovery & planning\n• UI/UX wireframing & design\n• Agile development sprints\n• QA & performance testing\n• Launch & ongoing maintenance\n\nEvery website we deliver is fully responsive, SEO-optimised, and built for speed.',
 'Development', 'fas fa-globe', '₹15,000 – ₹1,00,000', '2 – 8 weeks', 1),

('WordPress Development',
 'Professional WordPress websites, themes, plugins, and WooCommerce stores customised to your brand.',
 'As certified WordPress experts we design and develop everything from simple brochure sites to complex multi-site networks and e-commerce stores powered by WooCommerce.\n\nServices include:\n• Custom theme development\n• Plugin development & customisation\n• WooCommerce integration\n• Speed & security optimisation\n• WordPress migrations & upgrades',
 'Development', 'fab fa-wordpress', '₹8,000 – ₹60,000', '1 – 6 weeks', 2),

('PHP & Laravel Development',
 'Robust backend systems, REST APIs, and enterprise-grade applications using PHP and the Laravel framework.',
 'Our PHP and Laravel specialists deliver clean, maintainable codebases for complex business logic, multi-tenant SaaS platforms, and RESTful APIs.\n\nCapabilities:\n• Laravel / CodeIgniter / Core PHP\n• RESTful API design & development\n• Third-party integrations (payment gateways, SMS, email)\n• Database design & optimisation\n• Code review and legacy code refactoring',
 'Development', 'fas fa-server', '₹20,000 – ₹2,00,000', '3 – 12 weeks', 3),

('Android App Development',
 'Native and hybrid Android applications for startups and enterprises, from concept to Play Store launch.',
 'We build intuitive, feature-rich Android applications using Java and Kotlin. Our mobile team handles the full lifecycle — from ideation and UX to deployment and post-launch support.\n\nFeatures:\n• Native Android (Java / Kotlin)\n• Flutter cross-platform apps\n• Firebase integration\n• Play Store submission\n• Push notifications & analytics',
 'Mobile', 'fab fa-android', '₹25,000 – ₹3,00,000', '4 – 16 weeks', 4),

('Digital Marketing',
 'Data-driven SEO, social media marketing, Google Ads, and content strategies to grow your online presence.',
 'Our digital marketing team creates performance-focused campaigns that drive real traffic and conversions.\n\nServices:\n• Search Engine Optimisation (SEO)\n• Google & Meta Ads (PPC)\n• Social media management (Instagram, LinkedIn, Facebook)\n• Content marketing & blogging\n• Email marketing campaigns\n• Monthly analytics & reporting',
 'Marketing', 'fas fa-chart-line', '₹5,000 – ₹50,000/month', 'Ongoing', 5),

('IT Training & Placement',
 'Industry-ready training programs in PHP, Java, Python, Android, Digital Marketing, and more with placement support.',
 'Shyontech''s training division has been upskilling students and working professionals since 2018. We offer hands-on, project-based learning with real-world scenarios.\n\nCourses offered:\n• Full-Stack PHP / Laravel\n• Core & Advanced Java\n• Python & Data Science basics\n• Android Development\n• Digital Marketing\n• HTML, CSS, JavaScript, jQuery\n• Angular JS\n• Oracle & MySQL\n\nFeatures: Weekday & weekend batches | Certificate of completion | 100% placement assistance | Live projects',
 'Training', 'fas fa-graduation-cap', '₹3,000 – ₹20,000/course', '1 – 6 months', 6),

('UI/UX Design',
 'User-centred design for websites and apps — wireframes, prototypes, and polished visual interfaces.',
 'Great products start with great design. Our UI/UX team creates pixel-perfect, accessible designs that delight users.\n\nDeliverables:\n• User research & personas\n• Wireframes & clickable prototypes (Figma)\n• Visual / brand design system\n• Responsive design specifications\n• Usability testing & iteration',
 'Design', 'fas fa-paint-brush', '₹10,000 – ₹80,000', '2 – 6 weeks', 7),

('Oracle & Database Solutions',
 'Database design, optimisation, administration, and migration services for Oracle, MySQL, and PostgreSQL.',
 'We provide end-to-end database solutions for organisations of all sizes.\n\nServices:\n• Database architecture & design\n• Query optimisation & indexing\n• Oracle PL/SQL development\n• MySQL / MariaDB administration\n• Data migration & ETL\n• Backup strategies & disaster recovery',
 'Development', 'fas fa-database', '₹10,000 – ₹1,50,000', '1 – 8 weeks', 8);


-- ── Blog Posts Seed ──────────────────────────────────────────
INSERT INTO `blog_posts` (`title`, `slug`, `excerpt`, `content`, `featured_image`, `author`, `category`, `tags`, `read_time`, `published_at`) VALUES

('The Future of Web Development: Trends to Watch in 2024',
 'future-of-web-development-2024',
 'Explore the hottest web development trends of 2024 — from AI-assisted coding and edge computing to Web Components and the continued rise of headless CMS architectures.',
 '<p>Web development is evolving faster than ever. Here are the key trends shaping the industry in 2024.</p><h2>1. AI-Assisted Development</h2><p>Tools like GitHub Copilot and ChatGPT are transforming how developers write code, generate tests, and document projects. Expect productivity to soar.</p><h2>2. Edge Computing</h2><p>Deploying code closer to the user — at the "edge" — drastically reduces latency and improves user experience for global audiences.</p><h2>3. Web Components</h2><p>The native browser standard for reusable UI components is gaining traction as an alternative to heavyweight frameworks.</p><h2>4. Headless CMS</h2><p>Decoupling the content layer from the presentation layer gives teams flexibility to deliver content across web, mobile, IoT, and more.</p><p>At Shyontech, we stay ahead of these trends to deliver future-proof solutions for our clients.</p>',
 NULL, 'Rahul Pandey', 'Technology', 'web development,trends,2024', '5 min read',
 '2024-01-15 09:00:00'),

('Why Your Business Needs a Mobile-First Website',
 'business-needs-mobile-first-website',
 'Over 60% of web traffic now comes from mobile devices. Learn why a mobile-first approach is no longer optional — and how to achieve it.',
 '<p>Mobile internet usage has officially overtaken desktop. If your website isn''t optimised for smartphones, you''re losing customers.</p><h2>What Is Mobile-First Design?</h2><p>Mobile-first means designing for the smallest screen first and progressively enhancing for larger displays. This approach forces you to prioritise content and eliminate clutter.</p><h2>Benefits</h2><ul><li>Faster load times on all devices</li><li>Better Google rankings (mobile-first indexing)</li><li>Improved user experience = lower bounce rate</li><li>Higher conversion rates</li></ul><h2>Technical Tips</h2><p>Use responsive CSS (Tailwind or Bootstrap), compress images with WebP, and test on real devices. Shyontech builds every website mobile-first by default.</p>',
 NULL, 'Priya Sharma', 'Design', 'mobile,responsive,UX', '4 min read',
 '2024-02-10 10:30:00'),

('Getting Started with Laravel: A Beginner''s Guide',
 'getting-started-with-laravel',
 'Laravel is the most popular PHP framework for a reason. This beginner-friendly guide walks you through installation, routing, Eloquent ORM, and your first CRUD application.',
 '<p>Laravel makes web development enjoyable. Its elegant syntax, powerful ORM, and rich ecosystem make it the go-to choice for PHP developers worldwide.</p><h2>Installation</h2><p>Install Laravel via Composer:<br><code>composer create-project laravel/laravel my-project</code></p><h2>Routing</h2><p>Define routes in <code>routes/web.php</code>. Laravel supports GET, POST, PUT, DELETE and more.</p><h2>Eloquent ORM</h2><p>Eloquent provides an ActiveRecord implementation for working with your database. Define a model and start querying — no raw SQL needed.</p><h2>Building Your First CRUD</h2><p>Use <code>php artisan make:model Post -mcr</code> to scaffold model, migration, and controller in one command.</p><p>Shyontech''s training program covers Laravel in depth with real-world projects.</p>',
 NULL, 'Arjun Verma', 'Development', 'PHP,Laravel,backend', '7 min read',
 '2024-03-05 08:00:00'),

('Digital Marketing Strategies That Actually Work in 2024',
 'digital-marketing-strategies-2024',
 'Forget vanity metrics. These proven digital marketing strategies drive real leads and revenue for small and medium businesses.',
 '<p>Digital marketing can feel overwhelming, but focusing on the right strategies makes all the difference.</p><h2>1. SEO — The Long Game</h2><p>Organic search drives 53% of all web traffic. Invest in keyword research, quality content, and technical SEO for sustainable growth.</p><h2>2. Google Ads for Quick Wins</h2><p>PPC campaigns can drive targeted traffic immediately. Use smart bidding strategies and tight audience targeting to maximise ROI.</p><h2>3. Social Media That Converts</h2><p>Post consistently on platforms where your audience lives. For B2B, LinkedIn is gold. For B2C, Instagram and Facebook deliver results.</p><h2>4. Email Marketing</h2><p>Email still delivers the highest ROI of any marketing channel — ₹42 return for every ₹1 spent on average.</p>',
 NULL, 'Neha Gupta', 'Marketing', 'digital marketing,SEO,social media', '6 min read',
 '2024-03-20 11:00:00'),

('Android Development in 2024: Kotlin vs Java',
 'android-development-kotlin-vs-java-2024',
 'Should you learn Kotlin or Java for Android development in 2024? We compare syntax, performance, ecosystem support, and career prospects.',
 '<p>Google officially endorses Kotlin as the preferred language for Android, but Java still powers millions of apps. Which should you choose?</p><h2>Kotlin Advantages</h2><ul><li>Concise, expressive syntax — fewer lines of code</li><li>Null safety built-in — fewer crashes</li><li>Coroutines for async programming</li><li>100% interoperable with Java</li></ul><h2>Java Still Relevant</h2><ul><li>Massive existing codebase</li><li>Wider ecosystem and library support</li><li>Familiar to enterprise developers</li></ul><h2>Our Recommendation</h2><p>Start with Kotlin for new projects. Learn Java fundamentals to understand legacy codebases. Shyontech teaches both in our Android training course.</p>',
 NULL, 'Amit Singh', 'Mobile', 'Android,Kotlin,Java', '5 min read',
 '2024-04-02 09:30:00'),

('Building Your Career in IT: A Roadmap for Freshers',
 'building-career-in-it-roadmap-freshers',
 'Breaking into the IT industry can seem daunting. This practical roadmap guides freshers through skill selection, portfolio building, and landing your first job.',
 '<p>The IT industry offers tremendous opportunities, but the path isn''t always clear. Here''s a step-by-step roadmap.</p><h2>Step 1: Choose Your Path</h2><p>Front-end, back-end, full-stack, mobile, DevOps, data science — pick one and go deep before branching out.</p><h2>Step 2: Build Fundamentals</h2><p>Master data structures, algorithms, and at least one programming language thoroughly. These are the foundation of every technical interview.</p><h2>Step 3: Create Projects</h2><p>Nothing speaks louder than a GitHub portfolio. Build 3–5 real projects that solve actual problems.</p><h2>Step 4: Networking</h2><p>Attend local meetups, connect on LinkedIn, contribute to open source. Your next job often comes from who you know.</p><h2>Step 5: Apply Strategically</h2><p>Tailor your resume for each application. Shyontech''s placement assistance helps you prepare for interviews and connect with top employers.</p>',
 NULL, 'Pooja Jain', 'Career', 'career,IT,freshers,training', '8 min read',
 '2024-04-18 10:00:00'),

('WordPress Security Best Practices You Must Know',
 'wordpress-security-best-practices',
 'WordPress powers 43% of the web and is the #1 target for hackers. Protect your site with these essential security practices.',
 '<p>A hacked website can cost you customers, SEO rankings, and trust. Prevention is far cheaper than recovery.</p><h2>1. Keep Everything Updated</h2><p>WordPress core, themes, and plugins must be updated regularly. Outdated software is the #1 cause of breaches.</p><h2>2. Use Strong Passwords & 2FA</h2><p>Enable two-factor authentication on all admin accounts. Use a password manager.</p><h2>3. Limit Login Attempts</h2><p>Install a plugin to block brute-force attacks after a set number of failed logins.</p><h2>4. Use HTTPS</h2><p>Install an SSL certificate. Google penalises non-HTTPS sites in rankings.</p><h2>5. Regular Backups</h2><p>Automate daily backups to an off-site location. Test your restore process regularly.</p>',
 NULL, 'Rahul Pandey', 'Security', 'WordPress,security,hacking', '5 min read',
 '2024-05-01 08:00:00'),

('Python for Data Science: Where to Begin',
 'python-for-data-science-beginners',
 'Python has become the language of choice for data science and machine learning. Here''s a structured starting point for absolute beginners.',
 '<p>Python''s simplicity and rich ecosystem make it perfect for data analysis, visualisation, and machine learning.</p><h2>Essential Libraries</h2><ul><li><strong>NumPy</strong> — numerical computing</li><li><strong>Pandas</strong> — data manipulation</li><li><strong>Matplotlib / Seaborn</strong> — visualisation</li><li><strong>Scikit-learn</strong> — machine learning</li></ul><h2>Your First Project</h2><p>Start with the Titanic dataset on Kaggle. Clean the data with Pandas, visualise survival rates with Seaborn, then build a simple classifier with Scikit-learn.</p><h2>Learning Path</h2><p>Python basics → NumPy → Pandas → Matplotlib → Scikit-learn → Deep Learning with TensorFlow/PyTorch.</p><p>Shyontech offers Python training covering both scripting fundamentals and data science applications.</p>',
 NULL, 'Divya Sharma', 'Technology', 'Python,data science,machine learning', '6 min read',
 '2024-05-15 09:00:00');


-- ── Team Members Seed ─────────────────────────────────────────
INSERT INTO `team_members` (`name`, `designation`, `bio`, `photo`, `linkedin`, `sort_order`) VALUES

('Pradeep Pandey',
 'Founder & CEO',
 'Pradeep founded Shyontech in 2018 with a vision to democratise quality IT education and build world-class software from Gwalior. With 12+ years of experience in PHP and enterprise systems, he leads strategy and product vision.',
 NULL,
 'https://www.linkedin.com/company/shyontech',
 1),

('Rahul Pandey',
 'CTO & Lead Developer',
 'Rahul oversees all technology decisions and leads the core development team. He is an expert in Laravel, Node.js, and cloud architecture with a passion for clean code and developer experience.',
 NULL,
 NULL,
 2),

('Priya Sharma',
 'Head of UI/UX Design',
 'Priya brings products to life with her user-centred design philosophy. She has designed interfaces for 50+ projects and specialises in Figma-based design systems that developers love.',
 NULL,
 NULL,
 3),

('Arjun Verma',
 'Senior PHP Developer',
 'Arjun is our PHP and Laravel specialist with 7 years of backend experience. He has built complex multi-tenant SaaS products and payment integrations for clients across India and abroad.',
 NULL,
 NULL,
 4),

('Neha Gupta',
 'Digital Marketing Manager',
 'Neha leads all digital marketing initiatives — from SEO campaigns and Google Ads to social media content strategy. She has grown organic traffic by 3× for multiple clients.',
 NULL,
 NULL,
 5),

('Amit Singh',
 'Android Developer',
 'Amit develops native Android applications in Kotlin and Java. He has published 10+ apps on the Play Store and mentors students in Shyontech''s mobile development training programme.',
 NULL,
 NULL,
 6);
