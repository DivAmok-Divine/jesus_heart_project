import { Helmet } from 'react-helmet-async';
import { ORG } from '@/lib/constants';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export default function SEO({ title, description, image }: SEOProps) {
  const fullTitle = title ? `${title} — ${ORG.name}` : `${ORG.name} — ${ORG.tagline}`;
  const desc = description ?? ORG.mission;
  const img = image ?? '/images/brand/og-banner.jpg';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
