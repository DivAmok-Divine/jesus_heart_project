import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Background variant */
  tone?: 'default' | 'cream' | 'brand' | 'dark';
}

const tones: Record<NonNullable<SectionProps['tone']>, string> = {
  default: 'bg-white',
  cream: 'bg-cream',
  brand: 'bg-brand-600 text-white',
  dark: 'bg-ink text-white',
};

export default function Section({ children, className = '', id, tone = 'default' }: SectionProps) {
  return (
    <section id={id} className={`py-10 sm:py-12 lg:py-16 ${tones[tone]} ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}
