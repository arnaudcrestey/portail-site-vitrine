import { DeviceCard } from '@/components/cards';
import { HomeHero } from '@/components/hero';
import { ButtonLink, SectionHeading, Surface } from '@/components/ui';
import { deviceExamples } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Expertise"
            title="Des systèmes numériques conçus pour clarifier, structurer et transformer"
            description="Je conçois des dispositifs utiles pour rendre une offre plus lisible, plus crédible et plus engageante."
          />
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Exemples concrets"
            title="Des dispositifs conçus comme preuves de savoir-faire"
            description="Mes projets ne sont pas des univers séparés. Ils montrent ce que je sais concevoir pour des clients et des activités fondées sur l’expertise, la relation et la transformation."
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
                <span className="section-eyebrow">Contact</span>
                <h2 className="mt-5 text-balance text-3xl font-semibold sm:text-4xl lg:text-5xl">
                  Vous avez un projet digital à clarifier ou à concevoir ?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
                  J’accompagne en priorité les coachs, thérapeutes, formateurs et indépendants qui veulent transformer leur expertise en dispositif numérique plus clair, plus structuré et plus convaincant.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start lg:justify-end">
                <ButtonLink href="/contact">Me parler de votre projet</ButtonLink>
                <ButtonLink href="/realisations" variant="secondary">
                  Voir mes réalisations
                </ButtonLink>
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
