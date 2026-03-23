import Link from 'next/link';

import { DeviceIcon } from '@/components/icons';
import { SmartImage } from '@/components/smart-image';
import { Surface } from '@/components/ui';
import type { DeviceExample, ProjectCard, ReserveConcept, UniverseCard } from '@/data/site';

export function UniverseCardView({ item }: { item: UniverseCard }) {
  return (
    <Surface className="group relative overflow-hidden p-8 sm:p-10">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />
      <div className="relative flex h-full flex-col">
        <span className="section-eyebrow w-fit bg-white/70">{item.audience}</span>

        <h3 className="mt-6 text-2xl font-semibold text-ink">{item.title}</h3>

        <p className="mt-4 max-w-md text-base leading-7 text-slate">{item.description}</p>

        <Link
          href={item.href}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition duration-300 ease-premium group-hover:translate-x-1 group-hover:text-primary"
        >
          {item.cta}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Surface>
  );
}

export function DeviceCard({ item }: { item: DeviceExample }) {
  return (
    <Link href="/concepts" className="block h-full">
      <Surface className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[28px] border border-line bg-white p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
        <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 ring-1 ring-primary/10 transition duration-300 group-hover:bg-primary/12 group-hover:ring-primary/20">
            <DeviceIcon type={item.icon} />
          </div>

          <p className="mb-2 mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Dispositif
          </p>

          <h3 className="text-xl font-semibold text-ink transition duration-300 group-hover:text-primary">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
        </div>

        <div className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition duration-300 group-hover:text-primary">
          Découvrir
          <span
            aria-hidden="true"
            className="transition duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </div>
      </Surface>
    </Link>
  );
}

export function ProjectShowcaseCard({ project }: { project: ProjectCard }) {
  return (
    <Surface className="group h-full overflow-hidden p-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
        <SmartImage
          src={project.image}
          alt={`Miniature du projet ${project.title}`}
          fallbackTitle={`Miniature à ajouter : ${project.title}`}
          fallbackLabel={`Ajoutez une image dans public${project.image} pour remplacer ce visuel.`}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="transition duration-500 ease-premium group-hover:scale-[1.02]"
        />

        <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/82 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-ink backdrop-blur">
          {project.number}
        </div>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-ink">{project.title}</h3>

        <p className="mt-3 text-sm leading-7 text-slate">{project.description}</p>

        <Link
          href={project.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition duration-300 ease-premium group-hover:text-primary"
        >
          Voir la landing
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Surface>
  );
}

export function ReserveConceptCard({ concept }: { concept: ReserveConcept }) {
  return (
    <Surface className="h-full p-7">
      <span className="inline-flex rounded-full border border-secondary/14 bg-secondary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
        Concept en réserve
      </span>

      <h3 className="mt-5 text-xl font-semibold text-ink">{concept.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate">{concept.description}</p>
    </Surface>
  );
}
