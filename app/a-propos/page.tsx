import { PageHero } from '@/components/page-hero';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'À propos',
  description:
    'Arnaud Crestey conçoit des systèmes numériques qui rendent une expertise visible, compréhensible et transforment en prises de contact qualifiées.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Je conçois des systèmes numériques qui transforment une expertise en prises de contact qualifiées."
        description="Mon travail consiste à rendre une activité visible, compréhensible et actionnable. Des dispositifs simples, structurés et crédibles, pensés pour capter l’attention juste et déclencher un premier échange."
        primaryCta={{ href: '/contact', label: 'Parler de votre projet' }}
      />

      {/* POSITIONNEMENT + MÉTHODE */}
      <section className="section-spacing pt-6">
        <div className="container-layout grid gap-6 lg:grid-cols-2">
          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Positionnement</h2>

            <p className="mt-4 text-base leading-8 text-slate">
              Je ne conçois pas des sites.
            </p>

            <p className="mt-3 text-base leading-8 text-slate font-medium">
              Je conçois des points d’entrée.
            </p>

            <p className="mt-3 text-base leading-8 text-slate">
              Des dispositifs capables de capter l’attention, poser les bonnes questions
              et transformer une expertise en demande concrète.
            </p>
          </Surface>

          <Surface className="p-8">
            <h2 className="text-2xl font-semibold text-ink">Méthode</h2>

            <p className="mt-4 text-base leading-8 text-slate">
              Je pars du réel : votre activité, vos enjeux, vos utilisateurs.
            </p>

            <p className="mt-3 text-base leading-8 text-slate">
              Ensuite, je structure, je simplifie et je construis un dispositif clair,
              fluide et cohérent.
            </p>

            <p className="mt-3 text-base leading-8 text-slate">
              Chaque élément est pensé pour être compris immédiatement et utilisé concrètement.
            </p>
          </Surface>
        </div>
      </section>

      {/* PARCOURS */}
      <section className="section-spacing pt-0">
        <div className="container-layout">
          <Surface className="p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-ink">Parcours et approche</h2>

              <p className="mt-4 text-base leading-8 text-slate">
                Pendant plus de 25 ans, j’ai évolué dans des environnements humains exigeants,
                où comprendre une situation fait toute la différence.
              </p>

              <p className="mt-4 text-base leading-8 text-slate">
                J’y ai développé une forte capacité d’écoute, d’analyse et de mise en clarté.
              </p>

              <p className="mt-4 text-base leading-8 text-slate">
                Aujourd’hui, j’applique cette exigence au numérique. Je ne sépare pas la technique,
                la compréhension des personnes et la qualité de présentation.
              </p>

              <p className="mt-4 text-base leading-8 text-slate font-medium">
                Mon objectif est simple : rendre une activité immédiatement lisible et accessible.
              </p>

              <p className="mt-4 text-base leading-8 text-slate">
                Je ne cherche pas à faire du digital pour faire moderne. Je conçois des systèmes utiles,
                pensés pour orienter, clarifier et faciliter la prise de décision.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      {/* 3 BLOCS */}
      <section className="section-spacing pt-0">
        <div className="container-layout grid gap-6 lg:grid-cols-3">
          <Surface className="p-8">
            <h3 className="text-xl font-semibold text-ink">Ce que je conçois</h3>

            <p className="mt-4 text-base leading-8 text-slate">
              Des points d’entrée, mini-sites, diagnostics interactifs et parcours digitaux
              pensés pour capter l’attention et déclencher un premier contact qualifié.
            </p>
          </Surface>

          <Surface className="p-8">
            <h3 className="text-xl font-semibold text-ink">Ce que je cherche</h3>

            <p className="mt-4 text-base leading-8 text-slate">
              Rendre une expertise visible, compréhensible et engageante,
              sans complexité inutile.
            </p>

            <p className="mt-3 text-base leading-8 text-slate">
              Améliorer l’expérience utilisateur et la perception globale de l’activité.
            </p>
          </Surface>

          <Surface className="p-8">
            <h3 className="text-xl font-semibold text-ink">Ce que ça change</h3>

            <p className="mt-4 text-base leading-8 text-slate">
              Une activité plus claire, plus crédible et plus sollicitée.
            </p>

            <p className="mt-3 text-base leading-8 text-slate">
              Un système qui travaille pour vous en continu et facilite la prise de contact.
            </p>
          </Surface>
        </div>
      </section>

      {/* POUR QUI */}
      <section className="section-spacing pt-0 pb-16">
        <div className="container-layout">
          <Surface className="p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-semibold text-ink">Pour qui</h2>

              <p className="mt-4 text-base leading-8 text-slate">
                J’interviens principalement auprès de professionnels dont l’activité repose sur l’humain :
                accompagnement, conseil, juridique, formation, orientation.
              </p>

              <p className="mt-4 text-base leading-8 text-slate">
                Des métiers où la valeur est réelle… mais souvent difficile à rendre visible,
                compréhensible et différenciante.
              </p>

              <p className="mt-6 text-base leading-8 text-slate font-medium">
                Si vous sentez que votre activité mérite d’être mieux comprise,
                c’est probablement le bon moment pour en parler.
              </p>
            </div>
          </Surface>
        </div>
      </section>
    </>
  );
}
