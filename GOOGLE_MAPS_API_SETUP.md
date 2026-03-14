# Configuration de l'API Google Maps pour l'autocomplétion d'adresses

## Pourquoi cette API est nécessaire ?

L'autocomplétion d'adresses utilise l'API Google Places pour :
- ✅ Éviter les erreurs de frappe dans les adresses
- ✅ Garantir des adresses valides et géolocalisables
- ✅ Améliorer l'expérience utilisateur avec des suggestions en temps réel
- ✅ Faciliter la saisie sur mobile

## ⚠️ État actuel

Sans clé API Google Maps, le champ d'adresse fonctionne comme un champ texte normal (saisie manuelle).
Un message d'avertissement s'affiche pour vous rappeler de configurer l'API.

## Étapes pour obtenir votre clé API Google Maps

### 1. Créer un compte Google Cloud (si vous n'en avez pas)
- Rendez-vous sur : https://console.cloud.google.com/
- Connectez-vous avec votre compte Google (contact.mdiagnostic@gmail.com recommandé)
- Acceptez les conditions d'utilisation

### 2. Créer un nouveau projet
- Cliquez sur "Sélectionner un projet" en haut à gauche
- Cliquez sur "Nouveau projet"
- Nommez-le "MDIAGNOSTIC-Website" (ou autre nom)
- Cliquez sur "Créer"

### 3. Activer l'API Places
- Dans le menu hamburger (☰), allez dans : **APIs et services** > **Bibliothèque**
- Recherchez "Places API (New)"
- Cliquez sur "Places API (New)" *(c'est la nouvelle version)*
- Cliquez sur "Activer"

### 4. Créer une clé API
- Dans le menu (☰), allez dans : **APIs et services** > **Identifiants**
- Cliquez sur **"+ CRÉER DES IDENTIFIANTS"**
- Sélectionnez **"Clé API"**
- Votre clé API est générée ! (elle ressemble à : `AIzaSyB...`)

### 5. Sécuriser votre clé API (CRUCIAL !)

⚠️ **Ne JAMAIS publier votre clé API sur GitHub ou autre plateforme publique !**

#### Option A : Restrictions de domaine (Pour production)
- Cliquez sur votre clé API nouvellement créée
- Dans **"Restrictions relatives à l'application"** :
  - Sélectionnez **"Référents HTTP (sites web)"**
  - Ajoutez vos domaines autorisés :
    ```
    http://localhost:*
    https://localhost:*
    *.figma.com/*
    https://mdiagnostic.fr/*
    https://www.mdiagnostic.fr/*
    ```
- Dans **"Restrictions relatives aux API"** :
  - Sélectionnez **"Restreindre la clé"**
  - Cochez uniquement : **"Places API (New)"**
- Cliquez sur **"Enregistrer"**

### 6. Intégrer la clé dans votre projet

#### Méthode 1 : Variable d'environnement (Recommandé)

1. Créez un fichier `.env` à la racine du projet :
   ```env
   VITE_GOOGLE_MAPS_API_KEY=VOTRE_CLE_API_ICI
   ```

2. Ajoutez `.env` à votre `.gitignore` (déjà fait normalement)

3. Redémarrez votre serveur de développement

#### Méthode 2 : Modification directe du code (Moins sécurisé)

Si vous ne pouvez pas utiliser les variables d'environnement, modifiez le fichier :
`/src/app/components/AddressAutocomplete.tsx`

Ligne 12, remplacez :
```typescript
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';
```

Par :
```typescript
const GOOGLE_MAPS_API_KEY = 'VOTRE_CLE_API_ICI';
```

## Tarification

Google offre **200$ de crédit gratuit par mois**, ce qui correspond à :
- **Environ 28 000 requêtes d'autocomplétion par mois GRATUITEMENT**

Pour un site de diagnostic immobilier comme MDIAGNOSTIC, vous resterez très probablement dans la limite gratuite.

## Vérification

Une fois la clé API configurée :

1. Rechargez votre site web (Ctrl + R ou Cmd + R)
2. Videz le cache si nécessaire (Ctrl + Shift + R)
3. Allez dans le formulaire de devis
4. Arrivez à l'étape "Coordonnées" ou "Localisation"
5. Cliquez dans le champ "Adresse du bien"
6. Commencez à taper une adresse (ex: "12 avenue")
7. ✅ Des suggestions devraient apparaître automatiquement dans une liste déroulante

**Si cela ne fonctionne pas :**
- Ouvrez la console JavaScript (F12 > Console)
- Vérifiez s'il y a des erreurs
- Vérifiez que la clé API est bien insérée (pas de `YOUR_GOOGLE_MAPS_API_KEY`)
- Attendez 2-3 minutes après avoir activé l'API (temps de propagation)

## Différences avec l'ancienne API

✅ Le code utilise maintenant **PlaceAutocompleteElement** (nouvelle API 2025)
✅ Chargement optimisé avec `loading=async`
✅ Meilleure performance
✅ Support garanti à long terme

## Mode dégradé (sans API)

Si vous ne configurez pas la clé API, le site fonctionne quand même :
- Le champ d'adresse est un champ texte normal
- L'utilisateur doit taper l'adresse manuellement
- Un message orange rappelle qu'il faut configurer l'API

## Support et dépannage

### Erreur "InvalidKey" ou "InvalidKeyMapError"
➡️ Votre clé API n'est pas valide ou pas encore activée
- Vérifiez que vous avez bien copié toute la clé
- Attendez 2-3 minutes après création
- Vérifiez que l'API Places (New) est activée

### Erreur "RefererNotAllowedMapError"
➡️ Le domaine depuis lequel vous accédez au site n'est pas autorisé
- Ajoutez le domaine dans les restrictions de référents HTTP
- Pour le développement local : `http://localhost:*`

### L'autocomplétion ne s'affiche pas
➡️ Plusieurs causes possibles :
1. La clé API n'est pas configurée
2. L'API n'est pas activée dans Google Cloud
3. Les restrictions empêchent l'utilisation
4. Le cache du navigateur (videz-le)

### Documentation officielle

- **Migration vers la nouvelle API** : https://developers.google.com/maps/documentation/javascript/places-migration-overview
- **PlaceAutocompleteElement** : https://developers.google.com/maps/documentation/javascript/place-autocomplete
- **Tarification** : https://developers.google.com/maps/billing-and-pricing/pricing
- **Console Google Cloud** : https://console.cloud.google.com/

## Contact

Si vous avez des questions, n'hésitez pas à demander de l'aide !
