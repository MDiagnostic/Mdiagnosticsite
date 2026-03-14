# 🚀 DÉPLOIEMENT VERCEL - GUIDE COMPLET MDIAGNOSTIC

**Date :** 14 mars 2026  
**Site :** www.mdiagnostic.fr  
**Temps estimé :** 15 minutes

---

## 📋 PRÉREQUIS (À AVOIR SOUS LA MAIN)

Avant de commencer, ayez ces informations prêtes :

### 1. Vos identifiants Supabase
- URL du projet : `https://[VOTRE-PROJET].supabase.co`
- Clé publique (anon key) : `eyJ...`

### 2. Vos identifiants EmailJS
- Service ID : `service_...`
- Template ID Contact : `template_...`
- Template ID Devis : `template_...`
- Public Key : `...`

### 3. Votre clé Google Maps API (optionnel)
- Si vous utilisez Google Maps Places Autocomplete

---

## 🎯 ÉTAPE 1 : CRÉER UN COMPTE VERCEL (2 min)

### A. Aller sur Vercel
👉 **https://vercel.com/signup**

### B. S'inscrire
**Option 1 (Recommandée)** : Se connecter avec GitHub
- Cliquez sur **"Continue with GitHub"**
- Autorisez Vercel à accéder à vos repos

**Option 2** : Email
- Entrez votre email professionnel : `contact.mdiagnostic@gmail.com`
- Vérifiez votre boîte mail et cliquez sur le lien

### C. Choisir le plan gratuit
- Sélectionnez **"Hobby - Free"**
- Parfait pour votre site professionnel !

✅ **Compte créé !**

---

## 📦 ÉTAPE 2 : PRÉPARER VOTRE CODE (5 min)

### A. Créer un dépôt GitHub

**Si vous n'avez pas encore de dépôt GitHub :**

1. Allez sur **https://github.com/new**
2. Nom du dépôt : `mdiagnostic-website`
3. Visibilité : **Private** (recommandé)
4. Cliquez sur **"Create repository"**

### B. Uploader votre code sur GitHub

**Méthode 1 : Via l'interface GitHub (Plus simple)**

1. Sur la page de votre nouveau dépôt, cliquez sur **"uploading an existing file"**
2. **Glissez-déposez TOUS vos fichiers** du projet (sauf `node_modules/`)
3. Message du commit : `Initial commit - MDIAGNOSTIC website`
4. Cliquez sur **"Commit changes"**

**Méthode 2 : Via Git en ligne de commande**

```bash
# Dans votre dossier projet
git init
git add .
git commit -m "Initial commit - MDIAGNOSTIC website"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/mdiagnostic-website.git
git push -u origin main
```

✅ **Code sur GitHub !**

---

## 🌐 ÉTAPE 3 : DÉPLOYER SUR VERCEL (3 min)

### A. Importer le projet

1. Allez sur **https://vercel.com/new**
2. Sélectionnez **"Import Git Repository"**
3. Autorisez Vercel à accéder à GitHub si demandé
4. Sélectionnez votre dépôt : `mdiagnostic-website`
5. Cliquez sur **"Import"**

### B. Configurer le projet

**Framework Preset :** Vite (détecté automatiquement ✅)

**Build Settings (NE PAS MODIFIER) :**
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

**Root Directory :** `.` (racine)

✅ **Configuration OK !**

---

## 🔐 ÉTAPE 4 : AJOUTER LES VARIABLES D'ENVIRONNEMENT (3 min)

**IMPORTANT** : Avant de cliquer sur "Deploy", ajoutez vos variables d'environnement !

### A. Cliquer sur "Environment Variables"

### B. Ajouter TOUTES ces variables :

| Name (Exactement comme écrit) | Value (Remplacer par vos vraies valeurs) |
|-------------------------------|------------------------------------------|
| `VITE_SUPABASE_URL` | `https://[VOTRE-PROJET].supabase.co` |
| `VITE_SUPABASE_ANON_KEY` | `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...` |
| `VITE_EMAILJS_SERVICE_ID` | `service_xxxxxxx` |
| `VITE_EMAILJS_TEMPLATE_CONTACT` | `template_xxxxxxx` |
| `VITE_EMAILJS_TEMPLATE_DEVIS` | `template_xxxxxxx` |
| `VITE_EMAILJS_PUBLIC_KEY` | `votre_public_key` |
| `VITE_GOOGLE_MAPS_API_KEY` | `AIza...` (si vous en avez une) |

