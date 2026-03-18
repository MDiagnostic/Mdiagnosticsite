# 📊 GUIDE COMPLET - GOOGLE ANALYTICS 4 POUR MDIAGNOSTIC

**Durée totale : 10 minutes**  
**Coût : GRATUIT**

---

## 🎯 POURQUOI GOOGLE ANALYTICS ?

Google Analytics vous permet de suivre :
- ✅ **Nombre de visiteurs** par jour/semaine/mois
- ✅ **Pages les plus visitées** (Accueil, Vente, Location, etc.)
- ✅ **Taux de conversion** (combien de visiteurs envoient un devis)
- ✅ **Sources de trafic** (Google, Facebook, liens directs)
- ✅ **Appareils utilisés** (mobile, desktop, tablette)
- ✅ **Localisation géographique** des visiteurs
- ✅ **Clics sur boutons** (téléphone, email, formulaires)

---

## 📋 ÉTAPE 1 : CRÉER VOTRE COMPTE GOOGLE ANALYTICS (5 minutes)

### A. Aller sur Google Analytics

1. **Ouvrez votre navigateur** et allez sur : https://analytics.google.com
2. **Connectez-vous** avec votre compte Google (celui que vous utilisez pour Gmail)
   - Si vous n'avez pas de compte Google, créez-en un gratuitement

### B. Créer un compte Analytics

1. Cliquez sur **"Commencer la mesure"** ou **"Créer un compte"**

2. **Nom du compte** :
   ```
   MDIAGNOSTIC
   ```

3. Cochez les cases :
   - ✅ Recommandations pour améliorer ma configuration
   - ✅ Benchmarking
   - ✅ Assistance technique
   - ✅ Représentants des ventes Google

4. Cliquez sur **"Suivant"**

### C. Créer une propriété

1. **Nom de la propriété** :
   ```
   Site Web MDIAGNOSTIC
   ```

2. **Fuseau horaire** :
   ```
   France (GMT+01:00) - Paris
   ```

3. **Devise** :
   ```
   Euro (EUR - €)
   ```

4. Cliquez sur **"Suivant"**

### D. Informations sur l'entreprise

1. **Secteur d'activité** :
   - Sélectionnez : `Immobilier` ou `Services professionnels`

2. **Taille de l'entreprise** :
   - Sélectionnez : `Petite (1-10 employés)`

3. **Comment comptez-vous utiliser Google Analytics ?**
   - Cochez : `Mesurer le comportement des clients`
   - Cochez : `Optimiser les performances de mon site`

4. Cliquez sur **"Créer"**

5. **Acceptez les conditions d'utilisation** :
   - Pays : `France`
   - Cochez : ✅ J'accepte les conditions générales de Google Analytics
   - Cochez : ✅ J'accepte l'amendement relatif au traitement des données
   - Cliquez sur **"J'accepte"**

### E. Configurer un flux de données

1. **Plateforme** :
   - Cliquez sur **"Web"** (icône ordinateur/mobile)

2. **URL du site web** :
   ```
   https://www.mdiagnostic.fr
   ```

3. **Nom du flux** :
   ```
   Site Web MDIAGNOSTIC
   ```

4. ✅ **Activer la mesure améliorée** (laissez coché)

5. Cliquez sur **"Créer un flux"**

---

## 🔑 ÉTAPE 2 : RÉCUPÉRER VOTRE ID DE MESURE (1 minute)

### A. Trouver l'ID de mesure

Après avoir créé le flux, vous verrez une page avec **"Détails du flux de données"**.

1. En haut à droite, vous verrez votre **ID de mesure** :
   ```
   G-XXXXXXXXXX
   ```
   (Commence toujours par "G-")

2. **COPIEZ cet ID** (exemple : `G-ABC123DEF4`)

---

## 🛠️ ÉTAPE 3 : AJOUTER L'ID À VOTRE SITE (2 minutes)

### Option A : Sur Figma Make (Environnement de développement)

**Pour tester en local :**

