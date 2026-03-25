import Link from 'next/link';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const monogram = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: ['normal'],
});

const bodyFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d9def8] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fe_100%)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.35fr)_180px_220px] md:items-start md:justify-between md:gap-16">
          {/* Bloc signature */}
          <div className="flex justify-center md:justify-start">
            <div className="max-w-md text-center md:max-w-[440px]">
              <Link href="/" className="inline-block">
                <div className="flex flex-col items-center leading-none">
                  <span
                    className={`${monogram.className} text-[72px] font-medium tracking-[-0.06em] text-[#111827] sm:text-[84px] lg:text-[92px]`}
                    aria-label="Arnaud Crestey"
                  >
                    AC
                  </span>

                  <span
                    className={`${monogram.className} mt-1 text-[18px] font-medium tracking-[-0.03em] text-[#1f2937] sm:text-[20px] lg:text-[22px]`}
                  >
                    arnaudcrestey.com
                  </span>
                </div>
              </Link>

              <div className="mx-auto mt-5 h-px w-20 bg-[#d6ddf7]" />

              <p
                className={`${monogram.className} mx-auto mt-6 max-w-[520px] text-[24px] leading-[1.7] text-[#6b7280] sm:text-[28px]`}
              >
                Des systèmes numériques qui attirent, engagent
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                et transforment des visiteurs en clients.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center md:block md:justify-self-center">
            <div className="w-full max-w-[220px] text-center md:w-[180px] md:text-left">
              <h3
                className={`${bodyFont.className} text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]`}
              >
                Navigation
              </h3>

              <nav className={`${bodyFont.className} mt-6 flex flex-col items-center gap-5 md:items-start`}>
                <Link href="/" className="text-[15px] text-[#334155] transition hover:text-[#1d4ed8]">
                  Accueil
                </Link>
                <Link href="/systeme" className="text-[15px] text-[#334155] transition hover:text-[#1d4ed8]">
                  Le système
                </Link>
                <Link href="/concepts" className="text-[15px] text-[#334155] transition hover:text-[#1d4ed8]">
                  Concepts
                </Link>
                <Link href="/a-propos" className="text-[15px] text-[#334155] transition hover:text-[#1d4ed8]">
                  À propos
                </Link>
                <Link href="/contact" className="text-[15px] text-[#334155] transition hover:text-[#1d4ed8]">
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="flex justify-center md:block md:justify-self-end">
            <div className="w-full max-w-[260px] text-center md:w-[220px] md:text-left">
              <h3
                className={`${bodyFont.className} text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]`}
              >
                Coordonnées
              </h3>

              <div
                className={`${bodyFont.className} mt-6 flex flex-col items-center gap-5 text-[15px] text-[#334155] md:items-start`}
              >
                <a
                  href="mailto:demande@arnaudcrestey.com"
                  className="break-all transition hover:text-[#1d4ed8]"
                >
                  demande@arnaudcrestey.com
                </a>

                <a href="tel:+33681952345" className="transition hover:text-[#1d4ed8]">
                  +33 6 81 95 23 45
                </a>

                <p>Vire, Normandie, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bas de footer */}
        <div className="mt-12 border-t border-[#d9def8] pt-6">
          <div
            className={`${bodyFont.className} flex flex-col gap-3 text-center text-[14px] text-[#64748b] md:flex-row md:items-center md:justify-between md:text-left`}
          >
            <p>© 2026 Arnaud Crestey. Tous droits réservés.</p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <Link href="/mentions-legales" className="transition hover:text-[#1d4ed8]">
                Mentions légales
              </Link>
              <Link href="/contact" className="transition hover:text-[#1d4ed8]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
