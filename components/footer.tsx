import Link from 'next/link';
import { Cormorant_Garamond, Inter } from 'next/font/google';

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
});

const sans = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

function MonogramAC() {
  return (
    <div className="flex items-center justify-center md:justify-start" aria-label="Monogramme AC">
      <svg
        viewBox="0 0 220 120"
        className="h-[72px] w-[132px] sm:h-[80px] sm:w-[148px]"
        role="img"
        aria-hidden="true"
      >
        <g fill="none" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* A */}
          <path d="M44 98 L78 18 L112 98" />
          <path d="M58 66 H98" />

          {/* C */}
          <path d="M176 34
                   C167 23, 152 20, 139 22
                   C116 25, 101 44, 101 60
                   C101 76, 116 95, 139 98
                   C152 100, 167 97, 176 86" />

          {/* liaison discrète A/C */}
          <path d="M103 61 C111 58, 118 56, 126 56" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-[#d9def8] bg-[linear-gradient(180deg,#ffffff_0%,#f7f9fe_100%)]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.15fr)_170px_220px] md:items-start md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-[470px] text-center md:text-left">
              <Link href="/" className="inline-flex flex-col items-center md:items-start">
                <MonogramAC />

                <span
                  className={`${serif.className} mt-1 text-[18px] font-medium leading-none tracking-[-0.03em] text-[#1e293b] sm:text-[20px]`}
                >
                  arnaudcrestey.com
                </span>
              </Link>

              <div className="mx-auto mt-5 h-px w-20 bg-[#d7def8] md:mx-0" />

              <p
                className={`${serif.className} mt-6 text-[24px] leading-[1.6] tracking-[-0.01em] text-[#667085] sm:text-[28px] md:max-w-[560px]`}
              >
                Des systèmes numériques qui attirent, engagent et transforment des visiteurs en clients.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:block">
            <div className="w-full max-w-[220px] text-center md:text-left">
              <h3 className={`${sans.className} text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]`}>
                Navigation
              </h3>

              <nav className={`${sans.className} mt-6 flex flex-col items-center gap-5 md:items-start`}>
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

          <div className="flex justify-center md:block">
            <div className="w-full max-w-[260px] text-center md:text-left">
              <h3 className={`${sans.className} text-[12px] font-semibold uppercase tracking-[0.24em] text-[#0f172a]`}>
                Coordonnées
              </h3>

              <div className={`${sans.className} mt-6 flex flex-col items-center gap-5 text-[15px] text-[#334155] md:items-start`}>
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

        <div className="mt-12 border-t border-[#d9def8] pt-6">
          <div
            className={`${sans.className} flex flex-col gap-3 text-center text-[14px] text-[#64748b] md:flex-row md:items-center md:justify-between md:text-left`}
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
