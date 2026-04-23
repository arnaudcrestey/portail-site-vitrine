'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

type ContactType =
  | 'point-entree'
  | 'structurer-activite'
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

Je souhaite créer un point d’entrée pour mon activité.

Mon activité :
Mon rôle / statut (coach, thérapeute, indépendant, entreprise...) :
Mon besoin :
L’objectif recherché :
Contexte ou éléments utiles :`,
  },
  {
    label: 'Clarifier mon positionnement',
    type: 'clarification',
    content: `Bonjour Arnaud,

Je souhaite clarifier mon positionnement et mieux structurer mon offre.

Mon activité :
Mon rôle / statut :
Ma situation actuelle :
Ce que je souhaite améliorer :
Contexte ou éléments utiles :`,
  },
  {
    label: 'Automatiser un parcours',
    type: 'automatisation',
    content: `Bonjour Arnaud,

Je souhaite automatiser une partie de mon activité ou de mon parcours client.

Mon activité :
Mon rôle / statut :
Le processus à automatiser :
Le résultat attendu :
Contexte ou éléments utiles :`,
  },
  {
    label: 'Structurer mon activité',
    type: 'structurer-activite',
    content: `Bonjour Arnaud,

Je souhaite structurer mon activité.

Mon activité :
Mon rôle / statut :
Ma situation actuelle :
Ce que je souhaite clarifier ou structurer :
Contexte ou éléments utiles :`,
  },
];

export default function ContactPage() {
  const router = useRouter();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [selectedType, setSelectedType] = useState<ContactType>('autre');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  const placeholderMessage = `Bonjour Arnaud,

Je souhaite vous parler de mon projet...

