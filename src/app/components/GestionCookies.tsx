import { Cookie, CheckCircle, XCircle, Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router";

export function GestionCookies() {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mdiagnostic-cookie-consent");
    setCookiesAccepted(consent === "accepted");
  }, []);

  const handleAccept = () => {
    localStorage.setItem("mdiagnostic-cookie-consent", "accepted");
    localStorage.setItem("mdiagnostic-cookie-consent-date", new Date().toISOString());
    setCookiesAccepted(true);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleRefuse = () => {
    localStorage.setItem("mdiagnostic-cookie-consent", "refused");
    localStorage.setItem("mdiagnostic-cookie-consent-date", new Date().toISOString());
    setCookiesAccepted(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const getConsentDate = () => {
    const date = localStorage.getItem("mdiagnostic-cookie-consent-date");
    if (date) {
      return new Date(date).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    }
    return null;
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Cookie className="h-12 w-12" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Gestion des Cookies
            </h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Paramétrez vos préférences de cookies et consultez les cookies utilisés sur ce site
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Message de succès */}
          {showSuccess && (
            <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <span className="text-green-800 font-medium">
                Vos préférences ont été enregistrées avec succès !
              </span>
            </div>
          )}

          {/* Statut actuel */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="h-8 w-8" style={{ color: '#818958' }} />
              <h2 className="text-2xl font-bold text-gray-900">
                Vos préférences actuelles
              </h2>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-lg" style={{ backgroundColor: '#f9faf7' }}>
              {cookiesAccepted === true && (
                <>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Cookies acceptés</p>
                    <p className="text-sm text-gray-600">Dernière modification : {getConsentDate()}</p>
                  </div>
                </>
              )}
              {cookiesAccepted === false && (
                <>
                  <XCircle className="h-8 w-8 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Cookies refusés</p>
                    <p className="text-sm text-gray-600">Dernière modification : {getConsentDate()}</p>
                  </div>
                </>
              )}
              {cookiesAccepted === null && (
                <>
                  <Cookie className="h-8 w-8 text-gray-400" />
                  <div>
                    <p className="font-semibold text-gray-900">Aucune préférence enregistrée</p>
                    <p className="text-sm text-gray-600">Veuillez choisir vos préférences ci-dessous</p>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Cookies obligatoires */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
              Cookies strictement nécessaires
            </h2>
            <p className="text-gray-600 mb-4">
              Ces cookies sont indispensables au bon fonctionnement du site. Ils ne peuvent pas être désactivés.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 pl-4" style={{ borderColor: '#818958' }}>
                <h3 className="font-semibold text-gray-900 mb-2">Cookie de consentement</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Nom :</strong> mdiagnostic-cookie-consent</li>
                  <li><strong>Finalité :</strong> Mémoriser votre choix de consentement aux cookies</li>
                  <li><strong>Durée de conservation :</strong> 13 mois</li>
                  <li><strong>Type :</strong> Cookie local (localStorage)</li>
                </ul>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: '#818958' }}>
                <h3 className="font-semibold text-gray-900 mb-2">Cookie de session</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Nom :</strong> Session technique</li>
                  <li><strong>Finalité :</strong> Maintenir votre session active pendant la navigation</li>
                  <li><strong>Durée de conservation :</strong> Session (supprimé à la fermeture du navigateur)</li>
                  <li><strong>Type :</strong> Cookie technique</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cookies fonctionnels */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
              Cookies fonctionnels (optionnels)
            </h2>
            <p className="text-gray-600 mb-4">
              Ces cookies sont utilisés par des services tiers pour afficher du contenu sur notre site.
            </p>
            <div className="space-y-4">
              <div className="border-l-4 pl-4" style={{ borderColor: '#818958' }}>
                <h3 className="font-semibold text-gray-900 mb-2">Google Maps (Carte interactive)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Finalité :</strong> Afficher la carte de localisation de notre entreprise</li>
                  <li><strong>Données :</strong> Cookies tiers déposés par Google (géolocalisation, préférences)</li>
                  <li><strong>Conservation :</strong> Variable selon Google</li>
                  <li><strong>Fournisseur :</strong> Google LLC (conforme RGPD)</li>
                  <li><strong>Utilisé dans :</strong> Page "À Propos"</li>
                </ul>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: '#818958' }}>
                <h3 className="font-semibold text-gray-900 mb-2">Google Places API (Avis clients)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><strong>Finalité :</strong> Afficher les avis clients Google de notre entreprise</li>
                  <li><strong>Données :</strong> Cookies tiers déposés par Google (aucune donnée personnelle collectée)</li>
                  <li><strong>Conservation :</strong> Variable selon Google</li>
                  <li><strong>Fournisseur :</strong> Google LLC (conforme RGPD)</li>
                  <li><strong>Utilisé dans :</strong> Page d'accueil (section avis)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Aucun cookie de tracking */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
              Cookies de tracking et publicitaires
            </h2>
            <p className="text-sm text-gray-600">
              Nous respectons votre vie privée et ne collectons aucune donnée à des fins publicitaires ou de profilage.
            </p>
          </div>

          {/* Actions */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
              Modifier vos préférences
            </h2>
            <p className="text-gray-600 mb-6">
              Vous pouvez à tout moment modifier votre choix concernant les cookies. Ce paramètre sera enregistré localement sur votre appareil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleAccept}
                className="flex-1 px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#818958' }}
              >
                Accepter les cookies
              </button>
              <button
                onClick={handleRefuse}
                className="flex-1 px-6 py-3 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                style={{ borderColor: '#818958', color: '#818958' }}
              >
                Refuser les cookies
              </button>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#818958' }}>
              Pour aller plus loin
            </h2>
            <div className="space-y-3 text-gray-600">
              <p>
                Pour plus d'informations sur la protection de vos données personnelles, consultez notre{" "}
                <Link to="/politique-confidentialite" className="font-semibold hover:underline" style={{ color: '#818958' }}>
                  Politique de confidentialité
                </Link>.
              </p>
              <p>
                Vous pouvez également configurer votre navigateur pour refuser tous les cookies. Consultez l'aide de votre navigateur pour en savoir plus :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#818958' }}>Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#818958' }}>Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#818958' }}>Safari</a></li>
                <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#818958' }}>Microsoft Edge</a></li>
              </ul>
            </div>
          </div>

          {/* Retour */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-block px-8 py-3 border-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              style={{ borderColor: '#818958', color: '#818958' }}
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
