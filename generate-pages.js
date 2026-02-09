#!/usr/bin/env node
/**
 * Generate translated pages for EN and DE from Spanish templates
 * This script creates all the inner pages for English and German versions
 */

const fs = require('fs');
const path = require('path');

// Page definitions: each page has ES-specific content that needs translation
const pages = {
  'about.html': {
    en: {
      lang: 'en',
      title: 'About us — Grupo Los Capilleros',
      description: 'Learn about Grupo Los Capilleros: a family company from Almería specialising in fresh vegetable sourcing. Own production and partner greenhouse growers.',
      pageLabel: 'Get to know us',
      pageTitle: 'About us',
      pageSubtitle: 'A family company from Almería with a vocation for serving the European market.',
      sections: [
        {
          title: 'Our history',
          p1: 'Grupo Los Capilleros was born in Aguadulce, Almería, in the heart of Europe\'s largest greenhouse horticultural production area. With over 15 years of experience, we have established ourselves as a leading fresh produce marketer and exporter to European markets.',
          p2: 'What started as a family farm has grown into an integrated operation combining own production with a curated network of partner growers, offering our clients a complete product range throughout the entire season.',
          img: 'Almería greenhouses',
        },
        {
          title: 'Our model: production + grower network',
          p1: 'Our business model is built on two pillars: our own greenhouses, where we control every stage of cultivation, and our network of trusted Almería growers, which allows us to expand our range and volume without compromising quality.',
          p2: 'Every partner grower meets our same quality standards, traceability requirements, and certification protocols. We conduct regular audits and residue controls to ensure product consistency.',
          badges: ['Own Production', 'Almería Sourced'],
          img: 'Inside a greenhouse',
        },
        {
          title: 'Our facilities',
          p1: 'We operate our own packing station, cold storage rooms, and loading docks in Aguadulce. Our facilities are designed to maintain the cold chain from harvest to dispatch.',
          list: [
            'Packing station with sorting and packaging lines',
            'Cold storage with temperature and humidity control',
            'Climate-controlled loading docks for direct dispatch',
            'On-site quality control laboratory',
          ],
          img: 'Packing station',
        },
      ],
      almeria: {
        label: 'The Almería advantage',
        title: 'Europe\'s vegetable garden',
        p1: 'Almería enjoys over 3,000 hours of sunshine per year and an ideal microclimate for greenhouse cultivation. The proximity to the Mediterranean Sea and the shelter of Sierra de Gádor create unique conditions for producing top-quality vegetables for most of the year.',
        p2: 'Moreover, Almería\'s strategic location enables reaching major European markets within 24-72 hours by road, ensuring product freshness.',
        stats: [
          { num: '3000+', label: 'Sunshine hours/year' },
          { num: '31,000', label: 'Ha of greenhouse' },
          { num: '24-72h', label: 'To EU markets' },
          { num: '#1', label: 'ES horticultural exporter' },
        ],
      },
      ctaTitle: 'Want to know us better?',
      ctaSubtitle: 'Contact us or visit our facilities in Aguadulce, Almería.',
      ctaBtn: 'Contact us',
    },
    de: {
      lang: 'de',
      title: 'Über uns — Grupo Los Capilleros',
      description: 'Lernen Sie Grupo Los Capilleros kennen: ein Familienunternehmen aus Almería, spezialisiert auf die Vermarktung von frischem Gemüse. Eigenproduktion und Partnererzeuger.',
      pageLabel: 'Lernen Sie uns kennen',
      pageTitle: 'Über uns',
      pageSubtitle: 'Ein Familienunternehmen aus Almería mit der Berufung, den europäischen Markt zu bedienen.',
      sections: [
        {
          title: 'Unsere Geschichte',
          p1: 'Grupo Los Capilleros wurde in Aguadulce, Almería, im Herzen des größten Gewächshaus-Anbaugebiets Europas gegründet. Mit über 15 Jahren Erfahrung haben wir uns als führender Vermarkter und Exporteur von frischem Gemüse für europäische Märkte etabliert.',
          p2: 'Was als Familienbetrieb begann, ist zu einem integrierten Unternehmen gewachsen, das Eigenproduktion mit einem ausgewählten Netzwerk von Partnerzeugern kombiniert und unseren Kunden ein komplettes Sortiment während der gesamten Saison bietet.',
          img: 'Gewächshäuser in Almería',
        },
        {
          title: 'Unser Modell: Produktion + Erzeugernetzwerk',
          p1: 'Unser Geschäftsmodell basiert auf zwei Säulen: unseren eigenen Gewächshäusern, in denen wir jede Anbauphase kontrollieren, und unserem Netzwerk vertrauenswürdiger Erzeuger aus Almería, das es uns ermöglicht, Sortiment und Volumen zu erweitern, ohne die Qualität zu beeinträchtigen.',
          p2: 'Jeder Partnererzeuger erfüllt unsere gleichen Qualitätsstandards, Rückverfolgbarkeitsanforderungen und Zertifizierungsprotokolle. Wir führen regelmäßige Audits und Rückstandskontrollen durch.',
          badges: ['Eigenproduktion', 'Aus Almería bezogen'],
          img: 'Im Gewächshaus',
        },
        {
          title: 'Unsere Einrichtungen',
          p1: 'Wir betreiben eine eigene Packstation, Kühlräume und Verladerampen in Aguadulce. Unsere Einrichtungen sind darauf ausgelegt, die Kühlkette von der Ernte bis zum Versand aufrechtzuerhalten.',
          list: [
            'Packstation mit Sortier- und Verpackungslinien',
            'Kühlräume mit Temperatur- und Feuchtigkeitskontrolle',
            'Klimatisierte Verladerampen für Direktversand',
            'Qualitätskontrolllabor vor Ort',
          ],
          img: 'Packstation',
        },
      ],
      almeria: {
        label: 'Der Almería-Vorteil',
        title: 'Europas Gemüsegarten',
        p1: 'Almería genießt über 3.000 Sonnenstunden pro Jahr und ein ideales Mikroklima für den Gewächshausanbau. Die Nähe zum Mittelmeer und der Schutz der Sierra de Gádor schaffen einzigartige Bedingungen für den Anbau von Spitzengemüse.',
        p2: 'Die strategische Lage ermöglicht es, die wichtigsten europäischen Märkte innerhalb von 24-72 Stunden auf dem Landweg zu erreichen.',
        stats: [
          { num: '3000+', label: 'Sonnenstunden/Jahr' },
          { num: '31.000', label: 'Ha Gewächshaus' },
          { num: '24-72h', label: 'Zu EU-Märkten' },
          { num: '#1', label: 'ES Gemüseexporteur' },
        ],
      },
      ctaTitle: 'Möchten Sie uns besser kennenlernen?',
      ctaSubtitle: 'Kontaktieren Sie uns oder besuchen Sie unsere Einrichtungen in Aguadulce, Almería.',
      ctaBtn: 'Kontakt',
    },
  },
};

