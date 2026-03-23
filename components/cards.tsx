import Link from 'next/link';

import { DeviceIcon } from '@/components/icons';
import { SmartImage } from '@/components/smart-image';
import { Surface } from '@/components/ui';
import type {
  AudienceCard,
  BenefitCard,
  HomeProofCard,
  ProjectCard,
  ReserveConcept,
  SolutionCard,
} from '@/data/site';

export function AudienceCardView({ item }: { item: AudienceCard }) {
  return (
    <Surface className="relative h-full overflow-hidden p-7 sm:p-8">
      <div className="absolute inset-x-8 top-0 h-16 rounded-full bg-white/75 blur-2xl" />
      <div className="relative">
        <span className="section-eyebrow w-fit bg-white/70">{item.eyebrow}</span>
        <h3 className="mt-6 text-[1.55rem] font-semibold tracking-[-0.03em] text-ink">{item.title}</h3>
        <p className="mt-4 text-[15px] leading-7 text-slate">{item.description}</p>
      </div>
    </Surface>
  );
}

export function SolutionCardView({ item }: { item: SolutionCard }) {
  return (
    <Surface className="h-full p-7 sm:p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-[18px] bg-primary/8 ring-1 ring-primary/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
        <DeviceIcon type={item.icon} />
      </div>
      <h3 className="mt-6 text-[1.35rem] font-semibold tracking-[-0.025em] text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
    </Surface>
  );
}

export function BenefitCardView({ item }: { item: BenefitCard }) {
  return (
    <Surface className="h-full p-7 sm:p-8">
      <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-primary/55 to-secondary/40" />
      <h3 className="mt-6 text-[1.35rem] font-semibold tracking-[-0.025em] text-ink">{item.title}</h3>
      <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
    </Surface>
  );
}

export function HomeProofCardView({ item }: { item: HomeProofCard }) {
  return (
    <Surface className="group h-full overflow-hidden p-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-[28px]">
        <SmartImage
          src={item.image}
          alt={`Aperçu du système ${item.title}`}
          fallbackTitle={`Visuel à ajouter : ${item.title}`}
          fallbackLabel={`Ajoutez une image dans public${item.image} pour illustrer cet exemple.`}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="transition duration-500 ease-premium group-hover:scale-[1.02]"
        />
        <div className="absolute left-5 top-5 rounded-full border border-white/80 bg-white/82 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-ink backdrop-blur">
          {item.number}
        </div>
      </div>
      <div className="p-6 sm:p-7">
        <span className="inline-flex rounded-full border border-primary/10 bg-primary/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          {item.tag}
        </span>
        <h3 className="mt-4 text-[1.45rem] font-semibold tracking-[-0.03em] text-ink">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate">{item.description}</p>
        <Link
          href={item.href}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition duration-300 ease-premium group-hover:text-primary"
        >
          Voir l’exemple
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </Surface>
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
