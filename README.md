# Vibe Coding Portfolio

A responsive personal portfolio for **Sakib Patwary**, built with React and TypeScript. It showcases professional experience, skills, services, and projects in a dark interface with red, blue, black, and white accents.

**Live website:** [vivecodingportfolio.netlify.app](https://vivecodingportfolio.netlify.app/)

## Features

- Responsive navigation and layouts for desktop and mobile.
- Profile, about, services, technical skills, resume, and project showcase sections.
- Project filtering, testimonials, frequently asked questions, and contact details.
- Animated loading screen, scroll reveals, and a reading progress indicator.
- Smoky pointer trails, cursor glow, interactive card highlights, and a particle background.
- Reduced-motion support for a more comfortable experience.
- Embedded location map, social links, and copyable email and phone details.
- Custom SP monogram favicon.

## Technology

| Purpose | Tools |
| --- | --- |
| Interface | React 19, TypeScript |
| Development and production builds | Vite 6 |
| Styling | Tailwind CSS 4, custom CSS |
| Animation | Motion, Canvas API |
| Icons | Lucide React |
| Hosting | Netlify |

## Run locally

Install a Node.js version compatible with the included Vite release and npm. Download or clone this repository, open a terminal in its directory, and run:

```bash
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000).

The current portfolio does not require an API key or environment variables to run.

## Build and check

```bash
# Check TypeScript
npx tsc --noEmit

# Build the production website into dist/
npm run build

# Preview the production build locally
npm run preview
```

## Make it your own

1. Update `src/data/portfolioData.ts` with your name, profile image, biography, contact details, social links, services, experience, projects, skills, testimonials, and FAQs.
2. Review `src/components/` for text written directly in components, including the hero headline, employer, project counts, contact labels, and map caption.
3. Replace the map embed URL in the portfolio data with your own location.
4. Update the page title and social metadata in `index.html`.
5. Replace `public/favicon.svg` with your own name or initials.
6. Adjust the visual theme in `src/index.css` and component Tailwind classes. Pointer effects and the loading screen live in `src/components/Atmosphere.tsx`; the hero particle background lives in `src/components/InteractiveHeroCanvas.tsx`.
7. Replace personal images, project screenshots, and external links with assets and destinations you have permission to use.

**Contact form:** The current form simulates submission and displays a success message; it does not send or store messages. Connect an email service, a backend endpoint, or a form provider before using it to receive inquiries. The email and phone links work independently of the form.

## Deploy to Netlify

Import your copy of the repository into Netlify and use:

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Publish directory | `dist` |

Alternatively, build locally and upload the generated `dist` folder using Netlify's manual deployment interface. Sections use anchor links, so the current site does not need client-side route rewrite rules.

## Project structure

```text
public/
  favicon.svg           Custom favicon
src/
  components/           Portfolio sections and visual effects
  data/portfolioData.ts Portfolio content
  App.tsx               Page composition
  index.css             Global styling and animations
  main.tsx              React entry point
  types.ts              Shared TypeScript types
index.html              Page metadata and font imports
vite.config.ts          Build and development configuration
```

## Reuse permission

Anyone is welcome to use, copy, modify, and redistribute this portfolio's original code for personal or commercial projects, including creating their own portfolio. No payment or prior permission is required. Attribution to Sakib Patwary is appreciated.

Keep existing copyright and license notices when redistributing code. Files already carrying an Apache-2.0 notice remain subject to that license, and third-party libraries and assets retain their own licenses. This permission does not grant rights to someone else's personal identity, testimonials, trademarks, or third-party images; replace those with your own content.

The project is provided as is, without warranty.
