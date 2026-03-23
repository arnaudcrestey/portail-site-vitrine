import { DeviceCard } from '@/components/cards';
import { HomeHero } from '@/components/hero';
import { ButtonLink, Surface } from '@/components/ui';
import { deviceExamples } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <div className="rounded-[32px] border border-line bg-white px-6 py-8 shadow-[0_16px_50px_rgba(15,23,42,0.04)] sm:px-8 sm:py-10 lg:px-10">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Constat</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Beaucoup d’experts ont de la valeur, mais pas encore le bon dispositif pour la montrer.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate">
                Leur offre reste floue, dispersée ou trop statique. Le visiteur comprend partiellement, hésite, puis quitte la page sans aller plus loin.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate">
                Mon travail consiste à transformer cette expertise en système numérique plus clair, plus structuré et plus engageant.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-layout">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Expertise</span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Des dispositifs pensés pour clarifier, engager et faire avancer.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate">
              Diagnostics interactifs, mini-sites, parcours utilisateurs, automatisations et systèmes de conversion : chaque dispositif sert une logique claire.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Exemples concrets</span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Des exemples conçus comme preuves de méthode.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate">
              Ces dispositifs montrent comment une expertise peut devenir une expérience plus lisible, plus fluide et plus convaincante.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {deviceExamples.map((item) => (
              <DeviceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container-layout">
          <Surface className="relative overflow-hidden rounded-[32px] px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-hero-radial opacity-90" />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span className="section-eyebrow">Contact</span>

                <h2 className="mt-5 max-w-3xl text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Votre offre mérite mieux qu’une simple présence en ligne.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
                  Je vous aide à en faire un dispositif numérique clair, crédible et réellement engageant.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start lg:justify-end">
                <ButtonLink href="/contact">Me parler de votre projet</ButtonLink>

                <ButtonLink href="/diagnostics-automatisations" variant="secondary">
                  Découvrir mon approche
                </ButtonLink>
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
