import { PageHero } from '@/components/page-hero';
import { SectionHeading, Surface } from '@/components/ui';

export const metadata = {
  title: 'Cabinet Astrae',
  description:
    'Base éditoriale pour présenter Cabinet Astrae : diagnostics, analyses, clarification et accompagnement pour les particuliers.',
};

export default function CabinetAstraePage() {
  return (
    <>
      <PageHero
        eyebrow="Cabinet Astrae"
        title="Clarifier une situation, mieux comprendre ce qui se joue, retrouver une orientation."
        description="Cette page pose une base premium et extensible pour présenter l’univers Astrae : une approche sensible, structurée et profondément utile, destinée aux particuliers qui souhaitent mettre de la clarté dans ce qu’ils traversent."
        primaryCta={{ href: '/contact', label: 'Contacter Cabinet Astrae' }}
        secondaryCta={{ href: '/', label: 'Retour à l’accueil' }}
      />
      <section className="section-spacing pt-4">
        <div className="container-layout grid gap-6 lg:grid-cols-3">
          {[
            ['Diagnostics', 'Une lecture claire pour donner du relief à une situation floue ou bloquée.'],
            ['Analyse', 'Une mise en perspective qui aide à comprendre ce qui se joue réellement.'],
            ['Orientation', 'Une suite plus lisible pour décider avec davantage de stabilité et de cohérence.'],
          ].map(([title, description]) => (
            <Surface key={title} className="p-7">
              <h2 className="text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
            </Surface>
          ))}
        </div>
      </section>
      <section className="section-spacing pt-0">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Page prête à enrichir"
            title="Une structure déjà en place pour détailler l’approche, les offres et les modalités d’accompagnement"
            description="Vous pourrez facilement compléter cette page avec des sections dédiées aux diagnostics proposés, au déroulé, à la posture du cabinet, aux questions fréquentes et aux prises de rendez-vous."
          />
        </div>
      </section>
    </>
  );
}
