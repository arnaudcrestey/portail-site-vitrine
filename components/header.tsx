'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { navigation } from '@/data/site';
import { ButtonLink } from '@/components/ui';

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/78 backdrop-blur-xl">
      <div className="container-layout flex h-20 items-center justify-between gap-6">
        <Link
  href="/"
  className="group flex shrink-0 flex-col leading-tight"
  aria-label="Retour à l’accueil"
>
  <span className="text-[16px] font-medium tracking-[0.08em] text-ink transition group-hover:text-primary sm:text-[18px]">
    Arnaud Crestey
  </span>
  <span className="mt-1 text-[12px] tracking-[0.12em] text-slate/80 sm:text-sm">
    Concepteur de systèmes numériques
  </span>
</Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigation principale">
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ease-premium ${
                  active
                    ? 'bg-ink text-white shadow-card'
                    : 'text-slate hover:bg-white hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="secondary">
            Entrer en contact
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-line bg-white/90 p-3 text-ink lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open ? (
        <div className="border-t border-line lg:hidden">
          <div className="container-layout flex flex-col gap-2 py-4">
            <div className="mb-2 rounded-[24px] border border-line bg-white/70 px-4 py-4">
              <p className="text-sm font-semibold tracking-[0.08em] text-ink">Arnaud Crestey</p>
              <p className="mt-1 text-xs text-slate/80">Concepteur de systèmes numériques</p>
            </div>

            {navigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium ${
                    active ? 'bg-ink text-white' : 'bg-white/70 text-ink'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <ButtonLink
              href="/contact"
              variant="secondary"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Entrer en contact
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
