'use client';

import { useState } from 'react';
import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

type ContactType =
  | 'point-entree'
  | 'refonte-site'
  | 'automatisation'
  | 'clarification'
  | 'autre';

const messageTemplates: {
  label: string;
  type: ContactType;
  content: string;
}[] = [
  {
    label: 'Créer un point d’entrée',
    type: 'point-entree',
    content: `Bonjour Arnaud,

Je souhaite vous parler de la création d’un point d’entrée pour mon activité.

Mon activité :
Mon besoin :
Le contexte actuel :
L’objectif recherché :
Mes délais éventuels :`,
  },
  {
    label: 'Refondre mon site',
    type: 'refonte-site',
    content: `Bonjour Arnaud,

Je souhaite vous parler d’une refonte ou amélioration de mon site.

Mon activité :
Mon site actuel :
Ce que je souhaite améliorer :
Le contexte :
Mes délais éventuels :`,
  },
  {
    label: 'Automatiser un parcours',
    type: 'automatisation',
    content: `Bonjour Arnaud,

Je souhaite vous parler d’une automatisation pour mon activité.

Mon activité :
Le parcours ou la tâche à automatiser :
Le problème actuel :
Le résultat attendu :
Mes délais éventuels :`,
  },
  {
    label: 'Clarifier une idée',
    type: 'clarification',
    content: `Bonjour Arnaud,

Je souhaite vous parler d’une idée ou d’un projet à clarifier.

Mon activité :
Mon idée :
L’état actuel du projet :
Ce que je cherche à construire :
Mes délais éventuels :`,
  },
];

export default function ContactPage() {
  const [message, setMessage] = useState('');
  const [selectedType, setSelectedType] = useState<ContactType>('autre');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const placeholderMessage = `Bonjour Arnaud,

Je souhaite vous parler de...

Mon activité :
Mon besoin :
Le contexte :
Mes délais éventuels :`;

  const handleSelectTemplate = (content: string, type: ContactType) => {
    setMessage(content);
    setSelectedType(type);
    setStatus('idle');
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
    if (status !== 'idle') setStatus('idle');
  };

  const handleSendEmail = async () => {
    if (!message.trim()) {
      setStatus('error');
      return;
    }

    try {
      setIsSending(true);
      setStatus('idle');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          type: selectedType,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur envoi');
      }

      setStatus('success');
      setMessage('');
      setSelectedType('autre');
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  const isDisabled = isSending || !message.trim();

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

            <div className="mt-10 rounded-[28px] border border-[#d7e2ff] bg-white/45 p-4 sm:p-5">
              <p className="text-sm font-medium text-ink">
                Vous pouvez partir d’un modèle de message :
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                {messageTemplates.map((template) => (
                  <button
                    key={template.label}
                    type="button"
                    onClick={() => handleSelectTemplate(template.content, template.type)}
                    className="inline-flex items-center rounded-full border border-[#c7d6ff] bg-white/80 px-4 py-2 text-sm font-medium text-[#2d4ea1] transition duration-200 hover:border-[#9db4ee] hover:bg-white hover:text-[#1d4ed8]"
                  >
                    {template.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <div className="mb-3 flex items-center justify-between gap-4">
                <label htmlFor="project-message" className="text-sm font-medium text-ink">
                  Votre message
                </label>
                <span className="text-xs text-slate">
                  Quelques lignes suffisent pour expliquer votre besoin
                </span>
              </div>

              <textarea
                id="project-message"
                value={message}
                onChange={(e) => handleMessageChange(e.target.value)}
                rows={10}
                placeholder={placeholderMessage}
                className="w-full resize-none rounded-[28px] border border-[#9db4ee] bg-white/78 px-5 py-5 text-sm leading-7 text-ink outline-none transition duration-200 placeholder:text-slate/70 focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 sm:px-7 sm:py-7 sm:text-base sm:leading-8"
              />
            </div>

            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={handleSendEmail}
                disabled={isDisabled}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(37,99,235,0.26)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-60 sm:px-7"
              >
                {isSending ? 'Envoi en cours...' : 'Envoyer votre message'}
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-5 flex justify-center">
                <div className="rounded-full border border-[#cfe0ff] bg-[#f4f8ff] px-5 py-2 text-sm text-[#2563eb]">
                  Votre message a bien été envoyé.
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-5 flex justify-center">
                <div className="rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm text-red-600">
                  Merci de saisir un message ou de réessayer dans un instant.
                </div>
              </div>
            )}

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
