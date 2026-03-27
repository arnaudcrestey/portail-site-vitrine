import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de cookies | Arnaud Crestey',
  description:
    'Politique de cookies du site arnaudcrestey.com : utilisation des cookies, gestion du consentement et paramétrage.',
};

export default function CookiesPage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[32px] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:px-8 sm:py-12 lg:px-12">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Cookies & traceurs</span>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Politique de cookies
              </h1>

              <p className="mt-6 text-base leading-8 text-slate sm:text-lg">
                La présente politique de cookies a pour objectif d’informer les utilisateurs
                du site arnaudcrestey.com sur l’utilisation des cookies et autres traceurs,
                leur finalité, ainsi que les moyens de les gérer.
              </p>
            </div>

            <div className="mt-10 space-y-10">

              {/* 1 */}
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  1. Qu’est-ce qu’un cookie ?
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur,
                    tablette, smartphone) lors de la consultation d’un site internet.
                  </p>

                  <p>
                    Il permet notamment de reconnaître un utilisateur, de mémoriser certaines
                    informations ou d’analyser l’utilisation du site.
                  </p>
                </div>
              </section>

              {/* 2 */}
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  2. Types de cookies utilisés
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">

                  <p>
                    Le site arnaudcrestey.com peut utiliser différents types de cookies :
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">
                      <strong>Cookies strictement nécessaires</strong> : indispensables au bon
                      fonctionnement du site (navigation, accès aux fonctionnalités).
                    </li>

                    <li className="list-disc">
                      <strong>Cookies de mesure d’audience</strong> : permettent d’analyser
                      la fréquentation du site et d’améliorer son fonctionnement.
                    </li>

                    <li className="list-disc">
                      <strong>Cookies fonctionnels</strong> : permettent de mémoriser certains
                      choix ou préférences de l’utilisateur.
                    </li>
                  </ul>

                  <p>
                    Certains cookies peuvent être déposés par des services tiers utilisés sur le site.
                  </p>

                </div>
              </section>

              {/* 3 */}
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  3. Consentement
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">

                  <p>
                    Conformément à la réglementation en vigueur, le dépôt de certains cookies
                    est soumis au consentement préalable de l’utilisateur.
                  </p>

                  <p>
                    Les cookies strictement nécessaires au fonctionnement du site ne nécessitent
                    pas de consentement.
                  </p>

                  <p>
                    Lorsque cela est requis, un bandeau de gestion des cookies permet à
                    l’utilisateur d’accepter, de refuser ou de personnaliser ses choix.
                  </p>

                </div>
              </section>

              {/* 4 */}
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  4. Gestion des cookies
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">

                  <p>
                    L’utilisateur peut à tout moment gérer ou supprimer les cookies :
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">
                      via les paramètres de son navigateur ;
                    </li>

                    <li className="list-disc">
                      via le module de gestion des cookies proposé sur le site, lorsqu’il est disponible.
                    </li>
                  </ul>

                  <p>
                    La désactivation de certains cookies peut altérer le fonctionnement du site.
                  </p>

                </div>
              </section>

              {/* 5 */}
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  5. Durée de conservation
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">

                  <p>
                    Les cookies sont conservés pour une durée limitée, conforme à la réglementation
                    en vigueur, et proportionnée à leur finalité.
                  </p>

                </div>
              </section>

              {/* 6 */}
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  6. Évolution de la politique
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">

                  <p>
                    La présente politique de cookies peut être modifiée à tout moment afin de
                    refléter les évolutions du site ou de la réglementation.
                  </p>

                  <p>
                    L’utilisateur est invité à la consulter régulièrement.
                  </p>

                </div>
              </section>

              {/* date */}
              <section>
                <p className="text-sm leading-7 text-slate/80">
                  Dernière mise à jour : 27 mars 2026
                </p>
              </section>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
