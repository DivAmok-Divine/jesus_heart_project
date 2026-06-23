import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { ORG } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery/img-1.jpg"
          alt="Jesus Heart Project outreach"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/80 to-brand-900/60" />
      </div>

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400 ring-1 ring-white/20">
            <Heart className="h-3.5 w-3.5" /> {ORG.tagline}
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Sharing God’s love with the{' '}
            <span className="text-brand-500">poor and needy</span> in northern Ghana
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80">
            The Jesus Heart Project is a faith-based humanitarian organization providing food,
            education, healthcare and spiritual support to vulnerable communities across Ghana.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/get-involved" className="btn-primary">
              <Heart className="h-4 w-4" /> Donate now
            </Link>
            <Link to="/projects" className="btn-ghost">
              See our work <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
