# Hospital Website Template — Lala Mahender Aggarwal Hospital

A fast, modern, fully responsive hospital website built with React 19, Vite, Tailwind CSS v4 and Motion.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

## Re-using this template for another hospital

1. **Content** — edit `src/data/site.ts`. Hospital name, phones, address, specialities, doctors, stats,
   case stories, testimonials, health packages, FAQs and milestones all live there.
2. **Brand colours** — edit the `--color-brand-*` / `--color-mint-*` tokens at the top of `src/index.css`.
3. **Images** — replace the WebP files in `public/img/` (keep the same names, or update paths in `site.ts`).
4. **Booking** — `src/components/booking/BookingForm.tsx` → `handleSubmit` is front-end only.
   Connect it to your backend, EmailJS, WhatsApp API or CRM before launch.

> All names, figures, prices, ratings and testimonials in `site.ts` are placeholders — replace them with
> verified information from the client before going live.

## Pages

| Route           | Page                                                       |
| --------------- | ---------------------------------------------------------- |
| `/`             | Home — hero search, stats, specialities, technology, doctors, case stories, testimonials, packages, FAQ, booking |
| `/specialities` | All centres of excellence with deep links (`#cardiology`) |
| `/doctors`      | Doctor directory with search + speciality filter (`?q=` / `?speciality=`) |
| `/about`        | Mission, values, timeline                                  |
| `/contact`      | Contact channels, booking form, map                        |

## Project structure

```
src/
├── data/site.ts             # ← all content lives here
├── components/
│   ├── booking/             # Booking modal, provider (useBooking) and form
│   ├── cards/               # DoctorCard
│   ├── home/                # Homepage sections
│   ├── layout/              # Header, Footer, MobileDock, ScrollManager
│   └── ui/                  # Reveal, Counter, Accordion, SectionHeading, PageHero, Logo
├── pages/                   # Route components (inner pages are lazy-loaded)
└── index.css                # Design tokens + component classes
```

## Performance & accessibility notes

- Images are pre-compressed WebP (~1.4 MB total vs ~20 MB of original PNG/JPEG); below-the-fold images lazy-load.
- Icons are tree-shaken SVGs (lucide-react) — no icon font download.
- Inner pages are code-split; the hero image is preloaded.
- Animations respect `prefers-reduced-motion`.
- Mobile gets a thumb-reachable action dock (Emergency · Book · WhatsApp · Call).
