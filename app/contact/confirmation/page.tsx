import Link from 'next/link';
import { Surface } from '@/components/ui';

export default function ContactConfirmationPage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl">
          <Surface className="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(135deg,#eef2ff_0%,#f8f9ff_38%,#edf3ff_100%)] px-6 py-14 shadow-[0_30px_90px_rgba(51,78,140,0.08)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_24%)]" />

            <div className="relative mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[26px] border border-white/80 bg-white/72 shadow-[0_20px_50px_rgba(37,99,235,0.10)] backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10 text-xl font-semibold text-[#2563eb]">
                  ✓
                </div>
              </div>

              <h1 className="mt-8 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
                Demande confirmée
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate sm:text-xl">
                Votre message a bien été transmis.
              </p>

              <p className="mt-4 text-base leading-8 text-slate">
                Je reviendrai vers vous dès que possible avec une réponse adaptée à votre besoin,
                à votre contexte et à ce que vous souhaitez construire.
              </p>

              <div className="mt-8 rounded-[24px] border border-[#dbe5ff] bg-white/68 px-6 py-4 text-sm leading-7 text-[#5f6b85] shadow-[0_16px_40px_rgba(37,99,235,0.05)]">
                Un accusé de réception ou une réponse peut parfois apparaître dans vos messages
                indésirables selon votre messagerie.
              </div>

              <div className="mt-10 flex justify-center">
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(37,99,235,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:translate-y-0"
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
