import {
  AlertTriangle,
  FileText,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { DiagnosticModal } from "./DiagnosticModal";
import { Link } from "react-router";

export function Copropriete() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: AlertTriangle,
      title: "Dossier Technique Amiante (DTA)",
      description:
        "Document obligatoire pour tous les immeubles dont le permis de construire a été délivré avant le 1er juillet 1997.",
      validity: "Mise à jour tous les 3 ans",
      mandatory: "Copropriété/Syndic",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le Dossier Technique Amiante (DTA) ?</h4>
          <p className="mb-4">
            Le <strong>Dossier Technique Amiante (DTA)</strong> est un document obligatoire qui recense la présence, la localisation et l'état de conservation des matériaux et produits contenant de l'amiante dans les parties communes et privatives d'un immeuble collectif. Il concerne tous les immeubles dont le permis de construire a été délivré avant le 1er juillet 1997, date de l'interdiction de l'amiante en France.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Pourquoi le DTA est-il obligatoire ?</h4>
          <p className="mb-4">
            Le DTA est une obligation légale pour les syndics de copropriété depuis 2005. Il vise à protéger la santé des occupants, des travailleurs intervenant dans l'immeuble et des futurs acquéreurs. L'inhalation de fibres d'amiante peut provoquer de graves maladies respiratoires (amiantose, mésothéliome, cancer broncho-pulmonaire) avec des temps de latence de plusieurs décennies.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Contenu du DTA</h4>
          <p className="mb-4">
            Le DTA doit contenir plusieurs éléments obligatoires :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Repérage exhaustif</strong> : identification et localisation de tous les matériaux amiantés dans les parties communes et privatives</li>
            <li><strong>État de conservation</strong> : évaluation de l'état des matériaux (bon état, dégradé, très dégradé)</li>
            <li><strong>Programme de surveillance</strong> : recommandations pour le suivi périodique des matériaux</li>
            <li><strong>Mesures de gestion</strong> : préconisations pour la protection des occupants et des travailleurs</li>
            <li><strong>Fiche récapitulative</strong> : synthèse des résultats pour information des copropriétaires</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Mise à jour et communication</h4>
          <p className="mb-4">
            Le DTA doit être <strong>mis à jour tous les 3 ans</strong> et après tous travaux susceptibles de modifier l'état des matériaux amiantés. Il doit être tenu à la disposition des copropriétaires, des occupants, des entreprises intervenant dans l'immeuble et de toute personne concernée. Une fiche récapitulative doit être affichée dans l'immeuble.
          </p>
          <p>
            Le <strong>DTA copropriété Landes</strong> est un document essentiel pour la gestion patrimoniale et la sécurité de votre immeuble. Le syndic engage sa responsabilité en cas de défaut de DTA.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "Diagnostic Technique Global (DTG)",
      description:
        "Évaluation complète de l'état de l'immeuble comprenant l'analyse des parties communes, équipements et améliorations possibles.",
      validity: "Variable selon copropriété",
      mandatory: "Copropriété/Syndic (selon situation)",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le Diagnostic Technique Global (DTG) ?</h4>
          <p className="mb-4">
            Le <strong>Diagnostic Technique Global (DTG)</strong> est une évaluation complète de l'état général d'un immeuble en copropriété. Il dresse un état des lieux précis de la situation technique, réglementaire et financière de l'immeuble et propose un plan pluriannuel de travaux pour améliorer sa gestion et sa performance énergétique.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Quand le DTG est-il obligatoire ?</h4>
          <p className="mb-4">
            Le DTG est <strong>obligatoire dans plusieurs situations</strong> :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Immeubles de plus de 10 ans faisant l'objet d'une mise en copropriété</li>
            <li>Copropriétés en difficulté (plan de sauvegarde ou procédure d'alerte)</li>
            <li>Projet de travaux importants (rénovation énergétique, restructuration)</li>
            <li>Immeubles bénéficiant de subventions publiques pour travaux</li>
          </ul>
          <p className="mb-4">
            Même lorsqu'il n'est pas obligatoire, le DTG est fortement recommandé pour anticiper les besoins de la copropriété et optimiser la gestion patrimoniale.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Contenu du DTG</h4>
          <p className="mb-4">
            Le DTG comprend quatre parties obligatoires :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Analyse de l'état apparent</strong> : état des parties communes et équipements (toiture, façades, installations électriques, chauffage, ascenseurs)</li>
            <li><strong>État de la situation du syndicat</strong> : vérification du respect des obligations légales et réglementaires (DTA, DTG, carnet d'entretien)</li>
            <li><strong>Diagnostic de performance énergétique collectif</strong> : évaluation de la consommation énergétique et des émissions de CO2 de l'immeuble</li>
            <li><strong>Plan pluriannuel de travaux (PPT)</strong> : liste et estimation des travaux nécessaires sur les 10 prochaines années</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Avantages du DTG</h4>
          <p className="mb-4">
            Le DTG permet de :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Anticiper les travaux et éviter les dépenses imprévues</li>
            <li>Optimiser les charges de copropriété en priorisant les interventions</li>
            <li>Améliorer la performance énergétique et réduire les factures</li>
            <li>Valoriser le patrimoine immobilier de la copropriété</li>
            <li>Faciliter l'accès aux aides et subventions pour travaux</li>
          </ul>
          <p>
            Le <strong>DTG copropriété Landes</strong> est un outil stratégique pour une gestion durable et responsable de votre immeuble.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Diagnostics pour Copropriété/Syndic
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Diagnostics immobiliers obligatoires pour les copropriétés et syndics sur Soustons et les Landes
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
                onClick={() => setSelectedService(index)}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-200">
                        <service.icon className="h-6 w-6" style={{ color: '#818958' }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700">
                        Validité :
                      </span>
                      <span className="text-gray-600">
                        {service.validity}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700">
                        Obligatoire :
                      </span>
                      <span className="text-gray-600">
                        {service.mandatory}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    className="mt-auto inline-flex items-center justify-center font-semibold hover:opacity-80 transition-opacity w-full py-2 rounded-lg"
                    style={{ color: '#818958', backgroundColor: '#f9faf7' }}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Devis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'un devis pour ces prestations ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-moi pour obtenir un devis personnalisé et gratuit. J'interviens rapidement sur Soustons et dans toutes les Landes.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#818958' }}
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService !== null && (
        <DiagnosticModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
          icon={services[selectedService].icon}
          content={services[selectedService].detailedContent}
        />
      )}
    </div>
  );
}