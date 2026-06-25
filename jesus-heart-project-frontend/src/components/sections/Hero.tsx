import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { ORG } from '@/lib/constants';

// Pool of hero backgrounds. Each device is assigned ONE of these and keeps it
// until ~30 days pass (or local storage is cleared), then it picks a new one.
const heroImages = [
  '/images/gallery/img-1.jpg',
  '/images/projects/pwd/img-2.jpg',
  '/images/projects/back-to-school/img-1.jpg',
  '/images/projects/dining/img-1.jpg',
  '/images/gallery/img-2.jpg',
];

const HERO_KEY = 'jhp_hero_pick_v1';
const REFRESH_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

const ease = [0.22, 1, 0.36, 1] as const;

// Read a still-valid pick from storage; return -1 if missing/expired (needs a fresh pick).
function readStoredPick(): number {
  if (typeof window === 'undefined') return -1;
  try {
    const raw = localStorage.getItem(HERO_KEY);
    if (raw) {
      const { index, ts } = JSON.parse(raw);
      if (
        typeof index === 'number' &&
        index >= 0 &&
        index < heroImages.length &&
        typeof ts === 'number' &&
        Date.now() - ts < REFRESH_MS
      ) {
        return index;
      }
    }
  } catch {
    /* ignore */
  }
  return -1;
}

export default function Hero() {
  const [active, setActive] = useState<number>(() => {
    const stored = readStoredPick();
    return stored === -1 ? 0 : stored;
  });

  useEffect(() => {
    if (readStoredPick() !== -1) return; // already have a valid pick
    const pick = Math.floor(Math.random() * heroImages.length);
    try {
      localStorage.setItem(HERO_KEY, JSON.stringify({ index: pick, ts: Date.now() }));
    } catch {
      /* ignore */
    }
    setActive(pick);
  }, []);

  return (
    // Sized so the hero + the overlapping stats band fill exactly one screen:
    // 100dvh − navbar height − the part of the stats band that sits below the hero.
    <section className="relative flex min-h-[calc(100dvh-12rem)] items-center overflow-hidden bg-ink text-white lg:min-h-[calc(100dvh-13rem)]">
      {/* This device's hero background + warm cinematic overlays */}
      <div className="absolute inset-0">
        <img
          src={heroImages[active]}
          alt="Jesus Heart Project outreach in northern Ghana"
          className="h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-700/30 blur-3xl" />
      </div>

      <div className="container-page relative z-10 py-14 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="max-w-3xl"
        >
          <span className="eyebrow eyebrow-rule text-gold-400">{ORG.tagline}</span>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.08 }}
            className="mt-6 font-display text-[2.6rem] font-semibold italic leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Sharing God’s love with the{' '}
            <span className="italic text-gold-400">poor &amp; needy</span> in northern Ghana
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.16 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/85"
          >
            A faith-based humanitarian organization in Tamale, Ghana — providing food, education,
            healthcare and hope to the communities that need it most.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Link to="/get-involved" className="btn-primary btn-lg">
              <Heart className="h-4 w-4" /> Donate now
            </Link>
            <Link to="/projects" className="btn-ghost btn-lg">
              See our work <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
