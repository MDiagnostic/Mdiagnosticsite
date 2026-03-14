# ✅ CHECKLIST DÉPLOIEMENT - META TAGS SEO

**Date création :** 14 mars 2026  
**Site :** www.mdiagnostic.fr  
**Objectif :** Passer de 2/10 à 9/10 en SEO

---

## 📋 ÉTAPE 1 : VÉRIFICATIONS AVANT DÉPLOIEMENT

### **Fichiers créés** (à vérifier qu'ils existent)

- [x] `/index.html` - HTML avec meta tags SEO ⭐ **CRITIQUE**
- [x] `/src/main.tsx` - Point d'entrée React
- [x] `/public/favicon.svg` - Icône "MD" vert olive
- [x] `/public/manifest.json` - Configuration PWA
- [x] `/SEO_META_TAGS_EXPLICATION.md` - Documentation complète
- [x] `/AUDIT_SEO_CORRECTIONS.md` - Rapport de corrections
- [x] `/GUIDE_SIMPLE_META_TAGS.md` - Guide débutant

### **Vérifications dans index.html**

- [x] Titre contient "MDIAGNOSTIC - Diagnostic Immobilier Soustons, Landes (40)"
- [x] Description contient "Diagnostiqueuse certifiée" + services
- [x] Meta geo.region = "FR-40"
- [x] Meta geo.position = "43.7516;-1.3303"
- [x] Open Graph présent (og:title, og:description, og:image)
- [x] Twitter Card présent
- [x] Canonical URL = "https://www.mdiagnostic.fr/"
- [x] Schema.org LocalBusiness présent avec :
  - [x] name: "MDIAGNOSTIC"
  - [x] telephone: "+33777782659"
  - [x] email: "contact.mdiagnostic@gmail.com"
  - [x] address: Soustons, 40140
  - [x] geo: 43.7516, -1.3303
  - [x] openingHours: Lun-Ven 8h-18h
  - [x] hasOfferCatalog: DPE, Amiante, Plomb, Électricité, Gaz, Termites
  - [x] areaServed: 9 villes (Soustons, Hossegor, Capbreton...)
- [x] Favicon lié : /favicon.svg
- [x] Manifest lié : /manifest.json
- [x] Preconnect fonts.googleapis.com
- [x] Preconnect images.unsplash.com
- [x] Theme color = #818958

---

## 🚀 ÉTAPE 2 : DÉPLOIEMENT SUR VERCEL

### **Actions à faire**

- [ ] 1. Ouvrir le terminal dans le dossier du projet
- [ ] 2. Exécuter : `npm run build` (ou `pnpm build`)
- [ ] 3. Vérifier qu'il n'y a pas d'erreur de compilation
- [ ] 4. Si OK, déployer sur Vercel (push sur Git ou deploy direct)
- [ ] 5. Attendre que le déploiement soit terminé
- [ ] 6. Récupérer l'URL de production : `https://www.mdiagnostic.fr`

### **Tests immédiats après déploiement**

- [ ] 7. Ouvrir le site dans un navigateur
- [ ] 8. Vérifier que le favicon "MD" apparaît dans l'onglet
- [ ] 9. Faire clic droit > "Afficher le code source de la page"
- [ ] 10. Vérifier que les meta tags sont présentes dans le HTML :
  ```html
  <title>MDIAGNOSTIC - Diagnostic Immobilier Soustons...</title>
  <meta name="description" content="Diagnostiqueuse...">
  ```
- [ ] 11. Vérifier que le Schema.org JSON-LD est présent :
  ```html
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    ...
  ```

---

## 🔍 ÉTAPE 3 : VALIDATION SEO (à faire le jour du déploiement)

### **Test 1 : Rich Results Test (PRIORITAIRE)**

- [ ] 1. Aller sur : https://search.google.com/test/rich-results
- [ ] 2. Entrer l'URL : `https://www.mdiagnostic.fr`
- [ ] 3. Cliquer "Tester l'URL"
- [ ] 4. **VÉRIFIER :** Message "✅ LocalBusiness détecté"
- [ ] 5. **VÉRIFIER :** Aperçu montre :
  - Nom : MDIAGNOSTIC
  - Téléphone : 07 77 78 26 59
  - Adresse : Soustons, 40140
  - Horaires : Lun-Ven 8h-18h
- [ ] 6. Si erreur, corriger et retester

### **Test 2 : Open Graph Debugger**

- [ ] 1. Aller sur : https://www.opengraph.xyz/
- [ ] 2. Entrer l'URL : `https://www.mdiagnostic.fr`
- [ ] 3. **VÉRIFIER :** Carte de partage affiche :
  - Titre : "MDIAGNOSTIC - Diagnostic Immobilier Soustons Landes (40)"
  - Description correcte
  - Image (Unsplash maison)
