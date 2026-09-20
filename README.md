# ChatDeck — Free Shadcn UI SaaS Landing Page Template (Next.js + Tailwind)



**ChatDeck is a free shadcn landing page template for SaaS products — built with Next.js, Tailwind CSS, and shadcn/ui. Launch and validate your product faster, without starting from scratch.**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-components-black)

---

<!-- Replace with your actual screenshot -->
[<img width="5000" height="2625" alt="ChatDeck free shadcn SaaS landing page template preview" src="https://github.com/user-attachments/assets/240e2f51-0f6d-41b8-8aff-b8c3975f2cf1" />](https://www.shadcndeck.com/templates/chatdeck-saas-landing-page)

---

## ⚡ Live Demo

**[View Live Demo →](https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page)**

---
## Why choose this shadcn landing page template?

Most [shadcn landing page templates](https://www.shadcndeck.com/templates) are either too generic or too opinionated. ChatDeck gives you a clean, conversion-focused foundation that works for any SaaS product. Want alternatives? [Browse more free shadcn templates](https://www.shadcndeck.com/templates).

- ✅ No paid tier. No restrictions. Fully open source.
- ✅ Built with the tools you already use — Next.js, Shadcn UI, TypeScript, Tailwind
- ✅ Every section is independently editable — no tangled dependencies
- ✅ Designed for real launches, not just portfolios

---

## 🖼️ Screenshots

<p align="center">
  <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page">
    <img src="https://github.com/user-attachments/assets/f586134a-a40c-4d56-a746-303659a5cf07" alt="Shadcn SaaS landing page template hero section" width="100%" />
  </a>
  <br/>
  <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page"><strong>Hero Section</strong></a>
</p>

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page#features">
        <img src="https://github.com/user-attachments/assets/ea7cd758-5f7d-4ca6-9b2e-ecb9617662d2" alt="Shadcn UI feature grid section template" width="100%" />
      </a>
      <br/>
      <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page#features"><strong>Feature Section</strong></a>
    </td>
    <td align="center" width="50%">
      <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page#testimonials">
        <img src="https://github.com/user-attachments/assets/e32dd1b9-8b99-40c4-a585-2528b1b35641" alt="Shadcn testimonials marquee section" width="100%" />
      </a>
      <br/>
      <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page#testimonials"><strong>Testimonial</strong></a>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page#faq">
        <img src="https://github.com/user-attachments/assets/df3928f7-decd-4e7a-9f05-835e738e4d44" alt="Shadcn accordion FAQ section template" width="100%" />
      </a>
      <br/>
      <a href="https://www.shadcndeck.com/preview/templates/chatdeck-saas-landing-page#faq"><strong>FAQ Section</strong></a>
    </td>
    <td align="center" width="50%">
      <img src="https://github.com/user-attachments/assets/5f7536c9-a8f2-437b-bbbd-afa1f77d537f" alt="Shadcn landing page template dark mode" width="100%" />
      <br/>
      <strong>Dark Mode</strong>
    </td>
  </tr>
</table>

---

## Sections Included

| Section | Description |
|---|---|
| **Hero** | Clean hero with social proof and a clear value proposition |
| **Navigation** | Sticky nav with smooth scrolling to all sections |
| **Video** | Dedicated section for product demos or walkthroughs |
| **Social Proof** | Trusted companies section with smooth scroll animations |
| **Features** | Icon-based feature grid using Lucide icons |
| **Team** | Team cards with social links |
| **Testimonials** | Auto-scrolling marquee with user feedback |
| **Pricing** | Animated pricing with monthly/yearly toggle |
| **FAQ** | Accordion FAQ section to handle objections | | **Dark Mode** | Fully supported with animated theme toggler |

---

## Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework with App Router & SSR |
| [React 19](https://react.dev/) | UI library with latest patterns |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible, composable components |
| [Base UI](https://base-ui.com/) | Headless primitives with base-nova style |
| [Lucide React](https://lucide.dev/) | Clean, consistent icon library |
| [Tabler Icons](https://tabler.io/icons) | Extended icon library |
| [Motion v12](https://motion.dev/) | Smooth, performant animations |

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/ShadcnDeck/chatdeck-shadcn-saas-landing-page-template.git

# Navigate into the project
cd chatdeck-shadcn-saas-landing-page-template

# Install dependencies
npm install
```

### Run Locally

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Customization

### Update Content

All section content lives in clearly labeled components inside `/components`. Each section is self-contained — edit one without breaking others.

### Update Colors & Theme

ChatDeck uses Tailwind CSS with Shadcn UI's CSS variables. Update your brand colors in:

```
app/globals.css
```

### Add or Remove Sections

Each section is an individual component. Import or remove them from `app/page.tsx`:

```tsx
// app/page.tsx
import Hero from "@/components/Blocks/Hero";
import { FeaturesSection } from "@/components/Blocks/FeatureSection";
import { PricingSection } from "@/components/Blocks/PricingSection";
// Add or remove as needed
```

---

## Project Structure

```
chatdeck/
├── app/
│   ├── globals.css        # Global styles & CSS variables
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page — import sections here
├── components/
│   ├── Blocks/            # Individual page sections (Hero, Features, etc.)
│   └── ui/                # Shadcn UI components
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

---

## Deploy

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ShadcnDeck/chatdeck-shadcn-saas-landing-page-template)

### Deploy to cPanel (static hosting)

This project is configured to build as a fully static site (`output: "export"` in `next.config.ts`), so it can be hosted on a plain cPanel account with no Node.js support.

1. **Build the static site**

   ```bash
   npm run build
   ```

   This produces an `out/` folder containing plain HTML/CSS/JS — no server required. It includes a `.htaccess` (copied from `public/.htaccess`) that:
   - Redirects the domain root (`/`) to `/en/` or `/fr/` based on the visitor's browser language.
   - Serves the generated `404.html` for unknown routes.
   - Enables gzip compression and long-term caching for hashed `/_next/static/` assets.

2. **Set your production URL**

   Before building, set `NEXT_PUBLIC_SITE_URL` to your real domain (used for canonical URLs, sitemap, and Open Graph tags) via a `.env.production.local` file or your shell:

   ```bash
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com npm run build
   ```

3. **Upload to cPanel**

   Upload the **contents** of `out/` (not the folder itself) to your document root — typically `public_html/` for the primary domain, or `public_html/<subdomain>/` for a subdomain/addon domain. Use cPanel's File Manager (zip the `out/` contents locally, upload, then extract) or an FTP/SFTP client.

4. **Verify**

   Visit your domain — it should redirect to `/en/` or `/fr/`, and both locales, images, and fonts should load with no server errors.

**Notes & limitations of the static export:**

- There is no Node.js server, so API routes, Server Actions, and middleware are not available — this template doesn't use any.
- `next/image` optimization is disabled (`images.unoptimized: true`); images are served as-is.
- Locale prefixes are always shown (`/en/`, `/fr/`) since there's no server to rewrite the default locale to an unprefixed `/`.
- To preview the exact static build locally before uploading, run `npm run build` then `npm start` (serves `out/` at `http://localhost:3000`). Note that this local preview server does **not** read `.htaccess`, so the root-redirect behavior only applies once deployed to Apache/cPanel.

### Other Platforms

ChatDeck also works on any platform that supports a full Next.js server or static hosting:

- [Netlify](https://docs.netlify.com/frameworks/next-js/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)

---

## Who Is This For?

- **Indie Hackers** — Launching a new SaaS and need a conversion-ready page fast
- **Startup Founders** — Validating an idea before building the full product
- **Developers** — Building an MVP and skipping the design phase
- **Teams** — Need a shared, open-source starting point for a product site
- **Creators** — Want a clean layout that drives signups without heavy customization

---

## Frequently Asked Questions

### Is this shadcn landing page template really free?

Yes — ChatDeck is MIT licensed with no paid tier, no restrictions, and no attribution required.

### Does it work with the latest Next.js and shadcn/ui?

Yes. It's built on Next.js 16 with React 19, the App Router, and current shadcn/ui components, styled with Tailwind CSS v4.

### Can I use it for a commercial SaaS product?

Yes. The MIT license covers both personal and commercial use — including client work and paid products.

### Do I need to know shadcn/ui to customize it?

No. Every section is a self-contained component, so you can edit content and colors without deep shadcn/ui knowledge. Familiarity with Tailwind helps for finer styling tweaks.

---

## Contributing

Contributions are welcome! If you find a bug, want to improve a section, or add a feature:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the **MIT License** — free to use, modify, and distribute for personal and commercial projects.

See [LICENSE](./LICENSE) for full details.

---

## Acknowledgements

Built with:

- [shadcn/ui](https://ui.shadcn.com/) by [@shadcn](https://twitter.com/shadcn)
- [Next.js](https://nextjs.org/) by Vercel
- [Tailwind CSS](https://tailwindcss.com/) by the Tailwind team

---

**If ChatDeck saved you time, consider giving it a ⭐ — it helps others find it.**
