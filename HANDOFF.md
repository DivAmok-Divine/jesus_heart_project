# 🤝 HANDOFF — The Jesus Heart Project website

A complete brief so a new chat can continue without re-discovering anything.
Read this top-to-bottom before working.

> **Folder rename (important):** the app folder is now **`jesus-heart-project-frontend/`**
> (formerly `website/`), and the original source docs/assets were moved into
> **`original_docs/`**. `start.sh`/`stop.sh` were updated to match.

---

## 1. What this is

A marketing/donation website for **The Jesus Heart Project** — a faith-based Christian
humanitarian nonprofit in **Tamale, Northern Region, Ghana**. Tagline: **"Humanity at Heart."**

- **Founder & CEO:** Prince Kwakuvi Amaglo (entrepreneur, TV producer, author, philanthropist;
  exec director of Atsu Prince A. Multimedia; author of "Church Media: The Art of Worship").
- Real org content came from `original_docs/docs/jesus_heart_porject_scope_and_details.docx`.
- Source assets supplied by the user live at the repo root:
  `original_docs/` (→ `docs/`, `exercutives/`, `founder_prince_img/`, `logos/`) and `pojects/`.
  **Optimized copies** used by the app are in `jesus-heart-project-frontend/public/images/`.

> ⚠️ Earlier "deep research" found **no public web presence** for this org under these exact
> names. Everything on the site comes from the user's document + supplied assets. Several figures
> are intentional **placeholders** (see §8 and `jesus-heart-project-frontend/CONTENT_TODO.md`).

---

## 2. Repo layout (root: `/Users/divinek/Downloads/jesus_heart_project`)

```
jesus-heart-project-frontend/   ← THE APP (Vite+React+TS+Tailwind). Was "website/".
original_docs/                  ← source material: docs/ exercutives/ founder_prince_img/ logos/
pojects/                        ← source project photo sets (note the misspelling)
start.sh  stop.sh               ← run/stop the dev server (self-locating; updated for rename)
push-to-github.sh               ← user's script (leave as-is unless asked)
HANDOFF.md  README.md  LICENSE
```

### Run it
From the **repo root** (scripts work from anywhere; they detect `jesus-heart-project-frontend/`):
```bash
./start.sh      # installs deps on first run, starts dev server in background → http://localhost:5173
./stop.sh       # stops it
```
Or inside the app folder: `npm run dev` (5173), `npm run build`, `npm run preview`.
Dev-server log: `jesus-heart-project-frontend/.dev-server.log`. Survives VS Code reloads.

> User runs the **VS Code extension** (no `claude` CLI on PATH), on **macOS**.
> Build = `tsc --noEmit && vite build`. **Run `npm run build` after changes** to catch TS errors.

---

## 3. App file map (`jesus-heart-project-frontend/src`)

```
main.tsx, App.tsx (routes), index.css (design tokens + component classes), vite-env.d.ts
components/
  layout/   Navbar.tsx, Footer.tsx, Layout.tsx
  sections/ Hero.tsx, ImpactStats.tsx, MissionPreview.tsx, FeaturedProjects.tsx,
            CoreValues.tsx, Testimonials.tsx, Partners.tsx, CTASection.tsx
  ui/       Section, SectionHeading, PageHeader, Reveal, Icon, ProjectCard, PartnerTile,
            Lightbox, FundProgress, Accordion, Modal, NewsletterForm, StampBadge,
            WhatsAppButton (UNUSED — chat moved into navbar; safe to delete)
  donate/   DonateForm.tsx
  partner/  PartnerApplyModal.tsx  (exports PARTNER_TYPES)
  SEO.tsx
pages/  Home, About, Projects, ProjectDetail, Team, Founder, Partner, GetInvolved,
        Gallery, Contact, NotFound
data/   projects.ts, team.ts, founder.ts, books.ts, values.ts, stats.ts, partners.ts,
        giving.ts, testimonials.ts, faq.ts, gallery.ts
lib/    constants.ts (ORG, SOCIALS, DONATION, NAV_LINKS, WORK_MENU), paystack.ts
hooks/  useScrollToTop.ts
```

