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
              className="group relative block w-full overflow-hidden rounded-md ring-1 ring-ink/[0.06]"
            >
              <img
                src={item.src}
                alt={item.category}
                loading="lazy"
                className="w-full transition-transform duration-500 group-hover:scale-105"
              />
              {/* Editorial hover caption */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute bottom-0 left-0 right-0 flex translate-y-2 items-center gap-1.5 p-3 text-left text-xs font-semibold uppercase tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="h-px w-4 bg-gold-500" />
                {item.category}
              </span>
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
