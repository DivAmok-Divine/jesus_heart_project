import {
  Heart,
  HandHeart,
  Users,
  Sparkles,
  Sprout,
  Handshake,
  ShieldCheck,
  Church,
  GraduationCap,
  Accessibility,
  Package,
  HeartHandshake,
  Facebook,
  Instagram,
  Youtube,
  Circle,
} from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// Explicit registry so only the icons we use are bundled (tree-shaking friendly).
const registry: Record<string, React.ComponentType<LucideProps>> = {
  Heart,
  HandHeart,
  Users,
  Sparkles,
  Sprout,
  Handshake,
  ShieldCheck,
  Church,
  GraduationCap,
  Accessibility,
  Package,
  HeartHandshake,
  Facebook,
  Instagram,
  Youtube,
};

interface IconProps extends LucideProps {
  name: string;
}

/** Render a lucide-react icon by its string name (used by data-driven lists). */
export default function Icon({ name, ...props }: IconProps) {
  const Component = registry[name] ?? Circle;
  return <Component {...props} />;
}
