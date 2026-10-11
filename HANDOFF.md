# 🤝 HANDOFF — The Jesus Heart Project website

Brief so a new chat can continue without re-discovering anything. Read before working.

> **Folder names:** the app is **`jesus-heart-project-frontend/`** (formerly `website/`); the
> original source docs/assets are in **`original_docs/`**. `start.sh`/`stop.sh` were updated to match.

---

## 1. What this is

A marketing/donation website for **The Jesus Heart Project** — a faith-based Christian humanitarian
nonprofit in **Tamale, Northern Region, Ghana**. Tagline: **"Humanity at Heart."**

- **Founder & CEO:** Prince Kwakuvi Amaglo (entrepreneur, TV producer, author, philanthropist;
  exec director of Atsu Prince A. Multimedia; author of "Church Media: The Art of Worship").
- Content came from `original_docs/docs/jesus_heart_porject_scope_and_details.docx`.
- Source assets supplied by the user: `original_docs/` (`docs/`, `exercutives/`,
  `founder_prince_img/`, `logos/`) and `pojects/`. Optimized copies the app uses live in
  `jesus-heart-project-frontend/public/images/`.

---

## 2. Repo layout (root: `/Users/divinek/Downloads/jesus_heart_project`)

```
jesus-heart-project-frontend/   ← THE APP (Vite + React + TS + Tailwind + Framer Motion)
original_docs/                  ← source: docs/ exercutives/ founder_prince_img/ logos/
pojects/                        ← source project photo sets (note the misspelling)
start.sh  stop.sh               ← run/stop the dev server (self-locating)
push-to-github.sh               ← user's script
HANDOFF.md  README.md  LICENSE
```

### Run it (from repo root, works from anywhere)
```bash
./start.sh      # starts dev server in background → http://localhost:5173 (installs deps on first run)
./stop.sh       # stops it
```
Inside the app folder: `npm run dev`, `npm run build`, `npm run preview`.
Build = `tsc --noEmit && vite build` — **run `npm run build` after changes** to catch TS errors.
User is on **macOS**, working in **VS Code**.

---

## 3. App file map (`jesus-heart-project-frontend/src`)

```
main.tsx, App.tsx (routes), index.css (design tokens + component classes)
components/
  layout/   Navbar.tsx, Footer.tsx, Layout.tsx
  sections/ Hero, ImpactStats, MissionPreview, FeaturedProjects, CoreValues,
            Testimonials, Partners, CTASection
  ui/       Section, SectionHeading, PageHeader, Reveal, Icon, ProjectCard, PartnerTile,
            Lightbox, FundProgress, Accordion, Modal, NewsletterForm, StampBadge,
            WhatsAppButton (UNUSED — chat is in the navbar now)
  donate/   DonateForm.tsx
  partner/  PartnerApplyModal.tsx  (exports PARTNER_TYPES)
  SEO.tsx
pages/  Home, About, Projects, ProjectDetail, Team, Founder, Partner, GetInvolved,
        Gallery, Contact, NotFound
data/   projects, team, founder, books, values, stats, partners, giving, testimonials, faq, gallery
lib/    constants.ts (ORG, SOCIALS, DONATION, NAV_LINKS, WORK_MENU), paystack.ts
hooks/  useScrollToTop.ts
```

**Editable content lives in `src/data/` and `src/lib/constants.ts`.**

Routes: `/` `/about` `/projects` `/projects/:slug` `/partner` `/team` `/founder` `/get-involved`
`/gallery` `/contact` + 404.

---

## 4. Design system (keep these)

- **Fonts:** headings = **Fraunces** (serif, `font-display`); body = **Inter** (`font-sans`).
- **Colors (tailwind.config.js):** `brand` red (600 `#e11b22`), `gold` accent (`#e8a33d`),
  `ink` warm stone text, `cream` `#fbf6f0`, `sand` `#f3ebe1`.
- **Everything is `rounded-md`.** Buttons are **flat** with press feedback `active:scale-[0.97]`
  (`.btn`, `.btn-primary/-secondary/-ghost/-gold`, `.btn-lg`). Helpers: `.eyebrow`/`.eyebrow-rule`,
  `.lead`, `.dropcap`, `.press`.
