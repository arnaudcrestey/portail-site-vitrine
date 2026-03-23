import Link from 'next/link';

import { contactDetails, navigation } from '@/data/site';

export function Footer() {
  return (
    <footer className="relative border-t border-line/80 bg-white">
      <div className="container-layout py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_0.85fr_0.85fr] lg:gap-16">
          <div className="max-w-md">
            <div className="flex flex-col leading-tight">
              <p className="text-[18px] font-medium tracking-[0.08em] text-ink sm:text-[20px]">
                Arnaud Crestey
              </p>
              <p className="mt-1 text-[12px] tracking-[0.14em] text-slate/80 sm:text-[13px]">
                arnaudcrestey.com
              </p>
            </div>

            <div className="mt-6 h-px w-16 bg-line" />

            <p className="mt-6 text-sm leading-8 text-slate sm:text-[15px]">
              Je conçois des dispositifs digitaux pensés pour attirer, guider et transformer des
              visiteurs en clients.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Navigation
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-slate sm:text-[15px]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition duration-300 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-ink">
              Coordonnées
            </h2>

            <ul className="mt-5 space-y-3 text-sm text-slate sm:text-[15px]">
              <li>
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="transition duration-300 hover:text-ink"
                >
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                  className="transition duration-300 hover:text-ink"
                >
                  {contactDetails.phone}
                </a>
              </li>
              <li>{contactDetails.location}</li>
              <li>
                <span>Mentions légales</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line/70 pt-6">
          <p className="text-xs tracking-[0.08em] text-slate/70 sm:text-sm">
            © {new Date().getFullYear()} Arnaud Crestey. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
