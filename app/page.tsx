import { DeviceCard } from '@/components/cards';
import { HomeHero } from '@/components/hero';
import { ButtonLink, Surface } from '@/components/ui';
import { deviceExamples } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      {/* CONSTAT */}
      <section className="section-spacing pt-4 pb-6">
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-[36px] border border-primary/10 bg-gradient-to-br from-white to-primary/5 px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
            <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl opacity-70" />

            <div className="relative max-w-3xl">
              <span className="section-eyebrow">Constat</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Votre expertise a de la valeur… mais elle n’est pas encore perçue comme telle.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate">
                Une offre floue, dispersée ou trop statique réduit immédiatement l’impact perçu.
                Le visiteur comprend partiellement, hésite, puis quitte la page sans aller plus loin.
              </p>

              <p className="mt-4 text-lg leading-8 text-slate">
                Mon travail consiste à transformer cette expertise en système numérique plus clair,
                plus structuré et plus engageant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="pb-6 pt-2">
        <div className="container-layout">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Expertise</span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Des dispositifs pensés pour clarifier, engager et faire avancer.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate">
              Diagnostics interactifs, mini-sites, parcours utilisateurs, automatisations et systèmes
              de conversion : chaque dispositif sert une logique claire.
            </p>
          </div>
        </div>
      </section>

      {/* EXEMPLES */}
      <section className="pb-8 pt-2">
        <div className="container-layout">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Exemples concrets</span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Des exemples conçus comme preuves de méthode.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate">
              Ces dispositifs montrent comment une expertise peut devenir une expérience plus lisible,
              plus fluide et plus convaincante.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deviceExamples.map((item) => (
              <DeviceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
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
