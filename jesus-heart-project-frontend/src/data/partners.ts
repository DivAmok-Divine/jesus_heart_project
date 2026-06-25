import type { Partner } from '@/types';

// Collaborating organizations and stakeholders named by the project.
// Logos are stored in public/images/partners/.
export const partners: Partner[] = [
  {
    name: 'Africa ICT Right',
    short: 'AIR',
    logo: '/images/partners/air.png',
    website: 'https://africaictright.org/',
  },
  {
    name: 'IT For Youth Ghana',
    logo: '/images/partners/it4youth.png',
    website: 'https://www.itforyouthghana.org/',
  },
  {
    name: 'Grow Ghana',
    logo: '/images/partners/grow.png',
    website: 'https://www.growghana.org/',
  },
  {
    name: 'Galaxy Tech Foundation',
    logo: '/images/partners/galaxy.png',
    website: 'https://galaxytechnologyfoundation.org/',
  },
  {
    name: 'HOPin Academy',
    logo: '/images/partners/hopin.png',
    website: 'https://hopinacademy.org/',
  },
  {
    name: 'Ghana Investment Fund for Electronic Communication',
    short: 'GIFEC',
    logo: '/images/partners/gifec.png',
    website: 'https://gifec.gov.gh/',
  },
  {
    name: 'Ghana Education Service',
    short: 'GES',
    logo: '/images/partners/ges.png',
    website: 'https://ges.gov.gh/',
  },
  {
    name: 'Central Gonja District Assembly',
    logo: '/images/partners/cgda.png',
    website: 'https://cgda.gov.gh/',
  },
  {
    name: 'Martha Inspires Foundation',
    logo: '/images/partners/martha.png',
    website: 'https://marthainspires.org/',
  },
];

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, '');

/**
 * Resolve a partner name (as listed on a project) to a known partner with a logo,
 * or a minimal name-only partner if we don't have its logo.
 */
export function getPartnerByName(name: string): Partner {
  const n = norm(name);
  return (
    partners.find((p) => norm(p.name) === n || (p.short ? norm(p.short) === n : false)) ?? {
      name,
    }
  );
}
