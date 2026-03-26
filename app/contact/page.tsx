import { PageHero } from '@/components/page-hero';
import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'Contact',
  description:
    'Page de contact pour présenter un projet, un besoin ou une demande autour d’un dispositif numérique.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Décrivez simplement votre besoin, votre idée ou le dispositif que vous souhaitez concevoir."
      />

      <section className="section-spacing pt-4">
        <div className="container-layout max-w-4xl">
          <Surface className="p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-ink">Votre message</h2>

            <p className="mt-4 text-base leading-8 text-slate">
              Quelques lignes suffisent pour me permettre de comprendre votre demande :
              votre activité, ce que vous souhaitez créer ou améliorer, l’objectif recherché,
              ainsi que le contexte utile pour avancer dans la bonne direction.
            </p>

            <div className="mt-8 rounded-[24px] border border-dashed border-line bg-white/60 p-6 sm:p-8">
              <p className="text-base leading-8 text-slate">
                Bonjour Arnaud,
                <br />
                <br />
                Je vous contacte au sujet de…
              </p>
            </div>

            <p className="mt-6 text-sm leading-7 text-slate">
              Je réponds personnellement aux demandes liées à un projet, une collaboration
              ou une réflexion autour d’un dispositif numérique.
            </p>

            <div className="mt-6 text-sm leading-7 text-slate">
              <span className="font-medium text-ink">Contact direct :</span>{' '}
              <a
                href={`mailto:${contactDetails.email}`}
                className="transition-colors duration-200 hover:text-ink"
              >
                {contactDetails.email}
              </a>{' '}
              · {contactDetails.phone}
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
