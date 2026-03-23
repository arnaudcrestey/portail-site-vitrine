import { SmartImage } from '@/components/smart-image';
import { ButtonLink, Surface } from '@/components/ui';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative">
          <div className="absolute -left-8 top-8 hidden h-24 w-24 rounded-full bg-secondary/12 blur-3xl lg:block" />
          <span className="section-eyebrow">Concepteur de systèmes numériques</span>
          <h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Des systèmes numériques utiles, clairs, élégants et orientés conversion.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate sm:text-xl">
            Je conçois des dispositifs digitaux pour les coachs, thérapeutes, formateurs, experts et indépendants qui veulent transformer leur expertise en expérience crédible, fluide et engageante.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate sm:text-lg">
            Mini-sites premium, diagnostics interactifs, parcours d’entrée, automatisations utiles et systèmes de conversion : chaque élément est pensé pour clarifier, orienter et faire avancer la relation.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Me parler d’un projet</ButtonLink>
            <ButtonLink href="/#exemples" variant="secondary">
              Voir des exemples concrets
            </ButtonLink>
          </div>
          <dl className="mt-14 grid gap-4 sm:grid-cols-3">
            {[
              ['01', 'Cible prioritaire', 'Métiers de l’accompagnement, de la pédagogie et de la transformation'],
              ['02', 'Ce que je conçois', 'Des systèmes clairs, utiles et premium, pensés pour l’entrée en relation et la conversion'],
              ['03', 'Ce que cela change', 'Une activité plus lisible, plus crédible et plus efficace dès le premier contact'],
            ].map(([index, label, value]) => (
              <div
                key={label}
                className="group rounded-[26px] border border-white/80 bg-white/82 p-5 shadow-[0_14px_36px_rgba(52,74,124,0.07)] backdrop-blur-xl transition duration-300 ease-premium hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(52,74,124,0.09)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate">{label}</dt>
                  <span className="rounded-full border border-primary/10 bg-primary/[0.06] px-2.5 py-1 text-[10px] font-semibold tracking-[0.2em] text-primary">
                    {index}
                  </span>
                </div>
                <div className="mt-4 h-px w-full bg-gradient-to-r from-primary/16 via-secondary/10 to-transparent" />
                <dd className="mt-4 text-[15px] font-medium leading-6 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Surface className="relative overflow-hidden p-3 sm:p-4">
          <div className="absolute inset-x-10 top-4 h-24 rounded-full bg-secondary/18 blur-3xl" />
          <div className="absolute -right-10 bottom-12 h-28 w-28 rounded-full bg-primary/12 blur-3xl" />
          <div className="relative rounded-[30px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(243,247,255,0.92))] p-3 shadow-[0_28px_80px_rgba(53,76,131,0.10)] sm:p-4">
            <div className="absolute inset-x-6 top-0 h-14 rounded-full bg-white/75 blur-2xl" />
            <div className="relative overflow-hidden rounded-[26px] border border-white/85 bg-gradient-to-br from-[#FDFEFF] via-[#F6F8FF] to-[#EEF3FF]">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/70 to-transparent" />
              <div className="pointer-events-none absolute inset-y-10 right-0 w-20 bg-gradient-to-l from-primary/10 to-transparent" />
              <div className="relative aspect-[4/5]">
                <SmartImage
                  src="/arnaud-crestey-photo.png"
                  alt="Portrait d’Arnaud Crestey"
                  fallbackTitle="Photo principale à ajouter"
                  fallbackLabel="Ajoutez votre portrait dans public/arnaud-crestey-photo.png pour afficher votre photo ici."
                  priority
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="scale-[1.015] object-cover object-center"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/78 via-white/22 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/85 bg-white/84 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink shadow-[0_10px_20px_rgba(77,95,143,0.10)] backdrop-blur-md">
                Positionnement premium
              </div>
            </div>
            <div className="relative mt-3 rounded-[24px] border border-white/75 bg-white/82 p-6 shadow-[0_12px_30px_rgba(61,82,128,0.08)] backdrop-blur-sm sm:mt-4 sm:p-7">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Arnaud Crestey</p>
                  <p className="mt-3 max-w-md text-xl font-semibold leading-8 text-ink">
                    Conception de dispositifs digitaux sobres, utiles et structurants pour des activités fondées sur l’expertise.
                  </p>
                </div>
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:flex">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
                    <path d="M7 16.5 16.5 7" />
                    <path d="M9 7h7v7" />
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate">
                Le site devient ici la vitrine d’un métier : concevoir des systèmes numériques capables de rendre une activité plus claire, plus crédible et mieux orientée vers la conversion.
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}
