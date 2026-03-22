import { PageHero } from '@/components/page-hero';
import { contactDetails } from '@/data/site';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'Contact',
  description:
    'Coordonnées et base de page contact pour échanger autour de Cabinet Astrae ou d’un projet de diagnostics et automatisations.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Un besoin, une idée, un projet à clarifier ?"
        description="Vous pouvez utiliser cette page comme base pour un futur formulaire, une prise de rendez-vous ou des liens vers vos outils de contact. Les coordonnées ci-dessous sont facilement modifiables depuis les données du projet."
      />
      <section className="section-spacing pt-4">
        <div className="container-layout grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Coordonnées</h2>
            <ul className="mt-6 space-y-4 text-base text-slate">
              <li>
                <span className="font-semibold text-ink">Email :</span> {contactDetails.email}
              </li>
              <li>
                <span className="font-semibold text-ink">Téléphone :</span> {contactDetails.phone}
              </li>
              <li>
                <span className="font-semibold text-ink">Localisation :</span> {contactDetails.location}
              </li>
            </ul>
          </Surface>
          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Base de message</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Bonjour Arnaud, je vous contacte au sujet de…
            </p>
            <div className="mt-6 rounded-[24px] border border-dashed border-line bg-white/60 p-6 text-sm leading-7 text-slate">
              Vous pouvez remplacer ce bloc par un formulaire, un lien Calendly, un embed ou un module de prise de rendez-vous selon votre préférence.
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
