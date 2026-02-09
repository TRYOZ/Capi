# Grupo Los Capilleros — Website

Fresh produce commercialization and transport company website. Based in Aguadulce, Almería, Spain.

## Structure

```
/
├── index.html              # Root redirect to /es/
├── css/
│   ├── variables.css       # Design tokens (colors, fonts, spacing)
│   └── main.css            # All styles
├── js/
│   ├── data.js             # Product data & translations (ES/EN/DE)
│   └── main.js             # Shared components & interactivity
├── es/                     # Spanish pages (default language)
│   ├── index.html          # Home
│   ├── about.html          # About / Quiénes somos
│   ├── products.html       # Product catalogue
│   ├── growers.html        # Grower network
│   ├── quality.html        # Quality & certifications
│   ├── logistics.html      # Logistics & transport
│   └── contact.html        # Contact
├── en/                     # English pages
│   └── (same structure)
├── de/                     # German pages
│   └── (same structure)
└── generate-pages.js       # Script to regenerate EN/DE pages
```

## Languages

- **Spanish** (default): Full content
- **English**: Full content
- **German**: Full content

## Regenerating Translations

If you modify the Spanish page templates or the translation data in `js/data.js`, regenerate the EN/DE pages:

```bash
node generate-pages.js
```

## Design System

Colors, typography, and spacing are defined as CSS custom properties in `css/variables.css`. The entire palette can be swapped by changing the variables.

## Deployment

Static files — deploy to any web server. Currently targets `tryoz.com/work/Capi`.

## License

All rights reserved. Grupo Los Capilleros / A.T. CAPI-LA CURVA S.L.
