import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le système | Arnaud Crestey',
  description:
    "Comment Arnaud Crestey transforme une expertise en système digital clair, structuré et orienté acquisition.",
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
    title: 'Ajouter plusieurs points d’entrée',
    description:
      'Des entrées ciblées permettent d’attirer différents profils selon leur besoin, leur curiosité ou leur problématique.',
  },
  {
    number: '03',
    title: 'Engager et qualifier',
    description:
      'Chaque dispositif capte davantage l’attention, implique le visiteur et prépare une demande plus claire.',
  },
  {
    number: '04',
    title: 'Fluidifier le suivi',
    description:
      'Les informations utiles, les demandes et les prises de contact sont organisées pour rendre le suivi plus simple et plus fluide.',
  },
];

const benefits = [
  'Offre plus lisible',
  'Visiteurs mieux engagés',
  'Demandes plus qualifiées',
  'Contact facilité',
];

export default function SystemePage() {
  return (
    <>
      <section className="section-spacing pb-8">
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_25px_80px_rgba(15,23,42,0.06)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="relative max-w-4xl">
              <span className="section-eyebrow">Le système</span>

              <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Comment je transforme une expertise en système digital d’acquisition
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate">
                Voici concrètement comment je conçois un dispositif structuré pour rendre une offre
                plus lisible, plus engageante et plus active.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#schema"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(59,99,243,0.24)] transition hover:-translate-y-0.5"
                >
                  Voir le schéma
                </Link>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#d9def8] bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-primary/30 hover:text-primary"
                >
                  Parler de mon projet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow">Logique d’ensemble</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Une expertise devient vraiment utile lorsqu’elle est structurée
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                Ce qui compte, ce n’est pas seulement d’être visible en ligne, mais de structurer un
                système qui attire, engage et génère des demandes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="schema" className="pb-8 pt-2">
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-[36px] border border-[#d9def8] bg-[linear-gradient(180deg,#f7f8fe_0%,#f2f5ff_100%)] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,99,243,0.06),transparent_38%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="section-eyebrow">Vision du système</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Un système structuré autour de plusieurs points d’entrée
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                Chaque point d’entrée attire un besoin différent, engage le visiteur et le redirige
                vers un centre plus clair, plus cohérent et plus actif.
              </p>
            </div>

            <div className="relative mt-14">
              <div className="overflow-hidden rounded-[32px] border border-[#d9def8] bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
                <Image
                  src="/images/schema-cabinet-astrae.png"
                  alt="Schéma du système digital d’acquisition autour de plusieurs points d’entrée"
                  width={1680}
                  height={945}
                  priority
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <div className="relative mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#d9def8] bg-white/75 px-6 py-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
              <p className="text-sm leading-7 text-slate sm:text-[15px]">
                Le système ne repose pas sur une seule page, mais sur plusieurs entrées
                complémentaires qui attirent, qualifient et orientent vers un centre clair,
                cohérent et actif.
              </p>
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
                Comment ce système prend forme concrètement
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                À partir d’une activité comme Cabinet Astrae, il devient possible de structurer un
                ensemble plus lisible, plus engageant et plus orienté demande.
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

      <section className="pb-8 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow">Résultat</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Ce que ce type de système permet
              </h2>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {benefits.map((item, index) => (
                <div
                  key={item}
                  className="rounded-[28px] border border-white/80 bg-white px-5 py-6 text-center shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-base font-semibold text-primary">
                    {index + 1}
                  </div>

                  <p className="text-base font-semibold text-ink">{item}</p>
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
              Vous avez une expertise forte, mais pas encore le système qui la rend vraiment active ?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate">
              Je conçois des dispositifs clairs, ciblés et cohérents pour transformer une présence
              en ligne en véritable levier de contact.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(59,99,243,0.24)] transition hover:-translate-y-0.5"
              >
                Entrer en contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
