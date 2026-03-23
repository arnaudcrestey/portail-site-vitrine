import Link from 'next/link';

import { DeviceIcon } from '@/components/icons';
import { SmartImage } from '@/components/smart-image';
import { Surface } from '@/components/ui';
import type { DeviceExample, ProjectCard, ReserveConcept, UniverseCard } from '@/data/site';

export function DeviceCard({ item }: { item: DeviceExample }) {
  return (
    <Link href="/diagnostics-automatisations" className="block h-full">
      <Surface className="group flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
        <div className="h-24 border-b border-slate-100 bg-[#f8f9ff] px-7 pt-7 sm:h-28 sm:px-8 sm:pt-8">
          <div className="flex h-16 w-16 items-center justify-center rounded-[20px] border border-primary/10 bg-[#eef2ff] text-primary shadow-[0_8px_20px_rgba(59,99,243,0.06)]">
            <DeviceIcon type={item.icon} />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-7 py-7 sm:px-8 sm:py-8">
          <span className="inline-flex w-fit rounded-full border border-primary/12 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            Système
          </span>

          <h3 className="mt-5 text-[22px] font-semibold leading-tight text-ink sm:text-[24px]">
            {item.title}
          </h3>

          <p className="mt-5 text-[15px] leading-8 text-slate">
            {item.description}
          </p>

          <div className="mt-auto pt-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink">
              Découvrir
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </Surface>
    </Link>
  );
}

export function DeviceCard({ item }: { item: DeviceExample }) {
  return (
    <Link href="/diagnostics-automatisations" className="block h-full">
      <article className="group flex h-full flex-col rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 ease-premium hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:p-7">
        <div className="flex h-14 w-14 items-center justify-center rounded-[18px] border border-primary/10 bg-[#f5f7ff] text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
          <DeviceIcon type={item.icon} />
        </div>

        <span className="mt-5 inline-flex w-fit rounded-full border border-primary/12 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          Système
        </span>

        <h3 className="mt-5 text-[26px] font-semibold leading-tight text-ink transition duration-300 group-hover:text-primary sm:text-[28px]">
          {item.title}
        </h3>

        <p className="mt-4 text-[15px] leading-8 text-slate">
          {item.description}
        </p>

        <div className="mt-auto pt-8">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition duration-300 group-hover:text-primary">
            Découvrir
            <span
              aria-hidden="true"
              className="transition duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </span>
        </div>
      </article>
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
