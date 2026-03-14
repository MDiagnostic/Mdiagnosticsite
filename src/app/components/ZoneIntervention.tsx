import { MapPin, Navigation, Phone, Mail, ArrowRight, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router";
import { SEO } from "./SEO";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ZoneIntervention() {
  // Communes organisées par secteur géographique
  const zones = [
    {
      secteur: "Côte Nord",
      color: "#818958",
      communes: [
        "Mimizan", "Bias", "Parentis-en-Born", "Biscarrosse", "Sanguinet",
        "Aureilhan", "Saint-Girons-Plage"
      ]
    },
    {
      secteur: "Côte Sud",
      color: "#c2cc94",
      communes: [
        "Hossegor", "Capbreton", "Seignosse", "Vieux-Boucau-les-Bains", 
        "Messanges", "Azur", "Moliets-et-Maa", "Soustons", "Tosse"
      ]
    },
    {
      secteur: "Agglomération Dacquoise",
      color: "#9ba56a",
      communes: [
        "Dax", "Saint-Paul-lès-Dax", "Pontonx-sur-l'Adour", "Saint-Vincent-de-Tyrosse",
        "Narrosse", "Tarnos", "Ondres", "Labenne"
      ]
    },
    {
      secteur: "Pays Basque limitrophe",
      color: "#a8b278",
      communes: [
        "Bayonne", "Anglet", "Biarritz", "Bidart", "Saint-Jean-de-Luz",
        "Hendaye", "Urrugne", "Guéthary"
      ]
    },
    {
      secteur: "Intérieur des Landes",
      color: "#b5bf86",
      communes: [
        "Castets", "Léon", "Lit-et-Mixe", "Saint-Julien-en-Born", "Linxe",
        "Magescq", "Tartas", "Saint-Martin-de-Seignanx"
      ]
    },
    {
      secteur: "Secteur Élargi",
      color: "#d4dba8",
      communes: [
        "Mont-de-Marsan", "Saint-Pierre-du-Mont", "Hagetmau", "Aire-sur-l'Adour",
        "Peyrehorade", "Saint-Vincent-de-Paul", "Orthevielle"
      ]
    }
  ];

  const diagnostics = [
    "DPE (Diagnostic de Performance Énergétique)",
    "Diagnostic Amiante",
    "Diagnostic Plomb (CREP)",
    "Diagnostic Électricité",
    "Diagnostic Gaz",
    "Diagnostic Termites",
    "État des Risques et Pollutions (ERP)",
    "Mesurage Loi Carrez / Loi Boutin"
  ];

  const avantages = [
    {
      icon: MapPin,
      titre: "Couverture complète",
      description: "Intervention sur toute la côte landaise et le Pays Basque"
    },
    {
      icon: Clock,
      titre: "Rendez-vous rapide",
      description: "Disponibilité sous 48h dans toute la zone d'intervention"
    },
    {
      icon: CheckCircle,
      titre: "Tarif dégressif",
      description: "Réduction pour plusieurs diagnostics ou biens groupés"
    }
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Zone d'Intervention - MDIAGNOSTIC | Hossegor, Capbreton, Dax, Bayonne, Mimizan"
        description="MDIAGNOSTIC intervient sur toute la côte landaise et basque : Hossegor, Capbreton, Dax, Bayonne, Anglet, Biarritz, Mimizan, Vieux-Boucau. Tous diagnostics immobiliers : DPE, amiante, plomb, électricité, gaz, termites dans les Landes (40)."
        keywords="diagnostic immobilier Hossegor, DPE Capbreton, diagnostic Dax, diagnostic Bayonne, diagnostic Anglet, diagnostic Biarritz, diagnostic Mimizan, diagnostic Vieux-Boucau, diagnostic Seignosse, diagnostic Landes 40, zone intervention diagnostiqueur"
        canonical="https://www.mdiagnostic.fr/zone-intervention"
      />

      {/* Hero Section */}
      <section className="relative text-white" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-8 w-8" />
              <span className="text-lg font-semibold">MDIAGNOSTIC - Soustons</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zone d'Intervention
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Diagnostics immobiliers sur toute la côte landaise et basque, l'agglomération dacquoise et l'intérieur des Landes
            </p>
          </div>
        </div>
      </section>

      {/* Communes par Secteur */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Communes Desservies
            </h2>
            <p className="text-xl text-gray-600">
              Plus de 40 communes dans les Landes (40) et le Pays Basque (64)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zones.map((zone, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: zone.color }}
                  ></div>
                  <h3 className="font-semibold text-xl text-gray-900">
                    {zone.secteur}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {zone.communes.map((commune, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#818958' }} />
                      <span>{commune}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Votre commune ne figure pas dans la liste ?
            </h3>
            <p className="text-lg text-gray-600 text-center mb-6">
              Cette liste n'est pas exhaustive. N'hésitez pas à me contacter pour vérifier si j'interviens dans votre commune.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white border-2 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                style={{ color: '#818958', borderColor: '#818958' }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Envoyer un message
              </Link>
              <a
                href="tel:0777782659"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#818958' }}
              >
                <Phone className="mr-2 h-5 w-5" />
                07 77 78 26 59
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostics Disponibles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diagnostics Disponibles dans Toute la Zone
            </h2>
            <p className="text-xl text-gray-600">
              Tous les diagnostics immobiliers obligatoires pour vente, location et copropriété
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {diagnostics.map((diagnostic, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
              >
                <CheckCircle className="h-6 w-6 flex-shrink-0" style={{ color: '#818958' }} />
                <span className="font-medium text-gray-900">{diagnostic}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#818958' }}
            >
              Découvrir tous les services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi Choisir MDIAGNOSTIC ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="text-center">
                <div 
                  className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" 
                  style={{ backgroundColor: '#e8ebe0' }}
                >
                  <avantage.icon className="h-8 w-8" style={{ color: '#818958' }} />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                  {avantage.titre}
                </h3>
                <p className="text-gray-600">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Text Section - Mentions naturelles pour Google */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Diagnostics Immobiliers sur la Côte Landaise et le Pays Basque
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#818958' }}></div>
          </div>

          <div className="space-y-8">
            {/* Intro */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>MDIAGNOSTIC</strong>, diagnostiqueuse certifiée basée à <strong>Soustons (40140)</strong>, vous accompagne pour tous vos diagnostics immobiliers obligatoires dans les <strong>Landes (40)</strong> et le <strong>Pays Basque (64)</strong>.
              </p>
            </div>

            {/* Hossegor/Capbreton/Dax */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4" style={{ borderColor: '#818958' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                DPE, Amiante, Plomb : Intervention Rapide à Hossegor, Capbreton et Dax
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Que vous vendiez ou louiez un bien immobilier à <strong>Hossegor</strong>, <strong>Capbreton</strong>, <strong>Dax</strong>, <strong>Saint-Paul-lès-Dax</strong> ou dans les communes environnantes, je réalise l'ensemble de vos <strong>diagnostics DPE</strong>, <strong>diagnostics amiante</strong>, <strong>diagnostics plomb (CREP)</strong>, ainsi que les diagnostics <strong>électricité</strong>, <strong>gaz</strong> et <strong>termites</strong>.
              </p>
            </div>

            {/* Pays Basque */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4" style={{ borderColor: '#9ba56a' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Secteur Bayonne, Anglet, Biarritz : Diagnostiqueur Certifié Pays Basque
              </h3>
              <p className="text-gray-700 leading-relaxed">
                J'interviens également sur le secteur du <strong>Pays Basque</strong> : <strong>Bayonne</strong>, <strong>Anglet</strong>, <strong>Biarritz</strong>, <strong>Bidart</strong>, <strong>Saint-Jean-de-Luz</strong> et <strong>Hendaye</strong>. Diagnostics conformes à la réglementation en vigueur, rapports détaillés et remise sous 24 à 48h.
              </p>
            </div>

            {/* Mimizan/Biscarrosse */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border-l-4" style={{ borderColor: '#a8b278' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mimizan, Biscarrosse, Vieux-Boucau : Diagnostics sur la Côte Nord
              </h3>
              <p className="text-gray-700 leading-relaxed">
                De <strong>Mimizan</strong> à <strong>Vieux-Boucau-les-Bains</strong> en passant par <strong>Biscarrosse</strong>, <strong>Sanguinet</strong>, <strong>Parentis-en-Born</strong>, <strong>Messanges</strong> et <strong>Seignosse</strong>, MDIAGNOSTIC assure vos diagnostics immobiliers avec réactivité et professionnalisme.
              </p>
            </div>

            {/* CTA Devis */}
            <div className="rounded-2xl shadow-lg p-8 text-center" style={{ background: 'linear-gradient(135deg, #818958 0%, #6b7148 100%)' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Demandez Votre Devis Gratuit
              </h3>
              <p className="text-white text-lg mb-6 opacity-95">
                Vous avez un projet immobilier à <strong>Hossegor</strong>, <strong>Capbreton</strong>, <strong>Dax</strong>, <strong>Bayonne</strong> ou ailleurs dans les Landes ? Contactez-moi dès maintenant pour un devis personnalisé et sans engagement.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all"
                style={{ color: '#818958' }}
              >
                Demander un devis gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}