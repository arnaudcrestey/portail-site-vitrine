import { PageHero } from '@/components/page-hero';
import { Surface } from '@/components/ui';

export const metadata = {
  title: 'À propos',
  description:
    'Arnaud Crestey conçoit des systèmes numériques qui mettent une expertise en valeur et la transforment en prises de contact qualifiées.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F5F7FB]">
      <PageHero
        eyebrow="À propos"
        title="Je conçois des systèmes numériques qui transforment une expertise en prises de contact qualifiées."
        description={"Mon travail consiste à mettre en valeur une activité pour la rendre plus visible.\nDes dispositifs simples, structurés et crédibles, pensés pour capter l’attention et engager un premier échange."}
        primaryCta={{ href: '/contact', label: 'Parler de votre projet' }}
      />

      <section className="section-spacing pt-6">
        <div className="container-layout grid gap-5 sm:gap-6 lg:grid-cols-2">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">
              Positionnement
            </h2>

            <p className="mt-4 text-base font-medium leading-7 text-ink sm:leading-8">
              Je ne conçois pas des sites.
            </p>

            <p className="mt-2 text-base font-medium leading-7 text-ink sm:leading-8">
              Je conçois des systèmes numériques.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Des dispositifs capables de capter l’attention, de poser les bonnes
              questions et de transformer une expertise en demande concrète.
            </p>
          </Surface>

          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink sm:text-2xl">
              Méthode
            </h2>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Je pars du réel : votre activité, vos enjeux, vos utilisateurs.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Ensuite, je structure, je simplifie et je construis un dispositif clair,
              fluide et cohérent.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Chaque élément est pensé pour être compris immédiatement et utilisé
              concrètement.
            </p>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                Parcours et approche
              </h2>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                Pendant plus de 25 ans, j’ai évolué dans des environnements humains
                exigeants, où comprendre une situation fait toute la différence.
              </p>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                J’y ai développé une forte capacité d’écoute, d’analyse et de mise en
                clarté.
              </p>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                Aujourd’hui, j’applique cette exigence au numérique. Je ne sépare pas la
                technique, la compréhension des personnes et la qualité de présentation.
              </p>

              <p className="mt-4 text-base font-medium leading-7 text-ink sm:leading-8">
                Mon objectif est simple : concevoir des systèmes utiles, lisibles et
                cohérents.
              </p>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
                Je ne cherche pas à faire du digital pour faire moderne. Je conçois des
                systèmes pensés pour orienter, clarifier et faciliter la prise de
                décision.
              </p>
            </div>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0">
        <div className="container-layout grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              Ce que je conçois
            </h3>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Des points d’entrée, mini-sites, diagnostics interactifs et parcours
              digitaux pensés pour capter l’attention et déclencher un premier contact
              qualifié.
            </p>
          </Surface>

          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              Ce que je cherche
            </h3>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Concevoir des dispositifs visibles, compréhensibles et engageants, sans
              complexité inutile.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Améliorer l’expérience utilisateur et la perception globale de l’activité.
            </p>
          </Surface>

          <Surface className="border border-black/5 bg-white p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-ink sm:text-xl">
              Ce que ça change
            </h3>

            <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
              Une activité mieux présentée, plus crédible et plus sollicitée.
            </p>

            <p className="mt-3 text-base leading-7 text-slate sm:leading-8">
              Un système qui travaille pour vous en continu et facilite la prise de
              contact.
            </p>
          </Surface>
        </div>
      </section>

      <section className="section-spacing pt-0 pb-16">
        <div className="container-layout">
          <Surface className="border border-black/5 bg-white p-6 sm:p-8 md:p-10">
            <div className="max-w-3xl">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                Pour qui
              </h2>

              <p className="mt-4 text-base leading-7 text-slate sm:leading-8">
  J’interviens auprès de professionnels dont l’activité repose sur une expertise réelle.
</p>

<p className="mt-4 text-base leading-7 text-slate sm:leading-8">
  Des métiers où cette valeur est parfois difficile à structurer, à rendre lisible
  et à présenter de façon claire et différenciante.
</p>

<p className="mt-6 text-base font-medium leading-7 text-ink sm:leading-8">
  Si vous sentez un écart entre la valeur de votre activité et la manière dont elle est perçue,
  c’est souvent le signe qu’un travail de clarification devient nécessaire.
</p>
            </div>
          </Surface>
        </div>
      </section>
    </div>
  );
}
