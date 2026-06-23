import { useMemo, useState } from 'react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Lightbox from '@/components/ui/Lightbox';
import { galleryItems, galleryCategories } from '@/data/gallery';

export default function Gallery() {
  const [category, setCategory] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shown = useMemo(
    () =>
      category === 'All'
        ? galleryItems
        : galleryItems.filter((g) => g.category === category),
    [category]
  );
  const srcs = shown.map((g) => g.src);

  return (
    <>
      <SEO title="Gallery" description="Photos from the outreaches, conferences and community work of The Jesus Heart Project." />
      <PageHeader
        eyebrow="Gallery"
        title="Moments of hope and humanity"
        subtitle="A glimpse into the lives touched through our outreaches across northern Ghana."
        image="/images/gallery/img-4.jpg"
      />

      <Section>
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {galleryCategories.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-md px-4 py-2 text-sm font-semibold transition ${
                category === c
                  ? 'bg-brand-600 text-white'
                  : 'bg-cream text-ink-soft hover:bg-brand-50'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 [&>*]:mb-3">
          {shown.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setLightbox(i)}
              className="block w-full overflow-hidden rounded-md"
            >
              <img
                src={item.src}
                alt={item.category}
                loading="lazy"
                className="w-full transition-transform duration-300 hover:scale-105"
              />
            </button>
          ))}
        </div>
      </Section>

      {lightbox !== null && (
        <Lightbox
          images={srcs}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onIndexChange={setLightbox}
        />
      )}
    </>
  );
}
