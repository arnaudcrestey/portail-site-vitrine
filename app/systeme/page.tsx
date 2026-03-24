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
                Ce qui compte, ce n’est pas d’être présent en ligne, mais de structurer un système qui attire, engage et génère des demandes.
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

<section className="pb-10 pt-3">
  <div className="container-layout">
    <div className="relative overflow-hidden rounded-[36px] border border-[#d9def8] bg-[linear-gradient(180deg,#f7f8fe_0%,#f2f5ff_100%)] px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:px-8 sm:py-12 lg:px-10 lg:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,99,243,0.06),transparent_38%)]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <span className="section-eyebrow">Vision du système</span>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
          Un système structuré autour de plusieurs points d’entrée
        </h2>

        <p className="mt-4 text-lg leading-8 text-slate">
          Chaque point d’entrée capte un besoin différent, engage le visiteur et le redirige vers
          un système central pensé pour clarifier, qualifier et faciliter la prise de contact.
        </p>
      </div>

      <div className="relative mt-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px_1fr] lg:grid-rows-[auto_auto_auto] lg:items-center">
          {/* Haut gauche */}
          <div className="flex justify-center lg:justify-end">
            <div className="group w-full max-w-[240px] rounded-[24px] border border-[#d9def8] bg-white/95 px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,99,243,0.10)]">
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Point d’entrée
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">Miroir d’intuition</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Une entrée libre et engageante pour capter une situation personnelle dès les premières secondes.
              </p>
            </div>
          </div>

          {/* Centre haut */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary/25" />
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_8px_20px_rgba(59,99,243,0.08)]">
                ↘
              </div>
              <div className="h-px w-12 bg-primary/25" />
            </div>
          </div>

          {/* Haut droite */}
          <div className="flex justify-center lg:justify-start">
            <div className="group w-full max-w-[240px] rounded-[24px] border border-[#d9def8] bg-white/95 px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,99,243,0.10)]">
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Point d’entrée
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">Blocages de vie</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Un diagnostic ciblé pour faire émerger rapidement un frein, un besoin ou une tension.
              </p>
            </div>
          </div>

          {/* Milieu gauche */}
          <div className="flex justify-center lg:justify-end">
            <div className="group w-full max-w-[240px] rounded-[24px] border border-[#d9def8] bg-white/95 px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,99,243,0.10)]">
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Point d’entrée
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">Personality Scan</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Une porte d’entrée simple pour engager un visiteur à travers une lecture plus personnelle.
              </p>
            </div>
          </div>

          {/* Centre */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="h-[280px] w-[280px] rounded-full bg-[radial-gradient(circle,rgba(59,99,243,0.10)_0%,rgba(59,99,243,0.04)_38%,transparent_70%)] blur-xl" />
            </div>

            <div className="w-full max-w-[360px] rounded-[32px] border border-[#d9def8] bg-white px-8 py-8 text-center shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="mx-auto inline-flex rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Système central
              </div>

              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                Cabinet Astrae
              </h3>

              <p className="mx-auto mt-4 max-w-[250px] text-sm leading-7 text-slate">
                Une structure centrale qui accueille les visiteurs, rend l’offre plus lisible
                et transforme l’intérêt en prise de contact qualifiée.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 text-left">
                <div className="rounded-[18px] border border-[#e4e9fb] bg-[#f8faff] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                    Clarté
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    Offre mieux comprise
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#e4e9fb] bg-[#f8faff] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                    Engagement
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    Parcours plus actif
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#e4e9fb] bg-[#f8faff] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                    Qualification
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    Demandes mieux ciblées
                  </p>
                </div>

                <div className="rounded-[18px] border border-[#e4e9fb] bg-[#f8faff] px-4 py-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate">
                    Conversion
                  </p>
                  <p className="mt-2 text-sm font-medium text-ink">
                    Contact facilité
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Milieu droite */}
          <div className="flex justify-center lg:justify-start">
            <div className="group w-full max-w-[240px] rounded-[24px] border border-[#d9def8] bg-white/95 px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,99,243,0.10)]">
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Point d’entrée
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">ProCoach</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Un dispositif orienté clarté professionnelle pour attirer un autre angle de besoin.
              </p>
            </div>
          </div>

          {/* Bas gauche */}
          <div className="flex justify-center lg:justify-end">
            <div className="group w-full max-w-[240px] rounded-[24px] border border-[#d9def8] bg-white/95 px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,99,243,0.10)]">
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Point d’entrée
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">Love Scan</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Une entrée plus émotionnelle pour capter un public sensible à la dimension relationnelle.
              </p>
            </div>
          </div>

          {/* Centre bas */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-primary/25" />
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-white text-primary shadow-[0_8px_20px_rgba(59,99,243,0.08)]">
                ↗
              </div>
              <div className="h-px w-12 bg-primary/25" />
            </div>
          </div>

          {/* Bas droite */}
          <div className="flex justify-center lg:justify-start">
            <div className="group w-full max-w-[240px] rounded-[24px] border border-[#d9def8] bg-white/95 px-5 py-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(59,99,243,0.10)]">
              <div className="inline-flex rounded-full border border-primary/15 bg-primary/6 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                Point d’entrée
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">Life Decision</h3>
              <p className="mt-3 text-sm leading-7 text-slate">
                Une autre entrée ciblée pour transformer une hésitation ou une réflexion en engagement.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-3xl rounded-[24px] border border-[#d9def8] bg-white/75 px-6 py-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
        <p className="text-sm leading-7 text-slate sm:text-[15px]">
          Le système ne repose pas sur une seule page, mais sur plusieurs entrées complémentaires
          qui attirent, qualifient et orientent vers un centre clair, cohérent et actif.
        </p>
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
