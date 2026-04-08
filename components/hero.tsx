import { SmartImage } from '@/components/smart-image';
import { ButtonLink, Surface } from '@/components/ui';
import { siteMetrics } from '@/lib/site-metrics';

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-layout section-spacing grid items-start gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
        <div>
          <span className="inline-flex max-w-full whitespace-nowrap rounded-full border border-[#cfd7ff] bg-[#eef2ff] px-3 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#4f67ff] sm:px-4 sm:text-xs">
            Concepteur de systèmes numériques
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Développez votre activité avec des dispositifs digitaux qui attirent, engagent et
            transforment vos visiteurs en clients.
          </h1>

          <p className="mt-6 max-w-xl text-[15px] leading-7 text-slate sm:max-w-2xl sm:text-lg sm:leading-8 lg:text-[1.15rem] lg:leading-8">
            J’aide les professionnels de l’accompagnement, du conseil et du secteur juridique à
            rendre leur activité claire, compréhensible et attractive, afin de générer des prises
            de contact qualifiées. Je conçois pour cela des points d’entrée, des parcours
            utilisateurs et des systèmes numériques adaptés à leur activité.
          </p>

          <dl className="mt-6 grid overflow-hidden rounded-[26px] border border-[#d9def8] bg-[linear-gradient(180deg,rgba(247,248,254,0.96)_0%,rgba(243,245,252,0.98)_100%)] shadow-[0_14px_36px_rgba(15,23,42,0.05)] sm:grid-cols-3">
            {[
              [
                siteMetrics.visitors30d.toLocaleString('fr-FR'),
                'Visiteurs',
                'sur les 30 derniers jours',
              ],
              [
                siteMetrics.leadsGenerated.toLocaleString('fr-FR'),
                'Prises de contact',
                'générées',
              ],
              [
                siteMetrics.activeEntryPoints.toLocaleString('fr-FR'),
                'Dispositifs',
                'actuellement en ligne',
              ],
            ].map(([value, label, detail], index) => (
              <div
                key={label}
                className={`px-5 py-5 sm:px-6 sm:py-6 ${
                  index < 2 ? 'border-b border-[#e6eafb] sm:border-b-0 sm:border-r' : ''
                }`}
              >
                <dt className="text-[1.55rem] font-semibold leading-none tracking-tight text-[#20335f] sm:text-[1.7rem]">
                  {value}
                </dt>
                <dd className="mt-2 text-[13px] leading-5 text-slate sm:text-sm sm:leading-6">
                  <span className="block font-medium text-[#31456f]">{label}</span>
                  <span className="block text-slate/80">{detail}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact">Parler de votre projet</ButtonLink>

            <ButtonLink href="/systeme" variant="secondary">
              Comprendre le système
            </ButtonLink>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate/80 sm:text-[15px] sm:leading-7">
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