function generateAboutPage(lang, data) {
  const checkIcon = '<svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';

  const section1 = data.sections[0];
  const section2 = data.sections[1];
  const section3 = data.sections[2];

  const listHtml = section3.list ? section3.list.map(item =>
    `<li style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)">${checkIcon}<span>${item}</span></li>`
  ).join('') : '';

  const badgeHtml = section2.badges ? section2.badges.map((b, i) =>
    `<span class="badge badge--${i === 0 ? 'own' : 'sourced'}" style="font-size:var(--text-sm);padding:var(--space-2) var(--space-4)">${b}</span>`
  ).join('') : '';

  const statsHtml = data.almeria.stats.map(s =>
    `<div class="stat-item" style="background:rgba(255,255,255,0.05);padding:var(--space-6);border-radius:var(--radius-xl)">
      <div class="stat-number" style="color:var(--color-primary-100)">${s.num}</div>
      <div class="stat-label" style="color:rgba(255,255,255,0.7)">${s.label}</div>
    </div>`
  ).join('');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${data.title}</title>
  <meta name="description" content="${data.description}">
  <link rel="alternate" hreflang="es" href="../es/about.html">
  <link rel="alternate" hreflang="en" href="../en/about.html">
  <link rel="alternate" hreflang="de" href="../de/about.html">
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>
  <header class="site-header" id="site-header"></header>
  <div class="page-header">
    <span class="label">${data.pageLabel}</span>
    <h1>${data.pageTitle}</h1>
    <p class="subtitle">${data.pageSubtitle}</p>
  </div>

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">${section1.title}</h2>
          <p>${section1.p1}</p>
          <p>${section1.p2}</p>
        </div>
        <div class="about-image reveal">
          <img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop" alt="${section1.img}" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <section class="section section--gray">
    <div class="container">
      <div class="about-grid about-grid--reverse">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">${section2.title}</h2>
          <p>${section2.p1}</p>
          <p>${section2.p2}</p>
          <div style="display:flex;gap:var(--space-4);margin-top:var(--space-6)">${badgeHtml}</div>
        </div>
        <div class="about-image reveal">
          <img src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop" alt="${section2.img}" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">${section3.title}</h2>
          <p>${section3.p1}</p>
          <ul style="margin-top:var(--space-6)">${listHtml}</ul>
        </div>
        <div class="about-image reveal">
          <img src="https://images.unsplash.com/photo-1595855759920-86582396756a?w=800&h=600&fit=crop" alt="${section3.img}" loading="lazy">
        </div>
      </div>
    </div>
  </section>

  <section class="section section--primary">
    <div class="container">
      <div class="section-header">
        <span class="label" style="color:var(--color-primary-100)">${data.almeria.label}</span>
        <h2>${data.almeria.title}</h2>
      </div>
      <div class="grid grid--2" style="align-items:center">
        <div class="reveal">
          <p style="font-size:var(--text-lg);color:rgba(255,255,255,0.85);line-height:var(--line-height-relaxed)">${data.almeria.p1}</p>
          <p style="color:rgba(255,255,255,0.75)">${data.almeria.p2}</p>
        </div>
        <div class="reveal" style="text-align:center">
          <div class="stats-grid" style="grid-template-columns:repeat(2,1fr);gap:var(--space-6)">${statsHtml}</div>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>${data.ctaTitle}</h2>
      <p>${data.ctaSubtitle}</p>
      <a href="contact.html" class="btn btn--white btn--lg">${data.ctaBtn}</a>
    </div>
  </section>

  <footer class="site-footer" id="site-footer"></footer>
  <div id="whatsapp-float"></div>
  <div class="cookie-banner" id="cookie-banner"></div>
  <script src="../js/data.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Generate about pages
['en', 'de'].forEach(lang => {
  const data = pages['about.html'][lang];
  const html = generateAboutPage(lang, data);
  fs.writeFileSync(path.join(__dirname, lang, 'about.html'), html);
  console.log(`Generated ${lang}/about.html`);
});

// Simple page generator for pages that primarily use JS-rendered content
function generateSimplePage(lang, filename, config) {
  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.title}</title>
  <meta name="description" content="${config.description}">
  <link rel="alternate" hreflang="es" href="../es/${filename}">
  <link rel="alternate" hreflang="en" href="../en/${filename}">
  <link rel="alternate" hreflang="de" href="../de/${filename}">
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>
  <header class="site-header" id="site-header"></header>
  ${config.body}
  <footer class="site-footer" id="site-footer"></footer>
  <div id="whatsapp-float"></div>
  <div class="cookie-banner" id="cookie-banner"></div>
  <script src="../js/data.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>`;
}

