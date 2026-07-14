# Thomas Burkland — Portfolio

A sleek, one-page personal portfolio built with the **Fog** design system: a calm,
cool-neutral aesthetic with generous whitespace, a restrained slate palette, and a
single soft slate-blue accent.

## Stack

- **Next.js 14** (App Router, React 18)
- **Tailwind CSS** — Fog design tokens mapped to theme colors
- **Framer Motion** — subtle scroll fades (respects `prefers-reduced-motion`)
- **Lucide React** — clean line iconography
- **Manrope** (via `next/font`) — geometric-humanist stand-in for Gotham Book

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing content

Everything lives in **`lib/content.ts`** — profile, about, experience, skills,
highlights, and education. Update it in one place and the whole page follows.

### Replaceable links

At the top of `lib/content.ts`:

```ts
export const LINKEDIN_URL = "https://www.linkedin.com/in/tomburkland";
export const EMAIL = "Burkland.Tom@Gmail.com";
```

Swap these for any LinkedIn URL / email address.

## Structure

```
app/
  layout.tsx       # fonts, metadata, <html>/<body>
  page.tsx         # all sections (hero, about, highlights, work, skills, education, contact)
  globals.css      # Fog tokens + base styles
components/
  Header.tsx       # sticky nav with scroll-spy
  FadeIn.tsx       # reusable Framer Motion reveal
lib/
  content.ts       # single source of truth for content + links
tailwind.config.ts # Fog color tokens
```

## Design tokens

| Token | Hex |
|---|---|
| `bg` | `#f5f7f9` |
| `surface` | `#ffffff` |
| `ink` | `#1d2833` |
| `ink-2` | `#54636f` |
| `ink-3` | `#6b7a88` |
| `ink-4` | `#9aa7b2` |
| `accent` | `#2f6fb0` |
| `hairline` | `#e5ebf0` |
