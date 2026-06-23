import Reveal from '@/components/ui/Reveal';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  imagePosition?: string;
}

export default function PageHeader({ eyebrow, title, subtitle, image, imagePosition = 'object-[center_20%]' }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0">
        <img
          src={image ?? '/images/gallery/img-5.jpg'}
          alt=""
          aria-hidden="true"
          className={`h-full w-full object-cover ${imagePosition}`}
        />
        {/* Rich dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-brand-950/80" />
        {/* Subtle bottom-up vignette for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="container-page relative z-10 py-12 sm:py-14 lg:py-16">
        <div className="max-w-3xl">
          {eyebrow && (
            <Reveal>
              <div className="mb-5 flex items-center gap-4">
                <span className="h-[2px] w-8 rounded-full bg-gold-500" />
                <span className="eyebrow text-gold-400 m-0">{eyebrow}</span>
              </div>
            </Reveal>
          )}

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </Reveal>

          {subtitle && (
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-white/90 drop-shadow-sm sm:text-xl">
                {subtitle}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
