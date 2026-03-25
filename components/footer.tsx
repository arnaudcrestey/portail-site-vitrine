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
        <div className="grid gap-12 sm:gap-14 md:grid-cols-[minmax(0,1.35fr)_180px_220px] md:justify-between md:gap-16">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-sm text-center">
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
                className={`${monogramFont.className} mx-auto mt-5 max-w-[30rem] text-[18px] italic leading-8 text-[#5b6474] sm:text-[20px]`}
              >
                Des systèmes numériques qui attirent, engagent et transforment des visiteurs en clients.
              </p>
            </div>
          </div>

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
                  className={`${textFont
