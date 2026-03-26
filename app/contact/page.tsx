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
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-5xl">
          <Surface className="rounded-[32px] border border-white/60 bg-[linear-gradient(180deg,#eef1ff_0%,#edf1fb_100%)] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
            <span className="inline-flex rounded-full border border-brand/20 bg-white/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
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
              <p className="max-w-3xl text-sm leading-7 text-slate sm:text-base sm:leading-8">
                Quelques lignes suffisent pour me permettre de comprendre votre demande :
                votre activité, ce que vous souhaitez créer ou améliorer, l’objectif recherché,
                ainsi que le contexte utile pour avancer dans la bonne direction.
              </p>

              <div className="mt-8 rounded-[28px] border border-line/80 bg-white/45 p-5 sm:p-6 lg:p-7">
                <div className="min-h-[220px] text-sm leading-7 text-slate sm:text-base sm:leading-8">
                  <p>Bonjour Arnaud,</p>
                  <p className="mt-5">Je vous contacte au sujet de...</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href={`mailto:${contactDetails.email}?subject=${mailSubject}&body=${mailBody}`}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(37,99,235,0.22)] transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-brand/92 sm:px-7"
              >
                Envoyer votre message
              </a>
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-7 text-slate">
              Je réponds personnellement aux demandes liées à un projet, une collaboration
              ou une réflexion autour d’un dispositif numérique.
            </p>

            <div className="mt-8 border-t border-brand/30 pt-6 text-sm leading-7 text-slate">
              <span className="font-medium text-ink">Contact direct :</span>{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors duration-200 hover:text-ink"
              >
                {contactDetails.email}
              </a>{' '}
              <span className="text-brand/40">·</span>{' '}
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
