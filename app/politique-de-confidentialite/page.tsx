import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | Arnaud Crestey",
  description:
    "Politique de confidentialité du site arnaudcrestey.com : collecte, utilisation, conservation et protection des données personnelles.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="section-spacing">
      <div className="container-layout">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[32px] border border-white/60 bg-white/80 px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur sm:px-8 sm:py-12 lg:px-12">
            <div className="max-w-3xl">
              <span className="section-eyebrow">Protection des données</span>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
                Politique de confidentialité
              </h1>

              <p className="mt-6 text-base leading-8 text-slate sm:text-lg">
                La présente politique de confidentialité a pour objet d’informer
                les utilisateurs du site arnaudcrestey.com sur la manière dont
                leurs données personnelles peuvent être collectées, utilisées,
                conservées et protégées dans le cadre de la navigation sur le site
                et de l’utilisation de ses formulaires.
              </p>
            </div>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  1. Responsable du traitement
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Le responsable du traitement des données personnelles
                    collectées sur le site arnaudcrestey.com est :
                  </p>

                  <div className="space-y-2">
                    <p>
                      <strong>Nom / dénomination :</strong> Arnaud Crestey
                    </p>
                    <p>
                      <strong>Statut :</strong> à compléter selon la structure
                      juridique en vigueur
                    </p>
                    <p>
                      <strong>Adresse :</strong> à compléter selon l’adresse
                      professionnelle retenue
                    </p>
                    <p>
                      <strong>E-mail :</strong> demande@arnaudcrestey.com
                    </p>
                    <p>
                      <strong>Téléphone :</strong> +33 6 81 95 23 45
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  2. Données collectées
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Selon les fonctionnalités utilisées sur le site, les données
                    personnelles susceptibles d’être collectées sont notamment les
                    suivantes :
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">nom et prénom ;</li>
                    <li className="list-disc">adresse e-mail ;</li>
                    <li className="list-disc">numéro de téléphone ;</li>
                    <li className="list-disc">
                      contenu des messages envoyés via les formulaires ;
                    </li>
                    <li className="list-disc">
                      informations librement renseignées par l’utilisateur dans
                      le cadre d’une demande, d’un point d’entrée, d’un
                      diagnostic ou d’un échange ;
                    </li>
                    <li className="list-disc">
                      données techniques de navigation, sous réserve des réglages
                      du site et du consentement requis le cas échéant.
                    </li>
                  </ul>

                  <p>
                    Les champs obligatoires figurant dans les formulaires sont
                    signalés lorsque cela est nécessaire. À défaut de
                    renseignement, certaines demandes ou fonctionnalités peuvent
                    ne pas être traitées correctement.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  3. Finalités du traitement
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Les données personnelles sont collectées pour les finalités
                    suivantes :
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">
                      répondre aux demandes envoyées via le site ;
                    </li>
                    <li className="list-disc">
                      assurer le suivi des échanges professionnels ;
                    </li>
                    <li className="list-disc">
                      permettre le fonctionnement des formulaires, points
                      d’entrée, diagnostics ou dispositifs interactifs proposés
                      sur le site ;
                    </li>
                    <li className="list-disc">
                      améliorer l’expérience utilisateur et le fonctionnement du
                      site ;
                    </li>
                    <li className="list-disc">
                      établir, lorsque cela est mis en place, des statistiques de
                      fréquentation dans le respect de la réglementation
                      applicable.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  4. Base légale des traitements
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Les traitements réalisés sur le site reposent, selon les cas,
                    sur l’une des bases légales suivantes :
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">
                      <strong>le consentement</strong> de l’utilisateur, lorsqu’il
                      est requis ;
                    </li>
                    <li className="list-disc">
                      <strong>l’exécution de mesures précontractuelles</strong> ou
                      le traitement d’une demande initiée par l’utilisateur ;
                    </li>
                    <li className="list-disc">
                      <strong>l’intérêt légitime</strong> du responsable de
                      traitement, notamment pour l’amélioration du site, la
                      sécurisation de son fonctionnement et la gestion des
                      échanges professionnels.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  5. Destinataires des données
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Les données personnelles collectées sont destinées
                    exclusivement à Arnaud Crestey, dans la limite de ce qui est
                    nécessaire pour traiter les demandes, assurer le suivi de
                    l’activité et garantir le bon fonctionnement du site.
                  </p>

                  <p>
                    Elles peuvent également être traitées, de manière strictement
                    nécessaire, par certains prestataires techniques intervenant
                    dans le fonctionnement du site ou de ses services associés,
                    notamment :
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">l’hébergeur du site ;</li>
                    <li className="list-disc">les services de messagerie ;</li>
                    <li className="list-disc">
                      les outils nécessaires à l’envoi, à la réception ou au
                      traitement des demandes ;
                    </li>
                    <li className="list-disc">
                      les services d’analyse ou de mesure d’audience, lorsqu’ils
                      sont activés ;
                    </li>
                    <li className="list-disc">
                      les outils d’automatisation ou de gestion de formulaires,
                      lorsque leur usage est nécessaire au fonctionnement du site.
                    </li>
                  </ul>

                  <p>
                    Les données ne sont ni vendues, ni louées, ni cédées à des
                    tiers à des fins commerciales.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  6. Durée de conservation
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Les données personnelles sont conservées pendant une durée
                    n’excédant pas celle nécessaire aux finalités pour lesquelles
                    elles sont collectées.
                  </p>

                  <p>À titre indicatif :</p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">
                      les données issues des formulaires de contact sont
                      conservées pendant le temps nécessaire au traitement de la
                      demande et au suivi de la relation ;
                    </li>
                    <li className="list-disc">
                      les données techniques ou statistiques sont conservées selon
                      la durée utile au fonctionnement du service ou conformément
                      aux paramètres des outils utilisés ;
                    </li>
                    <li className="list-disc">
                      certaines données peuvent être conservées plus longtemps
                      lorsqu’une obligation légale l’impose ou en cas de nécessité
                      probatoire.
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  7. Sécurité des données
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Le responsable du traitement met en œuvre des mesures
                    techniques et organisationnelles appropriées afin de préserver
                    la sécurité, l’intégrité et la confidentialité des données
                    personnelles.
                  </p>

                  <p>
                    Malgré ces précautions, aucune transmission ou aucun stockage
                    de données sur internet ne peut être garanti comme totalement
                    sécurisé.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  8. Droits des personnes
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Conformément à la réglementation applicable, toute personne
                    concernée dispose, selon sa situation, des droits suivants :
                  </p>

                  <ul className="space-y-2 pl-5">
                    <li className="list-disc">droit d’accès à ses données ;</li>
                    <li className="list-disc">droit de rectification ;</li>
                    <li className="list-disc">droit à l’effacement ;</li>
                    <li className="list-disc">
                      droit à la limitation du traitement ;
                    </li>
                    <li className="list-disc">droit d’opposition ;</li>
                    <li className="list-disc">
                      droit à la portabilité, lorsque applicable ;
                    </li>
                    <li className="list-disc">
                      droit de retirer son consentement à tout moment lorsque le
                      traitement repose sur celui-ci.
                    </li>
                  </ul>

                  <p>
                    Ces droits peuvent être exercés en écrivant à :
                    <strong> demande@arnaudcrestey.com</strong>
                  </p>

                  <p>
                    En cas de difficulté non résolue, l’utilisateur peut
                    également introduire une réclamation auprès de la CNIL.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  9. Cookies et traceurs
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Le site peut utiliser des cookies ou autres traceurs
                    strictement nécessaires à son fonctionnement.
                  </p>

                  <p>
                    D’autres cookies ou traceurs, notamment ceux liés à la mesure
                    d’audience ou à certains services tiers, peuvent être déposés
                    sous réserve du recueil du consentement de l’utilisateur
                    lorsque celui-ci est requis par la réglementation.
                  </p>

                  <p>
                    L’utilisateur peut à tout moment gérer ses préférences via
                    les réglages de son navigateur ou, le cas échéant, via
                    l’outil de gestion du consentement mis à disposition sur le
                    site.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  10. Liens vers des sites tiers
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    Le site peut contenir des liens vers des sites externes. Le
                    responsable du traitement n’exerce aucun contrôle sur ces
                    sites et ne saurait être tenu responsable de leur politique
                    de confidentialité ou de leurs pratiques en matière de
                    données personnelles.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-ink sm:text-2xl">
                  11. Modification de la politique
                </h2>

                <div className="mt-4 space-y-4 text-[15px] leading-8 text-slate sm:text-base">
                  <p>
                    La présente politique de confidentialité peut être modifiée à
                    tout moment afin de refléter les évolutions du site, des
                    traitements mis en œuvre ou de la réglementation applicable.
                  </p>

                  <p>
                    Les utilisateurs sont invités à la consulter régulièrement.
                  </p>
                </div>
              </section>

              <section>
                <p className="text-sm leading-7 text-slate/80">
                  Dernière mise à jour : 13 avril 2026
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
