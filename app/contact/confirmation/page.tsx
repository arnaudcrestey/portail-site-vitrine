import Link from 'next/link';
import { Surface } from '@/components/ui';

export default function ContactConfirmationPage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl">
          <Surface className="relative overflow-hidden rounded-[36px] border border-white/60 bg-[linear-gradient(135deg,#eef2ff_0%,#f8f9ff_38%,#eef4ff_100%)] px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.08),transparent_28%)]" />

            <div className="relative mx-auto max-w-2xl text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[24px] border border-white/70 bg-white/70 shadow-[0_20px_50px_rgba(37,99,235,0.10)] backdrop-blur">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2563eb]/10 text-xl text-[#2563eb]">
                  ✓
                </div>
              </div>

              <h1 className="mt-8 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Demande confirmée
              </h1>

              <p className="mt-5 text-lg leading-8 text-slate sm:text-xl">
                Votre message a bien été transmis.
              </p>

              <p className="mt-4 text-base leading-8 text-slate">
                Je reviendrai vers vous dès que possible avec une réponse adaptée à votre besoin,
                à votre contexte et à ce que vous souhaitez construire.
              </p>

              <div className="mt-8 rounded-[22px] border border-[#d8e2ff] bg-white/65 px-6 py-4 text-sm leading-7 text-[#5f6b85] shadow-[0_18px_40px_rgba(37,99,235,0.06)]">
                Pensez à vérifier votre boîte mail ainsi que vos messages indésirables.
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c9d5ff] bg-white px-6 py-3 text-sm font-semibold text-[#2548a8] transition duration-300 hover:-translate-y-0.5 hover:border-[#9db4ee] hover:text-[#1d4ed8]"
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
