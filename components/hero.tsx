import { SmartImage } from '@/components/smart-image';
import { ButtonLink, Surface } from '@/components/ui';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div>
          <span className="section-eyebrow">Concepteur de systèmes numériques</span>

         <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
  Développez votre activité avec des dispositifs digitaux qui attirent, engagent et transforment vos visiteurs en clients.
</h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate sm:text-lg lg:text-xl">
  Je conçois des parcours digitaux sur mesure, pensés pour structurer votre présence en ligne et faciliter la prise de contact.
</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact">Me parler de votre projet</ButtonLink>

            <ButtonLink href="/diagnostics-automatisations" variant="secondary">
              Voir comment je travaille
            </ButtonLink>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate/80">
            Diagnostics interactifs • Parcours utilisateurs • Automatisation intelligente
          </p>

          <dl className="mt-10 grid gap-4 sm:grid-cols-3">
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

       <Surface className="relative overflow-hidden rounded-[32px] p-5 sm:p-6">
  {/* halo chaud */}
  <div className="absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[#e8e2d8]/70 blur-3xl" />

  {/* fond légèrement chaud */}
  <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-[#faf7f2] to-[#f3eee6] shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
    
    {/* image */}
    <div className="relative aspect-[4/5]">
      <SmartImage
        src="/arnaud-crestey-photo.png"
        alt="Portrait d’Arnaud Crestey"
        priority
        sizes="(min-width: 1024px) 42vw, 100vw"
      />
    </div>

    {/* légende */}
    <div className="border-t border-line/70 bg-white/90 p-6 backdrop-blur-sm sm:p-7">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
        Arnaud Crestey
      </p>
      <p className="mt-3 text-lg font-semibold leading-8 text-ink sm:text-xl">
        Architecture digitale, diagnostics interactifs et dispositifs conçus pour rendre une offre plus claire, plus crédible et plus engageante.
      </p>
    </div>
  </div>
</Surface>
      </div>
    </section>
  );
}
