import { Star, Quote, ExternalLink, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
}

interface GooglePlaceData {
  rating?: number;
  user_ratings_total?: number;
  reviews?: GoogleReview[];
}

// Déclarer le type pour Google Maps
declare global {
  interface Window {
    google?: any;
    initGoogleMapsCallback?: () => void;
  }
}

export function Reviews() {
  const [placeData, setPlaceData] = useState<GooglePlaceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<any>(null);
  const [showDebug, setShowDebug] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean | null>(null);

  // 🔧 CONFIGURATION - REMPLACEZ PAR VOS VRAIES VALEURS
  const GOOGLE_API_KEY = "AIzaSyBTzxHmnwWKJn7QdMY0qXkyjmou45aRPEA";
  
  // 🧪 MODE TEST : Place ID de la Tour Eiffel (320 000+ avis)
  // const PLACE_ID = "ChIJLU7jZClu5kcR4PcOOO6p3I0"; // Tour Eiffel (TEST) ❌ DÉSACTIVÉ
  
  // 🏢 VOTRE VRAI PLACE ID (MDIAGNOSTIC Soustons)
  const PLACE_ID = "ChIJ2WDD9qJ2FwAR5FokmFKkoMc"; // �� ACTIVÉ

  // URL pour laisser un avis Google
  const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${PLACE_ID}`;

  // Vérifier le consentement cookies
  useEffect(() => {
    const consent = localStorage.getItem("mdiagnostic-cookie-consent");
    setCookiesAccepted(consent === "accepted");
    
    // Si cookies refusés, arrêter le chargement
    if (consent !== "accepted") {
      setLoading(false);
      setError("Cookies requis");
    }

    // 🔄 ÉCOUTER LES CHANGEMENTS DU LOCALSTORAGE (par d'autres composants)
    const checkConsent = () => {
      const newConsent = localStorage.getItem("mdiagnostic-cookie-consent");
      if (newConsent === "accepted" && !cookiesAccepted) {
        console.log("🍪 Cookies acceptés détectés ! Rechargement des avis...");
        setCookiesAccepted(true);
        setLoading(true);
        setError(null);
      }
    };

    // Vérifier toutes les 500ms si les cookies ont été acceptés
    const interval = setInterval(checkConsent, 500);

    return () => clearInterval(interval);
  }, [cookiesAccepted]);

  const handleAcceptCookies = () => {
    localStorage.setItem("mdiagnostic-cookie-consent", "accepted");
    localStorage.setItem("mdiagnostic-cookie-consent-date", new Date().toISOString());
    setCookiesAccepted(true);
    setLoading(true); // ✅ Réinitialiser le loading
    setError(null); // ✅ Effacer l'erreur
    // ✅ Le useEffect va se déclencher automatiquement et charger l'API
  };

  // Fonction pour récupérer les avis
  const fetchReviews = async () => {
    setLoading(true);
    setError(null);
    setDebugInfo(null);

    try {
      // 🔒 OPTIMISATION : Vérifier le cache localStorage (6h)
      const CACHE_KEY = "mdiagnostic-google-reviews-cache";
      const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 heures en millisecondes
      
      const cachedData = localStorage.getItem(CACHE_KEY);
      if (cachedData) {
        try {
          const { data, timestamp } = JSON.parse(cachedData);
          const age = Date.now() - timestamp;
          
          // Si le cache a moins de 6h, on l'utilise
          if (age < CACHE_DURATION) {
            console.log(`✅ Utilisation du cache (${Math.floor(age / 1000 / 60)} minutes)`);
            console.log("💰 Économie : 1 appel API Google évité !");
            setPlaceData(data);
            setLoading(false);
            
            // Info de debug
            setDebugInfo({
              source: "Cache localStorage",
              age: `${Math.floor(age / 1000 / 60)} minutes`,
              expiresIn: `${Math.floor((CACHE_DURATION - age) / 1000 / 60)} minutes`,
              timestamp: new Date(timestamp).toISOString(),
              savings: "1 appel API économisé (valeur: ~0.017 $)",
            });
            
            return;
          } else {
            console.log("⏰ Cache expiré (>6h) - Nouvelle requête API");
            localStorage.removeItem(CACHE_KEY);
          }
        } catch (e) {
          console.warn("⚠️ Cache corrompu - Suppression");
          localStorage.removeItem(CACHE_KEY);
        }
      }

      console.log("🔄 Tentative de récupération des avis Google...");
      console.log("📍 Place ID:", PLACE_ID);
      console.log("⏰ Timestamp:", new Date().toISOString());
      console.log("💸 Coût estimé : ~0.017 $ (inclus dans les 28 000 gratuits/mois)");

      // Méthode 1 : Utiliser l'API Places (New) avec fetchFields
      if (window.google?.maps?.importLibrary) {
        console.log("✅ Utilisation de la nouvelle API Places");
        
        const { Place } = await window.google.maps.importLibrary("places");
        
        const place = new Place({
          id: PLACE_ID,
        });

        // Récupérer toutes les informations disponibles
        await place.fetchFields({
          fields: ["displayName", "rating", "userRatingCount", "reviews", "googleMapsURI"],
        });

        console.log("📊 Données récupérées:", {
          displayName: place.displayName,
          rating: place.rating,
          userRatingCount: place.userRatingCount,
          reviewsCount: place.reviews?.length || 0,
          allReviews: place.reviews,
        });

        // Stocker les infos de debug
        setDebugInfo({
          method: "Places API (New)",
          timestamp: new Date().toISOString(),
          displayName: place.displayName,
          rating: place.rating,
          userRatingCount: place.userRatingCount,
          reviewsRaw: place.reviews,
          reviewsCount: place.reviews?.length || 0,
          googleMapsURI: place.googleMapsURI,
          note: "L'API Google Places ne renvoie que les 5 avis les plus 'utiles' selon Google. Les nouveaux avis peuvent mettre 24-48h à apparaître dans l'API."
        });

        // Convertir les données
        const data: GooglePlaceData = {
          rating: place.rating || 0,
          user_ratings_total: place.userRatingCount || 0,
          reviews: place.reviews?.map((review: any) => ({
            author_name: review.authorAttribution?.displayName || "Client anonyme",
            rating: review.rating || 0,
            text: typeof review.text === 'string' ? review.text : (review.text?.text || review.originalText || ""),
            time: review.publishTime ? new Date(review.publishTime).getTime() / 1000 : Date.now() / 1000,
            profile_photo_url: review.authorAttribution?.photoURI,
          })) || [],
        };

        console.log("✅ Données formatées:", data);

        setPlaceData(data);
        setLoading(false);

        // Sauvegarder dans le cache
        localStorage.setItem(CACHE_KEY, JSON.stringify({
          data: data,
          timestamp: Date.now(),
        }));
        
        return;
      }

      // Méthode 2 : Fallback si l'API n'est pas chargée
      throw new Error("Google Maps API non disponible");

    } catch (err: any) {
      console.error("❌ Erreur:", err);
      setError(err.message || "Erreur inconnue");
      setDebugInfo({
        error: err.message,
        stack: err.stack,
      });
      setLoading(false);
    }
  };

  // Charger Google Maps API
  useEffect(() => {
    // Vérifier le consentement AVANT tout
    if (cookiesAccepted !== true) {
      console.log("❌ Cookies non acceptés - Google Places API non chargée");
      setLoading(false);
      setError("Cookies requis");
      return; // Ne rien charger
    }

    if (!GOOGLE_API_KEY || !PLACE_ID) {
      setError("Configuration manquante (API Key ou Place ID)");
      setLoading(false);
      return;
    }

    // Vérifier si déjà chargé ET initialisé
    if (window.google?.maps?.places?.PlacesService) {
      console.log("✅ Google Maps déjà chargé et initialisé");
      fetchReviews();
      return;
    }

    // Vérifier si le script est déjà présent dans le DOM
    const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
    if (existingScript) {
      console.log("✅ Script Google Maps déjà présent, attente de l'initialisation...");
      // Attendre que l'API soit prête
      let attempts = 0;
      const maxAttempts = 100; // 10 secondes max
      const checkReady = setInterval(() => {
        attempts++;
        if (window.google?.maps?.places?.PlacesService) {
          clearInterval(checkReady);
          console.log("✅ Google Maps API prête");
          fetchReviews();
        } else if (attempts >= maxAttempts) {
          clearInterval(checkReady);
          console.error("❌ Timeout - Google Maps API non initialisée");
          setError("Timeout lors du chargement de l'API");
          setLoading(false);
        }
      }, 100);

      return () => clearInterval(checkReady);
    }

    console.log("📥 Chargement de Google Maps API...");

    // Charger le script UNE SEULE FOIS
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places&loading=async&callback=initGoogleMapsCallback`;
    script.async = true;
    script.defer = true;
    script.id = "google-maps-script"; // ID unique pour éviter les doublons

    // Callback global pour l'initialisation
    window.initGoogleMapsCallback = () => {
      console.log("✅ Google Maps API initialisée via callback");
      fetchReviews();
    };

    script.onerror = () => {
      console.error("❌ Erreur de chargement du script");
      setError("Impossible de charger Google Maps API");
      setLoading(false);
    };

    document.head.appendChild(script);

    // Cleanup : NE PAS RETIRER LE SCRIPT (pour éviter rechargements)
    return () => {
      // Ne rien faire - garder le script pour réutilisation
    };
  }, [cookiesAccepted]); // Dépend du consentement

  // Affichage pendant le chargement
  if (loading) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <RefreshCw className="h-12 w-12 animate-spin mx-auto mb-4 text-gray-400" />
            <p className="text-gray-600">Chargement des avis Google...</p>
          </div>
        </div>
      </section>
    );
  }

  // Affichage en cas d'erreur avec debug
  if (error) {
    // Cas spécifique : cookies refusés
    if (error === "Cookies requis") {
      return (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Avis Clients Google
              </h2>
            </div>

            <div className="max-w-2xl mx-auto bg-gray-50 border-2 border-gray-300 rounded-lg p-8 text-center">
              <Star className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="font-semibold text-lg text-gray-900 mb-2">
                Avis non disponibles
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Les avis clients Google nécessitent votre consentement pour charger du contenu tiers.
              </p>
              <div className="space-y-3">
                <button
                  onClick={handleAcceptCookies}
                  className="w-full max-w-xs mx-auto px-6 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#818958' }}
                >
                  Accepter et afficher les avis
                </button>
                <p className="text-xs text-gray-500">
                  ou consultez{" "}
                  <Link to="/gestion-cookies" className="underline" style={{ color: '#818958' }}>
                    vos préférences cookies
                  </Link>
                </p>
                <div className="mt-6 pt-6 border-t border-gray-300">
                  <p className="text-sm text-gray-700 mb-3">
                    Vous pouvez également consulter nos avis directement sur Google :
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=MDIAGNOSTIC+Soustons&query_place_id=${PLACE_ID}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2 border-2 rounded-lg font-medium transition-all hover:bg-white text-sm"
                    style={{ borderColor: '#818958', color: '#818958' }}
                  >
                    Voir sur Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }

    // Autres erreurs techniques - Afficher un fallback professionnel
    console.error("❌ Erreur Google Places API (masquée au public):", error);
    
    // Afficher une section élégante avec invitation à voir sur Google
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avis Clients
            </h2>
          </div>

          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-12 border-2 border-green-200">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Star className="h-12 w-12 text-yellow-400 fill-current" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Découvrez l'avis de nos clients
              </h3>
              
              <p className="text-lg text-gray-600 mb-8">
                Consultez les retours d'expérience de nos clients sur notre page Google My Business
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=MDIAGNOSTIC+Soustons&query_place_id=${PLACE_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white text-lg hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: '#818958' }}
              >
                <Star className="h-5 w-5 fill-current" />
                Voir nos avis sur Google
                <ExternalLink className="h-5 w-5" />
              </a>

              <div className="mt-8 pt-8 border-t border-green-300">
                <p className="text-sm text-gray-600 mb-4">
                  Vous avez fait appel à nos services ?
                </p>
                <a
                  href={GOOGLE_REVIEW_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 rounded-lg font-medium transition-all hover:bg-white text-sm"
                  style={{ borderColor: '#818958', color: '#818958' }}
                >
                  Laisser un avis
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Si pas d'avis mais qu'on a la note moyenne
  if (placeData && placeData.user_ratings_total && placeData.user_ratings_total > 0 && (!placeData.reviews || placeData.reviews.length === 0)) {
    return (
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Avis Clients Google
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-8 w-8 ${i < Math.floor(placeData.rating || 0) ? 'fill-current' : ''}`}
                  style={{ color: i < Math.floor(placeData.rating || 0) ? "#fbbf24" : "#d1d5db" }}
                />
              ))}
              <span className="text-2xl font-bold text-gray-900 ml-2">
                {placeData.rating?.toFixed(1)}/5
              </span>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Note basée sur <strong>{placeData.user_ratings_total} avis Google vérifiés</strong>
            </p>
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-12 text-center border-2 border-green-200">
            <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Star className="h-12 w-12 text-yellow-400 fill-current" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {placeData.user_ratings_total === 1 
                ? "Merci pour votre confiance !" 
                : `Merci à nos ${placeData.user_ratings_total} clients !`}
            </h3>
            <p className="text-lg text-gray-600 mb-4">
              {placeData.user_ratings_total === 1 
                ? "Nous avons reçu 1 avis avec une note de " 
                : `Nos clients nous ont laissé ${placeData.user_ratings_total} avis avec une note moyenne de `}
              <strong>{placeData.rating?.toFixed(1)}/5 ⭐</strong>
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6 text-left">
              <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                ℹ️ Pourquoi les avis ne s'affichent pas ?
              </h4>
              <p className="text-sm text-blue-800 mb-2">
                L'API Google Places ne renvoie que les avis <strong>avec commentaires texte</strong>.
              </p>
              <p className="text-sm text-blue-800">
                Les avis qui contiennent uniquement une note (⭐⭐⭐⭐⭐) sans texte ne sont pas visibles via l'API, même s'ils comptent dans la note moyenne.
              </p>
              <div className="mt-4 bg-white rounded p-3 border border-blue-200">
                <p className="text-xs text-blue-700 font-semibold mb-1">💡 Pour que votre avis apparaisse :</p>
                <p className="text-xs text-blue-700">
                  Modifiez votre avis Google en ajoutant quelques mots (ex: "Excellent service !"), et il apparaîtra dans les 24-48h.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowDebug(!showDebug)}
              className="mb-6 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm"
            >
              {showDebug ? "Masquer" : "Afficher"} les infos techniques
            </button>

            {showDebug && debugInfo && (
              <div className="bg-gray-900 text-green-400 p-4 rounded font-mono text-xs overflow-auto max-h-96 mb-6 text-left">
                <pre>{JSON.stringify(debugInfo, null, 2)}</pre>
              </div>
            )}

            <a
              href={GOOGLE_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white text-lg hover:opacity-90 transition-opacity shadow-lg"
              style={{ backgroundColor: '#818958' }}
            >
              <Star className="h-5 w-5 fill-current" />
              Laisser un avis Google
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  // Affichage normal avec avis
  const reviews = placeData.reviews || [];
  const averageRating = placeData.rating || 0;
  const totalReviews = placeData.user_ratings_total || 0;

  // 🔄 Trier les avis par date (du plus récent au plus ancien)
  const sortedReviews = [...reviews].sort((a, b) => b.time - a.time);

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Avis Clients Google
          </h2>
          <div className="flex items-center justify-center gap-2 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-6 w-6 ${i < Math.floor(averageRating) ? 'fill-current' : ''}`}
                style={{ color: i < Math.floor(averageRating) ? "#fbbf24" : "#d1d5db" }}
              />
            ))}
            <span className="text-xl font-semibold text-gray-900 ml-2">
              {averageRating.toFixed(1)}/5
            </span>
          </div>
          <p className="text-gray-600 mb-6">
            Basé sur {totalReviews} avis Google vérifiés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedReviews.slice(0, 6).map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 relative border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <Quote
                className="absolute top-4 right-4 h-8 w-8 text-gray-300"
              />

              <div className="flex items-center gap-3 mb-4">
                {review.profile_photo_url ? (
                  <img
                    src={review.profile_photo_url}
                    alt={review.author_name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {review.author_name.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex-1">
                  <div className="font-bold text-gray-900 text-lg">
                    {review.author_name}
                  </div>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < review.rating ? 'fill-current text-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {review.text || "Client satisfait - Avis laissé sans commentaire"}
              </p>

              <div className="text-xs text-gray-500">
                {new Date(review.time * 1000).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-white text-lg hover:opacity-90 transition-opacity shadow-lg"
            style={{ backgroundColor: '#818958' }}
          >
            <Star className="h-5 w-5 fill-current" />
            Laisser un avis Google
            <ExternalLink className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}