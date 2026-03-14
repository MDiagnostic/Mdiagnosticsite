import { FileText, Scale, ShieldCheck } from "lucide-react";
import { SEO } from "./SEO";

export function CGV() {
  return (
    <>
      <SEO
        title="Conditions Générales de Vente (CGV) - MDIAGNOSTIC"
        description="Consultez nos Conditions Générales de Vente pour les diagnostics immobiliers : modalités de commande, prix, paiement, responsabilités et garanties."
        keywords="CGV, conditions générales vente, diagnostics immobiliers, modalités paiement, responsabilité diagnostiqueur"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-4xl mx-auto relative">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#818958] to-[#6a7249] rounded-full mb-6 shadow-lg">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conditions G��nérales de Vente
            </h1>
            <p className="text-xl text-gray-600">
              MDIAGNOSTIC - Diagnostics Techniques Immobiliers
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Conformément aux articles L.271-3 et R.271-3 du Code de la construction et de l'habitation
            </p>
          </div>

          {/* Informations société */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4" style={{ borderColor: '#818958' }}>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-gray-900">SASU MDIAGNOSTIC</p>
                <p className="text-gray-600">30 Rue Simone Veil</p>
                <p className="text-gray-600">40140 SOUSTONS</p>
              </div>
              <div>
                <p className="text-gray-600"><strong>SIREN :</strong> 100 486 927</p>
                <p className="text-gray-600"><strong>Tél :</strong> 07 77 78 26 59</p>
                <p className="text-gray-600"><strong>Email :</strong> contact.mdiagnostic@gmail.com</p>
                <p className="text-gray-600"><strong>Assurance :</strong> ALLIANZ n° 64715683</p>
              </div>
            </div>
          </div>

          {/* Contenu des CGV */}
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            {/* Article 1 */}
            <section id="article-1">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 1 – Objet
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les présentes Conditions Générales de Vente (CGV) définissent les modalités selon lesquelles la société <strong>MDIAGNOSTIC</strong> réalise des prestations de diagnostics techniques immobiliers demandées par ses clients.
                </p>
                <p>
                  Toute commande de prestation implique l'adhésion pleine et entière du client aux présentes CGV.
                </p>
                <p>
                  Conformément aux articles L.271-3 et R.271-3 du Code de la construction et de l'habitation, <strong>MDIAGNOSTIC atteste</strong> :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>disposer des compétences, certifications et moyens nécessaires à la réalisation des diagnostics immobiliers ;</li>
                  <li>bénéficier d'une assurance en responsabilité civile professionnelle vis-à-vis des entreprises susceptibles de réaliser des travaux ;</li>
                  <li>être titulaire d'une assurance responsabilité civile professionnelle couvrant les conséquences de ses interventions.</li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 2 */}
            <section id="article-2">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 2 – Commande
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La commande devra être ferme et définie après acceptation du devis, signature de la commande par les parties et transmission de la demande de diagnostic.
                </p>
                <p>
                  Le client recevra un document lui indiquant l'acceptation sans réserves des présentes Conditions Générales de Vente.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 3 */}
            <section id="article-3">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 3 – Exécution des diagnostics
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les diagnostics sont réalisés conformément à la réglementation en vigueur à la date de paiement de l'acompte.
                </p>
                <p>
                  Toutes les demandes de prestations complémentaires, modifications du bien au moment de l'intervention seront effectivement réalisées, sans délai et à des prix et obligations complémentaires.
                </p>
                <p>
                  Les surfaces, volumes ou bois à diagnostiquer sont ceux communiqués par le donneur d'ordre, lequel reste responsable de l'exactitude des informations transmises.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 5 */}
            <section id="article-5">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 5 – Obligations du client
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Le client s'engage à :</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>fournir toutes les informations précontractuelles comprenant le bien ;</li>
                  <li>garantir l'accès à l'ensemble des locaux concernés ;</li>
                  <li>informer l'opérateur de tout danger potentiel pouvant affecter l'intervention.</li>
                </ul>
                <p>
                  Le client doit également informer les occupants de la date et de l'heure de l'intervention.
                </p>
                <p>
                  En cas d'impossibilité d'accès au bien ou si l'information préalable s'avère fausse, le déplacement et le temps d'intervention pourront être facturés.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 6 */}
            <section id="article-6">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 6 – Prix
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les prix applicables sont ceux indiqués dans le devis accepté par le client. Ils sont exprimés en euros toutes taxes comprises (TTC).
                </p>
                <p>
                  Toute prestation supplémentaire non prévue dans la commande initiale pourra faire l'objet d'une facturation complémentaire, notamment :
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Prestations liées à des difficultés d'accès (appartement en étage, etc.) ;</li>
                  <li>Extension ou périmètre du diagnostic.</li>
                </ul>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 6-bis */}
            <section id="article-6-bis">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 6-bis – Frais de déplacement
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les frais de déplacement sont inclus dans le devis pour les interventions dans un rayon défini autour de Soustons.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 7 */}
            <section id="article-7">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 7 – Modalités de paiement
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Sauf condition particulière, le paiement est exigible soit à la commande, soit au plus tard le jour de l'intervention.
                </p>
                <p>
                  Les règlements peuvent être effectués par virement bancaire, chèque ou espèces dans la limite de 1 000 € pour les particuliers.
                </p>
                <p>
                  Une facture est remise au client le jour de la prestation.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 8 */}
            <section id="article-8">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 8 – Retard de paiement
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Tout retard de paiement entraînera l'application des pénalités calculées sur la base de trois fois le taux d'intérêt légal à compter du jour suivant la date d'échéance.
                </p>
                <p>
                  Une indemnité forfaitaire professionnelle de <strong>40 € pour frais de recouvrement</strong> sera également due conformément aux articles L.441-10 et D.441-5 du Code de commerce.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 9 */}
            <section id="article-9">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 9 – Annulation ou report de rendez-vous
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Toute annulation doit être signalée au minimum <strong>24 heures avant</strong> le rendez-vous.
                </p>
                <p>
                  À défaut, des frais forfaitaires de <strong>75 € TTC</strong> pourront être facturés.
                </p>
                <p>
                  En cas de retard du client supérieur à 30 minutes, l'intervention pourra être annulée et reprogrammée.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 10 */}
            <section id="article-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 10 – Délais d'intervention
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les dates d'intervention et de remise de rapports sont données à titre indicatif. MDIAGNOSTIC met en œuvre tous les moyens raisonnables pour les respecter sans que cela ne constitue un engagement contractuel.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 11 */}
            <section id="article-11">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 11 – Limitation de responsabilité
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La responsabilité de MDIAGNOSTIC est strictement limitée à la mission confiée, aux éléments visibles et accessibles. MDIAGNOSTIC ne garantit pas l'absence de désordres au moment du diagnostic.
                </p>
                <p>
                  Les diagnostics réalisés ne constituent qu'une expertise technique complète du bâtiment ni une garantie de conformité du bien.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 12 */}
            <section id="article-12">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 12 – Éléments non visibles ou non accessibles
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  MDIAGNOSTIC est réalisé sur les parties visibles et accessibles du bien au moment de l'intervention.
                </p>
                <p>
                  La détection d'éléments particuliers (amiante, plomb, termites, gaz, électricité, etc.) dans les parties visibles et accessibles du bien ne permet pas d'affirmer leur absence dans les parties non visibles ou non accessibles (sous planchers, des cloisons ou tout autre élément ne permettant pas l'accès direct).
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 13 */}
            <section id="article-13">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 13 – Informations communiquées par le client
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les informations administratives, judiciaires et techniques nécessaires à la réalisation des prestations sont réputées exactes et exhaustives. En cas d'erreur ou d'omission, MDIAGNOSTIC ne saurait être tenu responsable des conséquences d'informations inexactes, fausses ou dissimulées.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 14 */}
            <section id="article-14">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 14 – Opposabilité et utilisation des rapports
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les rapports de diagnostic sont établis exclusivement pour le bien désigné dans l'ordre de mission et à la date de réalisation de la prestation.
                </p>
                <p>
                  Ils sont strictement liés à la période de validité imposée par la réglementation immobilière pour laquelle ils ont été réalisés à l'initiative du vendeur ou bailleur.
                </p>
                <p>
                  Toute utilisation du rapport dans un autre contexte ne saurait engager la responsabilité de MDIAGNOSTIC.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 15 */}
            <section id="article-15">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 15 – Utilisation par des tiers
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Les diagnostics immobiliers ne sont transmis qu'aux acquéreurs, locataires, notaires ou professionnels de l'immobilier (agences d'achats et agences immobilières).
                </p>
                <p>
                  Toutefois, la responsabilité de MDIAGNOSTIC ne pourra être engagée que par le donneur d'ordre ayant commandé la mission, sauf disposition légale contraire.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 16 */}
            <section id="article-16">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 16 – Évolution de l'état du bien
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Un diagnostic reflète l'état apparent du bien au jour de l'intervention.
                </p>
                <p>
                  Toute modification ultérieure du bien, travaux ou dégradations (intempéries, vente), la date des diagnostics se substituera toujours à la responsabilité éventuelle de MDIAGNOSTIC.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 17 */}
            <section id="article-17">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 17 – Assurance
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  MDIAGNOSTIC est titulaire d'une assurance responsabilité civile professionnelle couvrant les conséquences de ses interventions auprès de <strong>ALLIANZ</strong> sous le numéro <strong>64715683</strong>.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 18 - RGPD */}
            <section id="article-18">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 18 – Données personnelles (RGPD)
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), le client demeure propriétaire de ses données personnelles nécessaires à l'établissement des rapports et au respect des obligations légales.
                </p>
                <p>
                  Conformément au Règlement Général sur la Protection des Données (RGPD), le client dispose d'un droit d'accès, de rectification, d'effacement et d'opposition concernant ses données personnelles.
                </p>
                <p>
                  Les données peuvent être conservées pendant une durée maximale de <strong>10 ans</strong> afin de respecter les obligations légales ou des exigences réglementaires.
                </p>
                <p>
                  Pour exercer ces droits, contactez-nous à : <a href="mailto:contact.mdiagnostic@gmail.com" className="text-blue-600 hover:underline">contact.mdiagnostic@gmail.com</a>
                </p>
                <p className="text-sm text-gray-600">
                  Pour plus d'informations, consultez notre <a href="/politique-confidentialite" className="text-blue-600 hover:underline">Politique de Confidentialité</a>.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 19 */}
            <section id="article-19">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 19 – Responsabilité civile
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  La responsabilité de MDIAGNOSTIC ne pourra être engagée qu'en cas de force majeure telle que définie par l'article 1218 du Code civil.
                </p>
              </div>
            </section>

            <hr className="border-gray-200" />

            {/* Article 20 - Litiges */}
            <section id="article-20">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
                Article 20 – Litiges et médiation
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  En cas de litige, les parties s'efforceront de trouver une solution amiable.
                </p>
                <p>
                  À défaut d'accord amiable, les tribunaux compétents seront ceux du ressort du siège social de MDIAGNOSTIC.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Médiation de la consommation</h3>
                  <p className="text-sm text-blue-800">
                    Conformément à l'article L612-1 du Code de la consommation, en cas de litige non résolu à l'amiable, vous pouvez recourir gratuitement à un médiateur de la consommation.
                  </p>
                  <p className="text-sm text-blue-800 mt-2">
                    <strong>Informations à venir :</strong> MDIAGNOSTIC est en cours d'adhésion à un service de médiation agréé. Les coordonnées du médiateur seront communiquées prochainement.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Pied de page */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200 text-center text-sm text-gray-600">
            <p className="mb-2">
              <strong>Dernière mise à jour :</strong> Mars 2026
            </p>
            <p>
              Ces conditions générales de vente sont conformes à la réglementation en vigueur et peuvent être modifiées à tout moment.
            </p>
            <p className="mt-4">
              <a href="/mentions-legales" className="text-blue-600 hover:underline mr-4">Mentions légales</a>
              <a href="/politique-confidentialite" className="text-blue-600 hover:underline mr-4">Politique de confidentialité</a>
              <a href="/gestion-cookies" className="text-blue-600 hover:underline">Gestion des cookies</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}