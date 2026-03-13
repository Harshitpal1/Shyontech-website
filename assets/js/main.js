/* ============================================================
   Shyontech – main.js
   Dark mode | Mobile nav | Scroll animations | Counter
   Spinners | Toast | AJAX forms | Services filter + modal
   Blog search + pagination
   ============================================================ */

// ── Dark Mode ───────────────────────────────────────────────
(function initDarkMode() {
  const html   = document.documentElement;
  const toggle = document.getElementById('darkToggle');
  const stored = localStorage.getItem('theme');

  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      html.classList.toggle('dark');
      localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
    });
  }
})();

// ── Mobile Menu ─────────────────────────────────────────────
(function initMobileMenu() {
  const btn  = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('menuIcon');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('hidden') === false;
    if (icon) {
      icon.className = open ? 'fas fa-times text-lg' : 'fas fa-bars text-lg';
    }
    btn.setAttribute('aria-expanded', open);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target) && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
      if (icon) icon.className = 'fas fa-bars text-lg';
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

// ── Navbar scroll style ─────────────────────────────────────
(function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  const update = () => {
    if (window.scrollY > 20) {
      nav.classList.add('shadow-md');
    } else {
      nav.classList.remove('shadow-md');
    }
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

// ── Scroll Reveal ───────────────────────────────────────────
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
})();

// ── Counter Animation ───────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const step = Math.ceil(duration / target);
  let current = 0;

  const timer = setInterval(() => {
    current += Math.ceil(target / 60);
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = current.toLocaleString() + suffix;
  }, duration / 60);
}

(function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCounter(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
})();

// ── Toast ───────────────────────────────────────────────────
function showToast(message, type = 'info', duration = 4000) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas ${icons[type] || icons.info}"></i><span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}

// ── Loading Spinner helpers ──────────────────────────────────
function showSpinner(containerId) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = '<div class="flex justify-center py-16"><div class="spinner"></div></div>';
}

function showError(containerId, msg) {
  const el = document.getElementById(containerId);
  if (el) el.innerHTML = `<div class="text-center py-16 text-red-500"><i class="fas fa-exclamation-circle text-3xl mb-3 block"></i><p>${msg}</p></div>`;
}

// ── Services (services.php) ──────────────────────────────────
(function initServicesPage() {
  const grid    = document.getElementById('services-grid');
  const filters = document.getElementById('category-filters');
  const modal   = document.getElementById('service-modal');
  if (!grid) return;

  let allServices = [];
  let activeCategory = 'all';

  function renderServices(services) {
    if (!services.length) {
      grid.innerHTML = '<div class="col-span-full text-center py-16 text-gray-400"><i class="fas fa-inbox text-4xl mb-3 block"></i><p>No services found.</p></div>';
      return;
    }

    grid.innerHTML = services.map(s => `
      <div class="service-card reveal" data-id="${s.id}" tabindex="0" role="button" aria-label="Learn more about ${escHtml(s.title)}">
        <div class="service-icon">
          <i class="${escHtml(s.icon || 'fas fa-cog')}"></i>
        </div>
        <span class="badge badge-primary mb-3">${escHtml(s.category)}</span>
        <h3 class="subheading text-site-text dark:text-white mb-2">${escHtml(s.title)}</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">${escHtml(s.short_description)}</p>
        <button class="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">
          Learn More <i class="fas fa-arrow-right text-xs"></i>
        </button>
      </div>
    `).join('');

    // Re-observe reveal elements
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
      setTimeout(() => el.classList.add('visible'), 50);
    });

    // Card click → modal
    grid.querySelectorAll('.service-card').forEach(card => {
      card.addEventListener('click', () => openServiceModal(allServices.find(s => s.id == card.dataset.id)));
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openServiceModal(allServices.find(s => s.id == card.dataset.id)); });
    });
  }

  function openServiceModal(service) {
    if (!service || !modal) return;
    modal.querySelector('#modal-title').textContent       = service.title;
    modal.querySelector('#modal-category').textContent    = service.category;
    modal.querySelector('#modal-icon').className          = service.icon || 'fas fa-cog';
    modal.querySelector('#modal-description').textContent = service.description;
    modal.querySelector('#modal-price').textContent       = service.price_range || 'Contact for pricing';
    modal.querySelector('#modal-duration').textContent    = service.duration || 'Flexible';
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // Close modal
  if (modal) {
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
    modal.querySelector('#modal-close')?.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Category filters
  if (filters) {
    filters.addEventListener('click', e => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      activeCategory = btn.dataset.category;
      filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtered = activeCategory === 'all' ? allServices : allServices.filter(s => s.category === activeCategory);
      renderServices(filtered);
    });
  }

  // Fetch services
  showSpinner('services-grid');
  fetch('/api/services.php')
    .then(r => r.json())
    .then(data => {
      allServices = data.services || [];

      // Build filter buttons
      if (filters) {
        const cats = ['all', ...new Set(allServices.map(s => s.category))];
        filters.innerHTML = cats.map(c => `
          <button class="filter-btn ${c === 'all' ? 'active' : ''}" data-category="${escHtml(c)}">
            ${c === 'all' ? 'All Services' : escHtml(c)}
          </button>
        `).join('');
      }
      renderServices(allServices);
    })
    .catch(() => showError('services-grid', 'Failed to load services. Please try again later.'));
})();

