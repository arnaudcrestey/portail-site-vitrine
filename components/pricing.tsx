import Link from 'next/link';
import { Surface } from '@/components/ui';

const pricingItems = [
  {
    title: 'Cadrage stratégique',
    price: 'À partir de 290 €',
    description:
      'Clarifier le besoin, l’angle, le point d’entrée pertinent et la logique de conversion avant toute conception.',
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
      'Conception d’un dispositif digital pensé pour attirer l’attention, engager le visiteur et générer des prises de contact qualifiées.',
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
      'Conception d’un dispositif plus global avec structure, automatisation, intégration et cohérence d’ensemble.',
    details: [
      'Point d’entrée + parcours',
      'Automatisation',
      'Adaptation au contexte du client',
    ],
  },
];

export function PricingSection() {
  return (
    <section id="tarifs" className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-eyebrow">Tarifs & devis</span>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Des formats clairs selon le niveau de besoin
          </h2>

          <p className="mt-5 text-base leading-8 text-slate sm:text-lg">
            Chaque projet n’a pas le même niveau de complexité. Je propose donc
            des formats cadrés avec prix repère, ainsi que des accompagnements
            sur devis pour les demandes plus sur mesure.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingItems.map((item) => (
            <Surface
              key={item.title}
              className={`flex h-full flex-col rounded-[28px] p-7 sm:p-8 ${
                item.featured ? 'ring-1 ring-primary/20' : ''
              }`}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
                  {item.featured ? (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
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
                      <span className="mt-1 text-primary">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Surface>
          ))}
        </div>

        <div className="mt-8">
          <Surface className="rounded-[28px] px-6 py-8 sm:px-8 sm:py-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold text-ink sm:text-2xl">
                  Besoin plus spécifique ?
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate sm:text-base">
                  Un devis précis peut être établi selon le niveau de
                  personnalisation, les intégrations nécessaires et l’ampleur du
                  dispositif à concevoir.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:opacity-95"
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
