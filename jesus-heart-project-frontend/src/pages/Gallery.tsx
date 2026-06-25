import { useMemo, useState } from 'react';
import { Info } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Lightbox from '@/components/ui/Lightbox';
import { galleryItems, galleryCategories, categoryInfo } from '@/data/gallery';

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
          {shown.map((item, i) => {
            const info = categoryInfo[item.category];
            return (
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

                {/* Info affordance — hover the icon to reveal name + description on the right */}
                {info && (
                  <span className="group/info">
                    <span className="absolute right-2.5 top-2.5 z-30 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600/80 text-white shadow-card ring-1 ring-white/30 backdrop-blur transition-colors group-hover/info:bg-brand-600">
                      <Info className="h-3.5 w-3.5" />
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 z-20 flex w-3/4 translate-x-3 flex-col items-end justify-center bg-gradient-to-l from-brand-700/90 via-brand-600/55 to-transparent p-4 text-right opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover/info:translate-x-0 group-hover/info:opacity-100">
                      <span className="font-display text-sm font-semibold leading-snug text-white">
                        {info.title}
                      </span>
                      <span className="mt-1 line-clamp-4 text-[11px] leading-relaxed text-white/85">
                        {info.description}
                      </span>
                    </span>
                  </span>
                )}
              </button>
            );
          })}
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
