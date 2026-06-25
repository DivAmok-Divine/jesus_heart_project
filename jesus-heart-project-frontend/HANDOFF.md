# 🤝 HANDOFF — The Jesus Heart Project website

A complete brief so a new chat can continue without re-discovering anything.
Last updated by the previous session (Claude). Read this top-to-bottom before working.

---

## 1. What this is

A marketing/donation website for **The Jesus Heart Project** — a faith-based Christian
humanitarian nonprofit in **Tamale, Northern Region, Ghana**. Tagline: **"Humanity at Heart."**

- **Founder & CEO:** Prince Kwakuvi Amaglo (entrepreneur, TV producer, author, philanthropist;
  exec director of Atsu Prince A. Multimedia; author of "Church Media: The Art of Worship").
- Real org content came from `docs/jesus_heart_porject_scope_and_details.docx` (in this repo).
- Real photos were provided by the user (see `/exercutives`, `/founder_prince_img`, `/logos`,
  `/pojects` at the repo root — these are the **source** assets; optimized copies live in
  `website/public/images/`).

> ⚠️ Earlier "deep research" found **no public web presence** for this org under these exact
> names. Everything on the site comes from the user's document + their supplied assets. Some
> figures are intentional **placeholders** (see §8 and `website/CONTENT_TODO.md`).

---

## 2. The app lives in `website/`

Stack: **Vite + React 18 + TypeScript + Tailwind CSS v3 + Framer Motion + react-router-dom +
react-hook-form + lucide-react + react-helmet-async.** No backend.

### Run it
From the **repo root** (scripts self-locate, work from anywhere):
```bash
./start.sh      # installs deps on first run, starts dev server in background → http://localhost:5173
./stop.sh       # stops it
```
Or inside `website/`: `npm run dev` (5173), `npm run build`, `npm run preview`.
Dev-server logs: `website/.dev-server.log`. The dev server survives VS Code reloads.

> The user runs the **VS Code extension** (no `claude` CLI on PATH). They're on macOS.
> Build command is `tsc --noEmit && vite build`. **Always run `npm run build` after changes** to
> catch TS errors.

---

## 3. File map (`website/src`)

```
main.tsx, App.tsx (routes), index.css (design tokens + component classes), vite-env.d.ts
components/
  layout/   Navbar.tsx, Footer.tsx, Layout.tsx
  sections/ Hero.tsx, ImpactStats.tsx, MissionPreview.tsx, FeaturedProjects.tsx,
            CoreValues.tsx, Testimonials.tsx, Partners.tsx, CTASection.tsx
  ui/       Button(via .btn classes), Section.tsx, SectionHeading.tsx, PageHeader.tsx,
            Reveal.tsx, Icon.tsx, Card(.card class), ProjectCard.tsx, PartnerTile.tsx,
            Lightbox.tsx, FundProgress.tsx, Accordion.tsx, Modal.tsx, NewsletterForm.tsx,
            WhatsAppButton.tsx (UNUSED now — chat moved into navbar; safe to delete)
  donate/   DonateForm.tsx
  partner/  PartnerApplyModal.tsx  (exports PARTNER_TYPES)
  SEO.tsx
pages/  Home, About, Projects, ProjectDetail, Team, Founder, Partner, GetInvolved,
        Gallery, Contact, NotFound
data/   constants.ts(lib/), projects.ts, team.ts, founder.ts, books.ts, values.ts,
        stats.ts, partners.ts, giving.ts, testimonials.ts, faq.ts, gallery.ts
lib/    constants.ts (ORG info, SOCIALS, DONATION, NAV_LINKS, WORK_MENU), paystack.ts
hooks/  useScrollToTop.ts
```

**All editable content is in `src/data/` and `src/lib/constants.ts`** — non-devs can edit text,
phone numbers, projects, team, etc. without touching components.

### Routes (`App.tsx`)
`/` `/about` `/projects` `/projects/:slug` `/partner` `/team` `/founder` `/get-involved`
`/gallery` `/contact` + `*` (404).

---

## 4. Design system (warm editorial) — grounded in the `ui-ux-pro-max` skill

- **Typography:** headings = **Fraunces** (warm serif, `font-display`); body = **Inter** (`font-sans`).
  Loaded in `index.html`. Headings auto-styled in `index.css @layer base`.
- **Color (tailwind.config.js):** `brand` = red scale (600 `#e11b22` primary, 700 for text on light);
  `gold` = warm amber accent (500 `#e8a33d`); `ink` = warm stone text (DEFAULT/soft/muted);
  `cream` `#fbf6f0` (primary warm bg), `sand` `#f3ebe1` (deeper warm / footer).