**Pour chaque variable :**
1. Collez le **Name** exactement
2. Collez la **Value** correspondante
3. Laissez les environnements : **Production, Preview, Development** cochés
4. Cliquez sur **"Add"**

### C. Vérifier les variables

✅ Vous devez avoir **7 variables** (6 si pas de Google Maps)

---

## 🚀 ÉTAPE 5 : LANCER LE DÉPLOIEMENT (2 min)

### A. Cliquer sur "Deploy"

Vercel va :
1. ✅ Installer les dépendances (`npm install`)
2. ✅ Compiler votre site (`npm run build`)
3. ✅ Déployer sur le CDN mondial
4. ✅ Générer une URL de production

**Durée :** 1-2 minutes ⏱️

### B. Attendre la fin

Vous verrez des logs en temps réel. **C'est normal !**

### C. Félicitations ! 🎉

Quand vous voyez :
```
✓ Build completed
✓ Deployment ready
```

**Votre site est en ligne !** 🌍

URL temporaire : `https://mdiagnostic-website-xxx.vercel.app`

---

## 🌐 ÉTAPE 6 : CONFIGURER VOTRE NOM DE DOMAINE (OPTIONNEL)

### Si vous avez acheté www.mdiagnostic.fr

1. Dans Vercel, allez dans **"Settings" > "Domains"**
2. Cliquez sur **"Add Domain"**
3. Entrez : `mdiagnostic.fr` et `www.mdiagnostic.fr`
4. Suivez les instructions pour configurer les DNS

**Vercel va vous donner :**
- Un enregistrement `A` : `76.76.21.21`
- Un enregistrement `CNAME` : `cname.vercel-dns.com`

5. Ajoutez ces enregistrements chez votre registrar (OVH, Gandi, etc.)
6. Attendez 24-48h pour la propagation DNS

### Si vous n'avez pas encore de domaine

Utilisez l'URL Vercel gratuite : `https://mdiagnostic-website.vercel.app`

---

## ✅ ÉTAPE 7 : VÉRIFICATIONS POST-DÉPLOIEMENT (5 min)

### Testez TOUTES ces pages :

- [ ] **Page d'accueil** : `https://votre-url.vercel.app/`
- [ ] **Services** : `/` (section Services)
- [ ] **Vente** : `/vente`
- [ ] **Location** : `/location`
- [ ] **Copropriété** : `/copropriete`
- [ ] **Autres prestations** : `/autres-prestations`
- [ ] **À propos** : `/a-propos`
- [ ] **Contact** : `/contact`
- [ ] **Mentions légales** : `/mentions-legales`
- [ ] **CGV** : `/cgv`
- [ ] **Politique de confidentialité** : `/politique-confidentialite`
- [ ] **Gestion cookies** : `/gestion-cookies`

### Testez les formulaires :

#### Formulaire de contact
1. Allez sur `/contact`
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. ✅ Vérifiez que vous recevez l'email sur `contact.mdiagnostic@gmail.com`

#### Formulaire de devis
1. Cliquez sur "Demander un devis" dans la navigation
2. Remplissez les 6 étapes
3. Envoyez le devis
4. ✅ Vérifiez que vous recevez l'email

### Testez le responsive :

1. Ouvrez les **DevTools** (F12)
2. Cliquez sur l'icône **mobile** (Ctrl+Shift+M)
3. Testez ces tailles :
   - 📱 iPhone SE (375px)
   - 📱 iPhone 12 Pro (390px)
   - 📱 Samsung Galaxy S20 (360px)
   - 📱 iPad (768px)
   - 💻 Desktop (1920px)

### Testez les avis Google :

