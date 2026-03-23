import { SmartImage } from '@/components/smart-image';
import { ButtonLink, Surface } from '@/components/ui';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <span className="section-eyebrow">Concepteur de systèmes numériques</span>

          <h1 className="mt-6 max-w-3xl text-balance text-5xl font-semibold leading-[1.02] sm:text-6xl lg:text-7xl">
            Je transforme votre expertise en système numérique clair, structuré et convaincant.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate sm:text-xl">
            J’aide en priorité les coachs, thérapeutes, formateurs et indépendants à passer d’une offre floue ou dispersée à un dispositif concret, lisible et engageant.
          </p>

          <p className="mt-4 max-w-2xl text-base leading-8 text-slate sm:text-lg">
            Diagnostics interactifs, mini-sites, parcours utilisateurs, automatisations et expériences digitales : je conçois des systèmes utiles pour mieux présenter une offre, mieux capter l’attention et mieux convertir.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/contact">Me parler de votre projet</ButtonLink>
            <ButtonLink href="/diagnostics-automatisations" variant="secondary">
              Voir mes réalisations
            </ButtonLink>
          </div>

          <dl className="mt-12 grid gap-5 sm:grid-cols-3">
            {[
              ['Clarté', 'Rendre une offre plus lisible et plus compréhensible'],
              ['Structure', 'Transformer une expertise en parcours concret'],
              ['Conversion', 'Créer des dispositifs plus engageants et crédibles'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-3xl border border-line/90 bg-white/65 p-5 backdrop-blur-sm">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-slate">{label}</dt>
                <dd className="mt-3 text-sm font-medium leading-6 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Surface className="relative overflow-hidden p-4 sm:p-5">
          <div className="absolute inset-x-8 top-0 h-24 rounded-full bg-secondary/18 blur-3xl" />
          <div className="relative overflow-hidden rounded-[26px] border border-white/70 bg-gradient-to-br from-white to-mist">
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
            <div className="border-t border-line/80 bg-white/80 p-6 backdrop-blur-sm sm:p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate">Arnaud Crestey</p>
              <p className="mt-3 text-xl font-semibold text-ink">
                Architecture digitale, diagnostics interactifs et dispositifs numériques pensés pour rendre une expertise plus claire, plus crédible et plus engageante.
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}
