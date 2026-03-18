import { useEffect } from 'react';
import { useLocation } from 'react-router';

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

export function GoogleAnalytics() {
  const location = useLocation();
  
  // 🔧 CONFIGURATION - ID Google Analytics
  // Format : G-XXXXXXXXXX
  const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-MWW41TL2L3';

  useEffect(() => {
    console.log('🔍 [Google Analytics] Initialisation...');
    console.log('📊 [Google Analytics] ID de mesure:', GA_MEASUREMENT_ID);
    
    // Ne pas charger GA si pas de consentement cookies
    const consent = localStorage.getItem('mdiagnostic-cookie-consent');
    console.log('🍪 [Google Analytics] Consentement cookies:', consent);
    
    if (consent !== 'accepted' || !GA_MEASUREMENT_ID) {
      if (consent !== 'accepted') {
        console.warn('⚠️ [Google Analytics] Cookies non acceptés - Google Analytics désactivé');
      }
      if (!GA_MEASUREMENT_ID) {
        console.error('❌ [Google Analytics] Aucun ID de mesure configuré');
      }
      return;
    }

    // Charger Google Analytics uniquement si le script n'est pas déjà présent
    if (!window.gtag) {
      console.log('🚀 [Google Analytics] Chargement du script...');
      
      // Créer dataLayer
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer?.push(arguments);
      };
      window.gtag('js', new Date());

      // Configurer GA4 avec anonymisation IP et respect RGPD
      window.gtag('config', GA_MEASUREMENT_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure',
        page_path: location.pathname + location.search,
      });

      // Charger le script GA4
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.onload = () => {
        console.log('✅ [Google Analytics] Script chargé avec succès');
      };
      script.onerror = () => {
        console.error('❌ [Google Analytics] Erreur lors du chargement du script (bloqueur de pub ?)');
      };
      document.head.appendChild(script);
    } else {
      console.log('✅ [Google Analytics] Script déjà chargé');
    }
  }, [GA_MEASUREMENT_ID]);

  // Tracker les changements de page
  useEffect(() => {
    const consent = localStorage.getItem('mdiagnostic-cookie-consent');
    if (consent === 'accepted' && window.gtag && GA_MEASUREMENT_ID) {
      console.log('📄 [Google Analytics] Page vue:', location.pathname + location.search);
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location, GA_MEASUREMENT_ID]);

  return null; // Ce composant ne rend rien visuellement
}

/**
 * 📊 FONCTIONS UTILITAIRES POUR TRACKING PERSONNALISÉ
 */

/**
 * Tracker un événement personnalisé
 * @example trackEvent('form_submit', 'contact', 'Contact Form')
 */
export function trackEvent(
  action: string,
  category: string,
  label?: string,
  value?: number
) {
  const consent = localStorage.getItem('mdiagnostic-cookie-consent');
  if (consent !== 'accepted' || !window.gtag) {
    return;
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
}

/**
 * Tracker une conversion (devis envoyé, appel téléphonique)
 * @example trackConversion('devis_sent', 150)
 */
export function trackConversion(eventName: string, value?: number) {
  const consent = localStorage.getItem('mdiagnostic-cookie-consent');
  if (consent !== 'accepted' || !window.gtag) {
    return;
  }

  window.gtag('event', eventName, {
    currency: 'EUR',
    value: value || 0,
  });
}

/**
 * Tracker un clic sur bouton téléphone
 * @example trackPhoneClick('07 77 78 26 59')
 */
export function trackPhoneClick(phoneNumber: string) {
  trackEvent('phone_click', 'engagement', phoneNumber);
}

/**
 * Tracker un clic sur email
 * @example trackEmailClick('contact.mdiagnostic@gmail.com')
 */
export function trackEmailClick(email: string) {
  trackEvent('email_click', 'engagement', email);
}

/**
 * Tracker la soumission d'un formulaire
 * @example trackFormSubmit('contact')
 */
export function trackFormSubmit(formType: 'contact' | 'devis') {
  trackEvent('form_submit', 'engagement', formType);
  
  // Conversion pour les devis
  if (formType === 'devis') {
    trackConversion('devis_sent');
  }
}

/**
 * Tracker l'ouverture d'une modale
 * @example trackModalOpen('diagnostic_dpe')
 */
export function trackModalOpen(modalName: string) {
  trackEvent('modal_open', 'engagement', modalName);
}

/**
 * Tracker le téléchargement d'un document
 * @example trackDownload('plaquette.pdf')
 */
export function trackDownload(fileName: string) {
  trackEvent('file_download', 'engagement', fileName);
}