1. Allez sur la page d'accueil
2. Scrollez jusqu'à **"Avis Clients Google"**
3. ✅ Vérifiez que les avis s'affichent (ou 0.0/5 si pas encore d'avis)
4. Attendez 6 heures
5. ✅ Vérifiez que les avis se rafraîchissent automatiquement

### Testez le bandeau cookies :

1. Ouvrez votre site en **navigation privée**
2. ✅ Le bandeau cookies doit apparaître en bas
3. Cliquez sur "Tout refuser"
4. ✅ Vérifiez qu'il disparaît
5. Rechargez la page
6. ✅ Le bandeau ne doit PAS réapparaître

---

## 🔧 ÉTAPE 8 : CONFIGURATION SUPABASE (2 min)

### Autoriser votre domaine Vercel dans Supabase

1. Allez sur **https://supabase.com/dashboard**
2. Sélectionnez votre projet MDIAGNOSTIC
3. Allez dans **"Settings" > "API"**
4. Section **"URL Configuration"**
5. Ajoutez votre URL Vercel :
   - `https://votre-url.vercel.app`
   - `https://www.mdiagnostic.fr` (si domaine custom)
6. Cliquez sur **"Save"**

✅ **Supabase autorisé !**

---

## 📊 ÉTAPE 9 : VÉRIFIER LE SEO (3 min)

### A. Tester les meta tags

1. Allez sur **https://www.opengraph.xyz/**
2. Entrez votre URL Vercel
3. ✅ Vérifiez que vous voyez :
   - Titre : "MDIAGNOSTIC - Diagnostic Immobilier Soustons..."
   - Description : "Diagnostiqueur immobilier certifié..."
   - Image de prévisualisation

### B. Tester le sitemap

1. Allez sur `https://votre-url.vercel.app/sitemap.xml`
2. ✅ Vérifiez que le fichier s'affiche avec toutes vos pages

### C. Tester robots.txt

1. Allez sur `https://votre-url.vercel.app/robots.txt`
2. ✅ Vérifiez qu'il contient :
```
User-agent: *
Allow: /
Sitemap: https://votre-url.vercel.app/sitemap.xml
```

---

## 🎯 ÉTAPE 10 : SOUMETTRE À GOOGLE (5 min)

### A. Google Search Console

1. Allez sur **https://search.google.com/search-console/**
2. Cliquez sur **"Ajouter une propriété"**
3. Sélectionnez **"Préfixe d'URL"**
4. Entrez : `https://votre-url.vercel.app`
5. **Méthode de vérification :** Fichier HTML
   - Vercel gère automatiquement la vérification ✅
   - Ou utilisez la méthode "Balise HTML" (copiez la balise dans `index.html`)
6. Cliquez sur **"Valider"**

### B. Soumettre le sitemap

1. Dans Google Search Console
2. Menu **"Sitemaps"**
3. Ajoutez : `https://votre-url.vercel.app/sitemap.xml`
4. Cliquez sur **"Envoyer"**

✅ **Google va indexer votre site dans 24-48h !**

---

## 📈 ÉTAPE 11 : CONFIGURER GOOGLE ANALYTICS (OPTIONNEL)

### A. Créer un compte GA4

1. Allez sur **https://analytics.google.com/**
2. Cliquez sur **"Commencer"**
3. Nom du compte : `MDIAGNOSTIC`
4. Nom de la propriété : `Site Web MDIAGNOSTIC`
5. Fuseau horaire : **France (GMT+1)**
6. Devise : **Euro (EUR)**
7. Cliquez sur **"Suivant"**

### B. Obtenir l'ID de mesure

1. Copiez votre **ID de mesure** : `G-XXXXXXXXXX`

### C. Ajouter à Vercel

1. Dans Vercel, allez dans **"Settings" > "Environment Variables"**
2. Ajoutez :
   - Name : `VITE_GA_MEASUREMENT_ID`
   - Value : `G-XXXXXXXXXX`
3. **Redéployez** votre site (Settings > Deployments > bouton Redeploy)

✅ **Google Analytics configuré !**

---

## 🎉 DÉPLOIEMENT TERMINÉ !

### ✅ CHECKLIST FINALE