// Products page
const productsConfig = {
  en: {
    title: 'Products — Grupo Los Capilleros',
    description: 'Fresh vegetable catalogue from Almería: peppers, tomatoes, cucumbers, courgettes, beans, aubergines and watermelons. Own production and Almería sourced.',
    body: `
  <div class="page-header">
    <span class="label">Our products</span>
    <h1>Product catalogue</h1>
    <p class="subtitle">Fresh greenhouse vegetables. Own production and Almería grower network.</p>
  </div>
  <section class="section--sm" style="border-bottom:var(--border-thin);background:var(--color-white);position:sticky;top:var(--header-height);z-index:var(--z-dropdown)">
    <div class="container">
      <div style="display:flex;gap:var(--space-2);overflow-x:auto;padding:var(--space-3) 0;-webkit-overflow-scrolling:touch">
        <a href="#peppers" class="btn btn--sm btn--ghost" style="flex-shrink:0">Peppers</a>
        <a href="#tomatoes" class="btn btn--sm btn--ghost" style="flex-shrink:0">Tomatoes</a>
        <a href="#cucumbers" class="btn btn--sm btn--ghost" style="flex-shrink:0">Cucumbers</a>
        <a href="#courgettes" class="btn btn--sm btn--ghost" style="flex-shrink:0">Courgettes</a>
        <a href="#beans" class="btn btn--sm btn--ghost" style="flex-shrink:0">Beans</a>
        <a href="#aubergine" class="btn btn--sm btn--ghost" style="flex-shrink:0">Aubergine</a>
        <a href="#watermelon" class="btn btn--sm btn--ghost" style="flex-shrink:0">Watermelon</a>
      </div>
    </div>
  </section>
  <section class="section"><div class="container"><div id="product-listing"></div></div></section>
  <section class="cta-section">
    <div class="container">
      <h2>Interested in any product?</h2>
      <p>Request a personalised quote. We respond within 24 hours.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Request a quote</a>
    </div>
  </section>`
  },
  de: {
    title: 'Produkte — Grupo Los Capilleros',
    description: 'Frisches Gemüsekatalog aus Almería: Paprika, Tomaten, Gurken, Zucchini, Bohnen, Auberginen und Wassermelonen. Eigenproduktion und Almería-Herkunft.',
    body: `
  <div class="page-header">
    <span class="label">Unsere Produkte</span>
    <h1>Produktkatalog</h1>
    <p class="subtitle">Frisches Gewächshausgemüse. Eigenproduktion und Erzeugernetzwerk aus Almería.</p>
  </div>
  <section class="section--sm" style="border-bottom:var(--border-thin);background:var(--color-white);position:sticky;top:var(--header-height);z-index:var(--z-dropdown)">
    <div class="container">
      <div style="display:flex;gap:var(--space-2);overflow-x:auto;padding:var(--space-3) 0;-webkit-overflow-scrolling:touch">
        <a href="#peppers" class="btn btn--sm btn--ghost" style="flex-shrink:0">Paprika</a>
        <a href="#tomatoes" class="btn btn--sm btn--ghost" style="flex-shrink:0">Tomaten</a>
        <a href="#cucumbers" class="btn btn--sm btn--ghost" style="flex-shrink:0">Gurken</a>
        <a href="#courgettes" class="btn btn--sm btn--ghost" style="flex-shrink:0">Zucchini</a>
        <a href="#beans" class="btn btn--sm btn--ghost" style="flex-shrink:0">Bohnen</a>
        <a href="#aubergine" class="btn btn--sm btn--ghost" style="flex-shrink:0">Auberginen</a>
        <a href="#watermelon" class="btn btn--sm btn--ghost" style="flex-shrink:0">Wassermelonen</a>
      </div>
    </div>
  </section>
  <section class="section"><div class="container"><div id="product-listing"></div></div></section>
  <section class="cta-section">
    <div class="container">
      <h2>Interesse an einem Produkt?</h2>
      <p>Fordern Sie ein individuelles Angebot an. Wir antworten innerhalb von 24 Stunden.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Angebot anfordern</a>
    </div>
  </section>`
  }
};

