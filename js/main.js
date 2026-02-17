/* ==========================================================================
   Grupo Los Capilleros — Main JavaScript
   ========================================================================== */

(function() {
  'use strict';

  // --- Utility: Detect current language from URL path ---
  function getCurrentLang() {
    const path = window.location.pathname;
    if (path.includes('/en/')) return 'en';
    if (path.includes('/de/')) return 'de';
    return 'es';
  }

  function getT() {
    return SITE_DATA.i18n[getCurrentLang()];
  }

  function getBasePath() {
    // Detect if we're inside a subdirectory (e.g., /work/Capi/)
    const path = window.location.pathname;
    const langIdx = path.indexOf('/' + getCurrentLang() + '/');
    if (langIdx > 0) {
      return path.substring(0, langIdx);
    }
    // fallback
    const parts = path.split('/');
    // Remove last file part and language
    return '';
  }

  function langUrl(lang, page) {
    return `${lang === 'es' ? '../es/' : '../' + lang + '/'}${page || 'index.html'}`;
  }

  // --- SVG Icons ---
  const ICONS = {
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>',
    mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 1c1 2 2 4.5 2 8 0 5.5-4.78 11-10 11z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>',
    users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
  };

  // --- Render Header ---
  function renderHeader() {
    const t = getT();
    const lang = getCurrentLang();
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const navLinks = [
      { page: 'index.html', label: t.nav.home },
      { page: 'about.html', label: t.nav.about },
      { page: 'products.html', label: t.nav.products },
      { page: 'growers.html', label: t.nav.growers },
      { page: 'quality.html', label: t.nav.quality },
      { page: 'logistics.html', label: t.nav.logistics },
      { page: 'contact.html', label: t.nav.contact },
    ];

    const header = document.getElementById('site-header');
    if (!header) return;

    header.innerHTML = `
      <div class="header-inner">
        <a href="${lang}/index.html" class="site-logo">
          <img src="../img/Capi_Logo.png" alt="CAPI" class="logo-img" style="height:48px;width:auto;">
        </a>
        <nav class="main-nav" id="main-nav">
          ${navLinks.map(l => `<a href="${l.page}" class="${currentPage === l.page ? 'active' : ''}">${l.label}</a>`).join('')}
          <div class="mobile-lang">
            <div class="lang-switcher">
              <a href="../es/${currentPage}" class="${lang === 'es' ? 'active' : ''}">ES</a>
              <a href="../en/${currentPage}" class="${lang === 'en' ? 'active' : ''}">EN</a>
              <a href="../de/${currentPage}" class="${lang === 'de' ? 'active' : ''}">DE</a>
            </div>
          </div>
        </nav>
        <div class="header-actions">
          <div class="lang-switcher">
            <a href="../es/${currentPage}" class="${lang === 'es' ? 'active' : ''}">ES</a>
            <a href="../en/${currentPage}" class="${lang === 'en' ? 'active' : ''}">EN</a>
            <a href="../de/${currentPage}" class="${lang === 'de' ? 'active' : ''}">DE</a>
          </div>
          <a href="contact.html" class="btn btn--primary btn--sm">${t.common.requestQuote}</a>
          <button class="menu-toggle" id="menu-toggle" aria-label="Toggle menu">${ICONS.menu}</button>
        </div>
      </div>
    `;

    // Mobile toggle
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    let isOpen = false;
    toggle.addEventListener('click', function() {
      isOpen = !isOpen;
      nav.classList.toggle('open', isOpen);
      toggle.innerHTML = isOpen ? ICONS.close : ICONS.menu;
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Scroll behavior
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const scrollY = window.scrollY;
      header.classList.toggle('scrolled', scrollY > 50);
      lastScroll = scrollY;
    });
  }

  // --- Render Footer ---
  function renderFooter() {
    const t = getT();
    const lang = getCurrentLang();
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="../img/Capi_Logo.png" alt="CAPI" style="height:60px;width:auto;margin-bottom:var(--space-3);">
            <p>${t.footer.desc}</p>
            <p style="font-size:var(--text-sm);color:var(--color-gray-500);margin-top:var(--space-2)">${SITE_DATA.company.legal} — CIF: ${SITE_DATA.company.cif}</p>
            <div class="footer-certifications">
              <span class="cert-badge">GlobalGAP</span>
              <span class="cert-badge">GRASP</span>
              <span class="cert-badge">BRC</span>
              <span class="cert-badge">ISO 22000</span>
            </div>
          </div>
          <div class="footer-col">
            <h4>${t.footer.quickLinks}</h4>
            <ul>
              <li><a href="about.html">${t.nav.about}</a></li>
              <li><a href="products.html">${t.nav.products}</a></li>
              <li><a href="growers.html">${t.nav.growers}</a></li>
              <li><a href="quality.html">${t.nav.quality}</a></li>
              <li><a href="logistics.html">${t.nav.logistics}</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>${t.footer.contactTitle}</h4>
            <div class="footer-contact-item">
              ${ICONS.mapPin}
              <span>${SITE_DATA.company.address.street}<br>${SITE_DATA.company.address.zip} ${SITE_DATA.company.address.city}<br>${SITE_DATA.company.address.province}, ${SITE_DATA.company.address.country}</span>
            </div>
            <div class="footer-contact-item">
              ${ICONS.phone}
              <a href="tel:${SITE_DATA.company.phone}" style="color:inherit">${SITE_DATA.company.phone}</a>
            </div>
            ${SITE_DATA.company.contacts.map(c => `
            <div class="footer-contact-item" style="margin-top:var(--space-2)">
              ${ICONS.mail}
              <span><strong>${c.name}</strong>${c.role ? ' — ' + c.role : ''}<br><a href="mailto:${c.email}" style="color:inherit">${c.email}</a><br><a href="tel:${c.phone.replace(/\s/g,'')}" style="color:inherit">${c.phone}</a></span>
            </div>`).join('')}
          </div>
          <div class="footer-col">
            <h4>${t.footer.legal}</h4>
            <ul>
              <li><a href="#">${t.footer.privacy}</a></li>
              <li><a href="#">${t.footer.cookies}</a></li>
              <li><a href="#">${t.footer.terms}</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; ${new Date().getFullYear()} ${SITE_DATA.company.legal}. ${t.footer.rights}</span>
          <div class="lang-switcher" style="background:rgba(255,255,255,0.05)">
            <a href="../es/${window.location.pathname.split('/').pop()}" class="${lang === 'es' ? 'active' : ''}" style="color:var(--color-gray-400)">ES</a>
            <a href="../en/${window.location.pathname.split('/').pop()}" class="${lang === 'en' ? 'active' : ''}" style="color:var(--color-gray-400)">EN</a>
            <a href="../de/${window.location.pathname.split('/').pop()}" class="${lang === 'de' ? 'active' : ''}" style="color:var(--color-gray-400)">DE</a>
          </div>
        </div>
      </div>
    `;
  }

  // --- Render WhatsApp Button ---
  function renderWhatsApp() {
    const container = document.getElementById('whatsapp-float');
    if (!container) return;
    const t = getT();
    container.innerHTML = `
      <a href="https://wa.me/${SITE_DATA.company.whatsapp}" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp">
        ${ICONS.whatsapp}
      </a>
    `;
  }

  // --- Cookie Consent ---
  function renderCookieConsent() {
    const container = document.getElementById('cookie-banner');
    if (!container) return;
    if (localStorage.getItem('cookie-consent')) return;

    const t = getT();
    container.innerHTML = `
      <div class="container">
        <div class="cookie-inner">
          <p>${t.cookie.message} <a href="#">${t.cookie.policy}</a>.</p>
          <div class="cookie-actions">
            <button class="btn btn--sm btn--ghost" id="cookie-reject" style="color:var(--color-gray-400)">${t.cookie.reject}</button>
            <button class="btn btn--sm btn--primary" id="cookie-accept">${t.cookie.accept}</button>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => container.classList.add('visible'), 1000);

    document.getElementById('cookie-accept').addEventListener('click', function() {
      localStorage.setItem('cookie-consent', 'accepted');
      container.classList.remove('visible');
    });
    document.getElementById('cookie-reject').addEventListener('click', function() {
      localStorage.setItem('cookie-consent', 'rejected');
      container.classList.remove('visible');
    });
  }

  // --- Scroll Reveal Animation ---
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function(el) {
      observer.observe(el);
    });
  }

  // --- Animated Counters ---
  function initCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const prefix = el.getAttribute('data-prefix') || '';
          let current = 0;
          const duration = 2000;
          const step = Math.max(1, Math.floor(target / (duration / 16)));
          const timer = setInterval(function() {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            el.textContent = prefix + current.toLocaleString() + suffix;
          }, 16);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function(el) {
      observer.observe(el);
    });
  }

  // --- Seasonality Calendar Builder ---
  function buildSeasonalityTable(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getT();
    const months = t.common.months;
    const products = SITE_DATA.products;

    let rows = '';
    Object.keys(products).forEach(function(catKey) {
      const cat = products[catKey];
      cat.items.forEach(function(item) {
        const name = t.productNames[item.id] || item.id;
        const cells = item.season.map(function(active, i) {
          return '<td>' + (active ? '<span class="season-dot"></span>' : '') + '</td>';
        }).join('');
        const badge = item.source === 'own'
          ? '<span class="badge badge--own">' + t.badges.own + '</span>'
          : '<span class="badge badge--sourced">' + t.badges.sourced + '</span>';
        rows += '<tr><td>' + name + ' ' + badge + '</td>' + cells + '</tr>';
      });
    });

    container.innerHTML = `
      <div class="calendar-container">
        <table class="seasonality-table">
          <thead>
            <tr>
              <th>${t.nav.products}</th>
              ${months.map(m => '<th>' + m + '</th>').join('')}
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  // --- Product Grid Builder ---
  function buildProductCategoryGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getT();
    const lang = getCurrentLang();
    const products = SITE_DATA.products;

    // Placeholder images from Unsplash (produce-related)
    const categoryImages = {
      peppers: '../img/California_Bell_Pepper.jpg',
      tomatoes: '../img/vine_cluster_tomatoes.webp',
      cucumbers: '../img/Almeria_Dutch_cucumber.jpg',
      courgettes: '../img/green_courgette.jfif',
      beans: '../img/Boby_bean.jpg',
      aubergine: '../img/aubergine.jpg',
      watermelon: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=600&h=800&fit=crop',
    };

    let html = '<div class="grid grid--4">';
    Object.keys(products).forEach(function(catKey) {
      const catInfo = t.categories[catKey];
      const img = categoryImages[catKey] || '';
      html += `
        <a href="products.html#${catKey}" class="category-card reveal">
          <div class="card-image">
            <img src="${img}" alt="${catInfo.name}" loading="lazy">
          </div>
          <div class="card-overlay">
            <h3>${catInfo.name}</h3>
            <span class="product-count">${catInfo.count}</span>
          </div>
        </a>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // --- Product Listing Builder (for products page) ---
  function buildProductListing(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getT();
    const lang = getCurrentLang();
    const products = SITE_DATA.products;

    // Product placeholder images
    const productImages = {
      'california-bell': '../img/California_Bell_Pepper.jpg',
      'lamuyo': '../img/Lamuyo_pepper.jpg',
      'palermo': '../img/Palermo_Peppers.webp',
      'italian-green': '../img/italian_green_pepper.webp',
      'vine-cluster': '../img/vine_cluster_tomatoes.webp',
      'round-loose': 'https://images.unsplash.com/photo-1558818498-28c1e002b655?w=500&h=400&fit=crop',
      'raf': 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=500&h=400&fit=crop',
      'cherry-snack': 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&h=400&fit=crop',
      'long-life': 'https://images.unsplash.com/photo-1582284540020-8acbe03f4924?w=500&h=400&fit=crop',
      'dutch-type': '../img/Almeria_Dutch_cucumber.jpg',
      'french-type': '../img/french_type_cucumber.webp',
      'mini-spanish': '../img/mini_spanish_cucumber.jpg',
      'green-courgette': '../img/green_courgette.jfif',
      'white-courgette': '../img/white_courgette.jpg',
      'bobby-bean': '../img/Boby_bean.jpg',
      'flat-bean': '../img/Flat_bean.jpg',
      'long-aubergine': '../img/aubergine.jpg',
      'striped-watermelon': 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=500&h=400&fit=crop',
      'black-watermelon': 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500&h=400&fit=crop',
    };

    let html = '';
    Object.keys(products).forEach(function(catKey) {
      const cat = products[catKey];
      const catInfo = t.categories[catKey];
      html += `<div id="${catKey}" class="mb-12"><h2 class="mb-8" style="display:flex;align-items:center;gap:var(--space-3)"><span style="font-size:var(--text-3xl)">${cat.icon}</span> ${catInfo.name}</h2><div class="grid grid--3">`;

      cat.items.forEach(function(item) {
        const name = t.productNames[item.id];
        const desc = t.productDescs[item.id];
        const badge = item.source === 'own'
          ? '<span class="badge badge--own">' + t.badges.own + '</span>'
          : '<span class="badge badge--sourced">' + t.badges.sourced + '</span>';
        const img = productImages[item.id] || '';

        const seasonBar = item.season.map(function(active, i) {
          return '<div class="month"><div class="month-label">' + t.common.months[i] + '</div><div class="month-bar' + (active ? ' active' : '') + '"></div></div>';
        }).join('');

        html += `
          <div class="card reveal" id="product-${item.id}">
            <div class="card-image">
              <img src="${img}" alt="${name}" loading="lazy">
              <div style="position:absolute;top:var(--space-3);left:var(--space-3)">${badge}</div>
            </div>
            <div class="card-body">
              <h3>${name}</h3>
              <p>${desc.substring(0, 120)}...</p>
              <div class="product-season-bar mt-4" style="margin-bottom:var(--space-4)">${seasonBar}</div>
              <table class="spec-table" style="margin-bottom:var(--space-4)">
                <tr><th>${t.specs.colors}</th><td>${item.colors.join(', ')}</td></tr>
                <tr><th>${t.specs.calibres}</th><td>${item.calibres}</td></tr>
                <tr><th>${t.specs.packaging}</th><td>${item.packaging}</td></tr>
              </table>
              <a href="contact.html" class="btn btn--primary btn--sm" style="width:100%">${t.common.requestQuote}</a>
            </div>
          </div>
        `;
      });
      html += '</div></div>';
    });

    container.innerHTML = html;
  }

  // --- Contact Form Handler ---
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const t = getT();
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      // In a real implementation, this would send data to a server
      const successMsg = document.getElementById('form-success');
      if (successMsg) {
        successMsg.textContent = t.contact.form.success;
        successMsg.style.display = 'block';
        form.reset();
        setTimeout(function() {
          successMsg.style.display = 'none';
        }, 5000);
      }
    });
  }

  // --- Build Delivery Grid ---
  function buildDeliveryGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getT();
    const routes = t.logistics.delivery.routes;

    let html = '<div class="grid grid--2">';
    routes.forEach(function(route) {
      html += `
        <div class="delivery-card reveal">
          <div class="delivery-time">${route.time}</div>
          <div class="delivery-destination">
            <h4>${route.dest}</h4>
            <p>${route.detail}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // --- Build Certifications Grid ---
  function buildCertGrid(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getT();
    const certs = t.quality.certifications;

    let html = '<div class="grid grid--2">';
    certs.forEach(function(cert) {
      html += `
        <div class="cert-card reveal">
          <div class="cert-icon">${ICONS.shield}</div>
          <div class="cert-info">
            <h3>${cert.name}</h3>
            <p>${cert.desc}</p>
          </div>
        </div>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // --- Build Grower Steps ---
  function buildGrowerSteps(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getT();
    const steps = t.growers.how.steps;
    const stepIcons = [ICONS.check, ICONS.shield, ICONS.leaf, ICONS.globe];

    let html = '<div class="grid grid--4">';
    steps.forEach(function(step, i) {
      html += `
        <div class="pillar-card reveal reveal-delay-${i + 1}">
          <div class="pillar-icon">${stepIcons[i]}</div>
          <h3>${step.title}</h3>
          <p>${step.desc}</p>
        </div>
      `;
    });
    html += '</div>';
    container.innerHTML = html;
  }

  // --- Build Contact Form ---
  function buildContactForm(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const t = getT();
    const products = SITE_DATA.products;

    let productCheckboxes = '';
    Object.keys(products).forEach(function(catKey) {
      const catInfo = t.categories[catKey];
      productCheckboxes += `<label class="checkbox-item"><input type="checkbox" name="products" value="${catKey}"> ${catInfo.name}</label>`;
    });

    let countryOptions = '<option value="">' + t.contact.form.placeholders.country + '</option>';
    t.countries.forEach(function(c) {
      countryOptions += '<option value="' + c + '">' + c + '</option>';
    });

    container.innerHTML = `
      <form id="contact-form">
        <div class="grid grid--2">
          <div class="form-group">
            <label for="name">${t.contact.form.name} *</label>
            <input type="text" id="name" name="name" class="form-control" placeholder="${t.contact.form.placeholders.name}" required>
          </div>
          <div class="form-group">
            <label for="company">${t.contact.form.company} *</label>
            <input type="text" id="company" name="company" class="form-control" placeholder="${t.contact.form.placeholders.company}" required>
          </div>
        </div>
        <div class="grid grid--2">
          <div class="form-group">
            <label for="email">${t.contact.form.email} *</label>
            <input type="email" id="email" name="email" class="form-control" placeholder="${t.contact.form.placeholders.email}" required>
          </div>
          <div class="form-group">
            <label for="phone">${t.contact.form.phone}</label>
            <input type="tel" id="phone" name="phone" class="form-control" placeholder="${t.contact.form.placeholders.phone}">
          </div>
        </div>
        <div class="form-group">
          <label for="country">${t.contact.form.country} *</label>
          <select id="country" name="country" class="form-control" required>
            ${countryOptions}
          </select>
        </div>
        <div class="form-group">
          <label>${t.contact.form.products}</label>
          <div class="checkbox-group">
            ${productCheckboxes}
          </div>
        </div>
        <div class="form-group">
          <label for="message">${t.contact.form.message}</label>
          <textarea id="message" name="message" class="form-control" placeholder="${t.contact.form.placeholders.message}"></textarea>
        </div>
        <div id="form-success" style="display:none;padding:var(--space-4);background:var(--color-primary-50);color:var(--color-primary);border-radius:var(--radius-lg);margin-bottom:var(--space-4);font-weight:var(--font-weight-medium)"></div>
        <button type="submit" class="btn btn--primary btn--lg">${t.contact.form.submit} ${ICONS.arrowRight}</button>
      </form>
    `;

    initContactForm();
  }

  // --- Initialize ---
  function init() {
    renderHeader();
    renderFooter();
    renderWhatsApp();
    renderCookieConsent();
    initScrollReveal();
    initCounters();

    // Page-specific builders
    buildProductCategoryGrid('product-category-grid');
    buildSeasonalityTable('seasonality-calendar');
    buildProductListing('product-listing');
    buildDeliveryGrid('delivery-grid');
    buildCertGrid('cert-grid');
    buildGrowerSteps('grower-steps');
    buildContactForm('contact-form-container');

    // Re-init scroll reveals after dynamic content
    setTimeout(initScrollReveal, 100);
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose for external use
  window.CapiSite = {
    getCurrentLang: getCurrentLang,
    getT: getT,
    ICONS: ICONS,
    buildProductCategoryGrid: buildProductCategoryGrid,
    buildSeasonalityTable: buildSeasonalityTable,
    buildProductListing: buildProductListing,
    buildDeliveryGrid: buildDeliveryGrid,
    buildCertGrid: buildCertGrid,
    buildGrowerSteps: buildGrowerSteps,
    buildContactForm: buildContactForm,
  };

})();