1. Créez un fichier `.env` à la racine du projet
2. Ajoutez cette ligne :
   ```
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Remplacez `G-XXXXXXXXXX` par votre vrai ID)

### Option B : Sur Vercel (Production - IMPORTANT !)

1. Allez sur **https://vercel.com**
2. Connectez-vous avec votre compte
3. Cliquez sur votre projet **"mdiagnostic"**
4. Allez dans **Settings** (Paramètres)
5. Cliquez sur **Environment Variables** (Variables d'environnement)
6. Cliquez sur **"Add New"** (Ajouter une nouvelle)
7. Remplissez :
   - **Name** : `VITE_GA_MEASUREMENT_ID`
   - **Value** : `G-XXXXXXXXXX` (votre ID)
   - **Environment** : Cochez tout (Production, Preview, Development)
8. Cliquez sur **"Save"**

### 🔄 Redéployer le site

Pour que Google Analytics fonctionne, vous devez redéployer le site :

1. Dans Vercel, allez dans **Deployments**
2. Cliquez sur le bouton **⋯** (trois points) du dernier déploiement
3. Cliquez sur **"Redeploy"**
4. Attendez 1-2 minutes ⏳

---

## ✅ ÉTAPE 4 : VÉRIFIER QUE ÇA FONCTIONNE (2 minutes)

### A. Test en temps réel

1. **Retournez sur Google Analytics** : https://analytics.google.com
2. Dans le menu de gauche, cliquez sur **"Rapports"**
3. Cliquez sur **"En temps réel"** (⚡ icône éclair)
4. **Ouvrez votre site** : https://www.mdiagnostic.fr
5. **Naviguez** sur plusieurs pages (Accueil, Vente, Contact, etc.)
6. **Retournez sur Google Analytics** :
   - Vous devriez voir **"1 utilisateur en temps réel"** 🎉
   - Les pages que vous avez visitées apparaissent

### B. Si ça ne fonctionne pas

**Vérifiez :**
1. Avez-vous bien redéployé le site sur Vercel ?
2. L'ID commence-t-il bien par `G-` ?
3. Avez-vous **accepté les cookies** sur le site ? (Sans cookies, GA ne se charge pas - RGPD)
4. Essayez en **navigation privée** pour forcer un rechargement complet

---

## 📊 ÉTAPE 5 : ÉVÉNEMENTS TRACKÉS AUTOMATIQUEMENT

✅ **Déjà configuré dans votre site** :

| Événement | Description | Utilité |
|-----------|-------------|---------|
| `page_view` | Vue de page | Savoir quelles pages sont les plus visitées |
| `phone_click` | Clic sur téléphone | Compter combien de personnes appellent |
| `form_submit` | Envoi de devis | **CONVERSION** - Mesurer l'efficacité du site |
| `devis_sent` | Devis envoyé | **CONVERSION** - Objectif principal |

---

## 🎯 ÉTAPE 6 : VOIR VOS STATISTIQUES (APRÈS QUELQUES JOURS)

### Rapports utiles dans Google Analytics

1. **Vue d'ensemble** :
   - Nombre de visiteurs totaux
   - Nouveaux visiteurs vs visiteurs récurrents
   - Durée moyenne de session

2. **Acquisition** (d'où viennent vos visiteurs) :
   - Google Search (recherches organiques)
   - Facebook
   - Direct (URL tapée directement)
   - Referral (autres sites)

3. **Engagement** (comportement) :
   - Pages les plus vues
   - Temps passé sur chaque page
   - Taux de rebond

4. **Événements** :
   - Nombre de clics sur le bouton téléphone
   - Nombre de devis envoyés ⭐
   - Nombre de formulaires de contact

5. **Conversions** :
   - Objectif principal : **Devis envoyés**
   - Permet de calculer le ROI (retour sur investissement)

---

## 🔔 ÉTAPE 7 : CONFIGURER DES ALERTES (OPTIONNEL)

1. Dans Google Analytics, allez dans **Administration** (⚙️ en bas à gauche)
2. Cliquez sur **Alertes personnalisées**
3. Créez une alerte pour :
   - **Baisse soudaine du trafic** (détecte un problème sur le site)
   - **Pic de trafic** (détecter une campagne qui fonctionne)
   - **Objectif atteint** (ex: 10 devis envoyés dans la semaine)

---

## 📱 ÉTAPE 8 : INSTALLER L'APPLICATION MOBILE (OPTIONNEL)

1. Téléchargez **Google Analytics** sur votre smartphone :
   - **iOS** : https://apps.apple.com/app/google-analytics/id881599038
   - **Android** : https://play.google.com/store/apps/details?id=com.google.android.apps.giant

2. Connectez-vous avec le même compte Google

3. **Avantage** : Recevoir des notifications en temps réel, consulter vos stats en déplacement

---

## 🎓 COMPRENDRE VOS DONNÉES

### Termes importants

| Terme | Définition |
|-------|------------|
| **Utilisateur** | Une personne unique qui visite votre site |
| **Session** | Une visite (peut inclure plusieurs pages) |
| **Taux de rebond** | % de visiteurs qui quittent après 1 seule page (idéal < 60%) |
| **Taux de conversion** | % de visiteurs qui envoient un devis (objectif : > 2%) |
| **Pages/session** | Nombre moyen de pages vues par visite (idéal > 3) |
| **Durée moyenne** | Temps passé sur le site (idéal > 2 minutes) |

### Objectifs à suivre

- **Visiteurs** : 100+ par mois = bon début
- **Devis envoyés** : 2-5% des visiteurs = excellent taux de conversion
- **Appels téléphoniques** : 1-3% des visiteurs
- **Taux de rebond** : < 60% = les visiteurs explorent le site

---

## 🛡️ CONFORMITÉ RGPD

✅ **Votre site est déjà conforme** :

1. **Consentement avant tracking** : Google Analytics se charge UNIQUEMENT si l'utilisateur accepte les cookies
2. **Anonymisation IP** : Les adresses IP sont anonymisées (`anonymize_ip: true`)
3. **Politique de confidentialité** : Vous mentionnez l'utilisation de Google Analytics
4. **Gestion des cookies** : L'utilisateur peut refuser ou modifier son choix

---

## 🚀 PROCHAINES ÉTAPES (APRÈS 1 MOIS DE DONNÉES)

### A. Optimiser votre site selon les données

- Si **taux de rebond élevé** → Améliorer le contenu de la page d'accueil
- Si **faible conversion** → Simplifier le formulaire de devis
- Si **peu de clics téléphone** → Rendre le bouton plus visible

### B. Créer des objectifs personnalisés

1. Allez dans **Administration** > **Événements**
2. Créez un événement de conversion pour :
   - Téléchargement de document
   - Clic sur email
   - Visite de la page "Zone d'intervention"

### C. Suivre les campagnes publicitaires

Si vous faites de la pub (Google Ads, Facebook Ads), utilisez des **paramètres UTM** :
```
https://www.mdiagnostic.fr/?utm_source=facebook&utm_medium=cpc&utm_campaign=diagnostic-dpe
```

Cela permet de savoir **quelle pub génère le plus de devis**.

---

## 🆘 BESOIN D'AIDE ?

### Ressources Google

- **Centre d'aide** : https://support.google.com/analytics
- **Academy** (cours gratuits) : https://analytics.google.com/analytics/academy
- **Communauté** : https://www.en.advertisercommunity.com/t5/Google-Analytics/ct-p/google-analytics

### Vérifications fréquentes

**Problème** : "Je ne vois aucune donnée"
- ✅ Avez-vous accepté les cookies sur le site ?
- ✅ L'ID `G-XXXXXXXXXX` est-il bien configuré dans Vercel ?
- ✅ Avez-vous redéployé le site après avoir ajouté la variable ?
- ✅ Attendez 24-48h pour les premiers rapports (temps réel fonctionne immédiatement)

**Problème** : "Les conversions ne sont pas trackées"
- ✅ Vérifiez que le devis s'envoie bien
- ✅ Ouvrez la Console (F12) et cherchez des erreurs
- ✅ Vérifiez que `trackFormSubmit()` est bien appelé

---

## 📝 RÉCAPITULATIF

✅ **CE QUI EST FAIT** (par moi) :
- Composant GoogleAnalytics.tsx créé
- Respect du consentement RGPD
- Anonymisation IP activée
- Tracking automatique des pages
- Tracking des clics téléphone
- Tracking des devis envoyés
- Tracking des conversions

✅ **CE QUE VOUS DEVEZ FAIRE** :
1. Créer un compte Google Analytics (5 min)
2. Récupérer votre ID de mesure `G-XXXXXXXXXX`
3. Ajouter l'ID dans Vercel (variable `VITE_GA_MEASUREMENT_ID`)
4. Redéployer le site
5. Tester en temps réel

⏱️ **Temps total** : 10 minutes  
💰 **Coût** : GRATUIT  
🎯 **Bénéfice** : Comprendre vos visiteurs et optimiser votre site

---

**Besoin d'aide pour une étape ? Dites-moi ! 💬**
