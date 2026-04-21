import Image from 'next/image';
import Link from 'next/link';

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

function normalize(value: string | undefined) {
  return (value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function ViabilityPocketCard() {
  return (
    <div className="relative overflow-hidden rounded-[22px] border border-[#cfd7ff] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition duration-300 ease-out hover:-translate-y-1">
      <StatusDot variant="active" />

      <div className="grid min-h-[420px] grid-cols-1 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col justify-between border-b border-[#d9e1ff] p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <div>
            <div className="inline-flex rounded-full border border-[#d8def7] bg-[#f8faff] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6d7fcc]">
              Point d’entrée initial
            </div>

            <h3 className="mt-4 max-w-[16ch] text-3xl font-semibold leading-[1.02] tracking-[-0.03em] text-[#0f172a] sm:text-[2.15rem]">
              Votre activité peut-elle réellement devenir viable ?
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px]">
              Une lecture structurée pour voir ce qui, dans votre activité,
              repose déjà sur une base réelle, ce qui fragilise encore
              l’ensemble, et ce qu’il faudrait clarifier pour construire
              quelque chose de plus stable, de plus lisible et de plus durable.
            </p>

            <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
              Gratuit • Sans engagement • En quelques minutes
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="https://viabilite.arnaudcrestey.com"
              className="inline-flex items-center justify-center rounded-full bg-[#a57a3b] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#916a31]"
            >
              Commencer la lecture
            </Link>

            <Link
              href="https://viabilite.arnaudcrestey.com"
              className="inline-flex items-center justify-center rounded-full border border-[#ddd6c7] bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:bg-[#faf8f3]"
            >
              Comprendre la démarche
            </Link>
          </div>
        </div>

        <div className="relative min-h-[240px] bg-[#f6f1e8]">
          <Image
            src="/images/projects/viabilite-activite.jpg"
            alt="Point d’entrée viabilité d’activité"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default function ConceptsPage() {
  const btocProjects = conceptProjects.filter((project) => {
    const slug = normalize(project.slug);
    const title = normalize((project as { title?: string }).title);

    return !slug.includes('viabilite') && !title.includes('viabilite');
  });

  return (
    <>
      <PageHero
        eyebrow="Laboratoire"
        title="Structurer une activité, la rendre viable, puis générer des demandes qualifiées"
        description="Trois niveaux d’entrée pour accompagner chaque étape : clarifier une activité au début, structurer une offre déjà implantée, puis activer des demandes concrètes avec des dispositifs conçus pour engager."
        primaryCta={{
          href: '#viabilite',
          label: 'Découvrir les points d’entrée',
        }}
        secondaryCta={{
          href: '/contact',
          label: 'Me parler d’un projet digital',
        }}
      />

      <section id="viabilite" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Point d’entrée initial"
            title="Avant de chercher des clients, une question essentielle : votre activité peut-elle réellement devenir viable ?"
            description="Un premier point d’entrée pensé pour les personnes qui n’ont pas encore structuré leur activité, ou qui sont encore au début. L’objectif : clarifier la base avant de vouloir accélérer le reste."
          />

          <div className="mt-12 max-w-[980px]">
            <ViabilityPocketCard />
          </div>

          <div className="mt-8">
            <Surface className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                Ce premier bloc s’adresse aux personnes qui doivent d’abord
                vérifier si leur activité repose sur une base suffisamment claire,
                crédible et soutenable avant d’essayer d’améliorer leur visibilité
                ou leur acquisition.
              </p>
            </Surface>
          </div>
        </div>
      </section>

      <section id="entry-points" className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="BtoB • Structuration"
            title="Trois points d’entrée conçus pour les activités déjà implantées"
            description="Trois angles complémentaires pour les professionnels déjà en activité, qui cherchent à rendre leur offre plus lisible, leur positionnement plus clair et leur fonctionnement plus structuré."
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
                Une fois la base clarifiée, ces trois points d’entrée permettent
                d’identifier ce qui freine encore la lisibilité de l’activité,
                la cohérence du positionnement ou la capacité à ouvrir un premier
                échange plus naturellement.
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
            description="Des dispositifs BtoC, mini-sites et démonstrateurs pensés pour faire émerger une prise de conscience, susciter l’intérêt et ouvrir plus facilement vers une demande."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {btocProjects.map((project) => {
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

          <div className="mt-8">
            <Surface className="px-5 py-5 sm:px-6 sm:py-6">
              <p className="max-w-3xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                Une fois l’activité clarifiée et mieux structurée, ces dispositifs
                permettent d’ouvrir une logique d’acquisition plus ciblée, plus
                engageante et plus adaptée au sujet traité.
              </p>
            </Surface>
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
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 ease-premium hover:-translate-y-0.5 hover:bg-primary/90"
                >
                  Parler de votre projet
                </Link>
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
