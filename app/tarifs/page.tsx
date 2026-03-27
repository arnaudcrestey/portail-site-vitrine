import Link from 'next/link';
import { Surface } from '@/components/ui';

const pricingItems = [
  {
    title: 'Cadrage stratégique',
    subtitle: 'Pour clarifier avant de construire',
    price: 'À partir de 290 €',
    description:
      'Un échange structuré pour clarifier votre besoin, faire ressortir les priorités et identifier ce qui doit être mis en place en premier.',
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
    price: 'À partir de 1 200 €',
    description:
      'Un dispositif conçu pour attirer les bonnes personnes, structurer votre expertise et commencer à générer des prises de contact qualifiées.',
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
    price: 'Sur devis',
    description:
      'Une architecture plus large pour organiser durablement votre acquisition, votre parcours client et la cohérence d’ensemble de votre dispositif.',
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
    'Formats, repères de prix et accompagnements sur devis pour la conception de systèmes numériques sur mesure.',
};

export default function TarifsPage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-eyebrow">Tarifs & devis</span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:whitespace-nowrap lg:text-6xl">
            Des formats clairs selon votre besoin
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate sm:text-lg">
            Du besoin le plus simple au dispositif complet, chaque format est pensé pour
            vous faire avancer concrètement, avec clarté, cohérence et utilité réelle.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingItems.map((item) => (
            <Surface
              key={item.title}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[30px] border px-6 py-7 sm:px-8 sm:py-8 ${
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
            </Surface>
          ))}
        </div>

        <div className="mt-10">
          <Surface className="rounded-[30px] border border-white/60 bg-[linear-gradient(180deg,#f8faff_0%,#eef4ff_100%)] px-6 py-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:px-8 sm:py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-semibold tracking-tight text-ink">
                  Parlons de votre situation
                </h2>

                <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
                 Chaque situation mérite d’être comprise avec justesse.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
                 Un échange permet de clarifier et de définir la bonne direction
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#2f6df6] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
              >
                Parler de votre projet
              </Link>
            </div>
          </Surface>
        </div>
      </div>
    </section>
  );
}
