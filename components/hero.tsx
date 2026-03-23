import { SmartImage } from '@/components/smart-image';
import { ButtonLink, Surface } from '@/components/ui';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div>
          <span className="section-eyebrow">Concepteur de systèmes numériques</span>

          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            Votre expertise a de la valeur. Encore faut-il savoir la rendre claire, lisible et convaincante.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
            Je conçois des systèmes numériques qui transforment une offre floue en expérience claire, engageante et crédible.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Me parler de votre projet</ButtonLink>

            <ButtonLink href="/diagnostics-automatisations" variant="secondary">
              Voir comment je travaille
            </ButtonLink>
          </div>

          <p className="mt-4 text-sm text-slate/80">
            +25 dispositifs conçus • Diagnostics interactifs • Automatisation intelligente
          </p>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ['Clarté', 'Une offre plus lisible'],
              ['Structure', 'Un parcours plus cohérent'],
              ['Conversion', 'Une expérience plus engageante'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[24px] border border-line/90 bg-white px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                  {label}
                </dt>
                <dd className="mt-3 text-sm font-medium leading-6 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Surface className="relative overflow-hidden rounded-[32px] p-4 sm:p-5">
          <div className="absolute -top-10 left-10 right-10 h-28 rounded-full bg-secondary/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white to-mist">
            <div className="relative aspect-[4/5]">
              <SmartImage
                src="/arnaud-crestey-photo.png"
                alt="Portrait d’Arnaud Crestey"
                fallbackTitle="Photo principale à ajouter"
                fallbackLabel="Ajoutez votre portrait dans public/arnaud-crestey-photo.png pour afficher votre photo ici."
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <div className="border-t border-line/80 bg-white/85 p-6 backdrop-blur-sm sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">
                Arnaud Crestey
              </p>
              <p className="mt-3 text-xl font-semibold leading-8 text-ink">
                Architecture digitale, diagnostics interactifs et dispositifs conçus pour rendre une offre plus claire, plus crédible et plus engageante.
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}
