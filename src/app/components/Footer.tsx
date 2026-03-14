import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>07 77 78 26 59</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contact.mdiagnostic@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Soustons et Landes (40)</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/vente#dpe" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Diagnostic de Performance Énergétique (DPE)
                </Link>
              </li>
              <li>
                <Link 
                  to="/vente#amiante" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Diagnostic Amiante
                </Link>
              </li>
              <li>
                <Link 
                  to="/vente#plomb" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Diagnostic Plomb
                </Link>
              </li>
              <li>
                <Link 
                  to="/vente#electricite" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Diagnostic Électricité
                </Link>
              </li>
              <li>
                <Link 
                  to="/vente#gaz" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Diagnostic Gaz
                </Link>
              </li>
              <li>
                <Link 
                  to="/vente#termites" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Diagnostic Termites
                </Link>
              </li>
              <li>
                <Link 
                  to="/autres-prestations" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Attestation RE2020
                </Link>
              </li>
              <li>
                <Link 
                  to="/autres-prestations" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Attestation RT2012
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Informations</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link 
                  to="/a-propos" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="hover:opacity-80 transition-opacity text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
            <p className="text-sm text-gray-400">
              Diagnostiqueuse immobilière certifiée, j'effectue tous vos
              diagnostics immobiliers obligatoires dans les Landes dans le respect des normes
              en vigueur.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Certifiée LCP n°3340 - <Link to="/certifications" className="hover:underline" style={{ color: '#818958' }}>Voir mes certifications</Link>
            </p>
            <Link to="/zone-intervention" className="block mt-4 hover:opacity-80 transition-opacity">
              <p className="text-sm text-gray-400 mb-2">
                <strong>Interventions rapides dans les Landes (40) :</strong>
              </p>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Soustons, Hossegor, Capbreton, Dax, Saint-Vincent-de-Tyrosse, 
              Vieux-Boucau-les-Bains, Labenne, Ondres, Tarnos, Seignosse, 
              Saint-Paul-lès-Dax, Tosse, Azur, Messanges, Moliets-et-Maa, 
              Léon, Linxe et toutes les communes landaises environnantes.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          {/* Logos de certification - version discrète */}
          <div className="flex items-center justify-center gap-8 mb-6">
            <div className="flex items-center gap-3 opacity-60">
              <span className="text-xs text-gray-500 uppercase tracking-wide">Certificateur & Assurances</span>
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center">
                <span className="font-bold text-sm" style={{ color: '#003781' }}>LCP</span>
              </div>
              <div className="bg-white rounded px-3 py-1.5 flex items-center justify-center">
                <span className="font-bold text-xs" style={{ color: '#003781' }}>Allianz</span>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2">
              &copy; {new Date().getFullYear()} MDIAGNOSTIC. Tous droits réservés.
            </p>
            <div className="flex flex-col gap-1 items-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Link 
                  to="/politique-confidentialite" 
                  className="hover:underline"
                  style={{ color: '#818958' }}
                >
                  Politique de confidentialité
                </Link>
                <span>•</span>
                <Link 
                  to="/mentions-legales" 
                  className="hover:underline"
                  style={{ color: '#818958' }}
                >
                  Mentions légales
                </Link>
                <span>•</span>
                <Link 
                  to="/cgv" 
                  className="hover:underline"
                  style={{ color: '#818958' }}
                >
                  CGV
                </Link>
                <span>•</span>
                <Link 
                  to="/gestion-cookies" 
                  className="hover:underline"
                  style={{ color: '#818958' }}
                >
                  Gestion des cookies
                </Link>
              </div>
              <p className="text-xs text-gray-500 mt-2 max-w-3xl">
                MDIAGNOSTIC - SIRET : 100 486 927 00013 - RCP Allianz n° 64715683 - Certifications LCP. 
                Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d'un droit 
                d'accès, de rectification et de suppression des données vous concernant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}