// Growers page
const growersConfig = {
  en: {
    title: 'Our Growers — Grupo Los Capilleros',
    description: 'Network of Almería greenhouse growers. Unified quality standards, full traceability, and certifications for the European market.',
    body: `
  <div class="page-header">
    <span class="label">Grower network</span>
    <h1>Our growers</h1>
    <p class="subtitle">A network of Almería's finest farmers, united by the same quality standards.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">A trusted network</h2>
          <p>Our business model goes beyond own production. We work with a carefully selected network of Almería growers who share our vision of quality and commitment to the European market.</p>
          <p>Every partner grower is regularly audited and must comply with the same quality, traceability, and food safety protocols that we apply on our own farms.</p>
        </div>
        <div class="about-image reveal">
          <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" alt="Farmer in greenhouse" loading="lazy">
        </div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="section-header"><span class="label">Process</span><h2>How our network works</h2></div>
      <div id="grower-steps"></div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="about-grid about-grid--reverse">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Unified standards</h2>
          <p>All growers in our network are GlobalGAP certified, maintain integrated pest management programmes, and follow zero-residue protocols. Full traceability is guaranteed from greenhouse to end customer.</p>
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-3);margin-top:var(--space-6)">
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">GlobalGAP</span>
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">Integrated pest management</span>
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">Zero residue</span>
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">100% Traceability</span>
          </div>
        </div>
        <div class="about-image reveal">
          <img src="https://images.unsplash.com/photo-1592924802564-270de26ef602?w=800&h=600&fit=crop" alt="Quality control" loading="lazy">
        </div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="section-header"><span class="label">Location</span><h2>The Almería region</h2><p class="text-lead">Our growers operate in the heart of the Poniente Almeriense, Europe's largest greenhouse area.</p></div>
      <div class="transit-map reveal" style="background:var(--color-white);min-height:300px">
        <div style="text-align:center;color:var(--color-gray-500)">
          <svg style="width:64px;height:64px;margin-bottom:var(--space-4);opacity:0.4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <p>Aguadulce, Almería — 36.8°N, 2.5°W</p>
          <p class="text-small">Poniente Almeriense region</p>
        </div>
      </div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <h2>Want to join our network?</h2>
      <p>Contact us if you are an Almería grower and would like to work with us.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Contact us</a>
    </div>
  </section>`
  },
  de: {
    title: 'Unsere Erzeuger — Grupo Los Capilleros',
    description: 'Netzwerk von Gewächshauserzeugern aus Almería. Einheitliche Qualitätsstandards, vollständige Rückverfolgbarkeit und Zertifizierungen für den europäischen Markt.',
    body: `
  <div class="page-header">
    <span class="label">Erzeugernetzwerk</span>
    <h1>Unsere Erzeuger</h1>
    <p class="subtitle">Ein Netzwerk der besten Landwirte Almerías, vereint durch die gleichen Qualitätsstandards.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Ein vertrauenswürdiges Netzwerk</h2>
          <p>Unser Geschäftsmodell geht über die Eigenproduktion hinaus. Wir arbeiten mit einem sorgfältig ausgewählten Netzwerk von Erzeugern aus Almería zusammen, die unsere Vision von Qualität und Engagement für den europäischen Markt teilen.</p>
          <p>Jeder Partnererzeuger wird regelmäßig auditiert und muss die gleichen Qualitäts-, Rückverfolgbarkeits- und Lebensmittelsicherheitsprotokolle einhalten, die wir auf unseren eigenen Betrieben anwenden.</p>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&h=600&fit=crop" alt="Landwirt im Gewächshaus" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="section-header"><span class="label">Prozess</span><h2>Wie unser Netzwerk funktioniert</h2></div>
      <div id="grower-steps"></div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="about-grid about-grid--reverse">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Einheitliche Standards</h2>
          <p>Alle Erzeuger in unserem Netzwerk sind GlobalGAP-zertifiziert, pflegen integrierte Pflanzenschutzprogramme und befolgen Null-Rückstands-Protokolle. Die vollständige Rückverfolgbarkeit ist vom Gewächshaus bis zum Endkunden garantiert.</p>
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-3);margin-top:var(--space-6)">
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">GlobalGAP</span>
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">Integrierter Pflanzenschutz</span>
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">Null-Rückstand</span>
            <span class="cert-badge" style="background:var(--color-primary-50);color:var(--color-primary);border:1px solid var(--color-primary-100)">100% Rückverfolgbarkeit</span>
          </div>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1592924802564-270de26ef602?w=800&h=600&fit=crop" alt="Qualitätskontrolle" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="section-header"><span class="label">Standort</span><h2>Die Region Almería</h2><p class="text-lead">Unsere Erzeuger arbeiten im Herzen des Poniente Almeriense, Europas größtem Gewächshausgebiet.</p></div>
      <div class="transit-map reveal" style="background:var(--color-white);min-height:300px">
        <div style="text-align:center;color:var(--color-gray-500)">
          <svg style="width:64px;height:64px;margin-bottom:var(--space-4);opacity:0.4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <p>Aguadulce, Almería — 36.8°N, 2.5°W</p>
          <p class="text-small">Region Poniente Almeriense</p>
        </div>
      </div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <h2>Möchten Sie Teil unseres Netzwerks werden?</h2>
      <p>Kontaktieren Sie uns, wenn Sie ein Erzeuger aus Almería sind und mit uns zusammenarbeiten möchten.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Kontakt</a>
    </div>
  </section>`
  }
};

