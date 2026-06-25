import { Link } from 'react-router-dom';
import { Heart, HandHeart } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-16 text-white sm:py-20 lg:py-24">
      {/* Background photo + warm brand wash */}
      <div className="absolute inset-0">
        <img
          src="/images/gallery/img-6.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-800/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/40" />
      </div>

      <div className="container-page relative text-center">
        <span className="eyebrow eyebrow-rule justify-center text-gold-400">Join the mission</span>
        <h2 className="mx-auto mt-4 max-w-2xl text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
          Be the change. Bring <span className="italic text-gold-400">hope</span> to those who need
          it most.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Whether you give, partner or volunteer, your support changes lives. Together we can build a
          better future for vulnerable communities across northern Ghana.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link to="/get-involved" className="btn-gold btn-lg">
            <Heart className="h-4 w-4" /> Donate now
          </Link>
          <Link
            to="/partner"
            className="btn btn-lg border border-white/70 bg-transparent text-white hover:bg-white hover:text-brand-700"
          >
            <HandHeart className="h-4 w-4" /> Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
