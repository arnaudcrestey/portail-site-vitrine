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
  title: 'Laboratoire de concepts',
  description:
    'Des points d’entrée conçus pour transformer une expertise en demandes qualifiées, en clarifiant une situation et en ouvrant naturellement vers un premier échange.',
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
  return (
    <>
      <PageHero
        eyebrow="Laboratoire"
        title="Des points d’entrée conçus pour transformer une expertise en demandes qualifiées"
        description="Pensés pour les professionnels de l’accompagnement, du conseil et du droit, ces dispositifs aident à clarifier une situation, structurer une activité et ouvrir plus naturellement vers un premier échange."
        primaryCta={{
          href: '#entry-points',
          label: 'Découvrir les points d’entrée',
        }}
        secondaryCta={{
          href: '/contact',
          label: 'Me parler d’un projet digital',
        }}
      />

      <section id="entry-points" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Points d’entrée"
            title="Trois points d’entrée conçus pour structurer et clarifier une activité"
            description="Trois angles complémentaires pour mieux comprendre ce qui se joue aujourd’hui, identifier ce qui freine et ouvrir une suite plus lisible."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {strategicEntryPoints.map((project) => (
              <div key={project.slug} className="relative">
                <StatusDot variant="active" />
                <ProjectShowcaseCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Surface className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                Ces trois points d’entrée peuvent être utilisés indépendamment ou
                combinés selon la situation, le niveau de clarté recherché et le
                type de blocage rencontré.
              </p>
            </Surface>
          </div>
        </div>
      </section>

      <section id="concepts-grid" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow={<EyebrowLive />}
            title="Des dispositifs conçus pour susciter des demandes qualifiées"
            description="D’autres points d’entrée, mini-sites et démonstrateurs déjà conçus pour explorer différentes situations, usages et manières de faire émerger des demandes."
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
            title="Une adaptation concrète à un métier"
            description="Ces points d’entrée peuvent être adaptés à un métier, à ses contraintes, à ses publics et aux situations qu’il rencontre le plus souvent."
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
            title="Concepts en cours de développement"
            description="Des pistes déjà structurées pour prolonger le laboratoire, tester d’autres angles d’entrée et enrichir progressivement le système."
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
                Vous avez une expertise à transformer en dispositif concret ?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                Point d’entrée, mini-site, logique de parcours, structure de
                conversion : chaque dispositif est pensé pour rendre votre
                activité plus claire, plus lisible et plus engageante.
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
