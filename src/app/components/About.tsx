import { Building2, Award, Shield, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { SEO } from "./SEO";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const qualifications = [
  {
    icon: Award,
    title: "Certifications",
    description: "Certifiée par LCP pour tous types de diagnostics immobiliers",
  },
  {
    icon: Shield,
    title: "Assurance RC Pro",
    description: "Responsabilité Civile Professionnelle Allianz - Contrat n°64715683",
  },
  {
    icon: Building2,
    title: "Formation continue",
    description: "Mise à jour régulière des compétences et de la réglementation",
  },
  {
    icon: Clock,
    title: "Disponibilité",
    description: "Interventions rapides sous 48h selon disponibilités",
  },
];

const values = [
  {
    title: "Rigueur",
    description: "Diagnostics précis et conformes aux normes en vigueur",
  },
  {
    title: "Transparence",
    description: "Explications claires et rapports détaillés",
  },
  {
    title: "Proximité",
    description: "Connaissance du territoire landais et disponibilité",
  },
  {
    title: "Indépendance",
    description: "Expertise objective et impartiale",
  },
];

export function About() {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("mdiagnostic-cookie-consent");
    setCookiesAccepted(consent === "accepted");
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("mdiagnostic-cookie-consent", "accepted");
    localStorage.setItem("mdiagnostic-cookie-consent-date", new Date().toISOString());
    setCookiesAccepted(true);
  };

  return (
    <div className="w-full">
      <SEO 
        title="À Propos - MDIAGNOSTIC | Diagnostiqueuse Immobilière Certifiée Soustons Landes"
        description="Diagnostiqueuse immobilière certifiée et assurée basée à Soustons dans les Landes (40). DUT Génie Civil, licence en énergétique. Intervention dans un rayon de 50 km : Hossegor, Capbreton, Dax et toutes les Landes. Rigueur, transparence et expertise locale."
        keywords="diagnostiqueuse immobilière Soustons, diagnostiqueur certifié Landes 40, expert diagnostic Hossegor, COFRAC, assurance professionnelle, DUT Génie Civil, énergétique, diagnostic immobilier Dax"
        canonical="https://www.mdiagnostic.fr/a-propos"
      />
      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">À Propos</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Votre diagnostiqueuse immobilière certifiée dans les Landes
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659353218851-abe20addb330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGluc3BlY3RvciUyMGNsaXBib2FyZHxlbnwxfHx8fDE3NzMxNTA3Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Diagnostiqueuse professionnelle"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mon Parcours
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Passionnée par l'immobilier et soucieuse de la sécurité des
                  biens et des personnes, j'ai choisi de me spécialiser dans le
                  diagnostic immobilier.
                </p>
                <p>
                  Diplômée d'un DUT Génie Civil et Construction Durable ainsi que 
                  d'une licence spécialisée en énergétique et après une formation 
                  complète et l'obtention de toutes mes certifications, j'exerce 
                  en tant que diagnostiqueuse immobilière indépendante. 
                  Mon objectif est d'accompagner particuliers et professionnels dans 
                  leurs projets de vente ou de location en toute sérénité.
                  
                </p>
                <p>
                  Chaque intervention est pour moi l'occasion d'apporter mon
                  expertise technique tout en maintenant une relation de
                  proximité et de confiance avec mes clients.
                </p>
                <p>
                  Je m'engage à réaliser vos diagnostics dans le respect, avec rigueur 
                  et professionnalisme, tout en restant à votre écoute pour répondre à 
                  vos questions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Qualifications & Garanties
            </h2>
            <p className="text-xl text-gray-600">
              Expertise certifiée et assurée pour votre tranquillité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                  <qual.icon className="h-8 w-8" style={{ color: '#818958' }} />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-gray-900">
                  {qual.title}
                </h3>
                <p className="text-gray-600 text-sm">{qual.description}</p>
                {qual.title === "Certifications" && (
                  <Link
                    to="/certifications"
                    className="inline-block mt-4 text-sm font-medium hover:underline"
                    style={{ color: '#818958' }}
                  >
                    Voir le certificat →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mes Valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-lg border-l-4"
                style={{ backgroundColor: '#e8ebe0', borderColor: '#818958' }}
              >
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Zone d'Intervention
                </h2>
                <p className="text-gray-600 mb-4">
                  J'interviens dans un rayon de 50 km autour de Soustons pour réaliser vos
                  diagnostics immobiliers dans tout le département des Landes, que vous soyez un particulier, une
                  agence immobilière ou un notaire.
                </p>
                <p className="text-gray-600 mb-4">
                  Basée à Soustons, je connais parfaitement le territoire landais et les spécificités
                  des biens de la région, qu'il s'agisse de villas en bord de mer ou de maisons
                  traditionnelles landaises.
                </p>
                <div className="border-l-4 p-4" style={{ backgroundColor: '#e8ebe0', borderColor: '#818958' }}>
                  <p className="font-semibold text-gray-900 mb-2">
                    Déplacements rapides
                  </p>
                  <p className="text-gray-600">
                    Interventions possibles sous 48h selon disponibilités
                  </p>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                {cookiesAccepted ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11541.878697677832!2d-1.3419735!3d43.7513871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12af38596fa9d4c9%3A0xc7a04291985816e4!2s30%20Rue%20Simone%20Veil%2C%2040140%20Soustons%2C%20France!5e0!3m2!1sfr!2sfr!4v1710425000000!5m2!1sfr!2sfr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation MDIAGNOSTIC à Soustons"
                  ></iframe>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center bg-gray-100 p-8 text-center">
                    <MapPin className="h-16 w-16 text-gray-400 mb-4" />
                    <h3 className="font-semibold text-lg text-gray-900 mb-2">
                      Carte non disponible
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      La carte Google Maps nécessite votre consentement pour afficher du contenu tiers.
                    </p>
                    <div className="space-y-3 w-full max-w-xs">
                      <button
                        onClick={handleAcceptCookies}
                        className="w-full px-4 py-2 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: '#818958' }}
                      >
                        Accepter et afficher la carte
                      </button>
                      <p className="text-xs text-gray-500">
                        ou consultez{" "}
                        <Link to="/gestion-cookies" className="underline" style={{ color: '#818958' }}>
                          vos préférences cookies
                        </Link>
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-300">
                        <p className="font-semibold text-gray-900 text-sm mb-1">Notre adresse :</p>
                        <p className="text-gray-700 text-sm">
                          30 Rue Simone Veil<br />
                          40140 Soustons<br />
                          France
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}