// Quality page
const qualityConfig = {
  en: {
    title: 'Quality & Certifications — Grupo Los Capilleros',
    description: 'Quality certifications: GlobalGAP, GRASP, BRC, ISO 22000. Full traceability and residue control for fresh vegetables from Almería.',
    body: `
  <div class="page-header">
    <span class="label">Commitment to quality</span>
    <h1>Quality & certifications</h1>
    <p class="subtitle">Meeting the most demanding European market standards to guarantee the safety and quality of our products.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Our quality process</h2>
          <p>From greenhouse to delivery, every stage of our process is subject to rigorous quality controls. Our technical team oversees production, packing, and dispatch to ensure every product meets customer requirements.</p>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" alt="Quality control" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="grid grid--2" style="gap:var(--space-12)">
        <div class="reveal">
          <div class="pillar-icon" style="margin:0 0 var(--space-5) 0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
          <h3 style="margin-bottom:var(--space-4)">Full traceability</h3>
          <p>Our traceability system allows tracking every product from the source greenhouse to the delivery point. Each box is identified with a code providing access to the product's complete history.</p>
        </div>
        <div class="reveal">
          <div class="pillar-icon" style="margin:0 0 var(--space-5) 0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
          <h3 style="margin-bottom:var(--space-4)">Residue control</h3>
          <p>We maintain an active residue monitoring programme with regular analyses at accredited laboratories. We operate zero-residue protocols and comply with the strictest European MRLs.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header"><span class="label">Certifications</span><h2>Our certifications</h2><p class="text-lead">Compliant with leading international food safety and good agricultural practice standards.</p></div>
      <div id="cert-grid"></div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <h2>Need more information about our certifications?</h2>
      <p>We can provide copies of our certificates and quality documentation.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Contact us</a>
    </div>
  </section>`
  },
  de: {
    title: 'Qualität & Zertifizierungen — Grupo Los Capilleros',
    description: 'Qualitätszertifizierungen: GlobalGAP, GRASP, BRC, ISO 22000. Vollständige Rückverfolgbarkeit und Rückstandskontrolle für frisches Gemüse aus Almería.',
    body: `
  <div class="page-header">
    <span class="label">Qualitätsverpflichtung</span>
    <h1>Qualität & Zertifizierungen</h1>
    <p class="subtitle">Wir erfüllen die anspruchsvollsten europäischen Marktstandards, um die Sicherheit und Qualität unserer Produkte zu garantieren.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Unser Qualitätsprozess</h2>
          <p>Vom Gewächshaus bis zur Lieferung unterliegt jede Stufe unseres Prozesses strengen Qualitätskontrollen. Unser technisches Team überwacht Produktion, Verpackung und Versand.</p>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop" alt="Qualitätskontrolle" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="grid grid--2" style="gap:var(--space-12)">
        <div class="reveal">
          <div class="pillar-icon" style="margin:0 0 var(--space-5) 0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
          <h3 style="margin-bottom:var(--space-4)">Vollständige Rückverfolgbarkeit</h3>
          <p>Unser Rückverfolgbarkeitssystem ermöglicht die Nachverfolgung jedes Produkts vom Quellgewächshaus bis zum Lieferpunkt. Jede Kiste ist mit einem Code versehen.</p>
        </div>
        <div class="reveal">
          <div class="pillar-icon" style="margin:0 0 var(--space-5) 0"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
          <h3 style="margin-bottom:var(--space-4)">Rückstandskontrolle</h3>
          <p>Wir unterhalten ein aktives Rückstandsüberwachungsprogramm mit regelmäßigen Analysen in akkreditierten Labors. Wir arbeiten mit Null-Rückstands-Protokollen.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header"><span class="label">Zertifizierungen</span><h2>Unsere Zertifizierungen</h2><p class="text-lead">Konform mit führenden internationalen Standards für Lebensmittelsicherheit und gute landwirtschaftliche Praxis.</p></div>
      <div id="cert-grid"></div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <h2>Benötigen Sie weitere Informationen zu unseren Zertifizierungen?</h2>
      <p>Wir können Ihnen Kopien unserer Zertifikate und Qualitätsdokumentation zur Verfügung stellen.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Kontakt</a>
    </div>
  </section>`
  }
};

