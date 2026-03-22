import { DeviceCard, UniverseCardView } from '@/components/cards';
import { HomeHero } from '@/components/hero';
import { ButtonLink, SectionHeading, Surface } from '@/components/ui';
import { deviceExamples, homeUniverses } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Double univers"
            title="Deux univers, une même ambition"
            description="Concevoir des systèmes utiles qui clarifient et transforment."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {homeUniverses.map((item) => (
              <UniverseCardView key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Dispositifs"
            title="Exemples de dispositifs conçus"
            description="Des systèmes pensés pour clarifier, engager et créer une suite."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {deviceExamples.map((item) => (
              <DeviceCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <Surface className="relative overflow-hidden px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="absolute inset-0 bg-hero-radial opacity-90" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span className="section-eyebrow">Projet</span>
                <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Un projet en tête ? Parlons-en.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
                  Je vous accompagne pour créer des dispositifs digitaux utiles, cohérents et durables, avec une attention particulière portée à la clarté, à l’expérience et à la crédibilité.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start lg:justify-end">
                <ButtonLink href="/cabinet-astrae">Contacter Cabinet Astrae</ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Me parler d’un projet digital
                </ButtonLink>
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
