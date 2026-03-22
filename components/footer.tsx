import Link from 'next/link';

import { contactDetails, navigation } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-white/70">
      <div className="container-layout grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink">arnaudcrestey.com</p>
          <p className="max-w-md text-sm leading-7 text-slate">
            Un portail clair pour présenter Cabinet Astrae, les dispositifs digitaux conçus pour les professionnels et un laboratoire de concepts prêt à évoluer.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Navigation</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Coordonnées</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate">
            <li>{contactDetails.email}</li>
            <li>{contactDetails.phone}</li>
            <li>{contactDetails.location}</li>
            <li>Mentions légales — à compléter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
