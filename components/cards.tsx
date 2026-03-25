import Link from 'next/link';

import { DeviceIcon } from '@/components/icons';
import { SmartImage } from '@/components/smart-image';
import { Surface } from '@/components/ui';
import type {
  DeviceExample,
  ProjectCard,
  ReserveConcept,
  UniverseCard,
} from '@/data/site';

export function UniverseCardView({ item }: { item: UniverseCard }) {
  return (
    <Surface className="group relative overflow-hidden rounded-[30px] border border-[#d9def8] bg-[#f7f8fe] p-8 sm:p-10">
      <div className={`absolute inset-0 bg-gradient-to-br ${item.accent}`} />

      <div className="relative flex h-full flex-col">
        <span className="section-eyebrow w-fit bg-white/70">{item.audience}</span>

        <h3 className="mt-6 text-2xl font-semibold text-ink">{item.title}</h3>

        <p className="mt-4 max-w-md text-base leading-7 text-slate">
          {item.description}
        </p>

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


export function ProjectShowcaseCard({ project }: { project: ProjectCard }) {
  return (
    <Link href={project.href} className="block h-full">
      <Surface className="group h-full overflow-hidden rounded-[30px] border border-[#d9def8] bg-white p-0 shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition-all duration-300 ease-premium hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_24px_60px_rgba(59,99,243,0.10)]">
        <div className="relative h-[220px] overflow-hidden rounded-t-[28px] border-b border-[#e7eafb] bg-[#f7f8fe]">
          <SmartImage
            src={project.image}
            alt={`Miniature du projet ${project.title}`}
            fallbackTitle={`Miniature à ajouter : ${project.title}`}
            fallbackLabel={`Ajoutez une image dans public${project.image} pour remplacer ce visuel.`}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="transition duration-500 ease-premium group-hover:scale-[1.04]"
          />

          <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
            Test rapide
          </div>
        </div>

        <div className="flex h-[300px] flex-col p-6 sm:p-7">
          <span className="inline-flex w-fit rounded-full border border-[#d9def8] bg-[#f8f9ff] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
            {project.title}
          </span>

          <h3 className="mt-4 text-[22px] font-semibold leading-tight text-ink transition-colors duration-300 group-hover:text-primary">
            {project.hook}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-slate">
            {project.description}
          </p>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.12em] text-[#7d89a6]">
            {project.proof}
          </p>

          <div className="mt-auto pt-6">
            <span className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-primary/90">
              {project.cta}
              <span
                aria-hidden="true"
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </Surface>
    </Link>
  );
}
export function ReserveConceptCard({ concept }: { concept: ReserveConcept }) {
  return (
    <Surface className="h-full rounded-[30px] border border-[#d9def8] bg-[#f7f8fe] p-7">
      <span className="inline-flex rounded-full border border-secondary/14 bg-secondary/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-secondary">
        Concept en réserve
      </span>

      <h3 className="mt-5 text-xl font-semibold text-ink">{concept.title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate">{concept.description}</p>
    </Surface>
  );
}
