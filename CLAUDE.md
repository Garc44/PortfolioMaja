# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Maja Guseva, a cognitive neuroscientist. Single-page static site built with plain HTML/CSS/JS — no frameworks, no build tools, no npm. Deployed via GitHub Pages.

## Development

Open `index.html` directly in a browser to preview. No build step or dev server required.

```bash
open index.html
```

## Architecture

Three files make up the entire site:

- **index.html** — Single-page layout with sections: Hero, Marquee, Projects, Publications, CV, Contact, Footer. Includes a modal overlay for project details. Social links appear in nav bar, hero section, and contact section.
- **style.css** (~1100 lines) — All styles in one file. Uses CSS custom properties (`:root`) for theming. Mobile-first responsive with breakpoint at 768px. Organized by section with numbered comment headers (1–13).
- **script.js** (~245 lines) — Wrapped in an IIFE. Handles: scroll fade-ins (IntersectionObserver), mobile hamburger toggle, navbar scroll effect, active nav link highlighting, project modal system with data-driven content, skill tile tap-to-fill for mobile, auto-year in footer.

## Design System

- **Fonts**: JetBrains Mono (loaded via `@font-face` from `brand_assets/font/`) for headings, nav, tags. System sans-serif stack for body text.
- **Color palette**: Warm cream background (`#f5f0e8`), burnt orange accent (`#c45a2d`), dark text (`#1a1a1a`), white surfaces (`#ffffff`), muted text (`#6b6b6b`).
- **Style reference**: Editorial/magazine-inspired, minimal. See `otherDesigns/exampleDesign.webp` for the visual reference.
- **Key CSS patterns**: `.heading-outline` for stroked/hollow text, `.fade-in` + `.visible` for scroll animations with staggered delays on nth-children, `.tag` for tech pill labels, `.skill-tile` for square skill boxes with `--skill-level` CSS variable fill effect.

## Key Components

### Project Modal System
- Project cards have `data-project` attributes linking to entries in the `projectData` object in `script.js`.
- Each entry has: title, tags, image URL (from GitHub raw), HTML description, and links array.
- Modal opens on card click, closes via X button, backdrop click, or Escape key.
- Body scroll is locked while modal is open.

### Skill Tiles
- Two-column grid (Programming / Libraries & Tools) with square tiles showing monogram + name.
- Each tile has an inline `--skill-level` CSS variable (e.g., `90%`) that drives a fill-from-bottom effect on hover.
- On mobile (touch), tiles use a `.tapped` class toggled via JS for the same fill effect.

### Mobile Navigation
- Hamburger button transforms into X via CSS (three spans rotate/fade).
- Nav panel slides in from right (`position: fixed`). Hamburger has `z-index: 110` to stay above the panel (`z-index: 105`).

## Important Notes

- Publications section currently has placeholder content — structured and ready for real data.
- Profile photo is in `assets/profile.jpg`.
- The marquee bar is pure CSS animation (no JS).
- Social icon SVGs are inline in the HTML (no external icon library).
- Project modal images are loaded from external GitHub raw URLs.
