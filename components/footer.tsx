import Link from 'next/link';

import { contactDetails, navigation } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-white/75">
      <div className="container-layout grid gap-10 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex flex-col leading-tight">
            <p className="text-sm font-semibold tracking-[0.16em] text-ink sm:text-base">
              Arnaud Crestey
            </p>
            <p className="text-[11px] tracking-[0.14em] text-slate/80 sm:text-xs">
              arnaudcrestey.com
            </p>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate">
            Conception de systèmes numériques clairs, crédibles et engageants pour transformer une
            expertise en expérience lisible, structurée et convaincante.
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
