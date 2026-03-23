import {
  AudienceCardView,
  BenefitCardView,
  HomeProofCardView,
  SolutionCardView,
} from '@/components/cards';
import { HomeHero } from '@/components/hero';
import { ButtonLink, SectionHeading, Surface } from '@/components/ui';
import { audienceCards, benefitCards, homeProofs, solutionCards } from '@/data/site';

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="section-spacing pt-8">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Pour qui je conçois"
            title="Pour les professionnels qui transmettent, accompagnent et font évoluer"
            description="Je conçois en priorité pour les métiers de l’accompagnement, de la pédagogie, de la transformation et de l’expertise — sans me limiter à eux lorsque la problématique demande le même niveau de clarté et de structure."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {audienceCards.map((item) => (
              <AudienceCardView key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-2">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Ce que je conçois"
            title="Des systèmes numériques pensés pour orienter, engager et convertir"
            description="Je ne conçois pas simplement des pages ou des automatisations isolées. Je construis des dispositifs cohérents qui transforment une expertise en parcours lisible, crédible et utile."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutionCards.map((item) => (
              <SolutionCardView key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-2">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Ce que cela permet"
            title="Ce que ces systèmes changent concrètement"
            description="Un bon système numérique ne se contente pas d’être élégant. Il rend une activité plus lisible, améliore la perception de valeur et donne une meilleure structure à la conversion."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {benefitCards.map((item) => (
              <BenefitCardView key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="exemples" className="section-spacing pt-2">
        <div className="container-layout">
          <SectionHeading
            eyebrow="Exemples concrets"
            title="Quelques systèmes conçus en pratique"
            description="Les projets présentés ici ne sont pas le centre du site. Ils servent de démonstration : une manière de montrer comment une expertise, une promesse ou une problématique peut devenir un dispositif digital utile et cohérent."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {homeProofs.map((item) => (
              <HomeProofCardView key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing pt-2">
        <div className="container-layout">
          <Surface className="px-6 py-11 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <SectionHeading
              eyebrow="Approche"
              title="Une approche sobre, stratégique et utile"
              description="Je conçois des systèmes numériques qui cherchent le bon niveau de clarté, de finesse et de structure — sans surcharge, sans surmarketing et sans effets artificiels. L’objectif est de produire des expériences qui inspirent confiance et qui servent réellement la relation."
            />
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-2">
        <div className="container-layout">
          <Surface className="relative overflow-hidden px-6 py-11 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-hero-radial opacity-90" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <div>
                <span className="section-eyebrow">Conversion</span>
                <h2 className="mt-6 max-w-2xl text-balance text-[2rem] font-semibold tracking-[-0.04em] sm:text-[2.45rem] lg:text-[3.1rem]">
                  Vous avez une expertise à structurer ou un projet digital à clarifier ?
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                  Je peux vous aider à concevoir un système numérique cohérent, crédible et orienté conversion, adapté à votre activité, à votre positionnement et à votre manière de travailler.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-start lg:justify-end">
                <ButtonLink href="/contact">Me parler d’un projet</ButtonLink>
                <ButtonLink href="/concepts" variant="secondary">
                  Voir quelques exemples
                </ButtonLink>
              </div>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
