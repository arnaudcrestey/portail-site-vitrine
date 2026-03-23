import { DeviceCard } from '@/components/cards';
import { HomeHero } from '@/components/hero';
import { ButtonLink, SectionHeading, Surface } from '@/components/ui';
import { deviceExamples } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-spacing pt-2">
        <div className="container-layout">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Constat</span>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Une expertise forte… mais difficile à comprendre, à expliquer ou à valoriser.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate">
              Beaucoup de coachs, thérapeutes, formateurs ou indépendants ont une vraie valeur, mais leur offre reste
              encore floue, dispersée ou mal structurée. Résultat : les visiteurs comprennent mal, n’accrochent pas
              vraiment et passent à côté de l’essentiel.
            </p>

            <p className="mt-4 text-lg leading-8 text-slate">
              Mon travail consiste à transformer cette expertise en système numérique clair, lisible et capable
              d’engager.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing pt-4">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Expertise"
            title="Des dispositifs pensés pour transformer une expertise en expérience claire et engageante"
            description="Je conçois des systèmes qui permettent à un visiteur de comprendre rapidement votre valeur, de s’impliquer et de passer naturellement à l’étape suivante."
          />
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Exemples concrets"
            title="Des dispositifs concrets qui transforment une expertise en expérience engageante"
            description="Chaque dispositif est pensé pour capter l’attention, structurer la réflexion et créer une suite logique vers la prise de contact."
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
                  Votre offre est utile… mais encore trop floue ou difficile à expliquer ?
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
                  Je vous aide à la transformer en dispositif numérique clair, structuré et capable de réellement
                  engager vos futurs clients.
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
