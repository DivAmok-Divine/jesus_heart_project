# The Jesus Heart Project — Website

Official website for **The Jesus Heart Project**, a faith-based humanitarian organization in
Tamale, Northern Region, Ghana. Built with **Vite + React + TypeScript + Tailwind CSS**.

> Tagline: *Humanity at Heart*

---

## ✨ Features

- Responsive, mobile-first design (most visitors are on phones)
- Pages: Home, About, Our Work (+ project detail), Team, Gallery, Get Involved, Contact
- **Donations** via Paystack (Mobile Money + card) with a Mobile Money fallback
- **WhatsApp** floating chat button (the most-used channel in Ghana)
- Contact form (Formspree, with a mailto fallback)
- Photo galleries with a lightbox
- SEO meta tags per page + Open Graph image
- Scroll animations (Framer Motion) and animated impact counters

---

## 🚀 Getting started

```bash
npm install        # install dependencies
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build locally
```

---

## ⚙️ Configuration

Copy `.env.example` to `.env` and fill in your keys:

```bash
cp .env.example .env
```

| Variable                    | What it does                                                        |
| --------------------------- | ------------------------------------------------------------------- |
| `VITE_PAYSTACK_PUBLIC_KEY`  | Paystack **public** key (pk_test_… / pk_live_…). Enables card + MoMo |
| `VITE_DONATION_CURRENCY`    | `GHS` (Ghana Cedi) or `USD`                                          |
| `VITE_FORMSPREE_ID`         | Formspree form id for the contact form                              |

Until a Paystack key is set, the donate form shows the **Mobile Money fallback** instructions.
Until a Formspree id is set, the contact form falls back to opening the visitor's email client.

> Note: only the Paystack **public** key goes here. Never put a secret key in front-end code.

---

## 🖊️ Editing content (no coding needed)

All text and data live in plain files under `src/`:

| File                       | Edit this to change…                            |
| -------------------------- | ----------------------------------------------- |
| `src/lib/constants.ts`     | Phone numbers, email, addresses, social links   |
| `src/data/projects.ts`     | Projects, descriptions, photo galleries         |
| `src/data/team.ts`         | Team members and bios                           |
| `src/data/values.ts`       | Core values                                     |
| `src/data/stats.ts`        | Impact numbers on the homepage                  |
| `src/data/partners.ts`     | Partner organizations                           |

Images live in `public/images/`. To add project photos, drop them in the relevant folder and
reference them in `src/data/projects.ts`.

---

## ☁️ Deploy (free)

**Netlify or Vercel** (recommended):

1. Push this folder to a GitHub repo.
2. Import it on [netlify.com](https://netlify.com) or [vercel.com](https://vercel.com).
3. Build command: `npm run build` · Publish directory: `dist`
4. Add the `VITE_…` environment variables in the dashboard.

The included `netlify.toml` and `public/_redirects` handle SPA routing automatically.

---

## 📁 Project structure

```
src/
├── components/   # layout, ui primitives, page sections, donate form
├── pages/        # one file per route
├── data/         # editable content (projects, team, values, …)
├── lib/          # constants, paystack helper
├── hooks/        # small reusable hooks
└── types/        # shared TypeScript types
public/images/    # logos, founder, project galleries
```

---

Made with ❤️ for **The Jesus Heart Project**.
