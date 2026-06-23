interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} ${
        subtitle ? 'mb-10' : 'mb-8'
      }`}
    >
      {eyebrow && (
        <span className={`eyebrow ${light ? 'text-gold-400' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] leading-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base sm:text-lg ${light ? 'text-white/80' : 'text-ink-soft'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
