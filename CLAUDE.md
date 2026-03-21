# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for Maja Guseva, a cognitive neuroscientist. Single-page static site built with plain HTML/CSS/JS — no frameworks, no build tools, no npm.

## Development

Open `index.html` directly in a browser to preview. No build step or dev server required.

```bash
open index.html
```

## Architecture

Three files make up the entire site:

- **index.html** — Single-page layout with sections: Hero, Marquee, Projects, Publications, CV, Contact, Footer. All social links appear both in the nav bar and the hero section.
- **style.css** — All styles in one file. Uses CSS custom properties (`:root`) for theming. Mobile-first responsive with breakpoints at 768px. Organized by section with numbered comment headers.
- **script.js** — Minimal JS (~60 lines) wrapped in an IIFE: IntersectionObserver for scroll fade-ins, mobile hamburger toggle, navbar scroll effect, active nav link highlighting, auto-year in footer.

## Design System

- **Fonts**: JetBrains Mono (loaded via `@font-face` from `brand_assets/font/`) for headings, nav, tags. System sans-serif stack for body text.
- **Color palette**: Warm cream background (`#f5f0e8`), burnt orange accent (`#c45a2d`), dark text (`#1a1a1a`).
- **Style reference**: Editorial/magazine-inspired, minimal. See `otherDesigns/exampleDesign.webp` for the visual reference.
- **Key CSS patterns**: `.heading-outline` for stroked/hollow text, `.fade-in` + `.visible` for scroll animations with staggered delays on nth-children, `.tag` for tech pill labels.

## Important Notes

- Publications section currently has placeholder content — structured and ready for real data.
- Profile photo is in `assets/profile.jpg`.
- The marquee bar is pure CSS animation (no JS).
- Social icon SVGs are inline in the HTML (no external icon library).
