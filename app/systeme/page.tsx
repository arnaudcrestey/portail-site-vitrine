import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le système | Arnaud Crestey',
  description:
    "Comment Arnaud Crestey structure un système digital clair, cohérent et orienté acquisition.",
};

const astraeBlocks = [
  {
    number: '01',
    title: 'Créer une page principale forte',
    description:
      "Une page centrale claire qui présente l’expertise, structure la promesse et rend l’offre immédiatement plus lisible.",
  },
  {
    number: '02',
    title: 'Ajouter un ou plusieurs points d’entrée',
    description:
      'Des points d’entrée ciblés pour attirer différentes personnes selon leur situation, leur besoin ou leur question.',
  },
  {
  number: '03',
  title: 'Engager et qualifier',
  description:
    'Chaque dispositif capte l’attention, implique la personne et permet de mieux comprendre sa situation.',
},
{
  number: '04',
  title: 'Fluidifier le suivi',
  description:
    'Les demandes et les informations sont organisées pour permettre un suivi simple, clair et fluide.',
},
];
export default function SystemePage() {
  return (
    <>
      <section id="schema" className="section-spacing pb-8">
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-[36px] border border-[#d9def8] bg-[linear-gradient(180deg,#f7f8fe_0%,#f2f5ff_100%)] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,99,243,0.06),transparent_38%)]" />

            <div className="relative mx-auto max-w-4xl text-center">
              <span className="section-eyebrow">Exemple concret - Cabinet Astraé</span>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Un système structuré autour de points d’entrée ciblés
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate sm:text-lg">
                Pour le Cabinet Astraé, j’ai conçu plusieurs points d’entrée adaptés à son activité
                et aux problématiques que ses visiteurs rencontrent.
              </p>

              <p className="mx-auto mt-3 max-w-3xl text-sm leading-7 text-slate sm:text-base">
                Un point d’entrée est un dispositif ciblé conçu pour capter une situation précise,
                engager la personne au bon niveau, puis l’orienter vers un système central plus
                clair, plus cohérent et plus actif.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="overflow-hidden rounded-[28px] bg-transparent">
                <Image
                  src="/images/schema-cabinet-astrae.png"
                  alt="Schéma du système digital d’acquisition autour de plusieurs points d’entrée"
                  width={1680}
                  height={945}
                  priority
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="relative mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#d9def8] bg-white/75 px-6 py-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm leading-7 text-slate sm:text-[15px]">
                Dans le cas d’Astraé, ces points d’entrée conduisent progressivement vers
                la mission du cabinet&nbsp;: aider à y voir plus clair quand quelque chose reste flou, pour avancer plus sereinement.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/concepts"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(59,99,243,0.24)] transition hover:-translate-y-0.5"
              >
                Découvrir le laboratoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="exemple" className="pb-8 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Lecture concrète</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Comment ce système se construit en pratique
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                Comme pour le Cabinet Astraé, chaque activité d’accompagnement et de conseil peut s’appuyer sur un système structuré, avec des points d’entrée et une automatisation adaptés.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {astraeBlocks.map((block) => (
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

      <section className="pb-16 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[linear-gradient(180deg,#f7f8fe_0%,#eef3ff_100%)] px-6 py-10 text-center shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10">
            <span className="section-eyebrow">Passer à l’action</span>

            <h2 className="mx-auto mt-4 max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Votre expertise existe déjà. Mais elle ne travaille pas encore pour vous.
            </h2>

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
