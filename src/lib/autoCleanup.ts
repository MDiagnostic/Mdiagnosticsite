import { cleanupOldFiles } from './supabase';

const CLEANUP_INTERVAL_DAYS = 30; // Nettoyage tous les 30 jours
const STORAGE_KEY = 'mdiagnostic_last_cleanup';

/**
 * Vérifie si un nettoyage automatique est nécessaire
 * et l'exécute en arrière-plan si besoin
 */
export async function autoCleanupCheck(): Promise<void> {
  try {
    // Récupérer la dernière date de nettoyage
    const lastCleanupStr = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();
    
    let shouldCleanup = false;
    
    if (!lastCleanupStr) {
      // Premier nettoyage : on attend 7 jours après le lancement du site
      shouldCleanup = true;
    } else {
      const lastCleanup = parseInt(lastCleanupStr);
      const daysSinceLastCleanup = (now - lastCleanup) / (1000 * 60 * 60 * 24);
      
      // Nettoyer si ça fait plus de CLEANUP_INTERVAL_DAYS jours
      shouldCleanup = daysSinceLastCleanup >= CLEANUP_INTERVAL_DAYS;
    }
    
    if (shouldCleanup) {
      console.log('🗑️ MDIAGNOSTIC : Nettoyage automatique des fichiers de +6 mois...');
      console.log('⏰ Cette opération se fait en arrière-plan et ne ralentit pas le site');
      
      // Exécuter le nettoyage en arrière-plan (ne pas attendre la réponse)
      cleanupOldFiles()
        .then((result) => {
          if (result.deletedFiles > 0) {
            console.log(`✅ Nettoyage terminé : ${result.deletedFiles} fichiers supprimés, ${result.storageFreed} MB libérés`);
          } else {
            console.log('✅ Nettoyage terminé : Aucun fichier ancien à supprimer');
          }
          
          // Mettre à jour la date du dernier nettoyage
          localStorage.setItem(STORAGE_KEY, now.toString());
        })
        .catch((error) => {
          console.error('❌ Erreur lors du nettoyage automatique:', error);
        });
    } else {
      const lastCleanup = parseInt(lastCleanupStr);
      const daysSinceLastCleanup = Math.floor((now - lastCleanup) / (1000 * 60 * 60 * 24));
      console.log(`ℹ️ MDIAGNOSTIC : Prochain nettoyage dans ${CLEANUP_INTERVAL_DAYS - daysSinceLastCleanup} jours`);
    }
  } catch (error) {
    console.error('❌ Erreur lors de la vérification du nettoyage automatique:', error);
  }
}

/**
 * Force un nettoyage immédiat (pour les tests)
 */
export async function forceCleanup() {
  localStorage.removeItem(STORAGE_KEY);
  const result = await cleanupOldFiles();
  localStorage.setItem(STORAGE_KEY, Date.now().toString());
  return result;
}

/**
 * Obtient les informations sur le prochain nettoyage
 */
export function getNextCleanupInfo(): { 
  lastCleanup: Date | null; 
  nextCleanup: Date | null; 
  daysUntilNext: number | null;
} {
  const lastCleanupStr = localStorage.getItem(STORAGE_KEY);
  
  if (!lastCleanupStr) {
    return {
      lastCleanup: null,
      nextCleanup: null,
      daysUntilNext: null,
    };
  }
  
  const lastCleanup = new Date(parseInt(lastCleanupStr));
  const nextCleanup = new Date(lastCleanup.getTime() + (CLEANUP_INTERVAL_DAYS * 24 * 60 * 60 * 1000));
  const daysUntilNext = Math.ceil((nextCleanup.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  
  return {
    lastCleanup,
    nextCleanup,
    daysUntilNext: Math.max(0, daysUntilNext),
  };
}