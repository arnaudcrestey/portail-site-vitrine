import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d9def8] bg-[#f8faff]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-12 sm:gap-14 md:grid-cols-[minmax(0,1.35fr)_180px_220px] md:justify-between md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-sm text-center">
              <Link href="/" className="inline-block">
                <div className="flex flex-col items-center leading-none">
                  <span className="text-[22px] font-semibold tracking-[-0.03em] text-[#0f172a] sm:text-[24px] lg:text-[26px]">
                    Arnaud Crestey
                  </span>
                  <span className="mt-3 text-[12px] tracking-[0.12em] text-[#64748b] sm:text-[13px]">
                    arnaudcrestey.com
                  </span>
                </div>
              </Link>

              <div className="mx-auto mt-5 h-px w-16 bg-[#cfd7f6]" />

              <p className="mt-5 text-[14px] leading-8 text-[#475569] sm:text-[15px] sm:leading-8">
                Des systèmes numériques qui attirent, engagent et transforment vos visiteurs en clients.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:block md:justify-self-center">
            <div className="w-full max-w-[220px] text-center md:w-[180px] md:text-left">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f172a] sm:text-xs">
                Navigation
              </h3>

              <nav className="mt-5 flex flex-col items-center gap-4 md:items-start">
                <Link
                  href="/"
                  className="text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]"
                >
                  Accueil
                </Link>
                <Link
                  href="/systeme"
                  className="text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]"
                >
                  Le système
                </Link>
                <Link
                  href="/concepts"
                  className="text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]"
                >
                  Concepts
                </Link>
                <Link
                  href="/a-propos"
                  className="text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]"
                >
                  À propos
                </Link>
                <Link
                  href="/contact"
                  className="text-[14px] text-[#475569] transition hover:text-[#1d4ed8] sm:text-[15px]"
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>

          <div className="flex justify-center md:block md:justify-self-end">
            <div className="w-full max-w-[260px] text-center md:w-[220px] md:text-left">
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f172a] sm:text-xs">
                Coordonnées
              </h3>

              <div className="mt-5 flex flex-col items-center gap-4 text-[14px] text-[#475569] sm:text-[15px] md:items-start">
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

        <div className="mt-10 border-t border-[#d9def8] pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-3 text-center text-[13px] text-[#64748b] sm:text-sm md:flex-row md:items-center md:justify-between md:text-left">
            <p>© 2026 Arnaud Crestey. Tous droits réservés.</p>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-end">
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
