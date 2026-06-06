import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-base mb-4" style={{ color: '#a8b070' }}>MDIAGNOSTIC</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <a href="tel:0777782659" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                07 77 78 26 59
              </a>
              <a href="mailto:contact.mdiagnostic@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                contact.mdiagnostic@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Soustons — Landes (40)
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-gray-300">Navigation</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Nos services</Link></li>
              <li><Link to="/a-propos" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link to="/zone-intervention" className="hover:text-white transition-colors">Zone d'intervention</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Devis</Link></li>
            </ul>
          </div>

          {/* Légal */}
          <div>
            <h3 className="font-semibold text-base mb-4 text-gray-300">Légal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</Link></li>
              <li><Link to="/cgv" className="hover:text-white transition-colors">CGV</Link></li>
              <li><Link to="/gestion-cookies" className="hover:text-white transition-colors">Gestion des cookies</Link></li>
              <li><Link to="/certifications" className="hover:text-white transition-colors">Certifications</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MDIAGNOSTIC — SIRET 100 486 927 00013 — RCP Allianz n° 64715683 — Certifié LCP n°3340
        </div>
      </div>
    </footer>
  );
}