- **Shape:** **everything is `rounded-md`** (user preference — do NOT use rounded-full/2xl/xl).
- **Shadows:** soft/warm `shadow-card`, `shadow-lift`; buttons are **flat** (no glow). Cards keep a
  soft resting shadow.
- **Buttons (`.btn` + `.btn-primary/-secondary/-ghost/-gold`, `.btn-lg`):** 44px min touch target,
  focus ring, **press feedback** `active:scale-[0.97]`. Also a `.press` utility for other clickables.
- **Editorial helpers:** `.eyebrow` + `.eyebrow-rule` (gold leading line), `.lead`, `.dropcap`.
- **Layout:** `.container-page` is **full width** (`mx-auto w-full px-5 sm:px-8 lg:px-12 xl:px-20`,
  no max-width cap — user explicitly reverted a width cap). Scrollbars are **hidden site-wide**
  (still scrolls). Respect `prefers-reduced-motion` (hero/carousels already do).

---

## 5. Notable component behaviors (don't regress these)

- **Navbar** (`layout/Navbar.tsx`): solid `bg-cream` at top → **translucent frosted glass on scroll**.
  Active link shows a **small red dot** beneath it. **"Our Work" is a dropdown** (hover/focus) with
  *Our Projects* + *Partner With Us* (`WORK_MENU` in constants); dropdown highlight is **full-width**.
  Right side has **Chat with us** (green WhatsApp) + **Donate** (red). **Donate greys out** when on
  `/get-involved`. Mobile menu mirrors all of this + a Partner With Us item.
- **Hero** (`sections/Hero.tsx`): full first screen = `min-h-[calc(100dvh-4rem)] lg:[…-5rem]`-ish
  (currently `100dvh-12rem`/`13rem`) so **hero + the separate ImpactStats band = exactly one screen**.
  Background image is **one-per-device**, stored in `localStorage` (`jhp_hero_pick_v1`), auto-rotates
  to a new one after **30 days**. (It is NOT a live carousel — the user wanted one stable image per machine.)
- **ImpactStats** (`sections/ImpactStats.tsx`): SEPARATE section overlapping the hero (`-mt-20 sm:-mt-24`),
  animated counters, sentence-case labels. Keep it separate (user rejected merging it into the hero).
- **MissionPreview** (`sections/MissionPreview.tsx`): the "Who we are" block — images **auto-rotate
  every 6s** (crossfade), and a red **rubber-stamp badge** ("SINCE 2022 / SERVING NORTHERN GHANA")
  sits top-right (`ui/StampBadge.tsx`).
- **Partner flow:** `partner/PartnerApplyModal.tsx` is a reusable **modal** application form (used on
  both `/partner` and `/get-involved`). Type selector (Corporate, Sponsor, In-kind, Faith) →
  money-types (Corporate, Sponsor) reveal a **contribution step** with presets + **Pay now (Paystack)**
  OR **Send as application**, plus **Skip for now**. Triggered by Apply / Become-a-partner buttons.
- **Get Involved** (`pages/GetInvolved.tsx`): fund selector + `DonateForm` (id `#donate`), impact tiers,
  "ways to help" + "other ways" cards each have **action buttons** (donate→scroll `#donate`,
  partner→modal, volunteer→scroll `#volunteer`, contact→mailto), donation FAQ.
- **Founder** (`/founder`): magazine-style bio (drop-cap), credentials, **BooksShowcase** (stylized
  CSS book cover for "Church Media: The Art of Worship"), CTA.
- **Footer:** warm **light** (sand bg), newsletter signup, and the credit **"Designed by DivAmok Corp."**
  (gold) in the bottom bar — keep it.

---

## 6. Donations & forms (how money/contact works)

