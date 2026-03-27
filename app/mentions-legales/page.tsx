import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions légales | Arnaud Crestey',
  description:
    'Mentions légales du site arnaudcrestey.com : éditeur, hébergement, propriété intellectuelle, responsabilité et données personnelles.',
};

export default function MentionsLegalesPage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[32px] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:px-8 sm:py-12 lg:px-12">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Informations légales</span>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Mentions légales
              </h1>

              <p className="mt-6 text-base leading-8 text-slate sm:text-lg">
                Conformément à la réglementation en vigueur, vous trouverez ci-dessous
                les informations légales relatives au site arnaudcrestey.com.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  Éditeur du site
                </h2>

                <div className="mt-4 space-y-3 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    <strong>Nom :</strong> Arnaud Crestey
                  </p>
                  <p>
                    <strong>Statut :</strong> [à compléter : entrepreneur individuel / micro-entreprise / EURL / SASU]
                  </p>
                  <p>
                    <strong>Adresse :</strong> [adresse complète de l’entreprise]
                  </p>
                  <p>
                    <strong>E-mail :</strong> demande@arnaudcrestey.com
                  </p>
                  <p>
                    <strong>Téléphone :</strong> +33 6 81 95 23 45
                  </p>
                  <p>
                    <strong>SIREN / SIRET :</strong> [à compléter]
                  </p>
                  <p>
                    <strong>Directeur de la publication :</strong> Arnaud Crestey
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  Hébergement
                </h2>

                <div className="mt-4 space-y-3 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    <strong>Hébergeur :</strong> Vercel Inc.
                  </p>
                  <p>
                    <strong>Adresse :</strong> [à confirmer selon la source officielle Vercel que vous retenez]
                  </p>
                  <p>
                    <strong>Site web :</strong> https://vercel.com
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  Propriété intellectuelle
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    L’ensemble des contenus présents sur ce site, notamment les textes,
                    visuels, éléments graphiques, logos, icônes, images, vidéos, structure,
                    mise en page, code et contenus éditoriaux, est protégé par le droit
                    de la propriété intellectuelle.
                  </p>

                  <p>
                    Sauf autorisation écrite préalable, toute reproduction, représentation,
                    modification, publication, adaptation ou exploitation, totale ou partielle,
                    de tout élément du site, quel que soit le moyen ou le procédé utilisé,
                    est interdite.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  Responsabilité
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    L’éditeur du site s’efforce de fournir des informations aussi précises
                    et à jour que possible. Toutefois, il ne pourra être tenu responsable
                    des omissions, inexactitudes ou carences dans la mise à jour des contenus.
                  </p>

                  <p>
                    L’utilisateur du site reconnaît utiliser les informations disponibles
                    sur le site sous sa responsabilité exclusive.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  Données personnelles
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Les données éventuellement collectées via les formulaires du site sont
                    utilisées uniquement dans le cadre du traitement des demandes, de la
                    prise de contact et du suivi des échanges professionnels.
                  </p>

                  <p>
                    Les informations transmises ne sont ni vendues ni cédées à des tiers,
                    sauf obligation légale ou nécessité technique liée aux prestataires
                    intervenant dans le fonctionnement du site.
                  </p>

                  <p>
                    Conformément à la réglementation applicable en matière de protection
                    des données personnelles, vous pouvez demander l’accès, la rectification
                    ou la suppression de vos données en écrivant à :
                    <strong> demande@arnaudcrestey.com</strong>
                  </p>

                  <p>
                    Pour une information plus complète sur la manière dont les données sont
                    collectées et traitées, l’utilisateur est invité à consulter la politique
                    de confidentialité du site.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  Cookies
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Le site peut utiliser des cookies ou autres traceurs strictement nécessaires
                    à son fonctionnement, ainsi que, le cas échéant, des outils de mesure
                    d’audience ou d’amélioration de l’expérience utilisateur.
                  </p>

                  <p>
                    Lorsqu’un consentement est requis par la réglementation, celui-ci est
                    recueilli avant le dépôt des traceurs concernés.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  Droit applicable
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>Le présent site est soumis au droit français.</p>
                </div>
              </section>

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