Vous pouvez préciser votre activité, votre besoin, le contexte et votre délai éventuel.`;

  const handleSelectTemplate = (content: string, type: ContactType) => {
    setMessage(content);
    setSelectedType(type);
    setStatus('idle');
    setErrorMessage('');
    setIsExpanded(true);
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);

    if (status !== 'idle') {
      setStatus('idle');
      setErrorMessage('');
    }

    if (value.trim().length > 0 && !isExpanded) {
      setIsExpanded(true);
    }

    if (value.trim().length === 0) {
      setSelectedType('autre');
    }
  };

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  };

  const handleSendEmail = async () => {
    if (!fullName.trim()) {
      setStatus('error');
      setErrorMessage('Merci de renseigner votre nom et prénom.');
      return;
    }

    if (!email.trim() || !isValidEmail(email)) {
      setStatus('error');
      setErrorMessage('Merci de renseigner une adresse email valide.');
      return;
    }

    if (!message.trim()) {
      setStatus('error');
      setErrorMessage('Merci de saisir un message avant l’envoi.');
      setIsExpanded(true);
      return;
    }

    try {
      setIsSending(true);
      setStatus('idle');
      setErrorMessage('');

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: fullName.trim(),
          email: email.trim(),
          message: message.trim(),
          type: selectedType,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(data?.error || 'Erreur envoi');
      }

      router.push('/contact/confirmation');
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage("Impossible d’envoyer votre message pour le moment. Merci de réessayer dans un instant.");
    } finally {
      setIsSending(false);
    }
  };

  const isDisabled =
    isSending || !fullName.trim() || !email.trim() || !message.trim();

  return (
    <section className="section-spacing">
      <div className="container-layout">
        <Surface className="relative overflow-hidden rounded-[32px] px-5 py-7 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-hero-radial opacity-90" />

          <div className="relative mx-auto max-w-5xl">
            <div className="mx-auto max-w-[860px]">
              <span className="inline-flex rounded-full border border-[#c8d6ff] bg-white/55 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3b82f6]">
                Contact
              </span>

              <h1 className="mt-5 max-w-4xl text-[2.45rem] font-semibold tracking-[-0.06em] text-ink sm:mt-6 sm:text-5xl lg:text-6xl lg:leading-[1.02]">
                Parlons de votre projet
              </h1>

              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate sm:mt-5 sm:text-lg sm:leading-8">
                Décrivez simplement votre besoin, votre idée ou le dispositif que vous souhaitez
                concevoir.
              </p>

              <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-full-name"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Nom et prénom
                  </label>
                  <input
                    id="contact-full-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (status !== 'idle') {
                        setStatus('idle');
                        setErrorMessage('');
                      }
                    }}
                    placeholder="Votre nom et prénom"
                    className="w-full rounded-[18px] border border-[#cddcff] bg-white/90 px-4 py-3 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-[#97a3bf] focus:border-[#9ebcff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-ink"
                  >
                    Votre email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status !== 'idle') {
                        setStatus('idle');
                        setErrorMessage('');
                      }
                    }}
                    placeholder="vous@exemple.com"
                    className="w-full rounded-[18px] border border-[#cddcff] bg-white/90 px-4 py-3 text-[15px] text-ink outline-none transition-all duration-200 placeholder:text-[#97a3bf] focus:border-[#9ebcff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10"
                  />
                </div>
              </div>

              <div className="mt-8 rounded-[24px] border border-[#dbe4ff] bg-white/55 p-4 shadow-[0_14px_40px_rgba(72,102,170,0.04)] sm:mt-10 sm:rounded-[30px] sm:p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-sm font-medium text-ink">
                    Vous pouvez utiliser un modèle de message
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-2.5 sm:mt-5 sm:flex sm:flex-wrap sm:gap-3">
                  {messageTemplates.map((template) => {
                    const isActive =
                      selectedType === template.type && message === template.content;

                    return (
                      <button
                        key={template.label}
                        type="button"
                        onClick={() => handleSelectTemplate(template.content, template.type)}
                        className={`inline-flex min-h-[46px] items-center justify-center rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${
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
                <div className="mb-3 flex flex-col gap-1">
                  <label htmlFor="project-message" className="text-sm font-medium text-ink">
                    Votre message
                  </label>
                </div>

                <div className="rounded-[24px] border border-[#a9c0fb] bg-white/88 p-3 shadow-[0_16px_42px_rgba(70,97,161,0.05)] sm:rounded-[30px] sm:p-4">
                  <textarea
                    id="project-message"
                    value={message}
                    onChange={(e) => handleMessageChange(e.target.value)}
                    onFocus={() => setIsExpanded(true)}
                    rows={isExpanded ? 7 : 4}
                    placeholder={placeholderMessage}
                    className={`scrollbar-none w-full resize-none overflow-auto rounded-[16px] border border-transparent bg-[#fcfdff] px-4 py-3 text-[14px] leading-6 text-ink outline-none transition-all duration-300 placeholder:text-[#97a3bf] focus:border-[#d8e5ff] focus:bg-white focus:ring-4 focus:ring-[#2563eb]/10 sm:rounded-[22px] sm:px-5 sm:py-4 sm:text-[15px] sm:leading-7 lg:rounded-[24px] lg:px-6 lg:py-4 lg:text-base lg:leading-7 ${
                      isExpanded
                        ? 'min-h-[180px] sm:min-h-[210px] lg:min-h-[220px]'
                        : 'min-h-[120px] sm:min-h-[145px] lg:min-h-[150px]'
                    }`}
                  />
                </div>
              </div>

              <div className="mt-7 flex justify-center sm:mt-8">
                <button
                  type="button"
                  onClick={handleSendEmail}
                  disabled={isDisabled}
                  className="inline-flex min-h-12 w-full max-w-[280px] items-center justify-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSending ? 'Envoi en cours...' : 'Envoyer votre message'}
                </button>
              </div>

              {status === 'error' && (
                <div className="mt-4 flex justify-center">
                  <div className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-center text-sm text-red-600 sm:px-5">
                    {errorMessage}
                  </div>
                </div>
              )}

              <div className="mt-8 border-t border-[#d8e2ff] pt-6 text-center text-sm leading-7 text-slate sm:mt-10">
                <span className="font-medium text-ink">Contact direct :</span>{' '}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="break-words transition-colors duration-200 hover:text-ink"
                >
                  {contactDetails.email}
                </a>                
              </div>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}
