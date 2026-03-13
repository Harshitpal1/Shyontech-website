# Shyontech Website

A complete modern IT services company website for **Shyontech Software Technology India Pvt. Ltd.** built with PHP + MySQL (PDO) + Tailwind CSS (CDN) + Vanilla JS.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Language | PHP 8.x |
| Database | MySQL 5.7+ / MariaDB |
| DB Access | PDO with prepared statements |
| CSS Framework | Tailwind CSS (CDN) |
| Custom CSS | `assets/css/style.css` |
| JavaScript | Vanilla JS (no jQuery) |
| Icons | Font Awesome 6 |
| Fonts | Inter (Google Fonts) |

---

## Project Structure

```
/
├── index.php               # Home page
├── about.php               # About page
├── services.php            # Services page (dynamic + filter + modal)
├── blog.php                # Blog listing (search + pagination)
├── blog-single.php         # Single blog post
├── contact.php             # Contact form (AJAX) + Google Maps
├── 404.php                 # Custom 404 error page
├── .htaccess               # Apache config
│
├── config/
│   └── db.php              # PDO database connection
│
├── includes/
│   ├── header.php          # Sticky nav + dark mode toggle
│   ├── footer.php          # 4-column footer
│   └── functions.php       # Helper utilities (sanitize, pagination, etc.)
│
├── api/
│   ├── services.php        # JSON API – services list
│   ├── blog.php            # JSON API – blog posts (pagination + search + single)
│   └── contact.php         # Contact form handler (validation + DB insert)
│
├── assets/
│   ├── css/
│   │   └── style.css       # CSS variables, animations, dark mode, components
│   └── js/
│       └── main.js         # Dark mode, nav, AJAX, scroll animations, counters
│
└── database/
    └── shyontech.sql       # Full schema + seed data (services, blog, team, contacts)
```

---

## Design System

### Colors

| Purpose | Hex |
|---|---|
| Primary | `#2563EB` |
| Secondary | `#7C3AED` |
| Accent | `#38BDF8` |
| Background | `#F8FAFC` |
| Text | `#0F172A` |
| Card | `#FFFFFF` |
| Footer BG | `#0F172A` |

### Typography

| Element | Size |
|---|---|
| Hero Heading | 48–64px (clamp) |
| Section Title | 32–40px (clamp) |
| Subheading | 20–24px (clamp) |
| Paragraph | 16–18px |

---

## Setup Instructions

### Requirements
- PHP 8.0+
- MySQL 5.7+ or MariaDB
- Apache with `mod_rewrite` enabled
- XAMPP / WAMP / Laragon (local) or any Apache-based hosting

### Steps

1. **Clone or download** the repository into your web server root (e.g. `htdocs/Shyontech-website`).

2. **Create the database:**
   ```sql
   CREATE DATABASE shyontech CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
   ```

3. **Import the SQL file:**
   ```bash
   mysql -u root -p shyontech < database/shyontech.sql
   ```
   Or use phpMyAdmin → Import `database/shyontech.sql`.

4. **Configure the database connection** in `config/db.php`:
   ```php
   define('DB_HOST', 'localhost');
   define('DB_NAME', 'shyontech');
   define('DB_USER', 'your_username');
   define('DB_PASS', 'your_password');
   ```

5. **Enable `mod_rewrite`** in Apache (already enabled in XAMPP/WAMP by default).

6. **Open in browser:**
   ```
   http://localhost/Shyontech-website/
   ```

---

## Features

- ✅ **Dark Mode** – toggle persisted via `localStorage`
- ✅ **Sticky Navigation** – with hamburger menu on mobile
- ✅ **Services** – loaded via AJAX, filter by category, modal for details
- ✅ **Blog** – live search with debounce, pagination
- ✅ **Contact Form** – AJAX submit, server-side validation, toast notifications
- ✅ **Google Maps** – embedded Gwalior location
- ✅ **Scroll Animations** – Intersection Observer fade-in
- ✅ **Counter Animation** – stat numbers count up on scroll
- ✅ **Responsive** – mobile-first, works on all screen sizes
- ✅ **Security** – PDO prepared statements, input sanitisation, security headers
- ✅ **Custom 404** – user-friendly error page

---

## Company Details

**Shyontech Software Technology India Pvt. Ltd.**  
H 50, Govind Puri, Gwalior, Madhya Pradesh 474001  
📞 +91 98765 43210  
📧 info@shyontech.com  
🌐 [http://www.pdpandey.com](http://www.pdpandey.com)  
Founded: 2018 | Employees: 11–50

---

## License

© 2024 Shyontech Software Technology India Pvt. Ltd. All rights reserved.