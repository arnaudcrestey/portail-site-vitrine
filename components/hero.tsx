import { SmartImage } from '@/components/smart-image';
import { ButtonLink, Surface } from '@/components/ui';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div>
          <span className="section-eyebrow">Concepteur de systèmes numériques</span>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Développez votre activité avec des dispositifs digitaux qui attirent, engagent et
            transforment vos visiteurs en clients.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate sm:text-lg lg:text-xl">
            Je conçois des dispositifs digitaux pour attirer, engager et transformer vos visiteurs en clients.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact">Me parler de votre projet</ButtonLink>

            <ButtonLink href="/diagnostics-automatisations" variant="secondary">
              Découvrir ma méthode
            </ButtonLink>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate/80">
            Diagnostics interactifs • Parcours utilisateurs • Automatisation intelligente
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ['Clarté', 'Votre offre comprise en quelques secondes'],
              ['Structure', 'Un parcours qui guide naturellement vos visiteurs'],
              ['Conversion', 'Plus de prises de contact, plus de clients'],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-[24px] border border-[#d9def8] bg-[#f7f8fe] px-5 py-5 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate">
                  {label}
                </dt>
                <dd className="mt-3 text-sm font-medium leading-6 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Surface className="relative overflow-hidden rounded-[32px] border border-[#d9def8] bg-[#f7f8fe] p-4 shadow-[0_12px_40px_rgba(15,23,42,0.05)] sm:p-5 lg:p-6">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e7eafb] bg-[#f7f8fe]">
            <div className="relative aspect-[4/5] bg-[#f3f4fb]">
              <SmartImage
                src="/arnaud-crestey-photo.png"
                alt="Portrait d’Arnaud Crestey"
                fallbackTitle="Photo principale à ajouter"
                fallbackLabel="Ajoutez votre portrait dans public/arnaud-crestey-photo.png pour afficher votre photo ici."
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>

            <div className="border-t border-[#e7eafb] bg-[#f7f8fe] px-5 py-5 sm:px-6 sm:py-6">
              <p className="text-[15px] font-medium tracking-[0.04em] text-ink sm:text-[16px]">
                Arnaud Crestey
              </p>
            </div>
          </div>
        </Surface>
      </div>
    </section>
  );
}
