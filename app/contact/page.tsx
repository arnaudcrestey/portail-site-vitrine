'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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
  const router = useRouter();

  const [message, setMessage] = useState('');
  const [selectedType, setSelectedType] = useState<ContactType>('autre');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const [isExpanded, setIsExpanded] = useState(false);

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
    setIsExpanded(true);
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
    if (status !== 'idle') setStatus('idle');
    if (value.trim().length > 0 && !isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleSendEmail = async () => {
    if (!message.trim()) {
      setStatus('error');
      setIsExpanded(true);
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

      router.push('/contact/confirmation');
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
          <Surface className="overflow-hidden rounded-[34px] border border-white/60 bg-[linear-gradient(135deg,#eef2ff_0%,#f8f9fe_42%,#edf3ff_100%)] px-6 py-8 shadow-[0_28px_80px_rgba(51,78,140,0.08)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <div className="mx-auto max-w-[860px]">
              <span className="inline-flex rounded-full border border-[#c8d6ff] bg-white/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3b82f6]">
                Contact
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4.2rem] lg:leading-[1.02]">
                Parlons de votre projet
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate sm:text-lg">
                Décrivez simplement votre besoin, votre idée ou le dispositif que vous souhaitez
                concevoir.
              </p>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate/90 sm:text-[15px]">
                Je conçois des points d’entrée et des systèmes numériques adaptés à votre activité
                pour clarifier une offre, structurer un parcours ou générer des demandes qualifiées.
              </p>

              <div className="mt-10 rounded-[30px] border border-[#d9e3ff] bg-white/50 p-5 shadow-[0_16px_40px_rgba(80,110,180,0.05)] backdrop-blur-[2px] sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm font-medium text-ink">
                    Vous pouvez partir d’un modèle de message
                  </p>
                  <p className="text-xs text-slate">
                    Un simple point de départ suffit
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  {messageTemplates.map((template) => {
                    const isActive = selectedType === template.type && message === template.content;

                    return (
                      <button
                        key={template.label}
                        type="button"
                        onClick={() => handleSelectTemplate(template.content, template.type)}
                        className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
                          isActive
                            ? 'border-[#7ea2ff] bg-[#edf4ff] text-[#1d4ed8] shadow-[0_10px_24px_rgba(37,99,235,0.10)]'
                            : 'border-[#c7d6ff] bg-white/85 text-[#2d4ea1] hover:border-[#9db4ee] hover:bg-white hover:text-[#1d4ed8]'
                        }`}
                      >
                        {template.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-9">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <label htmlFor="project-message" className="text-sm font-medium text-ink">
                    Votre message
                  </label>
                  <span className="text-xs text-slate">
                    Quelques lignes suffisent pour comprendre votre besoin
                  </span>
                </div>

                <textarea
                  id="project-message"
                  value={message}
                  onChange={(e) => handleMessageChange(e.target.value)}
                  onFocus={() => setIsExpanded(true)}
                  rows={isExpanded ? 10 : 5}
                  placeholder={placeholderMessage}
                  className={`w-full resize-none overflow-auto rounded-[30px] border border-[#9db4ee] bg-white/82 px-6 py-5 text-[15px] leading-8 text-ink outline-none transition-all duration-300 placeholder:text-slate/70 focus:border-[#2563eb] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 sm:px-7 sm:py-6 sm:text-base ${
                    isExpanded ? 'min-h-[260px]' : 'min-h-[168px]'
                  }`}
                />
              </div>

              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  disabled={isDisabled}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? 'Envoi en cours...' : 'Envoyer votre message'}
                </button>
              </div>

              {status === 'error' && (
                <div className="mt-5 flex justify-center">
                  <div className="rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm text-red-600">
                    Merci de saisir un message ou de réessayer dans un instant.
                  </div>
                </div>
              )}

              <div className="mt-10 border-t border-[#d8e2ff] pt-6 text-center text-sm leading-7 text-slate">
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
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}
