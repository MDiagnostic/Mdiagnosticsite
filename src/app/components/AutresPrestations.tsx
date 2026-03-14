import {
  AlertTriangle,
  FileCheck,
  Building2,
} from "lucide-react";
import { useState } from "react";
import { DiagnosticModal } from "./DiagnosticModal";
import { Link } from "react-router";

export function AutresPrestations() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: AlertTriangle,
      title: "Diagnostic Amiante Avant Travaux",
      description:
        "Obligatoire avant tous travaux de rénovation, démolition ou maintenance dans un bâtiment construit avant le 1er juillet 1997.",
      validity: "Valable pour le chantier concerné",
      mandatory: "Avant travaux/démolition",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic amiante avant travaux ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic amiante avant travaux (DAAT)</strong> est un repérage exhaustif et obligatoire qui vise à identifier la présence d'amiante dans l'ensemble des matériaux et produits d'un bâtiment avant toute intervention de rénovation, démolition ou maintenance. Contrairement au diagnostic amiante classique qui se limite aux matériaux de la liste A et B, le DAAT couvre l'intégralité du bâtiment.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Pourquoi est-il obligatoire ?</h4>
          <p className="mb-4">
            Ce diagnostic protège la santé des travailleurs qui interviennent sur le chantier. L'amiante, massivement utilisée jusqu'en 1997, peut provoquer de graves maladies respiratoires lorsque ses fibres sont inhalées. Le DAAT permet d'organiser le chantier en toute sécurité, de définir les mesures de protection nécessaires et de planifier l'évacuation des déchets amiantés.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Biens et travaux concernés</h4>
          <p className="mb-4">
            Le diagnostic est <strong>obligatoire pour tous les bâtiments construits avant le 1er juillet 1997</strong>, qu'il s'agisse d'habitations, de locaux commerciaux ou industriels. Tous types de travaux sont concernés : rénovation complète ou partielle, démolition, perçage de murs, retrait de revêtements, réfection de toiture, etc.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Méthode et rapport</h4>
          <p className="mb-4">
            Le diagnostiqueur réalise un repérage complet de tous les matériaux accessibles et potentiellement concernés par les travaux. Des prélèvements sont effectués et analysés en laboratoire accrédité COFRAC. Le rapport détaillé indique :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>La localisation précise des matériaux contenant de l'amiante</li>
            <li>L'état de conservation de ces matériaux</li>
            <li>Les préconisations pour la protection des travailleurs</li>
            <li>Le mode opératoire pour l'intervention en sécurité</li>
          </ul>
          <p>
            Le <strong>diagnostic amiante avant travaux Landes</strong> est indispensable pour la conformité réglementaire de votre chantier et la sécurité de tous les intervenants.
          </p>
        </>
      ),
    },
    {
      icon: FileCheck,
      title: "Attestation RE2020",
      description:
        "Attestation de prise en compte de la réglementation environnementale 2020 pour les constructions neuves à partir de 2022.",
      validity: "Valable pour la construction concernée",
      mandatory: "Construction neuve (≥ 2022)",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que l'attestation RE2020 ?</h4>
          <p className="mb-4">
            L'<strong>attestation RE2020</strong> certifie que votre projet de construction neuve respecte la Réglementation Environnementale 2020, en vigueur depuis le 1er janvier 2022. Cette réglementation remplace la RT2012 et fixe des exigences plus ambitieuses en matière de performance énergétique et environnementale des bâtiments neufs.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Deux attestations obligatoires</h4>
          <p className="mb-4">
            La RE2020 impose la réalisation de <strong>deux attestations distinctes</strong> à des moments clés du projet :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Attestation au dépôt du permis de construire</strong> : elle démontre que le projet prend en compte les exigences RE2020 dès la conception</li>
            <li><strong>Attestation à l'achèvement des travaux</strong> : elle confirme que la construction réalisée respecte bien les performances annoncées</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Les trois piliers de la RE2020</h4>
          <p className="mb-4">
            La RE2020 s'articule autour de trois objectifs principaux :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Diminuer l'impact carbone</strong> : limitation des émissions de CO2 sur l'ensemble du cycle de vie du bâtiment</li>
            <li><strong>Améliorer la performance énergétique</strong> : réduction des besoins en énergie pour le chauffage, refroidissement, éclairage</li>
            <li><strong>Garantir le confort d'été</strong> : adaptation au changement climatique et limitation de la surchauffe estivale</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Qui réalise l'attestation ?</h4>
          <p className="mb-4">
            L'attestation RE2020 doit être établie par un <strong>professionnel certifié</strong> utilisant un logiciel réglementaire validé. Elle s'appuie sur une étude thermique complète qui calcule les indicateurs de performance (Bbio, Cep, Ic énergie, Ic construction, DH) et vérifie leur conformité aux seuils réglementaires.
          </p>
          <p>
            L'<strong>attestation RE2020 Landes</strong> est indispensable pour obtenir le certificat de conformité et la réception de votre construction neuve.
          </p>
        </>
      ),
    },
    {
      icon: Building2,
      title: "Attestation RT2012",
      description:
        "Attestation de prise en compte de la réglementation thermique 2012 pour les constructions neuves de 2013 à 2021.",
      validity: "Valable pour la construction concernée",
      mandatory: "Construction neuve (2013-2021)",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que l'attestation RT2012 ?</h4>
          <p className="mb-4">
            L'<strong>attestation RT2012</strong> certifie que votre projet de construction neuve respecte la Réglementation Thermique 2012, applicable aux permis de construire déposés entre le 1er janvier 2013 et le 31 décembre 2021. Cette réglementation vise à limiter la consommation d'énergie primaire des bâtiments neufs à un maximum de 50 kWh/m²/an en moyenne.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Les deux attestations obligatoires</h4>
          <p className="mb-4">
            Comme pour la RE2020, la RT2012 impose <strong>deux attestations</strong> à fournir à des moments précis :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Attestation au dépôt du permis de construire</strong> : justifie que le projet intègre les exigences RT2012 dès sa conception</li>
            <li><strong>Attestation à l'achèvement des travaux</strong> : certifie la conformité de la construction achevée avec l'étude thermique initiale</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Les trois exigences de la RT2012</h4>
          <p className="mb-4">
            La RT2012 repose sur trois indicateurs de performance à respecter :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Bbio (Besoin Bioclimatique)</strong> : mesure la qualité de la conception bioclimatique du bâtiment (orientation, isolation, apports solaires)</li>
            <li><strong>Cep (Consommation d'Énergie Primaire)</strong> : plafonne à 50 kWh/m²/an la consommation pour le chauffage, refroidissement, eau chaude, éclairage et auxiliaires</li>
            <li><strong>Tic (Température Intérieure Conventionnelle)</strong> : garantit le confort d'été en limitant la température maximale atteinte en période chaude</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Étude thermique et attestation</h4>
          <p className="mb-4">
            L'attestation RT2012 s'appuie sur une <strong>étude thermique réglementaire</strong> réalisée par un bureau d'études thermiques ou un diagnostiqueur certifié. Cette étude calcule les trois indicateurs (Bbio, Cep, Tic) et vérifie leur conformité aux exigences. Le rapport détaille les caractéristiques du bâtiment, les systèmes installés et les performances attendues.
          </p>
          <p>
            L'<strong>attestation RT2012 Landes</strong> est un document obligatoire pour obtenir le certificat de conformité de votre construction et finaliser votre projet immobilier.
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
            Autres Prestations
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Diagnostics spécifiques pour vos projets de travaux et situations particulières sur Soustons et les Landes
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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
    </div>
  );
}