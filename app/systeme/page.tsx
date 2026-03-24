import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Le système | Arnaud Crestey',
  description:
    "Comment Arnaud Crestey transforme une expertise en système digital clair, structuré et orienté acquisition.",
};

const systemFlow = [
  {
    title: 'Landing page principale',
    description:
      "Une page claire qui présente l’expertise, pose le positionnement et oriente vers l’action.",
  },
  {
    title: 'Points d’entrée ciblés',
    description:
      'Des dispositifs spécifiques permettent d’attirer différents profils selon leur besoin, leur curiosité ou leur problématique.',
  },
  {
    title: 'Capture et qualification',
    description:
      'Chaque entrée engage davantage le visiteur et aide à faire émerger une demande plus claire.',
  },
  {
    title: 'Automatisation et contact',
    description:
      'Les demandes remontent de façon fluide pour faciliter le suivi, le gain de temps et la prise de contact.',
  },
];

const astraeBlocks = [
  {
    title: 'Créer une page principale forte',
    description:
      "Une landing page claire qui présente l’expertise, structure la promesse et rend l’offre plus lisible.",
  },
  {
    title: 'Ajouter plusieurs entrées ciblées',
    description:
      'Des points d’entrée spécifiques permettent d’attirer différents profils selon leur problématique ou leur niveau d’intérêt.',
  },
  {
    title: 'Qualifier les personnes',
    description:
      'Chaque dispositif implique davantage le visiteur et aide à mieux comprendre sa situation avant le contact.',
  },
  {
    title: 'Automatiser ce qui doit l’être',
    description:
      'Les informations utiles, les demandes et les prises de contact sont organisées pour fluidifier le suivi.',
  },
  {
    title: "Transformer l’ensemble en système d’acquisition",
    description:
      'Le site ne reste pas une simple vitrine. Il devient un dispositif cohérent qui attire, engage et prépare la relation.',
  },
];

const benefits = [
  'Mieux expliquer l’offre',
  'Attirer les bons visiteurs',
  "Augmenter l’engagement",
  'Faciliter la conversion',
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
                Voici concrètement comment je conçois un dispositif complet à partir d’une activité réelle,
                pour rendre une offre plus lisible, plus engageante et plus efficace.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="#exemple"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(59,99,243,0.24)] transition hover:-translate-y-0.5"
                >
                  Voir l’exemple concret
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
          <div className="rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-10 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <span className="section-eyebrow">Logique d’ensemble</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Une expertise ne devient utile en ligne que lorsqu’elle est structurée
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                L’idée n’est pas seulement d’être présent en ligne, mais de créer un système cohérent qui attire, engage et génère des demandes.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {systemFlow.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-[28px] border border-white/80 bg-white px-5 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-semibold tracking-tight text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="exemple" className="pb-8 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Exemple concret</span>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Transformer Cabinet Astrae en système digital cohérent
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate">
                Cabinet Astrae sert ici d’exemple concret. L’objectif est de montrer comment une expertise
                peut être structurée en dispositif digital clair, progressif et orienté acquisition.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {astraeBlocks.slice(0, 4).map((block, index) => (
                <div
                  key={block.title}
                  className="rounded-[28px] border border-white/80 bg-white px-5 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15 text-sm font-semibold text-secondary">
                    0{index + 1}
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

            <div className="mt-5 rounded-[28px] border border-white/80 bg-white px-5 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                05
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-ink">
                {astraeBlocks[4].title}
              </h3>

              <p className="mt-3 max-w-4xl text-sm leading-7 text-slate">
                {astraeBlocks[4].description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 pt-2">
        <div className="container-layout">
          <div className="rounded-[36px] border border-[#d9def8] bg-[#f7f8fe] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Résultat attendu</span>

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

            <h2 className="mt-4 mx-auto max-w-4xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Vous avez une expertise forte, mais pas encore le système qui la rend vraiment active ?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate">
              Je conçois des dispositifs clairs, ciblés et cohérents pour transformer une présence en
              ligne en véritable levier de contact.
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