// Logistics page
const logisticsConfig = {
  en: {
    title: 'Logistics & Transport — Grupo Los Capilleros',
    description: 'Integrated logistics for fresh vegetables. Cold chain, own fleet and direct deliveries across Europe from Almería in 24-72 hours.',
    body: `
  <div class="page-header">
    <span class="label">Integrated logistics</span>
    <h1>Logistics & transport</h1>
    <p class="subtitle">Complete cold chain from greenhouse to your warehouse. Direct deliveries across Europe.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Fleet & transport</h2>
          <p>We operate our own fleet and maintain agreements with leading refrigerated logistics operators to ensure reliable, punctual deliveries. Our vehicles feature GPS temperature control and continuous monitoring.</p>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop" alt="Refrigerated transport" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="about-grid about-grid--reverse">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Cold chain</h2>
          <p>We maintain an unbroken cold chain from harvest. Our cold rooms and climate-controlled loading docks ensure products are dispatched in optimal conditions.</p>
          <ul style="margin-top:var(--space-6)">
            <li style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)"><svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Temperature controlled from harvest to delivery</span></li>
            <li style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)"><svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Continuous temperature logging with GPS data</span></li>
            <li style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)"><svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Climate-controlled loading docks</span></li>
          </ul>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" alt="Cold storage" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header"><span class="label">Delivery times</span><h2>From Almería to major European markets</h2></div>
      <div id="delivery-grid"></div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Packaging & palletization</h2>
          <p>We work with standard European packaging formats and adapt to each client's specifications. EPS boxes, corrugated cardboard, flowpack, nets, bags, and punnets.</p>
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-3);margin-top:var(--space-6)">
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">EPS boxes</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Corrugated cardboard</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Flowpack</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Nets</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Punnets</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Euro pallet</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">UK Pallet</span>
          </div>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=800&h=600&fit=crop" alt="Produce packaging" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <h2>Need a tailored logistics solution?</h2>
      <p>We adapt our logistics to your needs. Contact our commercial team.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Contact us</a>
    </div>
  </section>`
  },
  de: {
    title: 'Logistik & Transport — Grupo Los Capilleros',
    description: 'Integrierte Logistik für frisches Gemüse. Kühlkette, eigene Flotte und Direktlieferungen in ganz Europa von Almería in 24-72 Stunden.',
    body: `
  <div class="page-header">
    <span class="label">Integrierte Logistik</span>
    <h1>Logistik & Transport</h1>
    <p class="subtitle">Vollständige Kühlkette vom Gewächshaus bis zu Ihrem Lager. Direktlieferungen in ganz Europa.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Flotte & Transport</h2>
          <p>Wir betreiben eine eigene Flotte und pflegen Vereinbarungen mit führenden Kühllogistik-Anbietern, um zuverlässige, pünktliche Lieferungen zu gewährleisten.</p>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop" alt="Kühltransport" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="about-grid about-grid--reverse">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Kühlkette</h2>
          <p>Wir halten eine ununterbrochene Kühlkette von der Ernte aufrecht. Unsere Kühlräume und klimatisierten Verladerampen stellen sicher, dass Produkte unter optimalen Bedingungen versandt werden.</p>
          <ul style="margin-top:var(--space-6)">
            <li style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)"><svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Temperaturkontrolle von der Ernte bis zur Lieferung</span></li>
            <li style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)"><svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Kontinuierliche Temperaturaufzeichnung mit GPS-Daten</span></li>
            <li style="display:flex;align-items:flex-start;gap:var(--space-3);margin-bottom:var(--space-4)"><svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg><span>Klimatisierte Verladerampen</span></li>
          </ul>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop" alt="Kühlräume" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header"><span class="label">Lieferzeiten</span><h2>Von Almería zu den wichtigsten europäischen Märkten</h2></div>
      <div id="delivery-grid"></div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="about-grid">
        <div class="reveal">
          <h2 style="margin-bottom:var(--space-6)">Verpackung & Palettierung</h2>
          <p>Wir arbeiten mit europäischen Standardverpackungsformaten und passen uns den Spezifikationen jedes Kunden an.</p>
          <div style="display:flex;flex-wrap:wrap;gap:var(--space-3);margin-top:var(--space-6)">
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">EPS-Boxen</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Wellpappe</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Flowpack</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Netze</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Punnets</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">Europalette</span>
            <span class="cert-badge" style="background:var(--color-gray-100);color:var(--color-gray-700)">UK-Palette</span>
          </div>
        </div>
        <div class="about-image reveal"><img src="https://images.unsplash.com/photo-1607301406259-dfb186e15de8?w=800&h=600&fit=crop" alt="Gemüseverpackung" loading="lazy"></div>
      </div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <h2>Benötigen Sie eine maßgeschneiderte Logistiklösung?</h2>
      <p>Wir passen unsere Logistik an Ihre Bedürfnisse an. Kontaktieren Sie unser Vertriebsteam.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Kontakt</a>
    </div>
  </section>`
  }
};

