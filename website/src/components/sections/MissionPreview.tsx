import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';

const leftImages = [
  '/images/projects/dining/img-1.jpg',
  '/images/gallery/img-1.jpg',
  '/images/gallery/img-4.jpg',
  '/images/gallery/img-7.jpg',
  '/images/gallery/img-10.jpg',
  '/images/gallery/img-11.jpg',
];

const rightImages = [
  '/images/gallery/img-3.jpg',
  '/images/gallery/img-5.jpg',
  '/images/gallery/img-8.jpg',
  '/images/gallery/img-9.jpg',
  '/images/gallery/img-12.jpg',
  '/images/gallery/img-13.jpg',
];

export default function MissionPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % leftImages.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: { x: '100%' },
    center: { x: 0 },
    exit: { x: '-100%' },
  };

  return (
    <Section tone="cream">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] w-full rounded-md shadow-card overflow-hidden bg-gray-200">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={activeIndex}
                  src={leftImages[activeIndex]}
                  alt="Community outreach"
                  loading="lazy"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
            <div className="relative mt-8 aspect-[3/4] w-full rounded-md shadow-card overflow-hidden bg-gray-200">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.img
                  key={activeIndex}
                  src={rightImages[activeIndex]}
                  alt="Sharing food and supplies"
                  loading="lazy"
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">Who we are</span>
          <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
            Faith in action, compassion in practice
          </h2>
          <p className="mt-5 text-ink-soft">
            Founded in Tamale, The Jesus Heart Project extends a helping hand to the marginalized,
            guided by the teachings of Christ’s love and empathy. Through practical initiatives and
            spiritual support, we provide essential resources, education and a sense of belonging.
          </p>
          <p className="mt-4 text-ink-soft">
            Our mission is to empower individuals and families to overcome poverty and achieve
            lasting change — creating a community where justice, kindness and unity are lived out.
          </p>
          <Link to="/about" className="btn-secondary mt-7">
            Learn more about us <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
