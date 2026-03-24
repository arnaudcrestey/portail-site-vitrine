import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d9def8] bg-[#f8faff]">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
        <div className="grid gap-10 sm:gap-12 md:grid-cols-3 md:gap-10">
          <div className="max-w-md">
            <Link href="/" className="inline-block">
              <div className="flex flex-col leading-tight">
                <span className="text-[22px] font-semibold tracking-[-0.02em] text-[#0f172a] sm:text-[24px] lg:text-[26px]">
                  Arnaud Crestey
                </span>
                <span className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#6b7280] sm:text-xs">
                  arnaudcrestey.com
                </span>
              </div>
            </Link>

            <div className="mt-4 h-px w-14 bg-[#cfd7f6] sm:mt-5 sm:w-16" />

            <p className="mt-4 max-w-sm text-[14px] leading-6 text-[#475569] sm:mt-5 sm:text-[15px] sm:leading-7">
              Je conçois des systèmes digitaux pensés pour structurer une offre,
              engager les bons visiteurs et faciliter la prise de contact.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f172a] sm:text-xs">
              Navigation
            </h3>

            <nav className="mt-4 flex flex-col gap-3 sm:mt-5 sm:gap-4">
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

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0f172a] sm:text-xs">
              Coordonnées
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-[14px] text-[#475569] sm:mt-5 sm:gap-4 sm:text-[15px]">
              <a
                href="mailto:demande@arnaudcrestey.com"
                className="break-all transition hover:text-[#1d4ed8]"
              >
                demande@arnaudcrestey.com
              </a>

              <a
                href="tel:+33681952345"
                className="transition hover:text-[#1d4ed8]"
              >
                +33 6 81 95 23 45
              </a>

              <p>Vire, Normandie, France</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-[#d9def8] pt-5 sm:mt-12 sm:pt-6">
          <div className="flex flex-col gap-3 text-[13px] text-[#64748b] sm:text-sm md:flex-row md:items-center md:justify-between">
            <p>© 2026 Arnaud Crestey. Tous droits réservés.</p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/mentions-legales"
                className="transition hover:text-[#1d4ed8]"
              >
                Mentions légales
              </Link>
              <Link
                href="/contact"
                className="transition hover:text-[#1d4ed8]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
