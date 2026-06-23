import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur' : 'bg-white'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2" aria-label="Jesus Heart Project home">
          <img
            src="/images/logo/logo-light.png"
            alt="The Jesus Heart Project"
            className="h-10 w-auto lg:h-12"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-600 ${
                    isActive ? 'text-brand-600' : 'text-ink-soft'
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link to="/get-involved" className="btn-primary">
            <Heart className="h-4 w-4" /> Donate
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-md p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/5 bg-white lg:hidden">
          <ul className="container-page flex flex-col py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `block rounded-md px-2 py-3 text-base font-medium ${
                      isActive ? 'text-brand-600' : 'text-ink-soft'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="px-2 pb-2 pt-3">
              <Link to="/get-involved" className="btn-primary w-full">
                <Heart className="h-4 w-4" /> Donate
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