- [x] Site déployé sur Vercel
- [x] Variables d'environnement configurées
- [x] Formulaires fonctionnels
- [x] Responsive testé
- [x] Supabase autorisé
- [x] SEO meta tags OK
- [x] Sitemap soumis à Google
- [x] Robots.txt OK
- [x] Bandeau cookies fonctionne
- [x] Avis Google automatiques (6h)

---

## 🔄 MISES À JOUR FUTURES

### Comment mettre à jour votre site après déploiement :

**Méthode 1 : Via GitHub (Automatique)**

1. Modifiez vos fichiers localement
2. Uploadez-les sur GitHub (remplacez les fichiers)
3. Commit : `Mise à jour - [description]`
4. ✅ **Vercel redéploie AUTOMATIQUEMENT en 2 min !**

**Méthode 2 : Via Vercel CLI**

```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 🆘 DÉPANNAGE

### Problème : "Build failed"

**Solution :**
1. Vérifiez les logs dans Vercel
2. Vérifiez que `package.json` contient bien `"build": "vite build"`
3. Vérifiez que toutes les dépendances sont dans `package.json`

### Problème : "Formulaire ne fonctionne pas"

**Solution :**
1. Vérifiez que les variables EmailJS sont bien configurées dans Vercel
2. Vérifiez les noms exacts : `VITE_EMAILJS_SERVICE_ID` (pas de faute !)
3. Redéployez le site

### Problème : "Avis Google ne s'affichent pas"

**Solution :**
1. Vérifiez que votre Google Place ID est correct
2. Vérifiez que votre profil Google My Business est actif
3. Vérifiez que vous avez au moins 1 avis avec texte (pas juste étoiles)
4. Attendez 6 heures pour le rafraîchissement automatique

### Problème : "Page 404 Not Found"

**Solution :**
1. Vérifiez que vous avez bien un fichier `vercel.json` à la racine avec :
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```
2. Redéployez le site

---

## 📞 SUPPORT

**Si vous avez un problème :**

1. **Vercel Support :** https://vercel.com/support
2. **Documentation Vercel :** https://vercel.com/docs
3. **Communauté Vercel :** https://github.com/vercel/vercel/discussions

---

## 🎯 PROCHAINES ÉTAPES RECOMMANDÉES

1. **Acheter un nom de domaine** : www.mdiagnostic.fr (10€/an chez OVH, Gandi, etc.)
2. **Activer Google Analytics** : Suivre vos visiteurs
3. **Créer Google My Business** : Apparaître sur Google Maps
4. **Demander des avis clients** : Booster votre référencement local
5. **Créer des backlinks** : Pages Jaunes, 118 712, annuaires professionnels

---

## 💰 COÛTS

| Service | Prix | Utilisation MDIAGNOSTIC |
|---------|------|-------------------------|
| **Vercel Hobby** | 0€/mois | Parfait pour votre site ✅ |
| **Supabase Free** | 0€/mois | 500 MB stockage, 50 000 lignes ✅ |
| **EmailJS Free** | 0€/mois | 200 emails/mois ✅ |
| **Google Maps API** | ~0€/mois | 28 000 requêtes gratuites/mois ✅ |
| **Nom de domaine** | 10€/an | .fr chez OVH ✅ |

**Total mensuel : 0€** (sauf domaine 0.83€/mois) 🎉

---

## 🏆 FÉLICITATIONS !

**Votre site professionnel MDIAGNOSTIC est maintenant en ligne ! 🚀**

- ✅ Accessible 24/7 partout dans le monde
- ✅ HTTPS sécurisé automatique (certificat SSL)
- ✅ CDN mondial (temps de chargement < 1 seconde)
- ✅ Sauvegardes automatiques (Vercel + GitHub)
- ✅ Mises à jour faciles (push sur GitHub = déploiement auto)
- ✅ Conformité RGPD complète
- ✅ SEO optimisé pour Google

**Partagez votre site :** `https://votre-url.vercel.app` 🎊

---

**Besoin d'aide ? Contactez-moi ! 💬**

Dernière mise à jour : 14 mars 2026
