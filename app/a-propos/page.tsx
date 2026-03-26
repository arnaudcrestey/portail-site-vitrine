import { PageHero } from '@/components/page-hero';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'À propos',
  description:
    'Présentation d’Arnaud Crestey, de son parcours, de son positionnement et de sa manière de concevoir des systèmes numériques utiles, lisibles et premium.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Je conçois des systèmes numériques utiles, clairs et crédibles, pensés pour servir l’humain."
        description="Mon travail consiste à transformer une expertise, une intention ou une situation complexe en dispositif digital lisible, structuré et professionnel. J’avance à la croisée de la compréhension humaine, de l’expérience utilisateur et de la construction web moderne."
        primaryCta={{ href: '/contact', label: 'Parler de votre projet' }}
      />

      <section className="section-spacing pt-4">
        <div className="container-layout grid gap-6 lg:grid-cols-2">
          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Positionnement</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Je conçois des points d’entrée, des mini-sites, des parcours digitaux et des interfaces capables
              de rendre une offre plus visible, plus compréhensible et plus engageante. Mon approche cherche
              toujours le bon équilibre entre clarté, impact et qualité perçue.
            </p>
          </Surface>

          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Méthode</h2>
            <p className="mt-4 text-base leading-8 text-slate">
              Je pars du réel : votre activité, vos enjeux, vos utilisateurs, vos blocages. Ensuite, je structure,
              je simplifie et je construis un dispositif cohérent, fluide et durable, avec une attention forte
              portée au parcours, à la lisibilité et à la crédibilité de l’ensemble.
            </p>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <Surface className="p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-ink">Parcours et approche</h2>
              <p className="mt-4 text-base leading-8 text-slate">
                Mon parcours mêle engagement humain, sens de l’écoute, rigueur, autonomie et construction
                progressive d’une expertise numérique tournée vers l’utilité réelle. Avec le temps, j’ai développé
                une manière de travailler qui ne sépare pas la technique, la compréhension des personnes et
                la qualité de présentation.
              </p>
              <p className="mt-4 text-base leading-8 text-slate">
                Je ne cherche pas à produire du digital pour faire “moderne”. Je cherche à créer des systèmes
                qui aident réellement à mieux présenter une activité, à mieux orienter un prospect, à mieux
                qualifier une demande ou à rendre un service plus accessible.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout grid gap-6 lg:grid-cols-3">
          <Surface className="p-8">
            <h3 className="text-xl font-semibold text-ink">Ce que je conçois</h3>
            <p className="mt-4 text-base leading-8 text-slate">
              Sites, mini-sites, diagnostics interactifs, points d’entrée, parcours de conversion, interfaces
              de présentation et systèmes digitaux orientés utilité.
            </p>
          </Surface>

          <Surface className="p-8">
            <h3 className="text-xl font-semibold text-ink">Ce que je cherche</h3>
            <p className="mt-4 text-base leading-8 text-slate">
              Rendre une expertise plus lisible, plus visible et plus crédible, tout en fluidifiant
              l’expérience utilisateur et en renforçant la qualité perçue.
            </p>
          </Surface>

          <Surface className="p-8">
            <h3 className="text-xl font-semibold text-ink">Ce qui compte pour moi</h3>
            <p className="mt-4 text-base leading-8 text-slate">
              La clarté, la cohérence, la fiabilité, la pédagogie et la durabilité. Un bon système ne doit pas
              seulement fonctionner : il doit être compréhensible, rassurant et exploitable dans le temps.
            </p>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <Surface className="p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-ink">Pour qui</h2>
              <p className="mt-4 text-base leading-8 text-slate">
                J’interviens notamment pour des professionnels qui ont une expertise réelle mais qui ont besoin
                d’un cadre digital plus fort pour la rendre visible, attractive et actionnable : accompagnement,
                conseil, formation, relation d’aide, activités à forte dimension humaine ou métiers nécessitant
                une présentation plus claire de leur valeur.
              </p>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
