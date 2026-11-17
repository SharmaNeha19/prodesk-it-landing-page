# Prodesk IT – Digital Marketing Landing Page

## About the Project

This project is a responsive landing page developed for Prodesk IT, a digital marketing wing.

The objective was to create a modern website that presents digital marketing services in a clean and professional way while demonstrating frontend development fundamentals.

The project uses HTML, CSS, and vanilla JavaScript. CSS Flexbox and Grid are used to create responsive layouts for desktop and mobile devices.

## Features

- Responsive navigation bar with mobile hamburger menu.
- Hero section with a Get Started call-to-action.
- Three service sections: SEO, Web Development, and Digital Marketing.
- Responsive layouts using CSS Flexbox and Grid.
- Dark and light theme toggle.
- Sticky navigation bar with glassmorphism.
- Hover animations on buttons and service cards.
- Contact section and social media links.
- Separate Tailwind CSS implementation.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- CSS Flexbox
- CSS Grid
- Tailwind CSS

## Project Structure

```text
prodesk-it-landing-page/
│
├── index.html
├── style.css
├── script.js
├── README.md
├── Prompts.md
├── assets/
│
└── tailwind-migration/
    ├── index.html
    ├── package.json
    ├── tailwind.config.js
    ├── postcss.config.js
    └── src/
        └── input.css
```

## How to Run Locally

1. Clone or download this repository.
2. Open the project folder in VS Code.
3. Open index.html in your browser.

Alternatively, run:

```bash
python -m http.server 8000
```

Visit http://localhost:8000.

## Live Website

**Live URL:** https://sharmaneha19.github.io/prodesk-it-landing-page/

## Screenshot

![Prodesk IT Landing Page](assets/prodesk-preview.png)

## Phase 3 – Tailwind CSS

A separate Tailwind CSS version is included in the `tailwind-migration` folder.

To run it:

```bash
cd tailwind-migration
npm install
npm run build
npm run dev
```

## Testing and Quality Assurance

The following checks are planned or being performed:

- Desktop responsiveness
- Mobile responsiveness
- Hamburger menu functionality
- Dark/light theme switching
- Button and card hover effects
- Sticky navigation
- Keyboard navigation and accessibility
- Lighthouse performance and accessibility audit

Actual Lighthouse scores will be added after testing.

## AI Assistance

AI tools were used during development for implementation guidance and documentation. The prompts used are recorded in `Prompts.md`.

## Developer

**Project:** Prodesk IT Landing Page  
**Repository:** prodesk-it-landing-page
