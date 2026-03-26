import Link from 'next/link';
import { Surface } from '@/components/ui';

const pricingItems = [
  {
    title: 'Cadrage stratégique',
    price: 'À partir de 290 €',
    description:
      'Un point clair pour comprendre ce qui doit être structuré, priorisé et activé en premier.',
    details: [
      'Analyse du besoin',
      'Recommandation claire',
      'Vision du dispositif à mettre en place',
    ],
  },
  {
    title: 'Point d’entrée sur mesure',
    price: 'À partir de 1 200 €',
    description:
      'Le dispositif qui commence à générer des prises de contact qualifiées en structurant votre expertise.',
    details: [
      'Conception du point d’entrée',
      'Structure du parcours',
      'Logique de conversion',
    ],
    featured: true,
  },
  {
    title: 'Système complet',
    price: 'Sur devis',
    description:
      'Une structure complète pensée pour soutenir votre activité dans la durée, avec cohérence et efficacité.',
    details: [
      'Point d’entrée + parcours',
      'Automatisation',
      'Adaptation au contexte du client',
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
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Tarifs & devis</span>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Des formats clairs selon votre besoin
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate sm:text-base sm:leading-8 lg:max-w-none lg:whitespace-nowrap lg:text-lg">
  Du besoin le plus simple au dispositif complet, chaque format est pensé pour vous faire avancer concrètement.
</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingItems.map((item) => (
            <Surface
              key={item.title}
              className={`flex h-full flex-col rounded-[28px] p-7 sm:p-8 ${
                item.featured ? 'ring-1 ring-ink/10' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-semibold text-ink">{item.title}</h2>
                  {item.featured ? (
                    <span className="rounded-full bg-[#2f6df6]/10 px-3 py-1 text-xs font-semibold text-[#2f6df6]">
                      Recommandé
                    </span>
                  ) : null}
                </div>

                <p className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  {item.price}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
                  {item.description}
                </p>

                <ul className="mt-6 space-y-3 text-sm text-slate sm:text-base">
                  {item.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-1 text-ink">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Surface>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Surface className="rounded-[28px] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold text-ink">
              Comment fonctionne le devis ?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
              Chaque projet n’a pas le même niveau de personnalisation, ni les mêmes enjeux.
              Le devis permet donc d’ajuster précisément la proposition selon votre activité,
              vos objectifs et la structure à concevoir.
            </p>

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate sm:text-base">
              <p>
                <strong className="text-ink">1.</strong> Vous présentez votre besoin,
                votre activité et votre contexte.
              </p>
              <p>
                <strong className="text-ink">2.</strong> J’identifie le format le plus
                pertinent et le niveau de complexité du dispositif.
              </p>
              <p>
                <strong className="text-ink">3.</strong> Vous recevez une proposition
                claire, adaptée à votre situation.
              </p>
            </div>
          </Surface>

          <Surface className="rounded-[28px] px-6 py-8 sm:px-8 sm:py-10">
            <h2 className="text-2xl font-semibold text-ink">
              Un besoin plus spécifique&nbsp;?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
              Certaines demandes nécessitent un cadrage plus large : adaptation métier,
              plusieurs points d’entrée, automatisations, refonte partielle ou logique
              d’ensemble plus avancée.
            </p>

            <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
              Dans ce cas, un échange permet de définir le dispositif le plus juste pour
              votre situation.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#2f6df6] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
            >
              Clarifier mon projet
            </Link>
          </Surface>
        </div>
      </div>
    </section>
  );
}