// Contact page
const contactConfig = {
  en: {
    title: 'Contact — Grupo Los Capilleros',
    description: 'Contact Grupo Los Capilleros for a fresh vegetable quote from Almería. Phone, email, WhatsApp and contact form.',
    body: `
  <div class="page-header">
    <span class="label">Contact</span>
    <h1>Get in touch</h1>
    <p class="subtitle">We are at your disposal for any commercial enquiry or quote request.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="grid grid--2" style="gap:var(--space-16);align-items:start">
        <div class="reveal"><div id="contact-form-container"></div></div>
        <div class="reveal">
          <div style="padding:var(--space-8);background:var(--color-gray-50);border-radius:var(--radius-2xl);margin-bottom:var(--space-8)">
            <h3 style="margin-bottom:var(--space-6)">Contact information</h3>
            <div class="footer-contact-item" style="margin-bottom:var(--space-5)">
              <svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">Address</strong><span style="color:var(--color-gray-600)">Paraje Los Capilleros, s/n<br>04720 Aguadulce, Almería<br>Spain</span></div>
            </div>
            <div class="footer-contact-item" style="margin-bottom:var(--space-5)">
              <svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">Phone</strong><a href="tel:+34950340000" style="color:var(--color-gray-600)">+34 950 34 XX XX</a></div>
            </div>
            <div class="footer-contact-item" style="margin-bottom:var(--space-5)">
              <svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">Email</strong><a href="mailto:info@grupoloscapilleros.com" style="color:var(--color-gray-600)">info@grupoloscapilleros.com</a></div>
            </div>
            <div class="footer-contact-item">
              <svg style="width:20px;height:20px;color:#25D366;flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">WhatsApp</strong><a href="https://wa.me/34600000000" target="_blank" style="color:var(--color-gray-600)">+34 600 000 000</a></div>
            </div>
          </div>
          <div style="padding:var(--space-8);background:var(--color-gray-50);border-radius:var(--radius-2xl)">
            <h3 style="margin-bottom:var(--space-4)">Office hours</h3>
            <div style="display:flex;justify-content:space-between;padding:var(--space-3) 0;border-bottom:1px solid var(--color-gray-200)"><span style="color:var(--color-gray-700);font-weight:var(--font-weight-medium)">Monday to Friday</span><span style="color:var(--color-gray-600)">8:00 - 18:00</span></div>
            <div style="display:flex;justify-content:space-between;padding:var(--space-3) 0"><span style="color:var(--color-gray-700);font-weight:var(--font-weight-medium)">Saturday</span><span style="color:var(--color-gray-600)">8:00 - 14:00</span></div>
          </div>
          <div style="margin-top:var(--space-8);border-radius:var(--radius-2xl);overflow:hidden;height:250px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25677.97086!2d-2.55!3d36.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7a9e51b25db3e1%3A0x40463fd8ca28b10!2sAguadulce%2C%20Almer%C3%ADa!5e0!3m2!1sen!2ses!4v1" width="100%" height="250" style="border:0" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>`
  },
  de: {
    title: 'Kontakt — Grupo Los Capilleros',
    description: 'Kontaktieren Sie Grupo Los Capilleros für ein Angebot für frisches Gemüse aus Almería. Telefon, E-Mail, WhatsApp und Kontaktformular.',
    body: `
  <div class="page-header">
    <span class="label">Kontakt</span>
    <h1>Kontaktieren Sie uns</h1>
    <p class="subtitle">Wir stehen Ihnen für jede kommerzielle Anfrage oder Angebotsanforderung zur Verfügung.</p>
  </div>
  <section class="section">
    <div class="container">
      <div class="grid grid--2" style="gap:var(--space-16);align-items:start">
        <div class="reveal"><div id="contact-form-container"></div></div>
        <div class="reveal">
          <div style="padding:var(--space-8);background:var(--color-gray-50);border-radius:var(--radius-2xl);margin-bottom:var(--space-8)">
            <h3 style="margin-bottom:var(--space-6)">Kontaktinformationen</h3>
            <div class="footer-contact-item" style="margin-bottom:var(--space-5)">
              <svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">Adresse</strong><span style="color:var(--color-gray-600)">Paraje Los Capilleros, s/n<br>04720 Aguadulce, Almería<br>Spanien</span></div>
            </div>
            <div class="footer-contact-item" style="margin-bottom:var(--space-5)">
              <svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">Telefon</strong><a href="tel:+34950340000" style="color:var(--color-gray-600)">+34 950 34 XX XX</a></div>
            </div>
            <div class="footer-contact-item" style="margin-bottom:var(--space-5)">
              <svg style="width:20px;height:20px;color:var(--color-primary);flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">E-Mail</strong><a href="mailto:info@grupoloscapilleros.com" style="color:var(--color-gray-600)">info@grupoloscapilleros.com</a></div>
            </div>
            <div class="footer-contact-item">
              <svg style="width:20px;height:20px;color:#25D366;flex-shrink:0;margin-top:2px" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <div><strong style="display:block;margin-bottom:var(--space-1);color:var(--color-gray-800)">WhatsApp</strong><a href="https://wa.me/34600000000" target="_blank" style="color:var(--color-gray-600)">+34 600 000 000</a></div>
            </div>
          </div>
          <div style="padding:var(--space-8);background:var(--color-gray-50);border-radius:var(--radius-2xl)">
            <h3 style="margin-bottom:var(--space-4)">Bürozeiten</h3>
            <div style="display:flex;justify-content:space-between;padding:var(--space-3) 0;border-bottom:1px solid var(--color-gray-200)"><span style="color:var(--color-gray-700);font-weight:var(--font-weight-medium)">Montag bis Freitag</span><span style="color:var(--color-gray-600)">8:00 - 18:00</span></div>
            <div style="display:flex;justify-content:space-between;padding:var(--space-3) 0"><span style="color:var(--color-gray-700);font-weight:var(--font-weight-medium)">Samstag</span><span style="color:var(--color-gray-600)">8:00 - 14:00</span></div>
          </div>
          <div style="margin-top:var(--space-8);border-radius:var(--radius-2xl);overflow:hidden;height:250px">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25677.97086!2d-2.55!3d36.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7a9e51b25db3e1%3A0x40463fd8ca28b10!2sAguadulce%2C%20Almer%C3%ADa!5e0!3m2!1sde!2ses!4v1" width="100%" height="250" style="border:0" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>`
  }
};