**All editable content is in `src/data/` and `src/lib/constants.ts`.**

### Routes
`/` `/about` `/projects` `/projects/:slug` `/partner` `/team` `/founder` `/get-involved`
`/gallery` `/contact` + `*` (404).

---

## 4. Design system (warm editorial) — grounded in the `ui-ux-pro-max` skill

- **Typography:** headings = **Fraunces** (warm serif, `font-display`); body = **Inter** (`font-sans`).
- **Color (tailwind.config.js):** `brand` red (600 `#e11b22`, 700 for text-on-light);
  `gold` amber accent (500 `#e8a33d`); `ink` warm stone text; `cream` `#fbf6f0` (bg),
  `sand` `#f3ebe1` (deeper / footer).
- **Shape:** **everything `rounded-md`** (do NOT use rounded-full/2xl/xl).
- **Buttons** (`.btn` + `-primary/-secondary/-ghost/-gold`, `.btn-lg`): flat, 44px touch target,
  focus ring, **press feedback** `active:scale-[0.97]`. `.press` utility for other clickables.
- **Editorial helpers:** `.eyebrow` + `.eyebrow-rule`, `.lead`, `.dropcap`.
- **Layout:** `.container-page` is **full width** (no max-width cap — user reverted a cap).
  Scrollbars **hidden site-wide**. Respect `prefers-reduced-motion`.

---

## 5. Component behaviors (don't regress)

- **Navbar:** solid `bg-cream` at top → **frosted glass on scroll**. Active link has a **small red
  dot**. **"Our Work" dropdown** (Our Projects + Partner With Us; `WORK_MENU`) with **full-width**
  highlight. Right: **Chat with us** (green WhatsApp) + **Donate** (red, **greys out** on
  `/get-involved`). Mobile menu mirrors all + Partner With Us.
- **Hero:** sized so **hero + the separate ImpactStats band = exactly one screen**
  (`min-h-[calc(100dvh - navbar - stats-overhang)]`, currently ~`100dvh-12rem`/`13rem`). Background
  is **one image per device** (localStorage `jhp_hero_pick_v1`), auto-changes after **30 days**.
  NOT a live carousel.
- **ImpactStats:** SEPARATE section overlapping the hero (`-mt-20 sm:-mt-24`); keep it separate.
- **MissionPreview** ("Who we are"): images **auto-rotate every 6s** (crossfade) + red
  **rubber-stamp badge** top-right (`ui/StampBadge.tsx`).
- **Partner flow:** `partner/PartnerApplyModal.tsx` reusable **modal** (used on `/partner` and
  `/get-involved`). Type selector → money types (Corporate, Sponsor) show a **contribution step**
  with **Pay now (Paystack)** / **Send as application** / **Skip for now**.
- **Get Involved:** fund selector + `DonateForm` (`#donate`), impact tiers, "ways/other ways" cards
  with **action buttons** (donate→`#donate`, partner→modal, volunteer→`#volunteer`, contact→mailto),
  donation FAQ.
- **Founder:** magazine bio (drop-cap), credentials, **BooksShowcase** (CSS book cover), CTA.
- **Footer:** warm **light** (sand), newsletter signup, credit **"Designed by DivAmok Corp."** (gold).

---

## 6. Donations & forms

- **Paystack** (Mobile Money + card; Stripe NOT used). `DONATION` in `lib/constants.ts` reads
  `VITE_PAYSTACK_PUBLIC_KEY` + `VITE_DONATION_CURRENCY` (default GHS ₵). Helper `lib/paystack.ts`.
  No key → buttons show a "not active yet / use MoMo" fallback.
- **Forms** (Contact, Newsletter, Partner) → **Formspree** (`VITE_FORMSPREE_ID`) else **mailto**
  to `thejesusproject77@gmail.com`.
- Copy `jesus-heart-project-frontend/.env.example` → `.env` and fill keys.

