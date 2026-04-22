import { AnimatedMetricNumber } from '@/components/animated-metric-number';
import { SmartImage } from '@/components/smart-image';
import { ButtonLink, Surface } from '@/components/ui';

type HomeHeroProps = {
  metrics: {
    visitors30d: number;
    leadsGenerated: number;
    activeEntryPoints: number;
  };
};

export function HomeHero({ metrics }: HomeHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div>
          <span className="inline-flex max-w-full whitespace-nowrap rounded-full border border-[#cfd7ff] bg-[#eef2ff] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#4f67ff] sm:px-4 sm:text-xs">
            Concepteur de systèmes numériques
          </span>

          <h1 className="mt-6 max-w-[13ch] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-ink sm:text-5xl lg:text-[5.3rem] lg:leading-[0.96]">
  Structurer une activité
  et concevoir ce qui permet réellement de générer des demandes.
</h1>

<p className="mt-6 max-w-xl text-[15px] leading-7 text-slate sm:max-w-2xl sm:text-lg sm:leading-8 lg:text-[1.15rem] lg:leading-8">
  J’aide les professionnels dont l’activité repose sur une expertise
  à la clarifier, la structurer dans la durée,
  puis à concevoir les dispositifs digitaux adaptés
  pour attirer et engager les bons clients.
</p>
          <div className="mt-4 flex justify-center lg:justify-start">
  <dl className="grid w-full max-w-[230px] grid-cols-3 overflow-hidden rounded-[12px] border border-[#e2e6fb] bg-white/70 text-center shadow-[0_4px_10px_rgba(15,23,42,0.02)] sm:max-w-[420px] lg:max-w-[460px]">
    {[
      [metrics.visitors30d, 'Visiteurs', '30 jours'],
      [metrics.leadsGenerated, 'Contacts', 'générées'],
      [metrics.activeEntryPoints, 'Dispositifs', 'en ligne'],
    ].map(([value, label, detail], index) => (
      <div
        key={label}
        className={`px-2 py-2 ${
          index < 2 ? 'border-r border-[#eef1fd]' : ''
        }`}
      >
        <dt className="text-[0.95rem] font-semibold leading-none text-[#22345f] sm:text-[1.2rem]">
          <AnimatedMetricNumber value={value as number} />
        </dt>

        <dd className="mt-1 leading-tight">
          <span className="block text-[7px] uppercase tracking-[0.12em] text-[#6b7aa6] sm:text-[9px]">
            {label}
          </span>
          <span className="block text-[8px] text-slate/70 sm:text-[10px]">
            {detail}
          </span>
        </dd>
      </div>
    ))}
  </dl>
</div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact">Parler de votre projet</ButtonLink>

            <ButtonLink href="/systeme" variant="secondary">
              Comprendre le système
            </ButtonLink>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate/80 sm:text-[14px] sm:leading-6 lg:text-[14px]">
            <span className="block text-center sm:hidden">
              <span className="inline-block text-center">
                <span className="block">Diagnostics interactifs · Parcours utilisateurs</span>
                <span className="block">Systèmes automatisés</span>
              </span>
            </span>

            <span className="hidden sm:block max-w-2xl">
              Diagnostics interactifs • Parcours utilisateurs • Systèmes automatisés
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:gap-6">
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

          <dl className="grid gap-4 sm:grid-cols-3">
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
      </div>
    </section>
  );
}
