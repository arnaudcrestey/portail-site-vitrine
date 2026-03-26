'use client';

import { useState } from 'react';
import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

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
          <Surface className="rounded-[32px] border border-white/60 bg-[linear-gradient(90deg,#eef1ff_0%,#f8f8fc_48%,#eef2ff_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
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

            <div className="mt-10">
              <label htmlFor="project-message" className="sr-only">
                Votre message
              </label>

              <textarea
                id="project-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={10}
                className="w-full resize-none rounded-[28px] border border-[#9db4ee] bg-white/78 px-5 py-5 text-sm leading-7 text-ink outline-none transition duration-200 placeholder:text-slate focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 sm:px-7 sm:py-7 sm:text-base sm:leading-8"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleSendEmail}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(37,99,235,0.26)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:px-7"
              >
                Envoyer votre message
              </button>
            </div>

            <div className="mt-8 border-t border-[#d8e2ff] pt-6 text-center text-sm leading-7 text-slate">
              <span className="font-medium text-ink">Contact direct :</span>{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="break-words transition-colors duration-200 hover:text-ink"
              >
                {contactDetails.email}
              </a>{' '}
              <span className="hidden text-[#9db4ee] sm:inline">·</span>{' '}
              <a
                href={`tel:${contactDetails.phone.replace(/\s+/g, '')}`}
                className="block transition-colors duration-200 hover:text-ink sm:inline"
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
