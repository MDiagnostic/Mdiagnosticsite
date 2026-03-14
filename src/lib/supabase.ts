import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vscleidjqfgxylyforsh.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzY2xlaWRqcWZneHlseWZvcnNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MzIwNTUsImV4cCI6MjA4OTAwODA1NX0.ZIMMhz0F4-9l3y5aMSPd076Y88YLyaWo_2waivL6ONs';

// Créer un client Supabase uniquement si les variables sont définies
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Vérifier si Supabase est configuré
export const isSupabaseConfigured = () => {
  return supabaseUrl !== '' && supabaseAnonKey !== '';
};

// Types pour la table contact_forms
export interface ContactForm {
  id?: string;
  created_at?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  postal_code: string;
  transaction_type: string;
  property_type: string;
  is_new_construction: string;
  construction_year: string;
  surface: string;
  rooms: string;
  electricity_age: string;
  gas_installation: string;
  message: string;
  diagnostics_needed: string[];
  existing_diagnostics: Record<string, string>;
}

// Fonction pour sauvegarder un formulaire de contact
export async function saveContactForm(formData: ContactForm) {
  if (!supabase) {
    console.warn('Supabase not configured - skipping save');
    return null;
  }

  const { data, error } = await supabase
    .from('contact_forms')
    .insert([formData])
    .select();

  if (error) {
    console.warn('⚠️ Table contact_forms non trouvée dans Supabase - sauvegarde ignorée (l\'email sera quand même envoyé)');
    // Ne pas lancer d'erreur, juste retourner null pour ne pas bloquer l'envoi de l'email
    return null;
  }

  return data;
}

// Fonction pour récupérer tous les formulaires (pour l'admin)
export async function getAllContactForms() {
  if (!supabase) {
    console.warn('Supabase not configured');
    return [];
  }

  const { data, error } = await supabase
    .from('contact_forms')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching contact forms:', error);
    throw error;
  }

  return data;
}

// Fonction pour uploader un fichier de diagnostic vers Supabase Storage
export async function uploadDiagnosticFile(
  file: File, 
  diagnosticType: string,
  customerEmail: string
): Promise<string | null> {
  if (!supabase) {
    console.warn('Supabase not configured - skipping file upload');
    return null;
  }

  // Créer un nom de fichier unique
  const timestamp = Date.now();
  const sanitizedEmail = customerEmail.replace(/[^a-zA-Z0-9]/g, '_');
  const fileName = `${sanitizedEmail}/${diagnosticType}_${timestamp}_${file.name}`;

  try {
    // Upload le fichier dans le bucket 'diagnostic-files'
    const { data, error } = await supabase.storage
      .from('diagnostic-files')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Error uploading file:', error);
      return null;
    }

    // Générer l'URL publique du fichier
    const { data: urlData } = supabase.storage
      .from('diagnostic-files')
      .getPublicUrl(fileName);

    return urlData.publicUrl;
  } catch (error) {
    console.error('Error uploading diagnostic file:', error);
    return null;
  }
}

// Interface pour le résultat du nettoyage
export interface CleanupResult {
  totalFiles: number;
  deletedFiles: number;
  deletedFileNames: string[];
  errors: string[];
  storageFreed: number; // en MB
}

