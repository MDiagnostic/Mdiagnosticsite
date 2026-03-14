import { useState, useCallback, useEffect } from 'react';
import { rateLimiter } from '../lib/security';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  key: string;
}

interface RateLimitResult {
  canAttempt: boolean;
  attempt: () => boolean;
  timeRemaining: number;
  reset: () => void;
}

/**
 * Hook personnalisé pour gérer le rate limiting côté client
 * 
 * @example
 * const { canAttempt, attempt, timeRemaining } = useRateLimit({
 *   key: 'contact-form',
 *   maxAttempts: 3,
 *   windowMs: 300000 // 5 minutes
 * });
 */
export function useRateLimit({
  key,
  maxAttempts = 3,
  windowMs = 300000, // 5 minutes par défaut
}: RateLimitConfig): RateLimitResult {
  const [canAttempt, setCanAttempt] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);

  // Vérifier l'état initial
  useEffect(() => {
    const allowed = rateLimiter.canAttempt(key, maxAttempts, windowMs);
    setCanAttempt(allowed);
    
    if (!allowed) {
      const remaining = rateLimiter.getTimeUntilNextAttempt(key, windowMs);
      setTimeRemaining(remaining);
    }
  }, [key, maxAttempts, windowMs]);

  // Mise à jour du temps restant
  useEffect(() => {
    if (!canAttempt && timeRemaining > 0) {
      const interval = setInterval(() => {
        const remaining = rateLimiter.getTimeUntilNextAttempt(key, windowMs);
        setTimeRemaining(remaining);
        
        if (remaining <= 0) {
          setCanAttempt(true);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [canAttempt, timeRemaining, key, windowMs]);

  const attempt = useCallback((): boolean => {
    const allowed = rateLimiter.canAttempt(key, maxAttempts, windowMs);
    setCanAttempt(allowed);
    
    if (!allowed) {
      const remaining = rateLimiter.getTimeUntilNextAttempt(key, windowMs);
      setTimeRemaining(remaining);
    }
    
    return allowed;
  }, [key, maxAttempts, windowMs]);

  const reset = useCallback(() => {
    rateLimiter.reset(key);
    setCanAttempt(true);
    setTimeRemaining(0);
  }, [key]);

  return {
    canAttempt,
    attempt,
    timeRemaining,
    reset,
  };
}

/**
 * Formate le temps restant en minutes:secondes
 */
export function formatTimeRemaining(ms: number): string {
  const totalSeconds = Math.ceil(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  
  if (minutes > 0) {
    return `${minutes} min ${seconds} sec`;
  }
  return `${seconds} sec`;
}
