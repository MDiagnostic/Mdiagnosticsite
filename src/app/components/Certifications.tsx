import { Award, Download, Shield, CheckCircle } from "lucide-react";
import { SEO } from "./SEO";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

export function Certifications() {
  return (
    <>
      <SEO
        title="Certifications LCP - MDIAGNOSTIC | Diagnostiqueuse Certifiée n°3340"
        description="Consultez mes certifications LCP COFRAC pour les diagnostics immobiliers : amiante, plomb, DPE, électricité, gaz, termites. Organisme accrédité, certification n°3340."
        keywords="certification LCP, COFRAC, diagnostiqueur certifié 3340, certification amiante, certification DPE, certification plomb, organisme accrédité"
        canonical="https://www.mdiagnostic.fr/certifications"
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8 pt-24">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#818958] to-[#6a7249] rounded-full mb-6 shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Mes Certifications
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Diagnostiqueuse certifiée LCP n°3340
            </p>
            <p className="text-sm text-gray-500">
              Organisme accrédité COFRAC
            </p>
          </div>

          {/* Certificat LCP */}
          <div className="bg-white rounded-lg shadow-xl p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8" style={{ color: '#818958' }} />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Certificat de compétences
                  </h2>
                  <p className="text-gray-600">
                    Diagnostiqueur Immobilier n°3340
                  </p>
                </div>
              </div>
            </div>

            {/* Placeholder certificat */}
            <div className="border rounded-lg overflow-hidden shadow-md mb-6 bg-white">
              <ImageWithFallback
                src="https://i.imgur.com/jPMef3O.jpeg"
                alt="Certificat LCP n°3340 - Marine DUFFOURG - Diagnostiqueur Immobilier"
                className="w-full h-auto"
              />
            </div>

            {/* Bouton de téléchargement */}
            <div className="text-center mb-6">
              <a
                href="https://i.imgur.com/jPMef3O.jpeg"
                download="Certificat-LCP-3340-Marine-DUFFOURG.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#818958] to-[#6a7249] text-white rounded-lg hover:opacity-90 transition-opacity font-medium shadow-md"
              >
                <Download className="w-5 h-5" />
                Télécharger le certificat
              </a>
            </div>

            {/* Informations certificat */}
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Organisme certificateur</p>
                  <p className="text-gray-600">LCP - Certification de Personnes</p>
                  <p className="text-gray-500 text-xs">Accrédité COFRAC n°4-0390</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Numéro de certificat</p>
                  <p className="text-gray-600">N°3340</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Titulaire</p>
                  <p className="text-gray-600">Madame DUFFOURG Marine</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Date d'édition</p>
                  <p className="text-gray-600">04/03/2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Garanties */}
          <div className="mt-8 bg-gradient-to-r from-[#818958] to-[#6a7249] rounded-lg shadow-xl p-6 md:p-8 text-white">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Garanties professionnelles
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="text-center">
                <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                  <Shield className="w-5 h-5" />
                  Assurance RC Professionnelle
                </h3>
                <p className="text-sm opacity-90">
                  ALLIANZ - Police n°64715683<br />
                  Couvre l'ensemble de mes interventions
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-semibold mb-2 flex items-center justify-center gap-2">
                  <Award className="w-5 h-5" />
                  Certification LCP
                </h3>
                <p className="text-sm opacity-90">
                  Organisme accrédité COFRAC<br />
                  Garantit mes compétences techniques
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Besoin d'un diagnostic immobilier certifié ?
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-[#818958] to-[#6a7249] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}