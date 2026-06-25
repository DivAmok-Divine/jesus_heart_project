import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Heart, MessageCircle, ChevronDown } from 'lucide-react';
import { NAV_LINKS, WORK_MENU, ORG } from '@/lib/constants';

const waHref = `https://wa.me/${ORG.whatsapp}?text=${encodeURIComponent(
  `Hello ${ORG.name}, I’d like to know more about your work.`
)}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const onDonatePage = location.pathname === '/get-involved';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu on navigation
  useEffect(() => setOpen(false), [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium transition-colors hover:text-brand-600 ${
      isActive ? 'text-brand-600' : 'text-ink-soft'
    }`;

  const activeDot = (isActive: boolean) =>
    isActive ? (
      <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-600" />
    ) : null;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled && !open ? 'bg-cream/60 shadow-sm backdrop-blur-md' : 'bg-cream'
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
          {NAV_LINKS.map((link) =>
            link.label === 'Our Work' ? (
              <li key={link.to} className="group relative">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-brand-600 ${
                      isActive ? 'text-brand-600' : 'text-ink-soft'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      Our Work
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      {activeDot(isActive)}
                    </>
                  )}
                </NavLink>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="overflow-hidden rounded-md bg-white shadow-lift ring-1 ring-ink/10">
                    {WORK_MENU.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        end
                        className={({ isActive }) =>
                          `block px-4 py-3 transition-colors hover:bg-cream ${
                            isActive ? 'bg-brand-50' : ''
                          }`
                        }
                      >
                        <span className="block text-sm font-semibold text-ink">{item.label}</span>
                        <span className="block text-xs text-ink-muted">{item.desc}</span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.to}>
                <NavLink to={link.to} className={linkClass}>
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {activeDot(isActive)}
                    </>
                  )}
                </NavLink>
              </li>
            )
          )}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="btn bg-[#25D366] px-4 text-white hover:bg-[#20b757]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden xl:inline">Chat with us</span>
          </a>
          {onDonatePage ? (
            <span
              aria-disabled="true"
              title="You’re on the donation page"
              className="btn cursor-not-allowed bg-ink/10 px-4 text-ink-muted"
            >
              <Heart className="h-4 w-4" /> Donate
            </span>
          ) : (
            <Link to="/get-involved" className="btn-primary px-4">
              <Heart className="h-4 w-4" /> Donate
            </Link>
          )}
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
        <div className="border-t border-ink/10 bg-cream lg:hidden">
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
            <li>
              <NavLink
                to="/partner"
                className={({ isActive }) =>
                  `block rounded-md px-2 py-3 text-base font-medium ${
                    isActive ? 'text-brand-600' : 'text-ink-soft'
                  }`
                }
              >
                Partner With Us
              </NavLink>
            </li>
            <li className="px-2 pt-3">
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full bg-[#25D366] text-white hover:bg-[#20b757]"
              >
                <MessageCircle className="h-4 w-4" /> Chat with us
              </a>
            </li>
            <li className="px-2 pb-2 pt-2">
              {onDonatePage ? (
                <span
                  aria-disabled="true"
                  className="btn w-full cursor-not-allowed bg-ink/10 text-ink-muted"
                >
                  <Heart className="h-4 w-4" /> Donate
                </span>
              ) : (
                <Link to="/get-involved" className="btn-primary w-full">
                  <Heart className="h-4 w-4" /> Donate
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
