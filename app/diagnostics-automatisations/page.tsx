import { PageHero } from '@/components/page-hero';
import { SectionHeading, Surface } from '@/components/ui';

export const metadata = {
  title: 'Diagnostics & Automatisations',
  description:
    'Présentation premium des mini-sites, diagnostics interactifs, tunnels d’entrée et automatisations conçus pour les experts indépendants.',
};

export default function DiagnosticsAutomatisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions professionnelles"
        title="Transformer une expertise en dispositif digital utile, crédible et engageant."
        description="Une base claire pour présenter les mini-sites, diagnostics interactifs, parcours d’entrée et automatisations conçus pour les coachs, thérapeutes, formateurs et indépendants qui veulent mieux qualifier, engager et convertir."
        primaryCta={{ href: '/concepts', label: 'Voir le laboratoire' }}
        secondaryCta={{ href: '/contact', label: 'Parler de mon projet' }}
      />
      <section className="section-spacing pt-4">
        <div className="container-layout grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            ['Mini-sites premium', 'Des pages d’entrée nettes, crédibles et structurées pour valoriser une promesse.'],
            ['Diagnostics interactifs', 'Des expériences qui donnent envie d’aller plus loin tout en qualifiant la relation.'],
            ['Tunnels d’entrée', 'Des parcours qui orientent progressivement sans pression inutile.'],
            ['Automatisations', 'Des séquences sobres et utiles pour maintenir l’attention et créer une suite logique.'],
          ].map(([title, description]) => (
            <Surface key={title} className="p-7">
              <h2 className="text-lg font-semibold text-ink">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate">{description}</p>
            </Surface>
          ))}
        </div>
      </section>
      <section className="section-spacing pt-0">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Page prête à enrichir"
            title="Une base solide pour détailler la méthode, les livrables et les cas d’usage"
            description="Cette page est conçue pour accueillir ensuite des blocs sur la stratégie, le processus de conception, les exemples, les résultats observés et les modalités de collaboration."
          />
        </div>
      </section>
    </>
  );
}
