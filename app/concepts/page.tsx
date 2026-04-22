import { ProjectShowcaseCard, ReserveConceptCard } from '@/components/cards';
import { PageHero } from '@/components/page-hero';
import { SectionHeading, Surface } from '@/components/ui';
import {
  conceptProjects,
  featuredLabProject,
  reserveConcepts,
  strategicEntryPoints,
} from '@/data/site';

export const metadata = {
  title: 'Structuration d’activité et dispositifs digitaux',
  description:
    'Clarifier une activité, structurer ce qui bloque, puis concevoir des points d’entrée capables d’attirer des demandes qualifiées.',
};

function StatusDot({ variant = 'active' }: { variant?: 'active' | 'concept' }) {
  const isActive = variant === 'active';

  return (
    <div className="pointer-events-none absolute right-4 top-4 z-20">
      <span className="relative flex h-3 w-3">
        <span
          className={`absolute inline-flex h-full w-full rounded-full ${
            isActive
              ? 'animate-ping bg-emerald-400/75'
              : 'animate-ping bg-slate-400/60'
          }`}
        />
        <span
          className={`relative inline-flex h-3 w-3 rounded-full ring-4 ${
            isActive
              ? 'bg-emerald-500 ring-emerald-300/25'
              : 'bg-slate-400 ring-slate-300/20'
          }`}
        />
      </span>
    </div>
  );
}

function EyebrowLive() {
  return (
    <span className="inline-flex items-center gap-1.5">
      EN LIGNE
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
    </span>
  );
}

export default function ConceptsPage() {
  const viabilityProject =
    strategicEntryPoints.find((project) => project.slug === 'viabilite') ?? null;

  const structuringProjects = strategicEntryPoints.filter(
    (project) => project.slug !== 'viabilite'
  );

  return (
    <>
      <PageHero
        eyebrow="Structuration d’activité"
        title="Clarifier une activité, la structurer, puis concevoir les dispositifs capables de générer des demandes"
        description="Cette page distingue trois niveaux : faire un premier point sur une activité encore naissante, comprendre ce qui freine une activité déjà en place, puis concevoir des points d’entrée capables d’attirer, qualifier et engager les bons clients."
        primaryCta={{
          href: '#concepts-grid',
          label: 'Découvrir les points d’entrée',
        }}
        secondaryCta={{
          href: '/contact',
          label: 'Me parler d’un projet digital',
        }}
      />

      {viabilityProject ? (
        <section id="viabilite" className="section-spacing pt-4">
          <div className="container-layout">
            <div className="mx-auto max-w-4xl text-center">
              <SectionHeading
                eyebrow={<span className="block text-center">Premier niveau</span>}
                title="Faire un premier point sur une activité en cours de création"
                description="Avant de parler visibilité, acquisition ou conversion, il faut parfois vérifier si l’activité repose déjà sur une base suffisamment claire, cohérente et viable."
              />
            </div>

            <div className="mx-auto mt-12 max-w-md">
              <div className="relative">
                <StatusDot variant="active" />
                <ProjectShowcaseCard project={viabilityProject} />
              </div>
            </div>

            <div className="mt-8">
              <Surface className="mx-auto max-w-2xl px-5 py-5 text-center sm:px-6 sm:py-6">
                <p className="text-sm leading-7 text-muted-foreground sm:text-[15px]">
                  Ce premier travail aide à vérifier si l’activité peut réellement
                  être construite, sur quoi elle repose déjà, et ce qu’il faudrait
                  encore clarifier avant d’aller plus loin.
                </p>
              </Surface>
            </div>
          </div>
        </section>
      ) : null}

      <section id="structuration" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Deuxième niveau"
            title="Comprendre ce qui freine une activité déjà en place"
            description="Pour les professionnels déjà en activité qui cherchent à rendre leur offre plus lisible, leur positionnement plus clair et leur fonctionnement plus structuré."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {structuringProjects.map((project) => (
              <div key={project.slug} className="relative">
                <StatusDot variant="active" />
                <ProjectShowcaseCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Surface className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                Une fois la base posée, ces dispositifs d’analyse permettent
                d’identifier plus finement ce qui freine la lisibilité de
                l’activité, la cohérence du positionnement ou la capacité à
                ouvrir un premier échange dans de bonnes conditions.
              </p>
            </Surface>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
  <div className="container-layout">
    <div className="mx-auto max-w-2xl text-center">
      
      <span className="inline-flex items-center rounded-full border border-[#cfd7ff] bg-[#eef2ff] px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-[#4f67ff]">
        Niveau suivant
      </span>

      <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
        À ce stade, il ne s’agit plus d’analyser ou d’ajuster.
        L’enjeu devient de rendre l’activité visible et de créer les conditions
        pour attirer des demandes concrètes.
      </p>

    </div>
  </div>
</section>

      <section id="concepts-grid" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow={<EyebrowLive />}
            title="Des points d’entrée conçus pour attirer, qualifier et engager des clients"
            description="Une fois l’activité clarifiée et structurée, certains points d’entrée peuvent être conçus pour attirer les bonnes personnes, qualifier les situations et transformer les visites en demandes concrètes."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {conceptProjects.map((project) => {
              const slug = project.slug.toLowerCase();

              const isHighlighted =
                slug.includes('love') ||
                slug.includes('personality') ||
                slug.includes('intuition');

              return (
                <div key={project.slug} className="relative">
                  {isHighlighted ? <StatusDot variant="active" /> : null}
                  <ProjectShowcaseCard project={project} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Déclinaisons métier"
            title="Des dispositifs adaptés à une réalité métier précise"
            description="Ces points d’entrée peuvent ensuite être ajustés à un métier, à ses contraintes, à ses publics et aux situations qu’il rencontre le plus souvent."
          />

          <div className="mt-12 max-w-sm">
            <ProjectShowcaseCard project={featuredLabProject} />
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Réserve créative"
            title="Pistes complémentaires en cours de développement"
            description="Des concepts déjà structurés pour prolonger le système, explorer d’autres angles d’entrée et enrichir progressivement les possibilités."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reserveConcepts.map((concept) => (
              <div key={concept.title} className="relative">
                <StatusDot variant="concept" />
                <ReserveConceptCard concept={concept} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <Surface className="relative overflow-hidden px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-hero-radial opacity-90" />

            <div className="relative mx-auto max-w-4xl text-center">
              <span className="section-eyebrow">Projet digital</span>

              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                Vous avez une activité à clarifier, structurer ou transformer en
                dispositif concret ?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Cadrage, clarification, structuration, point d’entrée, mini-site,
                logique de parcours ou système plus complet : chaque intervention
                vise à rendre votre activité plus lisible, plus cohérente et plus
                capable de générer des demandes pertinentes.
              </p>

              <div className="mt-8 flex justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Parler de votre projet
                </a>
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
