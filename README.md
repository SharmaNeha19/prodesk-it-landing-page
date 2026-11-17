# Prodesk IT — Digital Marketing Landing Page

A responsive, accessible landing page concept for Prodesk IT. The root implementation completes the raw HTML/CSS/vanilla-JavaScript MVP and Phase 2 enhancements. A separate `tailwind-migration/` folder contains the Phase 3 Tailwind implementation.

## Preview

**Live URL:** _Add your deployed URL after publishing (GitHub Pages / Netlify / Vercel)._

**Screenshot:** Add a screenshot at `assets/prodesk-preview.png`, then replace this line with:

```md
![Prodesk IT landing page](assets/prodesk-preview.png)
```

## Features

- Responsive navigation with accessible mobile menu
- Hero section with primary call to action
- Three service cards using CSS Grid
- About, contact CTA, and footer sections
- Dark/light theme toggle (vanilla JavaScript, persisted in local storage)
- Sticky, translucent navbar with `backdrop-filter`
- Button hover states and service-card lift interaction
- Keyboard focus styles, skip link, semantic landmarks, and reduced-motion support

## Run locally — raw CSS baseline

No build step or dependency installation is required.

1. Download or clone this repository.
2. Open `index.html` in a browser, or run a local server:

   ```bash
   python -m http.server 8000
   ```

3. Visit `http://localhost:8000`.

## Phase 3 — Tailwind migration

The separate `tailwind-migration/` implementation is the framework-migrated version. The original root version remains framework-free to demonstrate the Phase 1 architecture constraint.

```bash
cd tailwind-migration
npm install
npm run build
npm run dev
```

The Tailwind source is in `tailwind-migration/src/input.css`; the compiled stylesheet is generated at `tailwind-migration/dist/tailwind.css`.

## Deploy

### GitHub Pages
1. Create a **public** GitHub repository and push this project.
2. In repository settings, open **Pages**.
3. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for the Pages build and copy the published URL into this README.
5. Capture a desktop screenshot and save it as `assets/prodesk-preview.png`.

The root static implementation is the simplest version to publish on GitHub Pages. To publish the Tailwind version, deploy the `tailwind-migration` folder with a static host or configure the host's build command as `npm run build` and publish `tailwind-migration/dist` after including the HTML entry point.

## QA checklist

- [ ] Desktop layout checked at 1440px and 1024px
- [ ] Mobile layout checked at 390px and 320px
- [ ] Navigation menu opens, closes, and closes on Escape / link selection
- [ ] Theme toggle works and preference persists after refresh
- [ ] All links and CTA destinations verified
- [ ] Keyboard-only navigation and visible focus checked
- [ ] Contrast checked in both themes
- [ ] Lighthouse Performance and Accessibility audits run on the deployed URL
- [ ] Screenshot added and live URL published
- [ ] Two-minute demo video recorded

**Important:** Lighthouse scores depend on the deployed environment, network, browser, and audit version. Do not claim a 100/100 score until you have run and saved an actual Lighthouse report. Third-party font loading can also affect performance; for a strict performance pass, self-host optimized font files or remove the external font import.

## Two-minute QA demo outline

- **0:00–0:25:** Open the deployed page on desktop; show the navbar, hero, CTA, and service grid.
- **0:25–0:55:** Resize to a mobile viewport; open the hamburger menu and navigate to a section.
- **0:55–1:15:** Toggle light/dark theme and refresh to show persistence.
- **1:15–1:40:** Hover the CTA and service cards; scroll to show sticky frosted navbar.
- **1:40–2:00:** Show the file structure and the README / Prompts.md.

## Sprint deadline

Based on the brief's “6 days from today” instruction and the current date of 17 November 2026, the deadline is **23 November 2026 at 11:59 PM** (confirm the timezone with the sprint owner).

## Customization before submission

- Confirm the business email and replace `hello@prodeskit.com` if needed.
- Replace generic social profile links with official Prodesk IT accounts.
- Add the real deployment URL and screenshot.
- Run Lighthouse locally and on the deployed page; attach the actual report.
