import Link from 'next/link';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const monogramFont = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
});

const textFont = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d9def8] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fe_100%)]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-12 sm:gap-14 md:grid-cols-[minmax(0,1.35fr)_180px_220px] md:items-start md:justify-between md:gap-16">
          {/* Bloc gauche */}
          <div className="flex justify-center md:justify-start">
            <div className="w-full max-w-[420px] md:max-w-[500px]">
              <div className="mx-auto flex w-full flex-col items-center text-center md:-mt-1">
                <Link href="/" className="inline-block">
                  <div className="flex flex-col items-center leading-none">
                    <div className={`${monogramFont.className} relative flex items-center justify-center`}>
                      <span className="text-[58px] font-medium tracking-[-0.06em] text-[#111827] sm:text-[66px] lg:text-[74px]">
                        A
                      </span>
                      <span className="-ml-2 text-[58px] font-medium tracking-[-0.08em] text-[#111827] sm:text-[66px] lg:text-[74px]">
                        C
                      </span>
                    </div>

                    <span
                      className={`${monogramFont.className} mt-2 text-[24px] font-medium tracking-[-0.03em] text-[#0f172a] sm:text-[26px] lg:text-[28px]`}
                    >
                      arnaudcrestey.com
                    </span>
                  </div>
                </Link>

                <div className="mx-auto mt-5 h-px w-20 bg-[#d7dceb]" />

                <p
                  className={`${monogramFont.className} mx-auto mt-5 max-w-[26rem] text-center text-[17px] italic leading-[1.7] text-[#5b6474] sm:max-w-[30rem] sm:text-[20px]`}
                >
                  <span className="block">Des systèmes numériques qui attirent, engagent</span>
                  <span className="block">et transforment des visiteurs en clients.</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center md:block md:justify-self-center">
            <div className="w-full max-w-[220px] text-center md:w-[180px] md:text-left">
              <h3
                className={`${textFont.className} text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f172a] sm:text-xs`}
              >
                Navigation
              </h3>

              <nav className="mt-5 flex flex-col items-center gap-4 md:items-start">
                <Link
                  href="/"
                  className={`${textFont.className} text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]`}
                >
                  Accueil
                </Link>
                <Link
                  href="/systeme"
                  className={`${textFont.className} text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]`}
                >
                  Le système
                </Link>
                <Link
                  href="/concepts"
                  className={`${textFont.className} text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]`}
                >
                  Concepts
                </Link>
                <Link
                  href="/a-propos"
                  className={`${textFont.className} text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]`}
                >
                  À propos
                </Link>
              </nav>
            </div>
          </div>

          {/* Coordonnées */}
          <div className="flex justify-center md:block md:justify-self-end">
            <div className="w-full max-w-[260px] text-center md:w-[220px] md:text-left">
              <h3
                className={`${textFont.className} text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]`}
              >
                Coordonnées
              </h3>

              <div
                className={`${textFont.className} mt-6 flex flex-col items-center gap-5 text-[15px] text-[#334155] md:items-start`}
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
            className={`${textFont.className} flex flex-col gap-3 text-center text-[14px] text-[#64748b] md:flex-row md:items-center md:justify-between md:text-left`}
          >
            <p>© 2026 Arnaud Crestey. Tous droits réservés.</p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
              <Link href="/mentions-legales" className="transition hover:text-[#1d4ed8]">
                Mentions légales
              </Link>
              <Link href="/politique-de-confidentialite" className="transition hover:text-[#1d4ed8]">
                Politique de confidentialité
              </Link>
              <Link href="/politique-de-cookies" className="transition hover:text-[#1d4ed8]">
                Politique de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
