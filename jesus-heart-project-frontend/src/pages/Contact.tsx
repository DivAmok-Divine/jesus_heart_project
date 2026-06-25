import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, MessageCircle, Send, Loader2, CheckCircle2, Navigation, ExternalLink } from 'lucide-react';
import SEO from '@/components/SEO';
import PageHeader from '@/components/ui/PageHeader';
import Section from '@/components/ui/Section';
import Reveal from '@/components/ui/Reveal';
import { ORG } from '@/lib/constants';

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID as string | undefined;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (data: FormValues) => {
    setStatus('sending');
    // If Formspree is configured, POST there; otherwise fall back to a mailto link.
    if (FORMSPREE_ID && FORMSPREE_ID !== 'xxxxxxxx') {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (res.ok) {
          setStatus('sent');
          reset();
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    } else {
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
      );
      window.location.href = `mailto:${ORG.email}?subject=${encodeURIComponent(
        data.subject || 'Website enquiry'
      )}&body=${body}`;
      setStatus('sent');
      reset();
    }
  };

  const inputClass =
    'w-full rounded-md border-2 border-black/10 px-3 py-3 text-sm outline-none focus:border-brand-400';

  return (
    <>
      <SEO title="Contact" description="Get in touch with The Jesus Heart Project in Tamale, Ghana — by phone, email or WhatsApp." />
      <PageHeader
        eyebrow="Contact"
        title="Let’s talk"
        subtitle="Have a question, want to partner, or need help? We’d love to hear from you."
        image="/images/gallery/img-8.jpg"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact details */}
          <Reveal>
            <span className="eyebrow eyebrow-rule">Get in touch</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[2.5rem]">
              Reach out to <span className="italic text-brand-700">us</span>
            </h2>
            <p className="lead mt-5">
              We’re based in Tamale, Northern Region, Ghana. Call, email or message us on WhatsApp —
              whichever is easiest for you.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Our address</div>
                  {ORG.addresses.map((a) => (
                    <p key={a} className="text-sm text-ink-soft">
                      {a}
                    </p>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Call us</div>
                  {ORG.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="block text-sm text-ink-soft hover:text-brand-600"
                    >
                      {p}
                    </a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">Email us</div>
                  <a
                    href={`mailto:${ORG.email}`}
                    className="break-all text-sm text-ink-soft hover:text-brand-600"
                  >
                    {ORG.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <a
                    href={`https://wa.me/${ORG.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft hover:text-brand-600"
                  >
                    Chat with us instantly
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <div className="card p-6 sm:p-8">
              {status === 'sent' ? (
                <div className="py-10 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-green-500" />
                  <h3 className="mt-4 text-2xl">Message sent!</h3>
                  <p className="mt-2 text-ink-soft">
                    Thank you for reaching out. We’ll get back to you as soon as we can.
                  </p>
                  <button className="btn-secondary mt-6" onClick={() => setStatus('idle')}>
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <h3 className="text-2xl">Send us a message</h3>
                  <div>
                    <input
                      {...register('name', { required: 'Please enter your name' })}
                      placeholder="Your name"
                      className={inputClass}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-brand-600">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      {...register('email', {
                        required: 'Please enter your email',
                        pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email' },
                      })}
                      placeholder="Your email"
                      className={inputClass}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-brand-600">{errors.email.message}</p>
                    )}
                  </div>
                  <input
                    {...register('subject')}
                    placeholder="Subject (optional)"
                    className={inputClass}
                  />
                  <div>
                    <textarea
                      {...register('message', { required: 'Please enter a message' })}
                      placeholder="How can we help?"
                      rows={5}
                      className={inputClass}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-brand-600">{errors.message.message}</p>
                    )}
                  </div>
                  {status === 'error' && (
                    <p className="text-sm text-brand-600">
                      Something went wrong. Please try again or email us directly.
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full"
                  >
                    {status === 'sending' ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Send message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        {/* Full-width map — fills the space across the bottom of the section */}
        <Reveal className="mt-10">
          <div className="relative h-[24rem] w-full overflow-hidden rounded-md shadow-card sm:h-[30rem]">
            <iframe
              title="Tamale, Ghana map"
              src="https://maps.google.com/maps?ll=9.4035,-0.8424&z=13&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Place name card — top-left, sits over Google's default "View larger map" label */}
            <div className="absolute left-2 top-2 flex items-center gap-2 rounded-md bg-white py-2 pl-3.5 pr-2 shadow-lift">
              <span className="text-sm font-semibold text-ink">Tamale, Northern Region, Ghana</span>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Tamale%2C+Northern+Region%2C+Ghana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open in Google Maps"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600 transition-colors hover:bg-brand-600 hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            {/* Directions — top-right */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Tamale%2C+Northern+Region%2C+Ghana"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary absolute right-3 top-3 shadow-lift"
            >
              <Navigation className="h-4 w-4" /> Direct me
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