- **Paystack** (Ghana — Mobile Money + card). Config in `lib/constants.ts` `DONATION` reading
  `VITE_PAYSTACK_PUBLIC_KEY` and `VITE_DONATION_CURRENCY` (default `GHS`, symbol ₵). Loader/opener in
  `lib/paystack.ts`. **Stripe is NOT used** (doesn't pay out to Ghana).
- Until a Paystack **public** key is set, donate/pay buttons fall back to a **Mobile Money / "not active
  yet"** message — and a MoMo number is shown for manual giving.
- **Forms** (Contact, Newsletter, Partner application) post to **Formspree** via `VITE_FORMSPREE_ID`,
  else fall back to a **mailto** to `thejesusproject77@gmail.com`.
- Copy `website/.env.example` → `website/.env` and fill keys.

---

## 7. Skills & MCP installed (available after a Claude Code restart)

- **UI/UX design skills** in `~/.claude/skills/`: `ui-ux-pro-max` (has Python search scripts +
  CSV databases), plus `design`, `design-system`, `brand`, `slides`, `ui-styling`, `banner-design`.
  Use `ui-ux-pro-max` for any design decisions (run its `scripts/search.py --design-system`).
- **Magic MCP** (21st.dev) added at **user scope** in `~/.claude.json` → `mcpServers.magic`
  (`npx -y @21st-dev/magic@latest`, API key in env). Tools: `21st_magic_component_builder/
  inspiration/refiner`, `logo_search`. **User asked to hand-craft, not use Magic** for this site —
  ask before using it.

---

## 8. Placeholders to replace (full list in `website/CONTENT_TODO.md`)

High priority: **Paystack public key**, **Formspree ID**, org **registration number** (faq.ts),
**bank transfer details** (GetInvolved), confirm **MoMo account name**, **social links**
(`lib/constants.ts SOCIALS` — empty, footer hides them until filled).
Sample data: **testimonials** (`data/testimonials.ts`, marked placeholder), per-project
**fundraising goal/raised** (`projects.ts` digital-literacy `fund` placeholder), **giving tier
amounts** (`data/giving.ts` + partnership `PAY_PRESETS` in PartnerApplyModal), Dining 2022 impact
numbers. Branding: **transparent GIFEC logo** + **high-res/transparent main logo** (current logos
have baked white bg → faint box on sand footer), **domain name**, OG share image.

**Open items the user still owes info on:**
- 3 extra executive photos exist but aren't placed (no names yet): **Finance Director**,
  **Prints & Graphic Designer**, **Director** (`/exercutives` → optimized to
  `website/public/images/team/finance-director.jpg`, `graphic-designer.jpg`, `director.jpg`).
  Add to `data/team.ts` once names are provided.
- Confirm advisor photo mapping: `advisor-1.jpg` → Pastor Chris Laar-Mong, `advisor-2.jpg` →
  Dr. Francis Addy (assumed; user to verify).

---

## 9. Conventions & gotchas (learned this session)

- **Respect the user's manual edits.** They edit files directly (PageHeader, Hero, founder.ts, etc.).
  Re-read a file before rewriting; don't revert their changes unless asked.
- **Screenshot verification:** the user can't easily see changes described — verify visually with
  headless Chrome:
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --hide-scrollbars --window-size=W,H --screenshot=/tmp/x.png URL`
  Then Read the PNG. Gotchas: the **hero uses `dvh`** so tall windows inflate it (lower sections fall
  off-screen — capture realistic heights or test pages with short headers). `sips --cropOffset` is
  unreliable; prefer short viewports or test-HTML for isolated components (stamp, dropdown). Clean up
  `/tmp/*.png` after.
- **Images** are optimized via macOS `sips` into `website/public/images/...`. Source assets at repo root.
- Keep everything **`rounded-md`**, **flat buttons**, **warm palette** — the user is particular about these.
- Use a **TodoWrite** list for multi-step work; the user likes seeing progress.
- Not committed to git yet — the whole `website/` is new since the last commit (`main` branch).

---

## 10. Suggested next steps (in rough priority)

1. **Go live-ready:** get a Paystack public key + Formspree ID into `website/.env`; test a donation
   and the partner/contact forms end-to-end.
2. **Fill real content** from `CONTENT_TODO.md` (socials, registration #, bank details, real
   testimonials + photos, real fundraising figures, confirm tier amounts).
3. **Add the 3 missing exec people** (names/bios) and confirm advisor mapping.
4. **Logos:** get transparent-background logo versions (footer + partner GIFEC).
5. **Deploy:** push `website/` to GitHub → Netlify/Vercel (build `npm run build`, publish `dist`;
   `netlify.toml` + `public/_redirects` already handle SPA routing). Then a custom domain.
6. Optional polish the user floated: solid (vs link-style) buttons on Get Involved cards;
   click-to-open (vs hover) "Our Work" dropdown; delete unused `WhatsAppButton.tsx`.

---

### One-line summary for the new chat
> "Continue work on the React site in `website/` (Vite+TS+Tailwind, warm editorial design, run with
> `./start.sh` → localhost:5173). Read `HANDOFF.md` and `website/CONTENT_TODO.md` first. Verify changes
> with headless-Chrome screenshots and `npm run build`."
