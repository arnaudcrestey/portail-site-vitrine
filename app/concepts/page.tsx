import { ProjectShowcaseCard, ReserveConceptCard } from '@/components/cards';
import { PageHero } from '@/components/page-hero';
import { SectionHeading, Surface } from '@/components/ui';
import { conceptProjects, featuredLabProject, reserveConcepts } from '@/data/site';

export const metadata = {
  title: 'Laboratoire de concepts',
  description:
    'Un catalogue vivant de points d’entrée intelligents, démonstrateurs de savoir-faire, mini-sites et dispositifs digitaux premium.',
};

export default function ConceptsPage() {
  const sectorProjects = [featuredLabProject];

  return (
    <>
      <PageHero
        eyebrow="Laboratoire"
        title="Des points d’entrée conçus pour transformer une expertise en demandes qualifiées"
        description="Conçus pour les professionnels de l’accompagnement, du conseil et du droit, ces points d’entrée permettent de capter des situations réelles, d’apporter une première lecture utile et d’ouvrir vers une prise de contact qualifiée."
        primaryCta={{ href: '#concepts-grid', label: 'Découvrir les concepts' }}
        secondaryCta={{ href: '/contact', label: 'Me parler d’un projet digital' }}
      />

      <section id="concepts-grid" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="En ligne"
            title="Déjà imaginés et mis en ligne"
           />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {conceptProjects.map((project) => (
              <ProjectShowcaseCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Déclinaisons métier"
            title="Une adaptation concrète à un métier"
            description="Ces points d’entrée peuvent être adaptés à un métier, à ses contraintes et aux situations qu’il rencontre au quotidien."
          />

          <div className="mt-12 max-w-sm">
            {sectorProjects.map((project) => (
              <ProjectShowcaseCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Réserve créative"
            title="Autres concepts en cours de développement"
            />

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reserveConcepts.map((concept) => (
              <ReserveConceptCard key={concept.title} concept={concept} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-spacing pt-4">
        <div className="container-layout">
          <Surface className="relative overflow-hidden px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-hero-radial opacity-90" />
            <div className="relative max-w-3xl">
              <span className="section-eyebrow">Projet digital</span>
              <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
                Vous avez une activité, une audience ou une idée à faire émerger ?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate">
                Je conçois des points d’entrée adaptés à votre activité pour capter
                l’attention et générer des demandes qualifiées.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Parler de votre projet
              </a>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
