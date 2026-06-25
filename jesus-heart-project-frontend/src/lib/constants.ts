// ─────────────────────────────────────────────────────────────
// Central place for all organization details. Edit here to update
// contact info, donation settings and social links site-wide.
// ─────────────────────────────────────────────────────────────

export const ORG = {
  name: 'The Jesus Heart Project',
  shortName: 'Jesus Heart Project',
  tagline: 'Humanity at Heart',
  mission:
    'Helping the poor and needy through the gospel of Christ — providing food, education, healthcare and spiritual support to vulnerable communities in northern Ghana.',
  country: 'Ghana',
  city: 'Tamale, Northern Region',
  founderName: 'Prince Kwakuvi Amaglo',
  email: 'thejesusproject77@gmail.com',
  addresses: [
    'P.O. Box TL 1308, Tamale, Northern Region, Ghana',
    'NS-236-6003, AD10 Nanton Road, Tamale, Northern Region, Ghana',
  ],
  phones: ['+233 20 273 4797', '+233 54 938 8950', '+233 24 813 0747'],
  // WhatsApp number in international format without "+" or spaces
  whatsapp: '233549388950',
} as const;

export const SOCIALS: { name: string; url: string; icon: string }[] = [
  // Fill these in when the official handles are confirmed.
  { name: 'Facebook', url: '', icon: 'Facebook' },
  { name: 'Instagram', url: '', icon: 'Instagram' },
  { name: 'YouTube', url: '', icon: 'Youtube' },
];

// ── Donation configuration ───────────────────────────────────
// Currency + suggested amounts. The actual payment uses Paystack
// (supports Mobile Money + cards in Ghana). Set the public key in .env
export const DONATION = {
  currency: (import.meta.env.VITE_DONATION_CURRENCY as string) || 'GHS',
  paystackPublicKey: (import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string) || '',
  // Suggested amounts shown as quick buttons
  presets: [50, 100, 250, 500],
} as const;

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Our Work', to: '/projects' },
  { label: 'Our Team', to: '/team' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
] as const;

// Dropdown shown under "Our Work" in the navbar.
export const WORK_MENU = [
  { label: 'Our Projects', to: '/projects', desc: 'Outreaches we’ve carried out' },
  { label: 'Partner With Us', to: '/partner', desc: 'Collaborate, sponsor & support us' },
] as const;