// Fonction pour supprimer les fichiers de plus de 6 mois
export async function cleanupOldFiles(): Promise<CleanupResult> {
  if (!supabase) {
    console.warn('Supabase not configured - skipping cleanup');
    return {
      totalFiles: 0,
      deletedFiles: 0,
      deletedFileNames: [],
      errors: ['Supabase not configured'],
      storageFreed: 0,
    };
  }

  const result: CleanupResult = {
    totalFiles: 0,
    deletedFiles: 0,
    deletedFileNames: [],
    errors: [],
    storageFreed: 0,
  };

  try {
    // Lister tous les fichiers dans le bucket
    const { data: files, error: listError } = await supabase.storage
      .from('diagnostic-files')
      .list('', {
        limit: 1000,
        sortBy: { column: 'created_at', order: 'asc' }
      });

    if (listError) {
      result.errors.push(`Erreur lors de la liste des fichiers: ${listError.message}`);
      return result;
    }

    if (!files || files.length === 0) {
      console.log('Aucun fichier à nettoyer');
      return result;
    }

    result.totalFiles = files.length;

    // Date limite : 6 mois en arrière
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const sixMonthsAgoTimestamp = sixMonthsAgo.getTime();

    // Parcourir tous les dossiers (emails)
    const filesToDelete: string[] = [];

    for (const folder of files) {
      if (folder.name === '.emptyFolderPlaceholder') continue;

      // Lister les fichiers dans chaque dossier email
      const { data: folderFiles, error: folderError } = await supabase.storage
        .from('diagnostic-files')
        .list(folder.name, {
          limit: 100,
        });

      if (folderError) {
        result.errors.push(`Erreur dossier ${folder.name}: ${folderError.message}`);
        continue;
      }

      if (!folderFiles) continue;

      for (const file of folderFiles) {
        // Extraire le timestamp du nom de fichier (format: diagnosticType_TIMESTAMP_filename.pdf)
        const match = file.name.match(/_(\d+)_/);
        
        if (match) {
          const fileTimestamp = parseInt(match[1]);
          
          // Si le fichier a plus de 6 mois
          if (fileTimestamp < sixMonthsAgoTimestamp) {
            const fullPath = `${folder.name}/${file.name}`;
            filesToDelete.push(fullPath);
            result.deletedFileNames.push(fullPath);
            
            // Estimer la taille (metadata.size est en bytes)
            if (file.metadata && file.metadata.size) {
              result.storageFreed += file.metadata.size;
            }
          }
        }
      }
    }

    // Supprimer les fichiers en batch
    if (filesToDelete.length > 0) {
      const { data: deleteData, error: deleteError } = await supabase.storage
        .from('diagnostic-files')
        .remove(filesToDelete);

      if (deleteError) {
        result.errors.push(`Erreur lors de la suppression: ${deleteError.message}`);
      } else {
        result.deletedFiles = filesToDelete.length;
        // Convertir bytes en MB
        result.storageFreed = Math.round((result.storageFreed / 1024 / 1024) * 100) / 100;
      }
    }

    return result;

  } catch (error) {
    result.errors.push(`Erreur inattendue: ${error}`);
    return result;
  }
}

// Fonction pour obtenir les statistiques de stockage
export async function getStorageStats() {
  if (!supabase) {
    return { totalFiles: 0, totalSize: 0, oldestFile: null, newestFile: null };
  }

  try {
    const { data: files, error } = await supabase.storage
      .from('diagnostic-files')
      .list('', {
        limit: 1000,
      });

    if (error || !files) {
      return { totalFiles: 0, totalSize: 0, oldestFile: null, newestFile: null };
    }

    let totalSize = 0;
    let oldestTimestamp = Infinity;
    let newestTimestamp = 0;

    // Parcourir tous les dossiers
    for (const folder of files) {
      if (folder.name === '.emptyFolderPlaceholder') continue;

      const { data: folderFiles } = await supabase.storage
        .from('diagnostic-files')
        .list(folder.name, {
          limit: 100,
        });

      if (!folderFiles) continue;

      for (const file of folderFiles) {
        if (file.metadata && file.metadata.size) {
          totalSize += file.metadata.size;
        }

        // Extraire le timestamp
        const match = file.name.match(/_(\d+)_/);
        if (match) {
          const fileTimestamp = parseInt(match[1]);
          if (fileTimestamp < oldestTimestamp) oldestTimestamp = fileTimestamp;
          if (fileTimestamp > newestTimestamp) newestTimestamp = fileTimestamp;
        }
      }
    }

    return {
      totalFiles: files.length,
      totalSize: Math.round((totalSize / 1024 / 1024) * 100) / 100, // MB
      oldestFile: oldestTimestamp !== Infinity ? new Date(oldestTimestamp) : null,
      newestFile: newestTimestamp !== 0 ? new Date(newestTimestamp) : null,
    };
  } catch (error) {
    console.error('Error getting storage stats:', error);
    return { totalFiles: 0, totalSize: 0, oldestFile: null, newestFile: null };
  }
}