---

## 7. Skills & MCP (available after a Claude Code restart)

- `~/.claude/skills/`: **`ui-ux-pro-max`** (Python search scripts + CSV design DBs) + `design`,
  `design-system`, `brand`, `slides`, `ui-styling`, `banner-design`. Use ui-ux-pro-max for design calls.
- **Magic MCP** (21st.dev) at user scope in `~/.claude.json` → `mcpServers.magic`. The user prefers
  **hand-crafted** components — ask before using Magic.

---

## 8. Placeholders to replace (full list: `jesus-heart-project-frontend/CONTENT_TODO.md`)

High priority: **Paystack public key**, **Formspree ID**, org **registration number** (faq.ts),
**bank transfer details** (GetInvolved), confirm **MoMo account name**, **social links**
(`lib/constants.ts SOCIALS` — empty; footer hides them until set).
Sample data: **testimonials** (`data/testimonials.ts`), per-project **fundraising goal/raised**
(`projects.ts` digital-literacy `fund`), **giving tier amounts** (`data/giving.ts` + partnership
`PAY_PRESETS` in PartnerApplyModal), Dining-2022 impact numbers. Branding: **transparent GIFEC +
main logo** (current logos have baked white bg → faint box on sand footer), **domain**, OG image.

**Still owed by the user:**
- 3 extra exec photos not yet placed (no names): **Finance Director**, **Prints & Graphic Designer**,
  **Director** → optimized to `public/images/team/finance-director.jpg`, `graphic-designer.jpg`,
  `director.jpg`. Add to `data/team.ts` once names arrive.
- Confirm advisor mapping: `advisor-1.jpg` → Pastor Chris Laar-Mong, `advisor-2.jpg` → Dr. Francis Addy.

---

## 9. Conventions & gotchas

- **Respect the user's manual edits** — they edit files directly. Re-read before rewriting; don't revert.
- **Verify visually** with headless Chrome:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --window-size=W,H --screenshot=/tmp/x.png URL` then Read the PNG.
  Gotchas: hero uses **`dvh`** → tall screenshots inflate it (lower sections fall off; use realistic
  heights or short-header pages). `sips --cropOffset` is **unreliable**; for isolated components
  (stamp, dropdown) render a tiny **test HTML** and screenshot it. Delete `/tmp/*.png` after.
- Images optimized with macOS **`sips`** into `public/images/...`.
- Keep **`rounded-md`**, **flat buttons**, **warm palette** — user is particular.
- Use a **TodoWrite** list for multi-step work.
- The app folder (`jesus-heart-project-frontend/`) is **new since the last git commit** (`main` branch).
  `push-to-github.sh` exists for deploying.

---

## 10. Suggested next steps

1. **Live-ready:** add Paystack public key + Formspree ID to `jesus-heart-project-frontend/.env`;
   test a donation and the partner/contact forms.
2. **Fill real content** from `CONTENT_TODO.md` (socials, registration #, bank details, real
   testimonials + photos, real fundraising figures, confirm tier amounts).
3. **Add the 3 missing exec people** + confirm advisor mapping.
4. **Transparent logos** (footer + partner GIFEC).
5. **Deploy:** push `jesus-heart-project-frontend/` to GitHub → Netlify/Vercel (build `npm run build`,
   publish `dist`; `netlify.toml` + `public/_redirects` handle SPA routing). Custom domain.
6. Optional polish floated by the user: solid (vs link) buttons on Get Involved cards; click-to-open
   (vs hover) "Our Work" dropdown; delete unused `WhatsAppButton.tsx`.

---

### One-line summary for the new chat
> "Continue the React site in `jesus-heart-project-frontend/` (Vite+TS+Tailwind, warm editorial
> design; run with `./start.sh` → localhost:5173). Read `HANDOFF.md` + the app's `CONTENT_TODO.md`
> first. Verify with headless-Chrome screenshots and `npm run build`. Keep rounded-md, flat buttons,
> warm palette; don't revert the user's manual edits."
