import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le système | Arnaud Crestey',
  description:
    "Exemple concret : comment Arnaud Crestey a transformé une demande initiale en système complet pour structurer et lancer Cabinet Astraé.",
};

const proofBlocks = [
  {
    number: '01',
    title: 'Demande initiale',
    description:
      "Le point de départ n’était pas un simple besoin de site, mais la volonté de donner une forme claire, cohérente et crédible à une activité d’accompagnement portée par Virginie.",
  },
  {
    number: '02',
    title: 'Système conçu',
    description:
      "À partir de cette demande, j’ai conçu un ensemble structuré : positionnement, site principal, trois points d’entrée, logique de parcours, automatisations et supports d’usage.",
  },
  {
    number: '03',
    title: 'Organisation interne',
    description:
      "Le travail ne s’est pas arrêté à la façade visible. J’ai également structuré des assistants GPT, des protocoles d’utilisation, des mails et une logique de traitement pour soutenir le fonctionnement dans la durée.",
  },
  {
    number: '04',
    title: 'Ce que cela permet',
    description:
      "Cabinet Astraé dispose aujourd’hui d’un univers cohérent, d’un parcours clair pour les personnes, et d’une base solide pour engager, qualifier et accompagner avec continuité.",
  },
];

const deliveryBlocks = [
  'Clarification de l’univers et du positionnement',
  'Création du site Cabinet Astraé',
  'Conception de trois points d’entrée distincts',
  'Structuration du parcours utilisateur',
  'Mise en place des mails et automatisations associées',
  'Création de deux assistants GPT dédiés',
  'Transmission du protocole d’utilisation du système',
  'Construction d’un ensemble pensé pour fonctionner durablement',
];

export default function SystemePage() {
  return (
    <>
      <section id="schema" className="section-spacing pb-8">
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-[36px] border border-[#d9def8] bg-[linear-gradient(180deg,#f7f8fe_0%,#f2f5ff_100%)] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,99,243,0.06),transparent_38%)]" />

            <div className="relative text-center">
              <span className="section-eyebrow">
                Cas réel <br className="sm:hidden" />
                Cabinet Astraé
              </span>

              <h1 className="mx-auto mt-4 max-w-5xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                À partir d’une demande initiale, un système complet a été conçu
                pour structurer et lancer Cabinet Astraé
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate sm:text-lg">
                Cabinet Astraé n’a pas été pensé comme un simple site vitrine.
                Le travail a consisté à transformer une intention de départ en
                un ensemble cohérent, capable de présenter l’activité, créer un
                premier lien, structurer les échanges et soutenir son
                développement dans la durée.
              </p>

              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate sm:text-base">
                Site principal, points d’entrée, assistants, mails,
                automatisations et protocole d’usage&nbsp;: chaque élément a été
                conçu pour servir une activité réelle, portée ensuite par
                Virginie dans la relation avec les clients.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="overflow-hidden rounded-[28px] bg-transparent">
                <Image
                  src="/images/schema-cabinet-astrae.png"
                  alt="Schéma du système complet conçu pour Cabinet Astraé"
                  width={1680}
                  height={945}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="relative mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#d9def8] bg-white/75 px-6 py-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm leading-7 text-slate sm:text-[15px]">
                Ici, l’objectif n’était pas seulement de rendre une activité
                visible, mais de construire un système capable d’attirer,
                d’engager, de qualifier et d’accompagner plus clairement les
                bonnes personnes.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/concepts#concepts-grid"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(59,99,243,0.24)] transition hover:-translate-y-0.5"
              >
                Voir les points d’entrée
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="preuve" className="pb-8 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Lecture de la transformation</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Ce que ce cas montre concrètement
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                Pour Cabinet Astraé, le travail n’a pas consisté à produire un
                élément isolé, mais à faire passer une demande initiale vers un
                système complet, structuré et directement utilisable.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {proofBlocks.map((block) => (
                <div
                  key={block.title}
                  className="rounded-[28px] border border-white/80 bg-white px-5 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    {block.number}
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {block.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate">
                    {block.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="mise-en-place" className="pb-8 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-white px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div>
                <span className="section-eyebrow">Ce qui a été mis en place</span>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                  Un ensemble complet pensé pour fonctionner ensemble
                </h2>

                <p className="mt-4 text-base leading-7 text-slate sm:text-lg">
                  À partir de la commande initiale formulée par mail, j’ai conçu
                  et déployé un univers complet destiné à structurer l’activité,
                  faciliter les échanges et créer une continuité entre la
                  découverte, le premier contact et le suivi.
                </p>

                <p className="mt-4 text-base leading-7 text-slate">
                  Virginie porte ensuite la relation humaine et les échanges avec
                  les clients. Mon rôle, ici, a consisté à concevoir
                  l’architecture, les outils, les supports et les logiques qui
                  permettent à l’activité de fonctionner avec plus de clarté,
                  de cohérence et de solidité.
                </p>
              </div>

              <div className="rounded-[28px] border border-[#d9def8] bg-[linear-gradient(180deg,#f8faff_0%,#f2f5ff_100%)] px-5 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <ul className="space-y-3">
                  {deliveryBlocks.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-[18px] border border-white/80 bg-white/80 px-4 py-3"
                    >
                      <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                      <span className="text-sm leading-7 text-slate sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[linear-gradient(180deg,#f7f8fe_0%,#eef3ff_100%)] px-6 py-10 text-center shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
            <span className="section-eyebrow">Passer à l’action</span>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Une activité peut avoir de la valeur sans encore disposer du
              système qui lui permet de travailler vraiment.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate sm:text-lg">
              Quand l’enjeu n’est pas seulement de “faire un site”, mais de
              structurer une activité, clarifier son parcours et poser une base
              solide, c’est tout l’ensemble qu’il faut concevoir avec méthode.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(59,99,243,0.24)] transition hover:-translate-y-0.5"
              >
                Parler de votre projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
