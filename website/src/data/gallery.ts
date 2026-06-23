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
