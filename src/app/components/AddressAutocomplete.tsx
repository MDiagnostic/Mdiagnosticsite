import { useEffect, useRef, useState } from 'react';
import { MapPin, AlertCircle, Check } from 'lucide-react';

interface AddressAutocompleteProps {
  value: string;
  onChange: (address: string) => void;
  placeholder?: string;
  required?: boolean;
  hideWarning?: boolean;
  onValidationChange?: (isValid: boolean) => void; // Callback pour indiquer si l'adresse est validée
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
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch(
          `https://api-adresse.data.gouv.fr/search/?q=${encodeURIComponent(value)}&limit=5`
        );
        const data = await response.json();
        
        if (data.features) {
          const addressSuggestions: AddressSuggestion[] = data.features.map((feature: any) => ({
            label: feature.properties.label,
            city: feature.properties.city,
            postcode: feature.properties.postcode,
            context: feature.properties.context,
          }));
          setSuggestions(addressSuggestions);
          setShowSuggestions(true);
        }
      } catch (error) {
        console.error('Erreur lors de la recherche d\'adresse:', error);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce la recherche
    const timeoutId = setTimeout(searchAddress, 300);
    return () => clearTimeout(timeoutId);
  }, [value]);

  const handleSelectSuggestion = (suggestion: AddressSuggestion) => {
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
          onBlur={(e) => e.currentTarget.style.borderColor = isValidated ? '#22c55e' : '#e8ebe0'}
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

      {/* Suggestions dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-white border-2 rounded-lg shadow-lg max-h-60 overflow-y-auto"
             style={{ borderColor: '#e8ebe0' }}>
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelectSuggestion(suggestion)}
              className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors border-b last:border-b-0"
              style={{ borderColor: '#e8ebe0' }}
            >
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{suggestion.label}</p>
                  <p className="text-sm text-gray-500">{suggestion.context}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Message de validation */}
      {!isValidated && value.length >= 3 && !isLoading && suggestions.length === 0 && (
        <div className="flex items-center gap-2 text-xs text-orange-600 bg-orange-50 px-3 py-2 rounded border border-orange-200 mt-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>Aucune adresse trouvée. Vérifiez votre saisie.</span>
        </div>
      )}
    </div>
  );
}