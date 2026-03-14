import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  Home,
  Zap,
  Flame,
  Bug,
  Droplet,
  FileText,
  AlertTriangle,
  Wind,
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "Diagnostic de Performance Énergétique (DPE)",
      description:
        "Évaluation de la consommation énergétique et des émissions de gaz à effet de serre de votre bien. Obligatoire pour toute vente ou location.",
      validity: "10 ans",
      mandatory: "Vente et location",
    },
    {
      icon: AlertTriangle,
      title: "Diagnostic Amiante",
      description:
        "Recherche de matériaux et produits contenant de l'amiante dans les biens construits avant le 1er juillet 1997.",
      validity: "Illimitée si négatif, 3 ans si positif",
      mandatory: "Vente et location",
    },
    {
      icon: Droplet,
      title: "Constat de Risque d'Exposition au Plomb (CREP)",
      description:
        "Détection de la présence de plomb dans les peintures des logements construits avant le 1er janvier 1949.",
      validity: "Illimitée si négatif, 1 an si positif",
      mandatory: "Vente et location",
    },
    {
      icon: Zap,
      title: "Diagnostic Électricité",
      description:
        "Contrôle de la conformité et de la sécurité de l'installation électrique intérieure pour les installations de plus de 15 ans.",
      validity: "3 ans (vente) / 6 ans (location)",
      mandatory: "Vente et location",
    },
    {
      icon: Flame,
      title: "Diagnostic Gaz",
      description:
        "Vérification de la sécurité de l'installation intérieure de gaz pour les installations de plus de 15 ans.",
      validity: "3 ans (vente) / 6 ans (location)",
      mandatory: "Vente et location",
    },
    {
      icon: Bug,
      title: "État Parasitaire (Termites)",
      description:
        "Recherche de la présence de termites et autres insectes xylophages dans les zones déclarées à risque.",
      validity: "6 mois",
      mandatory: "Vente (zones à risque)",
    },
    {
      icon: FileText,
      title: "État des Risques et Pollutions (ERP)",
      description:
        "Information sur les risques naturels, miniers, technologiques, sismiques et radon auxquels le bien est exposé.",
      validity: "6 mois",
      mandatory: "Vente et location",
    },
    /**{
      icon: Wind,
      title: "Diagnostic Assainissement",
      description:
        "Contrôle de la conformité de l'installation d'assainissement non collectif pour les biens non raccordés au tout-à-l'égout.",
      validity: "3 ans",
      mandatory: "Vente",
    },*/
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Services de Diagnostic
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Diagnostics immobiliers obligatoires conformes aux normes en
            vigueur, réalisés avec professionnalisme et rigueur sur Soustons et les Landes
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Les 6 premiers blocs en grille 2 colonnes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e8ebe0' }}>
                        <service.icon className="h-6 w-6" style={{ color: '#818958' }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {service.description}
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
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
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Le 7ème bloc centré */}
          {services[6] && (
            <div className="flex justify-center">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow w-full lg:w-[calc(50%-1rem)] max-w-2xl">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e8ebe0' }}>
                        {(() => {
                          const Icon = services[6].icon;
                          return <Icon className="h-6 w-6" style={{ color: '#818958' }} />;
                        })()}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2 text-gray-900">
                        {services[6].title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {services[6].description}
                      </p>
                      <div className="flex flex-col gap-2 text-sm">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-700">
                            Validité :
                          </span>
                          <span className="text-gray-600">
                            {services[6].validity}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-700">
                            Obligatoire :
                          </span>
                          <span className="text-gray-600">
                            {services[6].mandatory}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment Ça Marche ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: '#818958' }}>
                1
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Contact
              </h3>
              <p className="text-gray-600">
                Contactez-moi pour un devis gratuit et personnalisé
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: '#818958' }}>
                2
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Rendez-vous
              </h3>
              <p className="text-gray-600">
                Prise de rendez-vous sous 48h selon vos disponibilités
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: '#818958' }}>
                3
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Diagnostic
              </h3>
              <p className="text-gray-600">
                Intervention sur place et réalisation des diagnostics
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ backgroundColor: '#818958' }}>
                4
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-900">
                Rapport
              </h3>
              <p className="text-gray-600">
                Remise du rapport certifié
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Expertise et Professionnalisme
              </h2>
              <p className="text-gray-600 mb-4">
                Formée et certifiée pour l'ensemble des diagnostics
                immobiliers, j'interviens sur tous types de biens : maisons,
                appartements, locaux commerciaux, terrains.
              </p>
              <p className="text-gray-600 mb-4">
                Mon engagement : vous fournir des diagnostics fiables,
                conformes à la réglementation, dans les meilleurs délais.
              </p>
              <div className="border-l-4 p-4 mt-6" style={{ backgroundColor: '#e8ebe0', borderColor: '#818958' }}>
                <p className="text-gray-700">
                  <strong style={{ color: '#818958' }}>
                    Devis gratuit et sans engagement
                  </strong>
                  <br />
                  Contactez-moi pour obtenir un tarif personnalisé adapté à
                  votre projet.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2UlMjBkZXNrJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MzQ5Mjc4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Bureau MDIAGNOSTIC - Diagnostic Immobilier Professionnel Soustons"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}