export interface Book {
  title: string;
  subtitle?: string;
  year?: string;
  description: string;
  tags?: string[];
  cover?: string; // path to a cover image; if absent a stylized cover is rendered
  link?: string; // purchase / learn-more link (placeholder until provided)
}

// Books authored by the founder. Add new titles here as they’re published.
export const books: Book[] = [
  {
    title: 'Church Media: The Art of Worship',
    subtitle: 'Where media meets faith',
    description:
      'A groundbreaking exploration of the intersection of media and faith — offering insights into the future of church communication and the vital role media plays in worship.',
    tags: ['Media & Faith', 'Worship', 'Church Communication'],
    // cover: '/images/books/church-media.jpg', // ← add a real cover image when available
    // link: 'https://...', // ← add a purchase / read-more link when available
  },
];
