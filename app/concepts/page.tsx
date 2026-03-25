import { ProjectShowcaseCard, ReserveConceptCard } from '@/components/cards';
import { PageHero } from '@/components/page-hero';
import { SectionHeading, Surface } from '@/components/ui';
import { conceptProjects, reserveConcepts } from '@/data/site';

export const metadata = {
  title: 'Laboratoire de concepts',
  description:
    'Un catalogue vivant de pièges à trafic intelligents, démonstrateurs de savoir-faire, mini-sites et dispositifs digitaux premium.',
};

export default function ConceptsPage() {
  return (
    <>
      <PageHero
        eyebrow="Laboratoire"
        title="Des points d’entrée conçus pour transformer une expertise en clients"
        description="Un catalogue vivant de points d'entrée. Chaque activité peut avoir le ou les siens : voici une sélection de concepts déjà lancés, ainsi que d’autres idées prêtes à être transformées en expériences à fort impact."
        primaryCta={{ href: '#concepts-grid', label: 'Découvrir les concepts' }}
        secondaryCta={{ href: '/contact', label: 'Me parler d’un projet digital' }}
      />

      <section id="concepts-grid" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="En ligne"
            title="Déjà imaginés et mis en ligne"
            description="Des points d’entrée déjà en ligne, conçus pour capter l’attention et générer des demandes"
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
            eyebrow="Réserve créative"
            title="Autres concepts dans le laboratoire"
           />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {reserveConcepts.map((concept) => (
              <ReserveConceptCard key={concept.title} concept={concept} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <Surface className="px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            <SectionHeading
  eyebrow="Positionnement"
  title="Un point d’entrée n’est pas un simple test"
  description="C’est un dispositif conçu pour capter l’attention, créer un engagement immédiat et ouvrir vers une prise de contact. Bien structuré, il devient un levier central d’acquisition."
/>
          </Surface>
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
                Je peux imaginer un piège à trafic adapté à votre univers, à votre promesse et à votre manière de convertir.
              </p>
              <a
                href="/contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-ink/92"
              >
                Me parler d’un projet digital
              </a>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
