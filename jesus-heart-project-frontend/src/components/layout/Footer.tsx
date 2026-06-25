import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import Icon from '@/components/ui/Icon';
import NewsletterForm from '@/components/ui/NewsletterForm';
import { ORG, NAV_LINKS, SOCIALS } from '@/lib/constants';

export default function Footer() {
  const activeSocials = SOCIALS.filter((s) => s.url);

  return (
    <footer className="border-t border-ink/10 bg-sand text-ink-soft">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src="/images/logo/logo-light.png"
            alt="The Jesus Heart Project"
            className="h-16 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-ink-soft">{ORG.mission}</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Explore</h3>
          <ul className="mt-4 space-y-2 text-sm text-ink-soft">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/get-involved" className="transition-colors hover:text-brand-600">
                Get Involved
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-ink-soft">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span>{ORG.addresses[0]}</span>
            </li>
            {ORG.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-brand-600" />
                <a href={`tel:${p.replace(/\s/g, '')}`} className="hover:text-brand-600">
                  {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-brand-600" />
              <a href={`mailto:${ORG.email}`} className="break-all hover:text-brand-600">
                {ORG.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0 text-brand-600" />
              <a
                href={`https://wa.me/${ORG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-600"
              >
                WhatsApp us
              </a>
            </li>
          </ul>
        </div>

        {/* Give */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-ink">
            Support our work
          </h3>
          <p className="mt-4 text-sm text-ink-soft">
            Your gift provides food, education and hope to vulnerable families in northern Ghana.
          </p>
          <Link to="/get-involved" className="btn-primary mt-4">
            Donate now
          </Link>

          <div className="mt-6">
            <h4 className="text-sm font-semibold text-ink">Stay updated</h4>
            <p className="mt-1 text-xs text-ink-muted">
              Get news and stories from our outreaches.
            </p>
            <NewsletterForm />
          </div>

          {activeSocials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {activeSocials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="rounded-md bg-ink/5 p-2 text-ink-soft transition-colors hover:bg-brand-600 hover:text-white"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="border-t border-ink/10 py-3.5">
        <div className="container-page flex flex-col items-center justify-between gap-3 text-xs text-ink-muted sm:flex-row">
          <div className="text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} {ORG.name}. All rights reserved.
            </p>
            <p className="mt-1">
              Designed by <span className="font-semibold text-brand-600">DivAmok Corp.</span>
            </p>
          </div>
          <p>
            {ORG.tagline} · {ORG.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
