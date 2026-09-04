# Nithish Kumar S — Professional Portfolio

A recruiter-focused portfolio positioning Nithish Kumar S as a **Banking & Capital Markets Operations professional with analytics, Power BI, Excel automation and business intelligence capability**.

The project preserves the existing plain HTML/CSS/JavaScript architecture and the professional information contained in the uploaded portfolio and resume. Portfolio analytics projects are clearly separated from professional employment experience.

## Professional positioning

- Banking / Capital Markets Operations
- Investment Banking Operations
- Payments / FinTech Operations
- Data Analytics & Business Intelligence
- Power BI, DAX & Power Query
- Advanced Excel & VBA Automation
- MIS / KPI Reporting
- Process Improvement

## Portfolio structure

- `index.html` — semantic single-page portfolio
- `style.css` — responsive banking/capital-markets visual system
- `script.js` — project filters, project detail dialog, navigation and accessibility interactions
- `assets/Resume.pdf` — source resume used by the portfolio
- `assets/certificates/` — certification assets
- `assets/dubai-skyline.svg` — lightweight Dubai skyline artwork used in the hero
- `assets/profile.webp` — professional portrait used in the hero
- `favicon.svg` — portfolio favicon
- `scripts/dev.mjs` — dependency-free local development server
- `scripts/build.mjs` — dependency-free static build to `dist/`
- `vercel.json` — Vercel build configuration
- `.nojekyll` — GitHub Pages compatibility
- `LINK_AUDIT.md` — link audit notes

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

## Production build

```bash
npm run build
```

The production output is created in `dist/`.

## GitHub Pages

The source project remains deployable directly from the repository root because it is plain HTML/CSS/JavaScript.

1. Upload the complete project to the repository root.
2. Commit and push to `main`.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**.
5. Select `main` and `/ (root)`.

## Vercel

1. Import the GitHub repository into Vercel.
2. Vercel reads `vercel.json`.
3. Build command: `npm run build`.
4. Output directory: `dist`.

## Project organization

The portfolio highlights a smaller set of **Featured Analytics Projects** first and moves the rest into **Additional Analytics Projects** with domain filters.

Project categories include Banking & Finance, Payments / FinTech, Operations, HR Analytics, Sales & Retail, Supply Chain, Healthcare, Hospitality, Manufacturing, Population / Public Data and Aviation.

## Analytics project note

Portfolio projects are presented as self-developed analytics work. They are not described as confidential client engagements or commissioned company analytics unless the source material explicitly supports that description.

## Live portfolio

The resume lists:

`https://nithishibops.github.io/nithishibops-nithish-portfolio/`

## Content integrity

Professional experience, education, contact details and certifications are aligned to the uploaded resume. Unsupported figures such as an unverified count of capital-market issues have not been used.

## 2026 Recruiter-first visual refresh

The current UI preserves the original premium dark portfolio identity using black/charcoal surfaces with gold, violet, green and sky-blue accents. The hero now includes Dubai skyline artwork behind a smaller, better-spaced professional portrait. Project cards use Lucide icons and business context instead of dashboard screenshots, and the page has wider spacing, larger readable typography, a 4 × 2 analytics workflow, consistent card alignment and responsive navigation. Existing professional information, resume links and live dashboard URLs remain preserved.

## Executive 3D Portfolio V3

This build keeps the portfolio recruiter-first while adding a lightweight cinematic/2.5D experience:

- short opening portfolio loader with progress indicator
- Dubai skyline hero with subtle scroll parallax
- deliberately small professional portrait inside a CSS 3D stage
- Banking / Markets / Analytics / Automation role nodes around the portrait
- restrained 2.5D hover depth on project, skill, workflow and credential cards
- slim page scroll progress indicator and smoother section reveals
- `Available worldwide` positioning while keeping Dubai/UAE relevance prominent
- contact message form that prepares an email addressed to `nithish.ibops@gmail.com`
- no WebGL, GLSL or permanent animation loop, keeping mobile/GPU usage low
- reduced-motion support for accessibility and low-power devices

The professional experience, project links, resume, certificates and existing project content are preserved from the uploaded portfolio.
