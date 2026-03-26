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

               <div className="mt-8 rounded-[26px] border border-[#dbe4ff] bg-white/52 p-4 shadow-[0_14px_40px_rgba(72,102,170,0.04)] sm:mt-10 sm:rounded-[30px] sm:p-6">
  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
    <p className="text-sm font-medium text-ink">
      Vous pouvez partir d’un modèle de message
    </p>
   
  </div>

  <div className="mt-4 flex flex-wrap gap-2.5 sm:mt-5 sm:gap-3">
    {messageTemplates.map((template) => {
      const isActive = selectedType === template.type && message === template.content;

      return (
        <button
          key={template.label}
          type="button"
          onClick={() => handleSelectTemplate(template.content, template.type)}
          className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
            isActive
              ? 'border-[#7ea2ff] bg-[#edf4ff] text-[#1d4ed8] shadow-[0_8px_20px_rgba(37,99,235,0.10)]'
              : 'border-[#c9d7ff] bg-white/88 text-[#2d4ea1] hover:border-[#9db4ee] hover:bg-white hover:text-[#1d4ed8]'
          }`}
        >
          {template.label}
        </button>
      );
    })}
  </div>
</div>

<div className="mt-8 sm:mt-9">
  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
    <label htmlFor="project-details" className="text-sm font-medium text-ink">
      Votre message
    </label>
    <span className="text-xs leading-6 text-slate">
      Quelques éléments suffisent pour comprendre votre besoin
    </span>
  </div>

  <div className="rounded-[26px] border border-[#a9c0fb] bg-white/86 p-3 shadow-[0_16px_42px_rgba(70,97,161,0.05)] sm:rounded-[30px] sm:p-4">
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      <input
        type="text"
        placeholder="Activité"
        className="h-12 rounded-[18px] border border-[#dbe5ff] bg-[#fcfdff] px-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-[#97a3bf] focus:border-[#bfd3ff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/8"
      />
      <input
        type="text"
        placeholder="Besoin"
        className="h-12 rounded-[18px] border border-[#dbe5ff] bg-[#fcfdff] px-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-[#97a3bf] focus:border-[#bfd3ff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/8"
      />
      <input
        type="text"
        placeholder="Contexte"
        className="h-12 rounded-[18px] border border-[#dbe5ff] bg-[#fcfdff] px-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-[#97a3bf] focus:border-[#bfd3ff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/8"
      />
      <input
        type="text"
        placeholder="Délai"
        className="h-12 rounded-[18px] border border-[#dbe5ff] bg-[#fcfdff] px-4 text-sm text-ink outline-none transition-all duration-300 placeholder:text-[#97a3bf] focus:border-[#bfd3ff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/8"
      />
    </div>

    <div className="mt-3">
      <textarea
        id="project-details"
        value={message}
        onChange={(e) => handleMessageChange(e.target.value)}
        onFocus={() => setIsExpanded(true)}
        rows={isExpanded ? 8 : 5}
        placeholder={`Bonjour Arnaud,\n\nJe souhaite vous parler de mon projet...`}
        className={`scrollbar-none w-full resize-none overflow-auto rounded-[20px] border border-[#dbe5ff] bg-[#fcfdff] px-5 py-4 text-[15px] leading-8 text-ink outline-none transition-all duration-300 placeholder:text-[#97a3bf] focus:border-[#bfd3ff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/8 sm:rounded-[24px] sm:px-6 sm:py-5 sm:text-base ${
          isExpanded ? 'min-h-[220px] sm:min-h-[250px]' : 'min-h-[150px] sm:min-h-[170px]'
        }`}
      />
    </div>
  </div>
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
