import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#f9fafb' }}>
      <div className="text-center max-w-md">
        <div className="mb-8">
          <h1 className="text-9xl font-bold" style={{ color: '#818958' }}>404</h1>
          <h2 className="text-3xl font-semibold text-gray-800 mt-4 mb-2">
            Page non trouvée
          </h2>
          <p className="text-gray-600">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-white font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: '#818958' }}
          >
            <Home className="h-5 w-5" />
            Retour à l'accueil
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 font-medium transition-all hover:bg-gray-50"
            style={{ borderColor: '#818958', color: '#818958' }}
          >
            <ArrowLeft className="h-5 w-5" />
            Page précédente
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            Besoin d'un diagnostic immobilier dans les Landes ?
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link to="/vente" className="hover:underline" style={{ color: '#818958' }}>
              Diagnostics vente
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/location" className="hover:underline" style={{ color: '#818958' }}>
              Diagnostics location
            </Link>
            <span className="text-gray-400">•</span>
            <Link to="/contact" className="hover:underline" style={{ color: '#818958' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
