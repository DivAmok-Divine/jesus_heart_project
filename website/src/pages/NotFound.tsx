import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" />
      <section className="flex min-h-[60vh] items-center justify-center bg-cream">
        <div className="container-page text-center">
          <p className="font-display text-7xl font-extrabold text-brand-600">404</p>
          <h1 className="mt-4 text-2xl sm:text-3xl">This page could not be found</h1>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            The page you’re looking for may have moved or no longer exists.
          </p>
          <Link to="/" className="btn-primary mt-7">
            <Home className="h-4 w-4" /> Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
