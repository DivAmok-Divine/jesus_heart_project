export interface GalleryItem {
  src: string;
  category: string;
}

const build = (folder: string, count: number, category: string, start = 1): GalleryItem[] =>
  Array.from({ length: count }, (_, i) => ({
    src: `/images/${folder}/img-${i + start}.jpg`,
    category,
  }));

// A curated mix across every outreach for the Gallery page.
export const galleryItems: GalleryItem[] = [
  ...build('gallery', 16, 'Outreach'),
  ...build('projects/pwd', 14, 'Disability & Inclusion'),
  ...build('projects/back-to-school', 12, 'Education'),
  ...build('projects/dining', 12, 'Food & Community'),
];

export const galleryCategories = [
  'All',
  'Outreach',
  'Disability & Inclusion',
  'Education',
  'Food & Community',
];

export interface CategoryInfo {
  title: string;
  description: string;
}

// Shown on the right when hovering the ⓘ on a gallery image — the project name + a blurb.
// `title` is the project name; edit these freely.
export const categoryInfo: Record<string, CategoryInfo> = {
  Outreach: {
    title: 'Community Outreach',
    description:
      'Meeting people where they are — community visits, relief and encouragement across northern Ghana.',
  },
  'Disability & Inclusion': {
    title: 'Possibilities Empowerment Conference for Persons with Disabilities',
    description:
      'Dignity, support and a sense of belonging for persons with disabilities.',
  },
  Education: {
    title: 'Back-to-School Empowerment Conference',
    description:
      'Equipping students with supplies, motivation and guidance for the digital age.',
  },
  'Food & Community': {
    title: 'Dining With The Project',
    description:
      'Sharing meals and relief — nourishing bodies and building community around the table.',
  },
};