- [ ] 4. Partager le site sur WhatsApp ou Facebook pour tester en réel

### **Test 3 : Meta Tags Checker**

- [ ] 1. Aller sur : https://metatags.io/
- [ ] 2. Entrer l'URL : `https://www.mdiagnostic.fr`
- [ ] 3. **VÉRIFIER :** Toutes les meta tags sont présentes
- [ ] 4. **VÉRIFIER :** Score > 90/100

### **Test 4 : PageSpeed Insights**

- [ ] 1. Aller sur : https://pagespeed.web.dev/
- [ ] 2. Entrer l'URL : `https://www.mdiagnostic.fr`
- [ ] 3. **OBJECTIF :** Score Performance > 85/100
- [ ] 4. **OBJECTIF :** Score SEO > 95/100
- [ ] 5. Si problèmes, noter pour corrections ultérieures

### **Test 5 : Mobile-Friendly Test**

- [ ] 1. Aller sur : https://search.google.com/test/mobile-friendly
- [ ] 2. Entrer l'URL : `https://www.mdiagnostic.fr`
- [ ] 3. **VÉRIFIER :** Message "✅ La page est adaptée aux mobiles"

---

## 📊 ÉTAPE 4 : GOOGLE SEARCH CONSOLE (J+0 - URGENT)

### **Configuration initiale**

- [ ] 1. Aller sur : https://search.google.com/search-console
- [ ] 2. Se connecter avec compte Gmail professionnel
- [ ] 3. Cliquer "Ajouter une propriété"
- [ ] 4. Choisir "Préfixe d'URL"
- [ ] 5. Entrer : `https://www.mdiagnostic.fr`
- [ ] 6. Cliquer "Continuer"

### **Vérification de propriété**

- [ ] 7. Choisir méthode : "Balise HTML"
- [ ] 8. Copier le code fourni (exemple : `<meta name="google-site-verification" content="abc123xyz">`)
- [ ] 9. Ouvrir `/index.html` (ligne 46)
- [ ] 10. Décommenter la ligne et coller le code :
  ```html
  <meta name="google-site-verification" content="VOTRE_CODE_ICI">
  ```
- [ ] 11. Redéployer sur Vercel
- [ ] 12. Retourner sur Google Search Console et cliquer "Vérifier"
- [ ] 13. **ATTENDRE :** Message "✅ Propriété vérifiée"

### **Soumission du sitemap**

- [ ] 14. Dans Google Search Console, aller dans "Sitemaps"
- [ ] 15. Entrer : `sitemap.xml`
- [ ] 16. Cliquer "Envoyer"
- [ ] 17. **VÉRIFIER :** Statut "Réussite" (peut prendre 24h)

### **Inspection d'URL**

- [ ] 18. Aller dans "Inspection d'URL"
- [ ] 19. Entrer : `https://www.mdiagnostic.fr`
- [ ] 20. Cliquer "Demander une indexation"
- [ ] 21. **ATTENDRE :** Confirmation (2-3 jours pour indexation)

---

## 🗺️ ÉTAPE 5 : GOOGLE MY BUSINESS (J+0 - URGENT)

### **Création du profil**

- [ ] 1. Aller sur : https://www.google.com/business/
- [ ] 2. Se connecter avec compte Gmail professionnel
- [ ] 3. Cliquer "Gérer maintenant"
- [ ] 4. Entrer le nom : `MDIAGNOSTIC`
- [ ] 5. Choisir catégorie : "Service de diagnostic immobilier" ou "Service professionnel"

### **Informations de base**

- [ ] 6. **Adresse exacte :**
  - Rue : [Votre adresse exacte]
  - Ville : Soustons
  - Code postal : 40140
  - Pays : France
- [ ] 7. **Téléphone :** 07 77 78 26 59
- [ ] 8. **Site web :** https://www.mdiagnostic.fr
- [ ] 9. **Description :**
  ```
  Diagnostiqueuse immobilière certifiée LCP à Soustons dans les Landes.
  Je réalise tous vos diagnostics immobiliers obligatoires : DPE, amiante,
  plomb, électricité, gaz, termites. Intervention rapide sur Soustons,
  Hossegor, Capbreton, Dax et toutes les Landes.
  ```

### **Horaires d'ouverture**

- [ ] 10. Lundi : 08:00 - 18:00
- [ ] 11. Mardi : 08:00 - 18:00
- [ ] 12. Mercredi : 08:00 - 18:00
- [ ] 13. Jeudi : 08:00 - 18:00
- [ ] 14. Vendredi : 08:00 - 18:00
- [ ] 15. Samedi : Fermé
- [ ] 16. Dimanche : Fermé

### **Photos**

