import { Link } from "react-router";
import { SEO } from "./SEO";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Clock, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface VillePageProps {
  ville: string;
  villeSlug: string;
  departement: string;
  codePostal?: string;
  description?: string;
  particularites?: string[];
  voisines?: string[];
}

export function VillePage({
  ville,
  villeSlug,
  departement,
  codePostal,
  description,
  particularites = [],
  voisines = []
}: VillePageProps) {

  // Générer tous les mots-clés possibles pour le SEO
  const keywords = [
    `diagnostic immobilier ${ville}`,
    `diagnostiqueur ${ville}`,
    `diagnostiqueur immobilier ${ville}`,
    `diagnostic ${ville}`,
    `DPE ${ville}`,
    `diagnostic amiante ${ville}`,
    `diagnostic plomb ${ville}`,
    `diagnostic électricité ${ville}`,
    `diagnostic gaz ${ville}`,
    `diagnostic termites ${ville}`,
    `diagnostics obligatoires ${ville}`,
    `expert diagnostic ${ville}`,
    `diagnostic vente ${ville}`,
    `diagnostic location ${ville}`,
    `diagnostiqueur certifié ${ville}`,
    `diagnostic immobilier ${codePostal || departement}`,
    `diagnostics techniques ${ville}`,
    `DDT ${ville}`,
    `diagnostiqueur agrée ${ville}`,
    `diagnostic immobilier Landes`,
    `diagnostiqueur Landes 40`,
  ].join(", ");

  const title = `Diagnostic Immobilier ${ville} ${codePostal || departement} | Diagnostiqueur Certifié`;
  const metaDescription = `Diagnostiqueur immobilier certifié à ${ville} (${departement}). DPE, amiante, plomb, électricité, gaz, termites. Intervention rapide ${ville}. ☎️ Devis gratuit 07 77 78 26 59`;

  return (
    <div className="w-full">
      <SEO
        title={title}
        description={metaDescription}
        keywords={keywords}
        canonical={`https://www.mdiagnostic.fr/diagnostic-immobilier-${villeSlug}`}
      />

      {/* Hero Section */}
      <section className="relative text-white" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1612380382832-b9f0766cd4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kZXMlMjBmcmFuY2UlMjBwaW5lJTIwZm9yZXN0JTIwdHJlZXN8ZW58MXx8fHwxNzczMjE5MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt={`Diagnostic immobilier ${ville} - paysage Landes`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Diagnostic Immobilier {ville}
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Diagnostiqueur certifié à {ville} ({departement}) pour tous vos diagnostics obligatoires
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                style={{ color: '#818958' }}
              >
                Devis gratuit {ville}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="tel:0777782659"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#818958'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                <Phone className="mr-2 h-5 w-5" />
                07 77 78 26 59
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction locale */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Votre diagnostiqueur immobilier à {ville}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              {description || `MDIAGNOSTIC intervient à ${ville} et dans tout le ${departement} pour réaliser l'ensemble de vos diagnostics immobiliers obligatoires. Diagnostiqueuse certifiée et assurée, j'assure une intervention rapide (sous 48h) et des rapports conformes à la réglementation en vigueur.`}
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Que vous soyez propriétaire, vendeur, bailleur, notaire ou agent immobilier à {ville}, je réalise tous les diagnostics techniques nécessaires : <strong>DPE</strong>, <strong>diagnostic amiante</strong>, <strong>diagnostic plomb (CREP)</strong>, <strong>diagnostic électricité</strong>, <strong>diagnostic gaz</strong>, <strong>diagnostic termites</strong>, <strong>ERP</strong>, et <strong>mesurage loi Carrez</strong>.
            </p>

            {particularites && particularites.length > 0 && (
              <div className="mt-6 p-4 border-l-4 rounded" style={{ backgroundColor: '#e8ebe0', borderColor: '#818958' }}>
                <h3 className="font-semibold text-gray-900 mb-3">Spécificités à {ville}</h3>
                <ul className="space-y-2">
                  {particularites.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: '#818958' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Diagnostics proposés */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Diagnostics immobiliers à {ville}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Tous les diagnostics obligatoires pour votre bien à {ville}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* DPE */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                DPE {ville}
              </h3>
              <p className="text-gray-600 mb-4">
                Diagnostic de Performance Énergétique obligatoire pour toute vente ou location à {ville}. Validité 10 ans.
              </p>
              <Link to="/vente#dpe" className="text-sm font-semibold hover:underline" style={{ color: '#818958' }}>
                En savoir plus →
              </Link>
            </div>

            {/* Amiante */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Diagnostic Amiante {ville}
              </h3>
              <p className="text-gray-600 mb-4">
                Obligatoire pour les biens dont le permis de construire a été déposé avant 1997 à {ville}.
              </p>
              <Link to="/vente#amiante" className="text-sm font-semibold hover:underline" style={{ color: '#818958' }}>
                En savoir plus →
              </Link>
            </div>

            {/* Plomb */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Diagnostic Plomb {ville}
              </h3>
              <p className="text-gray-600 mb-4">
                CREP obligatoire pour les logements construits avant 1949 à {ville}. Protection contre le saturnisme.
              </p>
              <Link to="/vente#plomb" className="text-sm font-semibold hover:underline" style={{ color: '#818958' }}>
                En savoir plus →
              </Link>
            </div>

            {/* Électricité */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Diagnostic Électricité {ville}
              </h3>
              <p className="text-gray-600 mb-4">
                Contrôle de sécurité pour les installations électriques de plus de 15 ans à {ville}.
              </p>
              <Link to="/vente#electricite" className="text-sm font-semibold hover:underline" style={{ color: '#818958' }}>
                En savoir plus →
              </Link>
            </div>

            {/* Gaz */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Diagnostic Gaz {ville}
              </h3>
              <p className="text-gray-600 mb-4">
                Vérification des installations gaz de plus de 15 ans à {ville}. Sécurité contre les fuites et explosions.
              </p>
              <Link to="/vente#gaz" className="text-sm font-semibold hover:underline" style={{ color: '#818958' }}>
                En savoir plus →
              </Link>
            </div>

            {/* Termites */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="font-semibold text-xl mb-3 text-gray-900">
                Diagnostic Termites {ville}
              </h3>
              <p className="text-gray-600 mb-4">
                Les Landes sont classées zone à risque termites. Diagnostic obligatoire à {ville} pour toute vente.
              </p>
              <Link to="/vente#termites" className="text-sm font-semibold hover:underline" style={{ color: '#818958' }}>
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Pourquoi choisir MDIAGNOSTIC à {ville} ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                <Award className="h-8 w-8" style={{ color: '#818958' }} />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Diagnostiqueur Certifié
              </h3>
              <p className="text-gray-600">
                Certifications LCP à jour et assurance RC professionnelle Allianz
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                <Clock className="h-8 w-8" style={{ color: '#818958' }} />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Intervention Rapide à {ville}
              </h3>
              <p className="text-gray-600">
                Disponibilité sous 48h et remise des rapports dans les délais
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                <MapPin className="h-8 w-8" style={{ color: '#818958' }} />
              </div>
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                Connaissance Locale
              </h3>
              <p className="text-gray-600">
                Expertise des spécificités immobilières à {ville} et dans les Landes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Communes voisines */}
      {voisines && voisines.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Diagnostic immobilier près de {ville}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              J'interviens également dans les communes voisines de {ville}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {voisines.map((v, index) => (
                <Link
                  key={index}
                  to={`/diagnostic-immobilier-${v.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '-')}`}
                  className="px-4 py-2 rounded-lg border-2 hover:shadow-md transition-all"
                  style={{ borderColor: '#818958', color: '#818958' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#818958';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#818958';
                  }}
                >
                  Diagnostic {v}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Final */}
      <section className="py-16 text-white" style={{ backgroundColor: '#818958' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un diagnostic à {ville} ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez votre diagnostiqueur certifié à {ville} pour un devis gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              style={{ color: '#818958' }}
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:0777782659"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.color = '#818958'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <Phone className="mr-2 h-5 w-5" />
              07 77 78 26 59
            </a>
          </div>
          <p className="text-sm opacity-80 mt-6">
            <Mail className="inline h-4 w-4 mr-1" />
            contact.mdiagnostic@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
