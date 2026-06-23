import { Link } from 'react-router-dom';
import { Heart, HandHeart } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-brand-600 py-10 text-white sm:py-12 lg:py-16">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/gallery/img-6.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container-page relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl text-white sm:text-4xl">
          Join hands for humanity
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-white/85">
          Whether you give, partner or volunteer, your support changes lives. Together we can build
          a better future for those in need.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/get-involved" className="btn-gold">
            <Heart className="h-4 w-4" /> Donate now
          </Link>
          <Link
            to="/get-involved"
            className="btn border-2 border-white bg-transparent text-white hover:bg-white hover:text-brand-600"
          >
            <HandHeart className="h-4 w-4" /> Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