- [ ] 17. Ajouter photo de profil (vous ou logo MDIAGNOSTIC)
- [ ] 18. Ajouter photo de couverture (vous au travail)
- [ ] 19. Ajouter 5-10 photos :
  - Vous avec équipement DPE
  - Vous en intervention
  - Exemples de diagnostics
  - Votre véhicule (si marquage)
  - Certifications LCP affichées

### **Services**

- [ ] 20. Ajouter service : "Diagnostic de Performance Énergétique (DPE)"
- [ ] 21. Ajouter service : "Diagnostic Amiante"
- [ ] 22. Ajouter service : "Diagnostic Plomb (CREP)"
- [ ] 23. Ajouter service : "Diagnostic Électricité"
- [ ] 24. Ajouter service : "Diagnostic Gaz"
- [ ] 25. Ajouter service : "Diagnostic Termites"

### **Vérification de l'établissement**

- [ ] 26. Google envoie un code par courrier postal (5-7 jours)
- [ ] 27. Entrer le code de vérification reçu
- [ ] 28. **ATTENDRE :** Confirmation de vérification

### **Demande d'avis clients**

- [ ] 29. Contacter vos 5 derniers clients satisfaits
- [ ] 30. Leur envoyer ce message :
  ```
  Bonjour [Prénom],

  J'espère que vous êtes satisfait(e) du diagnostic immobilier que j'ai
  réalisé pour votre bien à [Ville].

  Pourriez-vous prendre 2 minutes pour laisser un avis sur ma page
  Google My Business ? Cela m'aidera beaucoup à développer mon activité.

  Voici le lien direct : [VOTRE_LIEN_GOOGLE_MY_BUSINESS]

  Merci infiniment !
  Marine DUFFOURG - MDIAGNOSTIC
  ```
- [ ] 31. **OBJECTIF :** Obtenir 5 avis ⭐⭐⭐⭐⭐ dans les 2 semaines

---

## 📈 ÉTAPE 6 : SUIVI & MONITORING (J+7)

### **Tableau de bord Google Search Console**

- [ ] 1. Vérifier nombre de pages indexées (objectif : > 10)
- [ ] 2. Vérifier nombre d'impressions (objectif : > 100/semaine)
- [ ] 3. Vérifier position moyenne (objectif : < 20)
- [ ] 4. Noter les requêtes principales :
  - "diagnostic immobilier soustons"
  - "dpe landes"
  - "diagnostic hossegor"
  - etc.

### **Vérification Google Maps**

- [ ] 5. Rechercher "diagnostic immobilier soustons" sur Google Maps
- [ ] 6. **VÉRIFIER :** MDIAGNOSTIC apparaît dans les résultats
- [ ] 7. **VÉRIFIER :** Note d'avis affichée (ex: 5.0 ⭐)
- [ ] 8. **VÉRIFIER :** Bouton "Appeler" fonctionne (07 77 78 26 59)

### **Test recherche locale**

- [ ] 9. Sur mobile, rechercher "diagnostic immobilier près de moi" à Soustons
- [ ] 10. **VÉRIFIER :** MDIAGNOSTIC apparaît dans le "Pack Local" (top 3)

---

## 🎯 ÉTAPE 7 : MESURES DE SUCCÈS (J+30)

### **Métriques à suivre**

| Métrique | J+0 | J+7 | J+30 | Objectif J+90 |
|----------|-----|-----|------|---------------|
| Pages indexées Google | 0 | 5 | 14 | 14 |
| Impressions/semaine | 0 | 50 | 300 | 1000 |
| Clics/semaine | 0 | 5 | 30 | 100 |
| Position "diagnostic soustons" | - | 15 | 5 | 1-3 |
| Avis Google | 0 | 2 | 5 | 10+ |
| Note moyenne | - | 5.0 | 5.0 | 4.8+ |

---

## ✅ CHECKLIST FINALE

### **Avant de clôturer le déploiement**

- [ ] ✅ Tous les fichiers créés sont déployés
- [ ] ✅ Les meta tags sont visibles dans le code source
- [ ] ✅ Rich Results Test = ✅ LocalBusiness détecté
- [ ] ✅ Open Graph fonctionne (test WhatsApp)
- [ ] ✅ Google Search Console configuré et sitemap soumis
- [ ] ✅ Google My Business créé et vérifié
- [ ] ✅ Au moins 3 avis Google obtenus
- [ ] ✅ Tests de performance > 85/100

---

## 🏆 FÉLICITATIONS !

Si toutes les cases sont cochées, votre site est maintenant :

✅ **SEO-optimisé** (9/10)  
✅ **Visible sur Google** (indexation en cours)  
✅ **Présent sur Google Maps**  
✅ **Prêt à générer du trafic local**

**Prochaine révision :** Dans 30 jours pour analyser les premiers résultats.

---

**Date de finalisation :** [ À COMPLÉTER APRÈS DÉPLOIEMENT ]  
**Signature :** ____________________
