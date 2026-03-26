import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'Contact',
  description:
    'Page de contact pour présenter un projet, un besoin ou une demande autour d’un dispositif numérique.',
};

export default function ContactPage() {
  return (
    <section className="'use client';

import { useState } from 'react';
import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'Contact',
  description:
    'Page de contact pour présenter un projet, un besoin ou une demande autour d’un dispositif numérique.',
};

export default function ContactPage() {
  const [message, setMessage] = useState(`Bonjour Arnaud,

Je vous contacte au sujet de...

Activité :
Besoin / objectif :
Contexte :
Délais éventuels :`);

  const handleSendEmail = () => {
    const subject = encodeURIComponent('Demande de contact depuis arnaudcrestey.com');
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-5xl">
          <Surface className="rounded-[32px] border border-white/70 bg-[linear-gradient(135deg,#f1f4ff_0%,#f7f8fc_48%,#edf1ff_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <span className="inline-flex rounded-full border border-[#c9d5ff] bg-white/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3b82f6]">
              Contact
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Parlons de votre projet
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate sm:text-lg">
              Décrivez simplement votre besoin, votre idée ou le dispositif que vous souhaitez
              concevoir.
            </p>

            <p className="mt-10 max-w-3xl text-sm leading-7 text-slate sm:text-base sm:leading-8">
              Quelques lignes suffisent pour me permettre de comprendre votre demande : votre
              activité, ce que vous souhaitez créer ou améliorer, l’objectif recherché, ainsi que
              le contexte utile pour avancer dans la bonne direction.
            </p>

            <div className="mt-8">
              <label htmlFor="project-message" className="sr-only">
                Votre message
              </label>
              <textarea
                id="project-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
                className="w-full resize-none rounded-[28px] border border-[#9db4ee] bg-white/70 px-6 py-6 text-sm leading-7 text-ink outline-none transition duration-200 placeholder:text-slate focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 sm:px-7 sm:py-7 sm:text-base sm:leading-8"
              />
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={handleSendEmail}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(37,99,235,0.26)] transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:px-7"
              >
                Envoyer votre message
              </button>
            </div>

            <div className="mt-8 border-t border-[#d8e2ff] pt-6 text-sm leading-7 text-slate">
              <span className="font-medium text-ink">Contact direct :</span>{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors duration-200 hover:text-ink"
              >
                {contactDetails.email}
              </a>{' '}
              <span className="text-[#9db4ee]">·</span>{' '}
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                className="transition-colors duration-200 hover:text-ink"
              >
                {contactDetails.phone}
              </a>
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-5xl">
          <Surface className="rounded-[32px] border border-white/60 bg-[#EEF2FF] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <span className="inline-flex rounded-full border border-[#C9D4FF] bg-white/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3B82F6]">
              Contact
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Parlons de votre projet
            </h1>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate sm:text-lg">
              Décrivez simplement votre besoin, votre idée ou le dispositif que vous souhaitez
              concevoir.
            </p>

            <form
              action={`mailto:${contactDetails.email}`}
              method="post"
              encType="text/plain"
              className="mt-10"
            >
              <p className="max-w-3xl text-sm leading-7 text-slate sm:text-base sm:leading-8">
                Quelques lignes suffisent pour me permettre de comprendre votre demande :
                votre activité, ce que vous souhaitez créer ou améliorer, l’objectif recherché,
                ainsi que le contexte utile pour avancer dans la bonne direction.
              </p>

              <div className="mt-8">
                <label htmlFor="message" className="sr-only">
                  Votre message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={9}
                  placeholder={`Bonjour Arnaud,

Je vous contacte au sujet de...

Activité :
Besoin / objectif :
Contexte :
Délais éventuels :`}
                  className="w-full resize-none rounded-[28px] border border-[#9DB3EE] bg-white/55 px-6 py-6 text-sm leading-7 text-ink outline-none transition duration-200 placeholder:text-slate focus:border-[#2563EB] focus:bg-white focus:ring-4 focus:ring-[#2563EB]/10 sm:px-7 sm:py-7 sm:text-base sm:leading-8"
                />
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.28)] transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-[#1D4ED8] sm:px-7"
                >
                  Envoyer votre message
                </button>
              </div>
            </form>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-slate">
              Je réponds personnellement aux demandes liées à un projet, une collaboration
              ou une réflexion autour d’un dispositif numérique.
            </p>

            <div className="mt-8 border-t border-[#D8E2FF] pt-6 text-sm leading-7 text-slate">
              <span className="font-medium text-ink">Contact direct :</span>{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors duration-200 hover:text-ink"
              >
                {contactDetails.email}
              </a>{' '}
              <span className="text-[#9DB3EE]">·</span>{' '}
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                className="transition-colors duration-200 hover:text-ink"
              >
                {contactDetails.phone}
              </a>
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}
