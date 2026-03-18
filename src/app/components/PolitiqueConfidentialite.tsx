import { Shield, Mail, Database, Eye, Trash2, FileText } from "lucide-react";

export function PolitiqueConfidentialite() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Protection de vos données personnelles - Conformité RGPD
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
            
            {/* Introduction */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-8 w-8" style={{ color: '#818958' }} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Engagement de confidentialité
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                MDIAGNOSTIC s'engage à protéger la vie privée de ses utilisateurs et clients. Cette politique 
                de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles 
                conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
            </div>

            {/* Collecte des données */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8" style={{ color: '#818958' }} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Données collectées
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Nous collectons uniquement les données nécessaires à la réalisation de nos prestations :
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Via le formulaire de contact :</strong> nom, prénom, email, téléphone, message</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Via le formulaire de devis :</strong> type de transaction, informations sur le bien immobilier, surface, année de construction, documents PDF (plans, diagnostics existants)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Cookies techniques :</strong> nécessaires au bon fonctionnement du site (stockage local du consentement cookies)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Données de navigation :</strong> nous utilisons Google Analytics 4 pour des statistiques anonymisées (pages visitées, durée de visite, appareil utilisé). Ces données sont collectées uniquement avec votre consentement et les adresses IP sont anonymisées.</span>
                </li>
              </ul>
            </div>

            {/* Utilisation des données */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-8 w-8" style={{ color: '#818958' }} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Utilisation des données
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Vos données personnelles sont utilisées exclusivement pour :
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Répondre à vos demandes de devis et d'information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Réaliser les diagnostics immobiliers commandés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Vous contacter dans le cadre de nos prestations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Respecter nos obligations légales et réglementaires</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Améliorer notre site web grâce à des statistiques anonymisées (Google Analytics 4)</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-3">
                <strong>Nous ne vendons, ne louons et ne partageons jamais vos données avec des tiers à des fins commerciales.</strong>
              </p>
            </div>

            {/* Conservation */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8" style={{ color: '#818958' }} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Conservation des données
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Les durées de conservation appliquées sont les suivantes :
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Demandes de contact :</strong> 3 ans à compter du dernier contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Devis et documents PDF :</strong> suppression automatique après 30 jours (nettoyage automatique conforme RGPD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Données clients (prestations réalisées) :</strong> 10 ans conformément aux obligations légales applicables aux diagnostics immobiliers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Cookies de consentement :</strong> 13 mois maximum</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-3">
                Vous pouvez demander la suppression anticipée de vos données à tout moment, sauf si leur conservation est requise par la loi.
              </p>
            </div>

            {/* Droits */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Trash2 className="h-8 w-8" style={{ color: '#818958' }} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Vos droits
                </h2>
              </div>
              <p className="text-gray-600 mb-3">
                Conformément au RGPD, vous disposez des droits suivants :
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Droit d'accès :</strong> consulter les données que nous détenons sur vous</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Droit de rectification :</strong> corriger vos données inexactes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Droit à l'effacement :</strong> demander la suppression de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Droit d'opposition :</strong> vous opposer au traitement de vos données</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Droit à la portabilité :</strong> récupérer vos données dans un format structuré</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Droit de réclamation :</strong> introduire une réclamation auprès de la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#818958' }}>www.cnil.fr</a>)</span>
                </li>
              </ul>
            </div>

            {/* Sous-traitants */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sous-traitants et transferts de données
              </h3>
              <p className="text-gray-600 mb-3">
                Pour assurer le fonctionnement de notre site et de nos services, nous faisons appel aux sous-traitants suivants :
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Supabase :</strong> hébergement sécurisé de la base de données et stockage des documents (serveurs situés en Europe et conformes RGPD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>EmailJS :</strong> envoi sécurisé des emails de contact et de devis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span><strong>Vercel :</strong> hébergement web du site (serveurs CDN mondiaux avec protection DDoS)</span>
                </li>
              </ul>
              <p className="text-gray-600 mt-3">
                Ces sous-traitants sont sélectionnés pour leur conformité RGPD et leurs garanties de sécurité. Aucune donnée n'est transférée hors de l'Union Européenne sans garanties appropriées.
              </p>
            </div>

            {/* Contact */}
            <div className="border-l-4 p-6 mt-8" style={{ backgroundColor: '#f9faf7', borderColor: '#818958' }}>
              <div className="flex items-center gap-3 mb-4">
                <Mail className="h-8 w-8" style={{ color: '#818958' }} />
                <h2 className="text-2xl font-bold text-gray-900">
                  Exercer vos droits
                </h2>
              </div>
              <p className="text-gray-600 mb-4">
                Pour exercer vos droits ou pour toute question concernant le traitement de vos données personnelles, 
                vous pouvez nous contacter :
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Par email :</strong> <a href="mailto:contact.mdiagnostic@gmail.com" className="hover:underline" style={{ color: '#818958' }}>contact.mdiagnostic@gmail.com</a></p>
                <p><strong>Responsable du traitement :</strong> MDIAGNOSTIC - Soustons (40140)</p>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                Nous nous engageons à répondre à votre demande dans un délai d'un mois maximum.
              </p>
            </div>

            {/* Sécurité */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sécurité des données
              </h3>
              <p className="text-gray-600">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger 
                vos données contre tout accès non autorisé, perte, destruction ou divulgation accidentelle.
              </p>
            </div>

            {/* Mise à jour */}
            <div className="text-sm text-gray-500 pt-4 border-t">
              <p>
                <strong>Dernière mise à jour :</strong> 11 mars 2026
              </p>
              <p className="mt-2">
                Cette politique de confidentialité peut être modifiée à tout moment pour rester conforme à la réglementation. 
                Nous vous invitons à la consulter régulièrement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}