- `.container-page` is **full width** (no max-width cap). Scrollbars **hidden site-wide**.
  Respect `prefers-reduced-motion`.

---

## 5. Component behaviors (don't regress)

- **Navbar:** solid cream at top → frosted glass on scroll. Active link shows a small red dot.
  **"Our Work" dropdown** (Our Projects + Partner With Us; full-width highlight). Right side:
  **Chat with us** (green) + **Donate** (red, greys out on `/get-involved`).
- **Hero:** sized so hero + the separate **ImpactStats** band = one screen
  (`min-h-[calc(100dvh - navbar - overhang)]`). Background = **one image per device** stored in
  localStorage (`jhp_hero_pick_v1`), auto-changes after 30 days. Not a live carousel.
- **ImpactStats:** separate section overlapping the hero (`-mt-20 sm:-mt-24`) — keep separate.
- **MissionPreview** ("Who we are"): images auto-rotate every 6s + red **rubber-stamp badge**
  (`ui/StampBadge.tsx`) top-right.
- **Partner:** `partner/PartnerApplyModal.tsx` reusable **modal** (on `/partner` and `/get-involved`).
  Money types (Corporate, Sponsor) reveal a contribution step with **Pay now (Paystack) / Send as
  application / Skip for now**.
- **Get Involved:** fund selector + `DonateForm` (`#donate`); cards have action buttons
  (donate→`#donate`, partner→modal, volunteer→`#volunteer`, contact→mailto); donation FAQ.
- **Founder:** magazine bio (drop-cap) + **BooksShowcase**.
- **Footer:** warm light (sand), newsletter signup, **"Designed by DivAmok Corp."** credit (gold).

---

## 6. Donations & forms

- **Paystack** (Mobile Money + card; not Stripe). `DONATION` in `lib/constants.ts` reads
  `VITE_PAYSTACK_PUBLIC_KEY` + `VITE_DONATION_CURRENCY` (GHS ₵). Helper `lib/paystack.ts`.
  No key → buttons fall back to a "not active / use MoMo" message.
- **Forms** (Contact, Newsletter, Partner) → **Formspree** (`VITE_FORMSPREE_ID`) else **mailto**
  to `thejesusproject77@gmail.com`. Copy `.env.example` → `.env` to set keys.

---

## 7. Design tooling

- Design skills: `ui-ux-pro-max` (+ design, design-system, brand, slides, ui-styling,
  banner-design). Use ui-ux-pro-max for design decisions.
- **Magic MCP** (21st.dev) is available. The user prefers **hand-crafted** components — ask before using Magic.

---

## 8. Things still needed from the user (not yet wired)

- **Paystack public key** + **Formspree ID** in `.env` (donations/forms are live-ready otherwise).
- **Social links** (`lib/constants.ts SOCIALS` is empty; footer hides them until set).
- Names/bios for 3 extra exec photos already optimized in `public/images/team/`:
  `finance-director.jpg`, `graphic-designer.jpg`, `director.jpg` → add to `data/team.ts`.
- Confirm advisor mapping: `advisor-1.jpg` = Pastor Chris Laar-Mong, `advisor-2.jpg` = Dr. Francis Addy.
- Real testimonials/figures replace the sample ones in `data/testimonials.ts` and `data/projects.ts`.

---

## 9. Working conventions

- **Respect the user's manual edits** — they edit files directly; re-read before rewriting, don't revert.
- **Only do what's asked** — no unsolicited files/config.
- **Verify visually** with headless Chrome screenshots; the hero uses `dvh` so tall screenshots
  inflate it (use realistic heights or render isolated components as small test HTML). `sips
  --cropOffset` is unreliable. Clean up `/tmp/*.png` after.
- Keep `rounded-md`, flat buttons, warm palette. Use a TodoWrite list for multi-step work.
- The app folder is new since the last git commit (`main`).

---

### One-liner for the new chat
> "Continue the React app in `jesus-heart-project-frontend/` (Vite+TS+Tailwind, warm editorial; run
> `./start.sh` → localhost:5173). Read `HANDOFF.md` first. Verify with headless-Chrome screenshots +
> `npm run build`. Keep rounded-md/flat buttons/warm palette; don't revert manual edits; only do what's asked."
