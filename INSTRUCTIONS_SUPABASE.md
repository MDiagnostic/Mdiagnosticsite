# 📋 Instructions de Configuration Supabase pour MDIAGNOSTIC

## 🎯 Objectif
Permettre la sauvegarde des formulaires de contact dans une base de données et l'export en CSV/Excel.

---

## 📝 ÉTAPE 1 : Créer la table dans Supabase

### 1.1 Accéder à votre projet Supabase
- Allez sur https://supabase.com
- Connectez-vous et ouvrez votre projet MDIAGNOSTIC

### 1.2 Créer la table
1. Dans le menu de gauche, cliquez sur **"Table Editor"**
2. Cliquez sur **"New Table"**
3. Configurez la table avec ces paramètres :

**Nom de la table :** `contact_forms`

**Colonnes à créer :**

| Nom de la colonne | Type | Options |
|-------------------|------|---------|
| `id` | uuid | Primary Key, Auto-generate |
| `created_at` | timestamptz | Default: now() |
| `name` | text | - |
| `email` | text | - |
| `phone` | text | - |
| `address` | text | - |
| `postal_code` | text | - |
| `transaction_type` | text | - |
| `property_type` | text | - |
| `is_new_construction` | text | - |
| `construction_year` | text | - |
| `surface` | text | - |
| `rooms` | text | - |
| `electricity_age` | text | - |
| `gas_installation` | text | - |
| `message` | text | - |
| `diagnostics_needed` | text[] | Array of text |
| `existing_diagnostics` | jsonb | - |

4. **Décochez "Enable Row Level Security (RLS)"** pour l'instant
5. Cliquez sur **"Save"**

---

## 📝 ÉTAPE 2 : SQL rapide (Alternative simple)

Si vous préférez utiliser SQL, allez dans **"SQL Editor"** et collez ce code :

```sql
-- Créer la table contact_forms
CREATE TABLE contact_forms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  address text,
  postal_code text,
  transaction_type text,
  property_type text,
  is_new_construction text,
  construction_year text,
  surface text,
  rooms text,
  electricity_age text,
  gas_installation text,
  message text,
  diagnostics_needed text[],
  existing_diagnostics jsonb
);

-- Désactiver RLS temporairement (à sécuriser plus tard)
ALTER TABLE contact_forms DISABLE ROW LEVEL SECURITY;

-- Permettre à tout le monde d'insérer (lecture publique)
GRANT INSERT ON contact_forms TO anon;
GRANT SELECT ON contact_forms TO anon;
```

Cliquez sur **"Run"** pour exécuter le SQL.

---

## 📝 ÉTAPE 3 : Configurer les variables d'environnement

### 3.1 Récupérer vos clés Supabase
1. Dans Supabase, allez dans **Settings > API**
2. Notez ces deux valeurs :
   - **Project URL** (ex: https://xxxxx.supabase.co)
   - **anon public key** (commence par "eyJh...")

### 3.2 Ajouter dans Figma Make
**IMPORTANT :** Dans l'interface Figma Make, ajoutez ces variables d'environnement :

- Variable 1 : `VITE_SUPABASE_URL` = votre Project URL
- Variable 2 : `VITE_SUPABASE_ANON_KEY` = votre anon public key

---

## 📝 ÉTAPE 4 : Tester le système

### 4.1 Test du formulaire
1. Allez sur votre site : `/contact`
2. Remplissez le formulaire de devis
3. Validez

### 4.2 Vérifier dans Supabase
1. Allez dans **Table Editor > contact_forms**
2. Vous devriez voir votre formulaire enregistré ✅

### 4.3 Test de l'export
1. Allez sur `/admin` sur votre site
2. Vous devriez voir la liste des formulaires
3. Cliquez sur **"Exporter en CSV"**
4. Un fichier CSV se télécharge avec toutes les données ✅

---

## 📊 Comment utiliser l'export CSV dans Excel

### Ouvrir le fichier CSV dans Excel :
1. Téléchargez le fichier CSV depuis `/admin`
2. Ouvrez Excel
3. **Fichier > Ouvrir** et sélectionnez le fichier CSV
4. Excel va automatiquement séparer les colonnes
5. Vous pouvez maintenant trier, filtrer, et analyser vos données !

### Colonnes dans l'export :
- Date de réception
- Nom, Email, Téléphone
- Adresse, Code Postal
- Type de transaction (Vente, Location, etc.)
- Type de bien (Maison, Appartement, etc.)
- Surface, Nombre de pièces
- **Diagnostics demandés** (liste complète)
- Diagnostics déjà possédés
- Message du client

---

## 🔒 ÉTAPE 5 : Sécuriser l'accès Admin (Optionnel)

Pour protéger la page `/admin`, vous pouvez :

### Option simple : URL secrète
Changez `/admin` par `/admin-mdiagnostic-2025` dans `routes.ts`

### Option avancée : Mot de passe
Ajouter un système de connexion simple (à demander si besoin)

---

## 📧 Notification par Email

Le système envoie **DEUX choses** :

1. **Email via EmailJS** (avec les fichiers PDF joints si uploadés)
   - Vous recevez l'email comme avant ✅
   
2. **Sauvegarde dans Supabase**
   - Les données sont stockées dans la base de données ✅
   - Vous pouvez les exporter en CSV quand vous voulez ✅

---

## ❓ Questions fréquentes

### Q: Est-ce que je vais recevoir un email à chaque formulaire ?
**R:** OUI ! Le système EmailJS continue de fonctionner normalement. Supabase est juste une sauvegarde supplémentaire.

### Q: Combien de formulaires puis-je stocker ?
**R:** Avec le plan gratuit (500 MB), vous pouvez stocker plusieurs milliers de formulaires (≈ 5-10 ans d'utilisation).

### Q: Comment exporter les données ?
**R:** Allez sur `/admin`, cliquez sur "Exporter en CSV", et ouvrez le fichier dans Excel.

### Q: Les fichiers PDF sont-ils stockés dans Supabase ?
**R:** NON. Les fichiers sont envoyés uniquement par email (EmailJS). Seules les données texte sont dans Supabase.

### Q: Puis-je supprimer des formulaires ?
**R:** Oui, connectez-vous à Supabase et supprimez les lignes directement dans la table.

---

## 🆘 Besoin d'aide ?

Si vous avez des erreurs :
1. Vérifiez que la table `contact_forms` existe dans Supabase
2. Vérifiez que les variables d'environnement sont bien configurées
3. Vérifiez dans la console du navigateur (F12) pour voir les erreurs
4. Contactez-moi avec le message d'erreur exact

---

## ✅ Résumé rapide

1. ✅ Créer la table `contact_forms` dans Supabase (SQL fourni ci-dessus)
2. ✅ Ajouter les variables d'environnement dans Figma Make
3. ✅ Tester le formulaire sur `/contact`
4. ✅ Vérifier les données dans Supabase
5. ✅ Exporter en CSV depuis `/admin`
6. ✅ Ouvrir le CSV dans Excel

**C'est tout ! 🎉**
