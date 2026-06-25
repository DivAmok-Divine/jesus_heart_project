import type { GivingTier } from '@/types';

// ── Default impact-based giving levels ───────────────────────
// Amounts are SAMPLE figures (in the site donation currency) tied to a
// concrete outcome. Replace amounts/impact text with the organization's
// real unit costs — see CONTENT_TODO.md.
export const givingTiers: GivingTier[] = [
  {
    amount: 50,
    title: 'School Supply Pack',
    impact: 'Exercise books, pens and pencils for one student to start the school year.',
    image: '/images/projects/back-to-school/img-2.jpg',
  },
  {
    amount: 100,
    title: 'Feed a Family',
    impact: 'A food box of essentials — rice, water and staples — for a family in need.',
    image: '/images/projects/dining/img-1.jpg',
  },
  {
    amount: 250,
    title: 'Empower a Student',
    impact: 'Hands-on digital-literacy training for one student at our ICT centre.',
    image: '/images/gallery/img-10.jpg',
  },
  {
    amount: 500,
    title: 'Support a PWD',
    impact: 'Essential relief items and mental-health support for a person with a disability.',
    image: '/images/projects/pwd/img-2.jpg',
  },
  {
    amount: 1000,
    title: 'Power a Community Outreach',
    impact: 'Helps fund a full day of outreach reaching hundreds of people.',
    image: '/images/gallery/img-1.jpg',
  },
];

// ── Funds donors can give towards ────────────────────────────
// `slug` matches a project slug where applicable, or a general fund.
export const funds: { slug: string; label: string; blurb: string }[] = [
  {
    slug: 'where-needed-most',
    label: 'Where it’s needed most',
    blurb: 'Let us direct your gift to the area of greatest need right now.',
  },
  {
    slug: 'digital-literacy-enhancement-programme',
    label: 'Digital Literacy Centre',
    blurb: 'Help build and run the community ICT centre for 450 students.',
  },
  {
    slug: 'back-to-school-empowerment-2023',
    label: 'Back-to-School & Education',
    blurb: 'School supplies and empowerment for students in deprived schools.',
  },
  {
    slug: 'possibilities-empowerment-pwd-2024',
    label: 'Persons With Disabilities',
    blurb: 'Relief, inclusion and mental-health support for PWDs.',
  },
  {
    slug: 'dining-with-the-project-2022',
    label: 'Food & Relief Outreach',
    blurb: 'Food boxes and household essentials for vulnerable families.',
  },
];
