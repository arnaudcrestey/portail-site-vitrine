import Link from 'next/link';

type PricingItem = {
  title: string;
  subtitle: string;
  amount: string;
  description: string;
  details: string[];
  featured?: boolean;
};

const pricingItems: PricingItem[] = [
  {
    title: 'Cadrage stratégique',
    subtitle: 'Clarifier avant d’agir',
    amount: '790',
    description:
      'Un temps de travail structuré pour prendre du recul, clarifier votre situation, faire ressortir les priorités et définir la direction la plus juste.',
    details: [
      'Analyse précise de votre situation',
      'Identification des priorités réelles',
      'Recommandation claire et exploitable',
      'Vision du dispositif à envisager',
    ],
  },
  {
    title: 'Point d’entrée sur mesure',
    subtitle: 'Le premier levier concret',
    amount: '2 500',
    description:
      'Un dispositif conçu pour structurer votre expertise, attirer les bonnes personnes et créer des prises de contact plus qualifiées.',
    details: [
      'Conception du point d’entrée',
      'Structure du parcours utilisateur',
      'Logique de conversion cohérente',
      'Alignement entre fond, forme et objectif',
    ],
    featured: true,
  },
  {
    title: 'Système complet',
    subtitle: 'Structurer durablement votre activité',
    amount: '6 500',
    description:
      'Un système plus global pour organiser votre acquisition, votre parcours client et la cohérence d’ensemble de votre dispositif.',
    details: [
      'Point d’entrée + parcours complet',
      'Automatisations et continuité du suivi',
      'Adaptation à votre activité',
      'Vision d’ensemble plus avancée',
    ],
  },
];

export const metadata = {
  title: 'Tarifs',
  description:
    'Formats, tarifs et accompagnements sur mesure pour la conception de systèmes numériques premium.',
};

function PriceDisplay({ amount }: { amount: string }) {
  return (
    <div className="mt-6 flex items-end gap-2 sm:gap-2.5">
      <span className="text-[30px] font-semibold tracking-[-0.04em] text-ink sm:text-[36px] lg:text-[40px]">
        À partir de {amount} €
      </span>
      <span className="pb-[7px] text-[10px] font-semibold uppercase tracking-[0.22em] text-slate/60 sm:pb-[8px] sm:text-[11px]">
        HT
      </span>
    </div>
  );
}

function CheckDot() {
  return <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-[#2f6df6]" />;
}

export default function TarifsPage() {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-eyebrow">Formats & tarifs</span>

          <h<h1 className="mt-4 text-[2rem] font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-[60px] lg:leading-[1.04]">
  Faire évoluer ce qui doit réellement l’être
</h1>

          <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-slate sm:text-lg sm:leading-8">
            Du premier cadrage jusqu’à la mise en place d’un dispositif structuré, chaque format est
            conçu pour clarifier votre situation et mettre en place ce qui doit réellement
            fonctionner.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-6 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {pricingItems.map((item) => (
            <article
              key={item.title}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border px-5 py-6 transition duration-300 sm:px-7 sm:py-8 lg:px-8 ${
                item.featured
                  ? 'border-[#2f6df6]/20 bg-white shadow-[0_20px_70px_rgba(47,109,246,0.12)] ring-1 ring-[#2f6df6]/12'
                  : 'border-white/70 bg-white/82 shadow-[0_18px_50px_rgba(15,23,42,0.05)] backdrop-blur'
              }`}
            >
              {item.featured ? (
                <>
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#2f6df6_0%,#7ea7ff_100%)]" />
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#2f6df6]/[0.06] blur-3xl" />
                </>
              ) : (
                <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-slate-200/30 blur-3xl" />
              )}

              <div className="relative flex h-full flex-col">
                <div>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#2f6df6]">{item.subtitle}</p>
                      <h2 className="mt-2 text-[28px] font-semibold tracking-[-0.04em] text-ink sm:text-[30px] lg:text-[32px]">
                        {item.title}
                      </h2>
                    </div>

                    {item.featured ? (
                      <span className="inline-flex w-fit shrink-0 rounded-full bg-[#2f6df6]/10 px-3 py-1 text-[11px] font-semibold text-[#2f6df6] sm:mt-1 sm:text-xs">
                        Recommandé
                      </span>
                    ) : null}
                  </div>

                  <PriceDisplay amount={item.amount} />

                  <p className="mt-5 text-sm leading-7 text-slate sm:text-[15px] sm:leading-8">
                    {item.description}
                  </p>
                </div>

                <div className="mt-7 h-px w-full bg-[linear-gradient(90deg,rgba(47,109,246,0.14),rgba(47,109,246,0.02))]" />

                <ul className="mt-7 space-y-3.5 text-sm text-slate sm:text-[15px] sm:leading-7">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <CheckDot />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 md:mt-12">
          <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/70 px-5 py-7 shadow-[0_20px_60px_rgba(15,23,42,0.04)] backdrop-blur sm:rounded-[32px] sm:px-8 sm:py-10 lg:px-12 lg:py-12">
            <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-[#2f6df6]/[0.05] blur-3xl" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-slate-300/20 blur-3xl" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
              <div className="max-w-[760px]">
                <h3 className="text-[30px] font-semibold tracking-[-0.04em] text-ink sm:text-[34px] lg:text-[38px]">
                  Parlons de votre situation
                </h3>

                <p className="mt-4 max-w-[620px] text-sm leading-7 text-slate sm:text-base sm:leading-8">
                  Chaque situation mérite d’être comprise avec justesse.
                </p>

                <p className="mt-3 max-w-[680px] text-sm leading-7 text-slate sm:text-base sm:leading-8">
                  Un échange permet de clarifier votre besoin, d’évaluer le niveau de structuration
                  nécessaire et de définir la direction la plus pertinente.
                </p>

                <p className="mt-5 max-w-[720px] text-xs leading-6 text-slate/70 sm:text-sm">
                  Les montants indiqués constituent des repères de départ, selon la nature du besoin,
                  le niveau de personnalisation attendu et l’ampleur du dispositif à concevoir.
                </p>
              </div>

              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#2f6df6] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_18px_40px_rgba(47,109,246,0.28)] transition duration-200 hover:-translate-y-[1px] hover:shadow-[0_22px_46px_rgba(47,109,246,0.34)] sm:px-7 sm:text-[15px]"
                >
                  Faire un point sur votre situation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
