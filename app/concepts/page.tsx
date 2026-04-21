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
    'Des points d’entrée conçus pour clarifier une activité, la rendre viable, la structurer puis générer des demandes qualifiées.',
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
        title="Structurer une activité, la rendre viable, puis générer des demandes qualifiées"
        description="Trois niveaux d’entrée pour accompagner chaque étape : clarifier une activité au début, structurer une offre déjà implantée, puis activer des demandes concrètes avec des dispositifs conçus pour engager."
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
            title="Des points d’entrée conçus pour accompagner trois niveaux de maturité"
            description="Commencer par vérifier la viabilité d’une activité, clarifier ensuite sa structure, puis activer des dispositifs capables d’attirer et qualifier des demandes."
          />

          <div className="mt-8">
            <Surface className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                Le premier point d’entrée s’adresse aux personnes qui n’ont pas
                encore réellement structuré leur activité ou qui en sont au début.
                Les suivants concernent davantage des activités déjà implantées,
                qui cherchent à devenir plus lisibles, plus cohérentes et plus
                capables d’ouvrir naturellement vers une demande.
              </p>
            </Surface>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                Ces points d’entrée peuvent être utilisés comme étapes
                successives ou comme portes d’entrée distinctes selon le niveau
                de clarté, la maturité de l’activité et le type de besoin.
              </p>
            </Surface>
          </div>
        </div>
      </section>

      <section id="concepts-grid" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow={<EyebrowLive />}
            title="Des points d’entrée conçus pour attirer, qualifier et engager des clients"
            description="D’autres dispositifs, mini-sites et démonstrateurs déjà conçus pour explorer différentes situations, usages et manières de faire émerger des demandes."
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
