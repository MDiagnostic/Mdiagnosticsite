import { useEffect, useRef, useState } from 'react';
import { MapPin, AlertCircle, Check } from 'lucide-react';

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: string) => void;
  placeholder?: string;
  required?: boolean;
  hideWarning?: boolean;
  onValidationChange?: (isValid: boolean) => void;
}

interface AddressSuggestion {
  label: string;
  city: string;
  postcode: string;
  context: string;
}

export function AddressAutocomplete({ 
  value, 
  onChange, 
  placeholder, 
  required, 
  hideWarning = false,
  onValidationChange 
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fermer les suggestions si on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Rechercher des adresses via l'API Adresse Data Gouv
  useEffect(() => {
    const searchAddress = async () => {
      if (!value || value.length < 3) {
        setSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      setIsLoading(true);
      console.log('🔍 Recherche d\'adresse pour:', value);
      
      try {
        // 🆕 Essayer d'abord le proxy Vercel, puis fallback vers l'API directe
        let apiUrl = `/api/address?q=${encodeURIComponent(value)}`;
        
        console.log('📡 URL appelée:', apiUrl);
        
        let response = await fetch(apiUrl);
        
        // Si le proxy retourne du HTML au lieu de JSON, utiliser l'API directe
        const contentType = response.headers.get('content-type');
        if (contentType?.includes('text/html')) {
          console.log('⚠️ Proxy non disponible, utilisation API directe');
          apiUrl = `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(value)}&limit=5`;
          response = await fetch(apiUrl);
        }
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('❌ Erreur API:', response.status, errorData);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        console.log('📦 Réponse API:', data);
        
        if (data.features && data.features.length > 0) {
          const addressSuggestions: AddressSuggestion[] = data.features.map((feature: any) => ({
            label: feature.properties.label,
            city: feature.properties.city,
            postcode: feature.properties.postcode,
            context: feature.properties.context,
          }));
          
          console.log('✅ Suggestions trouvées:', addressSuggestions.length);
          setSuggestions(addressSuggestions);
          setShowSuggestions(true);
        } else {
          console.log('⚠️ Aucune suggestion trouvée');
          setSuggestions([]);
          setShowSuggestions(false);
        }
      } catch (error) {
        console.error('❌ Erreur lors de la recherche d\'adresse:', error);
        setSuggestions([]);
        setShowSuggestions(false);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce la recherche
    const timeoutId = setTimeout(searchAddress, 300);
    return () => clearTimeout(timeoutId);
  }, [value]);

  const handleSelectSuggestion = (suggestion: AddressSuggestion) => {
    console.log('✅ Adresse sélectionnée:', suggestion.label);
    onChange(suggestion.label);
    setIsValidated(true);
    setShowSuggestions(false);
    setSuggestions([]);
    if (onValidationChange) {
      onValidationChange(true);
    }
  };

  const handleInputChange = (newValue: string) => {
    onChange(newValue);
    setIsValidated(false);
    if (onValidationChange) {
      onValidationChange(false);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="relative">
        <MapPin 
          className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none z-10" 
        />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder={placeholder || "Commencez à taper l'adresse..."}
          required={required}
          className="w-full pl-10 pr-12 py-3 border-2 rounded-lg focus:outline-none transition-all"
          style={{ borderColor: isValidated ? '#22c55e' : '#e8ebe0' }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = isValidated ? '#22c55e' : '#818958';
            if (suggestions.length > 0) setShowSuggestions(true);
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = isValidated ? '#22c55e' : '#e8ebe0';
          }}
          autoComplete="off"
        />
        {isValidated && (
          <Check 
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500 pointer-events-none" 
          />
        )}
        {isLoading && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <div className="animate-spin h-5 w-5 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
          </div>
        )}
      </div>

      {/* Indicateur de chargement visible */}
      {isLoading && value.length >= 3 && (
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded border border-gray-200">
          <div className="animate-spin h-3 w-3 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
          <span>Recherche en cours...</span>
        </div>
      )}

      {/* Suggestions dropdown avec z-index très élevé */}
      {showSuggestions && suggestions.length > 0 && (
        <div 
          className="absolute w-full mt-1 bg-white border-2 rounded-lg shadow-2xl max-h-60 overflow-y-auto"
          style={{ 
            borderColor: '#818958',
            zIndex: 9999,
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}
        >
          <div className="bg-blue-50 px-3 py-2 border-b-2" style={{ borderColor: '#818958' }}>
            <p className="text-xs font-semibold text-blue-900">
              📍 {suggestions.length} adresse{suggestions.length > 1 ? 's' : ''} trouvée{suggestions.length > 1 ? 's' : ''} - Cliquez pour sélectionner
            </p>
          </div>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectSuggestion(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors border-b last:border-b-0"
              style={{ borderColor: '#e8ebe0' }}
            >
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: '#818958' }} />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{suggestion.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{suggestion.context}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Message si aucune suggestion */}
      {!isLoading && !isValidated && value.length >= 3 && suggestions.length === 0 && (
        <div className="mt-2 flex items-start gap-2 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded border border-orange-200">
          <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">Aucune adresse trouvée</p>
            <p className="mt-1">Vérifiez votre saisie. Exemple : <span className="font-mono">12 avenue Ocean Soustons</span></p>
          </div>
        </div>
      )}

      {/* Message de succès */}
      {isValidated && (
        <div className="mt-2 flex items-center gap-2 text-xs text-green-600 bg-green-50 px-3 py-2 rounded border border-green-200">
          <Check className="h-4 w-4 flex-shrink-0" />
          <span>✅ Adresse validée !</span>
        </div>
      )}
    </div>
  );
}