# 🚀 Configuration Rapide - Supabase pour MDIAGNOSTIC

## ✅ Corrections effectuées

Le site fonctionne maintenant **sans erreur** même si Supabase n'est pas encore configuré !

- ✅ Le formulaire de contact continue de fonctionner
- ✅ L'email sera envoyé normalement via EmailJS
- ✅ La page `/admin` affiche un message d'instruction clair
- ✅ Aucune erreur dans la console

---

## 🎯 Pour activer la sauvegarde et l'export Excel

Suivez ces 3 étapes simples :

### **ÉTAPE 1 : Créer la table dans Supabase** (2 minutes)

1. Allez sur https://supabase.com
2. Connectez-vous à votre projet
3. Cliquez sur **"SQL Editor"** dans le menu de gauche
4. Cliquez sur **"New Query"**
5. Copiez-collez ce code :

```sql
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

ALTER TABLE contact_forms DISABLE ROW LEVEL SECURITY;
GRANT INSERT ON contact_forms TO anon;
GRANT SELECT ON contact_forms TO anon;
```

6. Cliquez sur **"Run"** ✅

---

### **ÉTAPE 2 : Récupérer vos clés Supabase** (1 minute)

1. Dans Supabase, cliquez sur **⚙️ Settings** (roue dentée en bas à gauche)
2. Cliquez sur **"API"**
3. Notez ces deux valeurs :

**Project URL :**
```
https://xxxxxxxxxxxxx.supabase.co
```

**anon public :**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4eHh4eHh4eHh4eHh4eHh4eHgiLCJyb2xlIjoiYW5vbiIsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoyMDE1NTc2MDAwfQ.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

---

### **ÉTAPE 3 : Ajouter dans Figma Make** (1 minute)

Dans l'interface Figma Make, **ajoutez ces 2 variables d'environnement** :

| Nom de la variable | Valeur |
|-------------------|---------|
| `VITE_SUPABASE_URL` | Votre Project URL |
| `VITE_SUPABASE_ANON_KEY` | Votre anon public key |

**Rechargez votre site** et c'est tout ! 🎉

---

## 📊 Comment ça fonctionne après configuration ?

### **Quand un client remplit le formulaire :**

1. **Email envoyé** via EmailJS (avec les fichiers PDF si uploadés) ✅
2. **Données sauvegardées** dans Supabase automatiquement ✅

### **Pour consulter et exporter les données :**

1. Allez sur `/admin` sur votre site
2. Vous verrez :
   - 📊 Statistiques (total, semaine, mois)
   - 📋 Liste de tous les formulaires
   - 📥 Bouton "Exporter en CSV"

3. Cliquez sur **"Exporter en CSV"**
4. Le fichier se télécharge
5. Ouvrez-le dans **Excel** → toutes vos données sont là ! ✅

---

## 📋 Colonnes dans l'export Excel

- Date de réception
- Nom, Email, Téléphone
- Adresse, Code Postal
- Type de transaction
- Type de bien
- Surface, Pièces
- **Diagnostics demandés** (liste complète)
- Diagnostics déjà possédés
- Message

---

## ❓ Questions fréquentes

### Le formulaire fonctionne-t-il sans Supabase ?
**OUI !** Le formulaire envoie toujours l'email via EmailJS. Supabase est juste pour la sauvegarde et l'export.

### Combien de formulaires puis-je stocker ?
Avec le plan gratuit Supabase (500 MB), vous pouvez stocker **plusieurs milliers de formulaires** (5-10 ans d'utilisation).

### Les fichiers PDF sont-ils sauvegardés dans Supabase ?
**NON.** Seules les données texte (nom, email, diagnostics, etc.) sont sauvegardées. Les PDF sont envoyés par email uniquement.

### Comment supprimer des formulaires ?
Connectez-vous à Supabase → Table Editor → contact_forms → supprimez les lignes que vous voulez.

---

## 🆘 Besoin d'aide ?

Si vous avez une erreur ou une question, vérifiez :

1. ✅ La table `contact_forms` existe dans Supabase
2. ✅ Les 2 variables d'environnement sont bien configurées
3. ✅ Vous avez rechargé le site après la configuration

---

## ✨ Résumé

**Sans Supabase configuré :**
- ✅ Formulaire fonctionne
- ✅ Email envoyé normalement
- ❌ Pas de sauvegarde dans la base de données
- ❌ Pas d'export Excel

**Avec Supabase configuré (3 étapes ci-dessus) :**
- ✅ Formulaire fonctionne
- ✅ Email envoyé normalement
- ✅ **Sauvegarde dans la base de données**
- ✅ **Export Excel en 1 clic depuis /admin**

---

**C'est parti ! 🚀**
