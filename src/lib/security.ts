import DOMPurify from 'dompurify';

/**
 * Sanitise les inputs utilisateur pour prévenir les attaques XSS
 */
export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  // Utilise DOMPurify pour nettoyer l'input
  const clean = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // Pas de HTML autorisé
    ALLOWED_ATTR: [], // Pas d'attributs autorisés
    KEEP_CONTENT: true, // Garde le contenu texte
  });
  
  // Trim les espaces
  return clean.trim();
}

/**
 * Valide le format d'un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

/**
 * Valide le format d'un numéro de téléphone français
 */
export function isValidPhone(phone: string): boolean {
  // Format: 06/07 XX XX XX XX ou +33 6/7 XX XX XX XX
  const phoneRegex = /^(?:(?:\+|00)33|0)[1-9](?:[0-9]{8})$/;
  const cleaned = phone.replace(/[\s.-]/g, '');
  return phoneRegex.test(cleaned);
}

/**
 * Valide le format d'un code postal français
 */
export function isValidPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^[0-9]{5}$/;
  return postalCodeRegex.test(postalCode);
}

/**
 * Valide la taille d'un fichier (en bytes)
 */
export function isValidFileSize(file: File, maxSizeMB: number = 5): boolean {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
}

/**
 * Valide le type MIME d'un fichier
 */
export function isValidFileType(file: File, allowedTypes: string[] = ['application/pdf']): boolean {
  return allowedTypes.includes(file.type);
}

/**
 * Échappe les caractères HTML pour prévenir les injections
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  return text.replace(/[&<>"'/]/g, (char) => map[char] || char);
}

/**
 * Génère un token CSRF simple
 */
export function generateCSRFToken(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

/**
 * Stocke le token CSRF dans le sessionStorage
 */
export function setCSRFToken(): string {
  const token = generateCSRFToken();
  sessionStorage.setItem('csrf_token', token);
  return token;
}

/**
 * Récupère le token CSRF du sessionStorage
 */
export function getCSRFToken(): string | null {
  return sessionStorage.getItem('csrf_token');
}

/**
 * Valide un token CSRF
 */
export function validateCSRFToken(token: string): boolean {
  const storedToken = getCSRFToken();
  return storedToken === token;
}

/**
 * Nettoie les données d'un formulaire
 */
export function sanitizeFormData<T extends Record<string, any>>(data: T): T {
  const sanitized = {} as T;
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key as keyof T] = sanitizeInput(value) as any;
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      // Récursif pour les objets imbriqués
      sanitized[key as keyof T] = sanitizeFormData(value);
    } else {
      sanitized[key as keyof T] = value;
    }
  }
  
  return sanitized;
}

/**
 * Rate limiting côté client
 */
class RateLimiter {
  private timestamps: Map<string, number[]> = new Map();
  
  /**
   * Vérifie si une action peut être effectuée
   * @param key - Identifiant unique de l'action
   * @param maxAttempts - Nombre maximum de tentatives
   * @param windowMs - Fenêtre de temps en millisecondes
   */
  canAttempt(key: string, maxAttempts: number = 3, windowMs: number = 300000): boolean {
    const now = Date.now();
    const attempts = this.timestamps.get(key) || [];
    
    // Nettoie les anciennes tentatives
    const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      return false;
    }
    
    // Ajoute la nouvelle tentative
    recentAttempts.push(now);
    this.timestamps.set(key, recentAttempts);
    
    return true;
  }
  
  /**
   * Récupère le temps restant avant de pouvoir réessayer (en ms)
   */
  getTimeUntilNextAttempt(key: string, windowMs: number = 300000): number {
    const attempts = this.timestamps.get(key) || [];
    if (attempts.length === 0) return 0;
    
    const oldestAttempt = Math.min(...attempts);
    const timeElapsed = Date.now() - oldestAttempt;
    const timeRemaining = windowMs - timeElapsed;
    
    return Math.max(0, timeRemaining);
  }
  
  /**
   * Réinitialise les tentatives pour une clé
   */
  reset(key: string): void {
    this.timestamps.delete(key);
  }
}

export const rateLimiter = new RateLimiter();

/**
 * Détecte les patterns suspects dans les inputs (spam, injections)
 */
export function detectSuspiciousPatterns(text: string): boolean {
  // Patterns suspects communs
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i, // onclick, onerror, etc.
    /data:text\/html/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\(/i,
    /expression\(/i,
  ];
  
  return suspiciousPatterns.some(pattern => pattern.test(text));
}

/**
 * Valide toutes les données d'un formulaire de contact
 */
export interface ContactFormValidation {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validateContactForm(data: {
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  address: string;
  message: string;
}): ContactFormValidation {
  const errors: Record<string, string> = {};
  
  // Validation nom
  if (!data.name || data.name.length < 2) {
    errors.name = 'Le nom doit contenir au moins 2 caractères';
  } else if (data.name.length > 100) {
    errors.name = 'Le nom ne peut pas dépasser 100 caractères';
  } else if (detectSuspiciousPatterns(data.name)) {
    errors.name = 'Le nom contient des caractères invalides';
  }
  
  // Validation email
  if (!isValidEmail(data.email)) {
    errors.email = 'Format d\'email invalide';
  }
  
  // Validation téléphone
  if (!isValidPhone(data.phone)) {
    errors.phone = 'Format de téléphone invalide (ex: 06 12 34 56 78)';
  }
  
  // Validation code postal
  if (!isValidPostalCode(data.postalCode)) {
    errors.postalCode = 'Code postal invalide (5 chiffres requis)';
  }
  
  // Validation adresse
  if (!data.address || data.address.length < 5) {
    errors.address = 'L\'adresse doit contenir au moins 5 caractères';
  } else if (data.address.length > 200) {
    errors.address = 'L\'adresse ne peut pas dépasser 200 caractères';
  } else if (detectSuspiciousPatterns(data.address)) {
    errors.address = 'L\'adresse contient des caractères invalides';
  }
  
  // Validation message
  if (data.message && data.message.length > 2000) {
    errors.message = 'Le message ne peut pas dépasser 2000 caractères';
  } else if (data.message && detectSuspiciousPatterns(data.message)) {
    errors.message = 'Le message contient des caractères invalides';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Masque partiellement un email pour la sécurité
 */
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (!local || !domain) return email;
  
  const maskedLocal = local.length > 2 
    ? `${local[0]}${'*'.repeat(local.length - 2)}${local[local.length - 1]}`
    : local;
  
  return `${maskedLocal}@${domain}`;
}

/**
 * Masque partiellement un numéro de téléphone
 */
export function maskPhone(phone: string): string {
  const cleaned = phone.replace(/[\s.-]/g, '');
  if (cleaned.length < 4) return phone;
  
  return `${cleaned.slice(0, 2)}${'*'.repeat(cleaned.length - 4)}${cleaned.slice(-2)}`;
}
