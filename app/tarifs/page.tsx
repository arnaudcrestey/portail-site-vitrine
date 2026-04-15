import Link from 'next/link';

const pricingItems = [
  {
    title: 'Cadrage stratégique',
    subtitle: 'Pour clarifier avant de construire',
    price: 'À partir de 490 € HT',
    description:
      'Un temps de travail structuré pour clarifier votre situation, faire ressortir les priorités et définir ce qui doit être mis en place en premier.',
    details: [
      'Analyse précise de votre situation',
      'Identification des priorités',
      'Recommandation claire et actionnable',
      'Vision du dispositif à envisager',
    ],
  },
  {
    title: 'Point d’entrée sur mesure',
    subtitle: 'Le format le plus demandé',
    price: 'À partir de 2 500 € HT',
    description:
      'Un dispositif conçu pour attirer les bonnes personnes, structurer votre expertise et commencer à générer des prises de contact plus qualifiées.',
    details: [
      'Conception du point d’entrée',
      'Structure du parcours utilisateur',
      'Logique de conversion',
      'Cohérence entre fond, forme et objectif',
    ],
    featured: true,
  },
  {
    title: 'Système complet',
    subtitle: 'Pour une logique plus globale',
    price: 'À partir de 6 500 € HT',
    description:
      'Un système structuré pour organiser durablement votre acquisition, votre parcours client et la cohérence d’ensemble de votre dispositif.',
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

export default function TarifsPage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-3xl text-center">
  <span className="section-eyebrow">Formats & tarifs</span>

  <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
    Des formats clairs selon votre besoin
  </h1>

  <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate sm:text-lg">
    Vous n’avez pas forcément besoin de tout refaire, mais de structurer ce qui doit vraiment fonctionner.
  </p>
</div>

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
          {pricingItems.map((item) => (
            <div
              key={item.title}
              className={`relative flex h-full flex-col overflow-hidden rounded-[30px] border px-6 py-7 sm:px-8 sm:py-8 ${
                item.featured
                  ? 'border-[#2f6df6]/20 bg-white shadow-[0_24px_80px_rgba(47,109,246,0.10)] ring-1 ring-[#2f6df6]/10'
                  : 'border-white/60 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.06)]'
              }`}
            >
              {item.featured ? (
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#2f6df6_0%,#7aa2ff_100%)]" />
              ) : null}

              <div className="flex h-full flex-col">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium text-[#2f6df6]">{item.subtitle}</p>
                      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink">
                        {item.title}
                      </h2>
                    </div>

                    {item.featured ? (
                      <span className="inline-flex shrink-0 rounded-full bg-[#2f6df6]/10 px-3 py-1 text-xs font-semibold text-[#2f6df6]">
                        Recommandé
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-6 text-3xl font-semibold tracking-tight text-ink">
                    {item.price}
                  </p>

                  <p className="mt-5 text-sm leading-7 text-slate sm:text-base">
                    {item.description}
                  </p>
                </div>

                <ul className="mt-7 space-y-3.5 text-sm text-slate sm:text-base">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#2f6df6]" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] border border-white/60 bg-white/55 px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] backdrop-blur sm:rounded-[32px] sm:px-8 sm:py-10 lg:px-12">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-[720px]">
              <h3 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-[34px]">
                Parlons de votre situation
              </h3>

              <p className="mt-4 max-w-[560px] text-sm leading-7 text-slate sm:mt-5 sm:text-base sm:leading-8">
                Chaque situation mérite d’être comprise avec justesse.
              </p>

              <p className="mt-3 max-w-[620px] text-sm leading-7 text-slate sm:mt-4 sm:text-base sm:leading-8">
                Un échange permet de clarifier votre besoin et de définir la bonne direction.
              </p>
            </div>

            <div className="flex justify-center lg:block lg:shrink-0">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[#2f6df6] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(59,99,243,0.28)] transition hover:translate-y-[-1px] hover:shadow-[0_20px_44px_rgba(59,99,243,0.34)] sm:px-7"
              >
                Faire un point sur votre situation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
