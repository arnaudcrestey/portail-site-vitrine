import Link from 'next/link';
import { Surface } from '@/components/ui';

export default function ContactConfirmationPage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl">
          <Surface className="relative overflow-hidden rounded-[28px] border border-white/60 bg-[linear-gradient(135deg,#eef2ff_0%,#f8f9ff_38%,#edf3ff_100%)] px-4 py-10 shadow-[0_24px_70px_rgba(51,78,140,0.08)] sm:rounded-[32px] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_24%)]" />

            <div className="relative mx-auto max-w-[720px] text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[22px] border border-white/80 bg-white/72 shadow-[0_16px_40px_rgba(37,99,235,0.10)] backdrop-blur sm:h-20 sm:w-20 sm:rounded-[26px]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563eb]/10 text-lg font-semibold text-[#2563eb] sm:h-10 sm:w-10 sm:text-xl">
                  ✓
                </div>
              </div>

              <h1 className="mt-6 text-[2.1rem] font-semibold tracking-[-0.05em] text-ink sm:mt-8 sm:text-5xl lg:text-[3.4rem]">
                Demande confirmée
              </h1>

              <p className="mx-auto mt-4 max-w-[560px] text-base leading-7 text-slate sm:mt-5 sm:text-xl sm:leading-8">
                Votre message a bien été transmis.
              </p>

              <p className="mx-auto mt-3 max-w-[620px] text-[15px] leading-7 text-slate sm:mt-4 sm:text-base sm:leading-8">
                Je reviendrai vers vous rapidement avec une réponse adaptée à votre besoin.
              </p>

              <div className="mx-auto mt-7 max-w-[640px] rounded-[20px] border border-[#dbe5ff] bg-white/72 px-4 py-4 text-sm leading-6 text-[#5f6b85] shadow-[0_14px_36px_rgba(37,99,235,0.05)] sm:mt-8 sm:rounded-[24px] sm:px-6 sm:text-[15px] sm:leading-7">
                Un accusé de réception ou une réponse peut parfois apparaître dans vos messages indésirables.
              </div>

              <div className="mt-8 flex justify-center sm:mt-10">
                <Link
                  href="/"
                  className="inline-flex min-h-12 w-full max-w-[240px] items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:translate-y-0 sm:w-auto sm:px-7"
                >
                  Revenir à l’accueil
                </Link>
              </div>
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}
