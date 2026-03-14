import { useState, useEffect } from "react";
import { X, Cookie, AlertTriangle } from "lucide-react";
import { Link } from "react-router";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà donné son consentement
    const consent = localStorage.getItem("mdiagnostic-cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("mdiagnostic-cookie-consent", "accepted");
    localStorage.setItem("mdiagnostic-cookie-consent-date", new Date().toISOString());
    setShowBanner(false);
    setShowWarning(false);
  };

  const handleRefuse = () => {
    localStorage.setItem("mdiagnostic-cookie-consent", "refused");
    localStorage.setItem("mdiagnostic-cookie-consent-date", new Date().toISOString());
    setShowBanner(false);
    setShowWarning(true);
    // Cacher l'avertissement après 8 secondes
    setTimeout(() => setShowWarning(false), 8000);
  };

  if (!showBanner && !showWarning) {
    return null;
  }

  return (
    <>
      {/* Bandeau de consentement */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t-2 shadow-lg" style={{ borderColor: '#818958' }}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: '#818958' }} />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Respect de votre vie privée
                  </h3>
                  <p className="text-sm text-gray-600">
                    Ce site utilise des cookies essentiels pour son bon fonctionnement et pour améliorer votre expérience. 
                    Nous ne collectons aucune donnée personnelle sans votre consentement. Les informations que vous nous 
                    transmettez via le formulaire de contact sont uniquement utilisées pour répondre à vos demandes et ne 
                    sont jamais partagées avec des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de 
                    rectification et de suppression de vos données.
                  </p>
                  <div className="flex gap-4 mt-2">
                    <Link 
                      to="/gestion-cookies"
                      className="text-sm inline-block hover:underline font-medium"
                      style={{ color: '#818958' }}
                    >
                      Gérer mes préférences
                    </Link>
                    <Link 
                      to="/politique-confidentialite"
                      className="text-sm inline-block hover:underline"
                      style={{ color: '#818958' }}
                    >
                      En savoir plus
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={handleRefuse}
                  className="flex-1 md:flex-none px-6 py-2 border-2 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  style={{ borderColor: '#818958' }}
                >
                  Refuser
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-2 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#818958' }}
                >
                  Accepter
                </button>
              </div>

              <button
                onClick={handleRefuse}
                className="absolute top-4 right-4 md:relative md:top-0 md:right-0 p-2 text-gray-500 hover:text-gray-700"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Avertissement si refus */}
      {showWarning && (
        <div className="fixed bottom-4 right-4 left-4 md:left-auto md:w-96 z-50 bg-orange-50 border-2 border-orange-400 rounded-lg shadow-xl p-4 animate-slide-up">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h4 className="font-semibold text-orange-900 mb-1">
                Fonctionnalités limitées
              </h4>
              <p className="text-sm text-orange-800">
                Sans cookies, la carte Google Maps et les avis clients ne s'afficheront pas. 
                Les formulaires de contact et devis restent pleinement fonctionnels. 
                Vous pouvez modifier ce choix à tout moment dans{" "}
                <Link to="/gestion-cookies" className="underline font-medium">
                  vos préférences
                </Link>.
              </p>
            </div>
            <button
              onClick={() => setShowWarning(false)}
              className="p-1 text-orange-600 hover:text-orange-800"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}