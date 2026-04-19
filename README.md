# challoner.dev

Personal portfolio for David Challoner — independent engineer working on
distributed systems, reliability, and AI.

## Stack

- **Next.js 15** (App Router) · React 19 · TypeScript
- **Tailwind CSS 3** with a hand-tuned editorial design system
- **Motion** (framer-motion successor) for reveals & page animation
- **next/font** for variable Fraunces, Geist, and JetBrains Mono

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Layout

```
app/
  layout.tsx          · root chrome, fonts, nav, footer
  page.tsx            · landing
  about/              · bio + CV
  consulting/         · pillars, process, engagements
  projects/           · project list
  articles/           · essay archive
components/
  nav.tsx             · editorial masthead nav
  footer.tsx          · colophon footer
  page-hero.tsx       · shared page hero
  section.tsx         · section header scaffolding
  reveal.tsx          · scroll-reveal primitives
  marquee.tsx         · typographic marquee
  registration-marks.tsx
  home/               · landing-page sections
  about/              · portrait + CV
  consulting/         · pillars, process, case studies, engagements
  projects/           · project list
  articles/           · featured + archive
```

## Customising

- **Personal details** — search for `Challoner` / `David` / `hello@challoner.dev`
  across `components/` and `app/`.
- **Portrait** — `components/about/portrait.tsx`. Replace the SVG placeholder
  with a real `<Image src="/david.jpg" … />` when ready. Drop the file into
  `public/`.
- **CV** — `components/about/cv.tsx`. Experience, education, speaking.
- **Projects & articles** — `components/projects/list.tsx` and
  `components/articles/list.tsx`. Data is inline; move to `content/` when
  you want real MDX.
- **Colors & type** — `tailwind.config.ts` and `app/globals.css`. The
  oxblood accent, warm paper tones, and type scale all live there.

## Design notes

- Warm paper palette (`#ece4d0` + ink `#16130c`) with a single oxblood
  accent (`#a8391f`). Never pure white, never pure black.
- Typography: Fraunces (variable, with SOFT + WONK axes) for display,
  Geist for UI, JetBrains Mono for metadata.
- Editorial framing — folios, chapter numbers, registration marks, caption
  lines — used sparingly and consistently across pages.
- Motion is quiet: staggered fade-ups, draw-in underlines, no bounce.
