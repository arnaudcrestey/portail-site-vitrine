import { PageHero } from '@/components/page-hero';
import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'Contact',
  description:
    'Page de contact pour présenter un projet, un besoin ou une demande autour d’un dispositif numérique.',
};

export default function ContactPage() {
  const mailSubject = encodeURIComponent('Demande de contact depuis arnaudcrestey.com');
  const mailBody = encodeURIComponent(
    `Bonjour Arnaud,

Je vous contacte au sujet de...

Activité :
Besoin / objectif :
Contexte :
Délais éventuels :

Bien cordialement,`
  );

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Décrivez simplement votre besoin, votre idée ou le dispositif que vous souhaitez concevoir."
      />

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <div className="mx-auto max-w-4xl">
            <Surface className="rounded-[32px] p-6 sm:p-8 lg:p-10">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  Parlons de votre projet
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate sm:text-base sm:leading-8">
                  Quelques lignes suffisent pour me permettre de comprendre votre demande :
                  votre activité, ce que vous souhaitez créer ou améliorer, l’objectif recherché,
                  ainsi que le contexte utile pour avancer dans la bonne direction.
                </p>
              </div>

              <div className="mt-8 rounded-[28px] border border-line bg-white/70 p-5 shadow-[0_1px_0_rgba(15,23,42,0.02)] sm:p-6 lg:p-7">
                <div className="min-h-[220px] text-sm leading-7 text-slate sm:text-base sm:leading-8">
                  <p>Bonjour Arnaud,</p>
                  <p className="mt-5">Je vous contacte au sujet de...</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href={`mailto:${contactDetails.email}?subject=${mailSubject}&body=${mailBody}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-brand/92 sm:px-7"
                >
                  Envoyer votre message
                </a>

                <p className="text-sm leading-7 text-slate">
                  Je réponds personnellement aux demandes liées à un projet, une collaboration
                  ou une réflexion autour d’un dispositif numérique.
                </p>
              </div>

              <div className="mt-8 border-t border-line/80 pt-6 text-sm leading-7 text-slate">
                <span className="font-medium text-ink">Contact direct :</span>{' '}
                <a
                  href={`mailto:${contactDetails.email}`}
                  className="transition-colors duration-200 hover:text-ink"
                >
                  {contactDetails.email}
                </a>{' '}
                <span className="text-line">·</span>{' '}
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
    </>
  );
}
