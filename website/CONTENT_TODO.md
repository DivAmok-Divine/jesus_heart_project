# 📝 Content To Provide — The Jesus Heart Project website

This is the checklist of everything currently using **placeholder / sample content** on
the site. Replace each item with real information, then delete it from this list.
File paths are relative to `website/src/`.

---

## 🔴 High priority (affects trust & donations)

- [ ] **Paystack public key** — enables card + Mobile Money giving.
  - Add `VITE_PAYSTACK_PUBLIC_KEY` in `.env` (copy from `.env.example`). Until set, the donate
    button shows the Mobile Money fallback only.
- [ ] **Formspree form ID** — makes the contact + newsletter forms deliver to email.
  - Add `VITE_FORMSPREE_ID` in `.env`.
- [ ] **Organization registration / certificate number** — for donor trust.
  - Used in `data/faq.ts` (FAQ answer) — currently a placeholder.
- [ ] **Bank transfer details** — bank name, account name, account number.
  - `pages/GetInvolved.tsx` → "Other ways to give" → Bank transfer card (placeholder text).
- [ ] **Mobile Money account name** — confirm the registered MoMo name for the number
  `+233 54 938 8950` (used across the site from `lib/constants.ts`).
- [ ] **Social media links** — Facebook / Instagram / YouTube / TikTok / LinkedIn URLs.
  - Add them in `lib/constants.ts` → `SOCIALS`. They’ll auto-appear in the footer.

## 🟠 Fundraising figures (currently SAMPLE numbers)

- [ ] **Digital Literacy fundraising progress** — real goal & amount raised & donor count.
  - `data/projects.ts` → `digital-literacy-enhancement-programme` → `fund` (marked `placeholder: true`).
- [ ] **Giving tier amounts & impact wording** — confirm real unit costs (what ₵50 / ₵100 / etc.
  actually provides).
  - `data/giving.ts` (default tiers) and each project’s `tiers` in `data/projects.ts`.
- [ ] **Donation currency** — confirm GHS (₵) vs USD ($).
  - `.env` → `VITE_DONATION_CURRENCY`.

## 🟡 Stories & people (currently SAMPLE)

- [ ] **Testimonials** — real quotes, names, roles and photos from beneficiaries, partners and
  volunteers (3+).
  - `data/testimonials.ts` (all marked `placeholder: true`) and the per-project `testimonial`
    fields in `data/projects.ts`.
- [ ] **Team photos** — headshots for core team & advisors (only the founder photo exists now;
  others show initials).
  - Drop images in `public/images/team/` and reference them in `data/team.ts`.
- [ ] **Founder bio details** — confirm/expand Prince Kwakuvi Amaglo’s bio if desired.
  - `data/team.ts`.

## 🟢 Programs / content enrichment

- [ ] **Project impact numbers** — confirm the “Dining With The Project” (2022) figures
  (people reached, households served) — currently soft/estimated.
  - `data/projects.ts` → `dining-with-the-project-2022` → `stats`.
- [ ] **Project videos** — optional highlight video per program (e.g. YouTube link).
  - `data/projects.ts` → add `videoUrl` to a project (field already supported).
- [ ] **More events / programs** — add any other completed or planned outreaches.
  - Add a new entry to `data/projects.ts` + photos in `public/images/projects/<name>/`.
- [ ] **Impact report / financials** — a downloadable annual/impact report (PDF) for transparency.
  - Not yet linked anywhere; tell us and we’ll add a “Download our report” button.

## ⚪ Branding & misc

- [ ] **GIFEC logo** — current file has a light-grey background; provide a transparent version if
  available (`public/images/partners/gifec.png`).
- [ ] **High-res logo** — provide an SVG or large PNG of the main logo for crisper display
  (`public/images/logo/`).
- [ ] **Domain name** — for deployment (e.g. `jesusheartproject.org`).
- [ ] **Open Graph / share image** — confirm `public/images/brand/og-banner.jpg` is the image you
  want shown when the site is shared on social media.

---

### How to update content (no coding needed)

Most items live in plain data files under `src/data/` and `src/lib/constants.ts`. Edit the text,
save, and the site updates. For images, drop the file in the matching `public/images/...` folder
and point to it in the data file. Ask us if you’d like help wiring any of these in.