// German home page
const deHomeConfig = {
  title: 'Grupo Los Capilleros — Frisches Gemüse aus Almería, Spanien',
  description: 'Frisches Gemüse Lieferant aus Almería, Spanien. Eigenproduktion und vertrauenswürdiges Erzeugernetzwerk. Export von Paprika, Tomaten, Gurken, Zucchini und mehr nach Europa.',
  body: `
  <section class="hero">
    <div class="hero-bg"><img src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&h=1080&fit=crop" alt="Gewächshäuser in Almería"></div>
    <div class="container">
      <div class="hero-content">
        <span class="label">Von Almería nach ganz Europa</span>
        <h1>Frisches Gemüse aus Almería für Ihren Markt</h1>
        <p class="subtitle">Eigenproduktion und vertrauenswürdiges Erzeugernetzwerk. Vermarktung, Qualitätskontrolle und integrierte Logistik für europäische Märkte.</p>
        <div class="hero-actions">
          <a href="contact.html" class="btn btn--primary btn--lg">Angebot anfordern</a>
          <a href="products.html" class="btn btn--white btn--lg">Produkte ansehen</a>
        </div>
      </div>
    </div>
  </section>
  <section class="stats-bar">
    <div class="container">
      <div class="stats-grid">
        <div class="stat-item"><div class="stat-number" data-count="15" data-suffix="+">0</div><div class="stat-label">Jahre Erfahrung</div></div>
        <div class="stat-item"><div class="stat-number" data-count="12">0</div><div class="stat-label">Zielländer</div></div>
        <div class="stat-item"><div class="stat-number" data-count="5000" data-suffix="+">0</div><div class="stat-label">Tonnen pro Saison</div></div>
        <div class="stat-item"><div class="stat-number" data-count="30" data-suffix="+">0</div><div class="stat-label">Partnererzeuger</div></div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header">
        <span class="label">Unsere Produkte</span>
        <h2>Premium-Gewächshausgemüse</h2>
        <p class="text-lead">Breites Sortiment an frischem Gemüse aus den Gewächshäusern von Almería, ganzjährig verfügbar.</p>
      </div>
      <div id="product-category-grid"></div>
    </div>
  </section>
  <section class="section section--gray">
    <div class="container">
      <div class="section-header"><span class="label">Warum wir</span><h2>Ihr vertrauenswürdiger Partner in Almería</h2></div>
      <div class="grid grid--4">
        <div class="pillar-card reveal reveal-delay-1">
          <div class="pillar-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 17 3.5 19 1c1 2 2 4.5 2 8 0 5.5-4.78 11-10 11z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg></div>
          <h3>Eigenproduktion + Erzeugernetzwerk</h3>
          <p>Anbau in eigenen Gewächshäusern, ergänzt durch ein ausgewähltes Netzwerk vertrauenswürdiger Erzeuger aus Almería.</p>
        </div>
        <div class="pillar-card reveal reveal-delay-2">
          <div class="pillar-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg></div>
          <h3>Integrierte Logistik & Transport</h3>
          <p>Vollständige Kühlkette, eigene Flotte und Logistikpartnerschaften für Direktlieferungen in ganz Europa.</p>
        </div>
        <div class="pillar-card reveal reveal-delay-3">
          <div class="pillar-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
          <h3>Qualitätszertifizierungen</h3>
          <p>GlobalGAP, GRASP, BRC und mehr. Wir erfüllen die anspruchsvollsten europäischen Marktstandards.</p>
        </div>
        <div class="pillar-card reveal reveal-delay-4">
          <div class="pillar-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></div>
          <h3>Direkt aus Almería</h3>
          <p>Aus dem Herzen des "Plastikmeeres" — Europas größte Konzentration von Gewächshäusern.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="section-header"><span class="label">Verfügbarkeit</span><h2>Saisonkalender</h2><p class="text-lead">Prüfen Sie die Verfügbarkeit unserer Produkte im Jahresverlauf.</p></div>
      <div id="seasonality-calendar" class="reveal"></div>
    </div>
  </section>
  <section class="cta-section">
    <div class="container">
      <h2>Suchen Sie einen zuverlässigen Lieferanten?</h2>
      <p>Kontaktieren Sie uns für ein individuelles Angebot nach Ihren Anforderungen.</p>
      <a href="contact.html" class="btn btn--white btn--lg">Jetzt Kontakt aufnehmen</a>
    </div>
  </section>`
};

// Generate all remaining pages
const allPages = {
  'products.html': productsConfig,
  'growers.html': growersConfig,
  'quality.html': qualityConfig,
  'logistics.html': logisticsConfig,
  'contact.html': contactConfig,
};

['en', 'de'].forEach(lang => {
  Object.entries(allPages).forEach(([filename, configs]) => {
    const config = configs[lang];
    const html = generateSimplePage(lang, filename, config);
    fs.writeFileSync(path.join(__dirname, lang, filename), html);
    console.log(`Generated ${lang}/${filename}`);
  });
});

// Generate DE home page
const deHome = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${deHomeConfig.title}</title>
  <meta name="description" content="${deHomeConfig.description}">
  <meta name="keywords" content="Gemüse Großhandel Spanien, Paprika Lieferant Almería, frisches Gemüse Exporteur Spanien">
  <meta property="og:title" content="Grupo Los Capilleros — Frisches Gemüse aus Almería">
  <meta property="og:description" content="Eigenproduktion und Erzeugernetzwerk. Vermarktung und Transport von frischem Gemüse nach Europa.">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="de_DE">
  <link rel="alternate" hreflang="es" href="../es/index.html">
  <link rel="alternate" hreflang="en" href="../en/index.html">
  <link rel="alternate" hreflang="de" href="../de/index.html">
  <link rel="stylesheet" href="../css/main.css">
</head>
<body>
  <header class="site-header" id="site-header"></header>
  ${deHomeConfig.body}
  <footer class="site-footer" id="site-footer"></footer>
  <div id="whatsapp-float"></div>
  <div class="cookie-banner" id="cookie-banner"></div>
  <script src="../js/data.js"></script>
  <script src="../js/main.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'de', 'index.html'), deHome);
console.log('Generated de/index.html');

console.log('\nAll pages generated successfully!');
