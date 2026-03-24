import Link from 'next/link';

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[#d9def8] bg-[#f8faff]">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10">
          {/* Bloc identité */}
          <div className="max-w-md">
            <Link href="/" className="inline-block">
              <div className="flex flex-col leading-tight">
                <span className="text-[26px] font-semibold tracking-[-0.02em] text-[#0f172a]">
                  Arnaud Crestey
                </span>
                <span className="mt-1 text-sm tracking-[0.12em] text-[#6b7280] uppercase">
                  arnaudcrestey.com
                </span>
              </div>
            </Link>

            <div className="mt-6 h-px w-16 bg-[#cfd7f6]" />

            <p className="mt-6 text-[15px] leading-7 text-[#475569]">
              Je conçois des dispositifs digitaux pensés pour attirer, guider et transformer des
              visiteurs en clients
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f172a]">
              Navigation
            </h3>

            <nav className="mt-6 flex flex-col gap-4">
              <Link
                href="/"
                className="text-[15px] text-[#475569] transition hover:text-[#1d4ed8]"
              >
                Accueil
              </Link>
              <Link
                href="/diagnostics-automatisations"
                className="text-[15px] text-[#475569] transition hover:text-[#1d4ed8]"
              >
                Diagnostics & Automatisations
              </Link>
              <Link
                href="/concepts"
                className="text-[15px] text-[#475569] transition hover:text-[#1d4ed8]"
              >
                Concepts
              </Link>
              <Link
                href="/a-propos"
                className="text-[15px] text-[#475569] transition hover:text-[#1d4ed8]"
              >
                À propos
              </Link>
              <Link
                href="/contact"
                className="text-[15px] text-[#475569] transition hover:text-[#1d4ed8]"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Coordonnées */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f172a]">
              Coordonnées
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-[15px] text-[#475569]">
              <a
                href="mailto:demande@arnaudcrestey.com"
                className="transition hover:text-[#1d4ed8]"
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

        {/* Bas de footer */}
        <div className="mt-14 border-t border-[#d9def8] pt-6">
          <div className="flex flex-col gap-3 text-sm text-[#64748b] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Arnaud Crestey. Tous droits réservés.</p>

            <div className="flex flex-wrap items-center gap-4">
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