// ── Blog Page ────────────────────────────────────────────────
(function initBlogPage() {
  const grid       = document.getElementById('blog-grid');
  const searchInput= document.getElementById('blog-search');
  const pagination = document.getElementById('blog-pagination');
  if (!grid) return;

  let currentPage = 1;
  let searchQuery = '';

  function loadPosts() {
    showSpinner('blog-grid');
    const params = new URLSearchParams({ page: currentPage, search: searchQuery });
    fetch(`/api/blog.php?${params}`)
      .then(r => r.json())
      .then(data => {
        renderPosts(data.posts || []);
        renderPagination(data.total_pages || 1);
      })
      .catch(() => showError('blog-grid', 'Failed to load blog posts.'));
  }

  function renderPosts(posts) {
    if (!posts.length) {
      grid.innerHTML = '<div class="col-span-full text-center py-16 text-gray-400"><i class="fas fa-newspaper text-4xl mb-3 block"></i><p>No posts found.</p></div>';
      return;
    }
    grid.innerHTML = posts.map(p => `
      <article class="blog-card card overflow-hidden group reveal">
        <div class="overflow-hidden h-48 bg-gray-100 dark:bg-gray-800">
          <img src="${escHtml(p.featured_image || '/assets/images/blog-placeholder.jpg')}"
               alt="${escHtml(p.title)}"
               class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
               loading="lazy" onerror="this.src='/assets/images/blog-placeholder.jpg'" />
        </div>
        <div class="p-6">
          <div class="flex items-center gap-3 mb-3">
            <span class="badge badge-primary">${escHtml(p.category || 'Technology')}</span>
            <span class="text-xs text-gray-400">${escHtml(p.read_time || '5 min read')}</span>
          </div>
          <h3 class="font-bold text-lg text-site-text dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            <a href="/blog-single.php?id=${p.id}">${escHtml(p.title)}</a>
          </h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-4">${escHtml(p.excerpt)}</p>
          <div class="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
            <div class="flex items-center gap-2">
              <div class="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">
                ${escHtml((p.author || 'S').charAt(0).toUpperCase())}
              </div>
              <span class="text-xs text-gray-500 dark:text-gray-400">${escHtml(p.author || 'Shyontech')}</span>
            </div>
            <span class="text-xs text-gray-400">${escHtml(p.published_at ? formatDate(p.published_at) : '')}</span>
          </div>
        </div>
      </article>
    `).join('');
    setTimeout(() => grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')), 50);
  }

  function renderPagination(totalPages) {
    if (!pagination || totalPages <= 1) {
      if (pagination) pagination.innerHTML = '';
      return;
    }
    let html = '';
    if (currentPage > 1) html += `<button class="page-btn" data-page="${currentPage - 1}"><i class="fas fa-chevron-left text-xs"></i></button>`;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    if (currentPage < totalPages) html += `<button class="page-btn" data-page="${currentPage + 1}"><i class="fas fa-chevron-right text-xs"></i></button>`;
    pagination.innerHTML = html;

    pagination.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page, 10);
        loadPosts();
        grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // Live search with debounce
  if (searchInput) {
    let debounce;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        searchQuery = searchInput.value.trim();
        currentPage = 1;
        loadPosts();
      }, 400);
    });
  }

  loadPosts();
})();

// ── Homepage: Services preview ───────────────────────────────
(function initHomeServices() {
  const grid = document.getElementById('home-services-grid');
  if (!grid) return;

  showSpinner('home-services-grid');
  fetch('/api/services.php?limit=6')
    .then(r => r.json())
    .then(data => {
      const services = data.services || [];
      if (!services.length) { grid.innerHTML = ''; return; }
      grid.innerHTML = services.map(s => `
        <div class="service-card reveal">
          <div class="service-icon"><i class="${escHtml(s.icon || 'fas fa-cog')}"></i></div>
          <h3 class="subheading text-site-text dark:text-white mb-2">${escHtml(s.title)}</h3>
          <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4">${escHtml(s.short_description)}</p>
          <a href="/services.php" class="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all duration-200">
            Learn More <i class="fas fa-arrow-right text-xs"></i>
          </a>
        </div>
      `).join('');
      setTimeout(() => grid.querySelectorAll('.reveal').forEach(el => el.classList.add('visible')), 80);
    })
    .catch(() => { grid.innerHTML = ''; });
})();

// ── Contact Form ─────────────────────────────────────────────
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn     = form.querySelector('[type="submit"]');
    const origTxt = btn.innerHTML;

    // Clear errors
    form.querySelectorAll('.field-error').forEach(el => el.textContent = '');

    btn.disabled = true;
    btn.innerHTML = '<span class="spinner" style="width:1.25rem;height:1.25rem;border-width:2px;margin-right:.5rem;vertical-align:middle"></span>Sending…';

    try {
      const res  = await fetch('/api/contact.php', {
        method: 'POST',
        body:   new FormData(form),
      });
      const data = await res.json();

      if (data.success) {
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        form.reset();
      } else {
        if (data.errors) {
          Object.entries(data.errors).forEach(([field, msg]) => {
            const errEl = form.querySelector(`[data-error="${field}"]`);
            if (errEl) errEl.textContent = msg;
          });
          showToast('Please fix the errors below.', 'error');
        } else {
          showToast(data.message || 'Something went wrong. Please try again.', 'error');
        }
      }
    } catch {
      showToast('Network error. Please check your connection.', 'error');
    } finally {
      btn.disabled = false;
      btn.innerHTML = origTxt;
    }
  });
})();

// ── Smooth scroll for anchor links ───────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── Utility ──────────────────────────────────────────────────
function escHtml(str) {
  if (str == null) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  } catch { return dateStr; }
}
