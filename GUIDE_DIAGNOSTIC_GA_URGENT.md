# 🚨 DIAGNOSTIC GOOGLE ANALYTICS - GUIDE URGENT

**Problème :** Vous avez configuré Google Analytics dans Vercel mais ça ne marche toujours pas.

**Votre ID :** `G-MWW41TL2L3`

---

## 🎯 SOLUTION RAPIDE EN 3 MINUTES

### ✅ ÉTAPE 1 : Utiliser l'outil de diagnostic intégré

**Le plus simple :** Votre site a maintenant un outil de diagnostic automatique !

1. **Ouvrez votre site :** https://www.mdiagnostic.fr/diagnostic-ga
2. **Regardez les résultats** affichés automatiquement
3. **Suivez les recommandations** en rouge ou orange

Cet outil vous dira EXACTEMENT ce qui ne va pas :
- ❌ Variable d'environnement manquante
- ❌ Cookies non acceptés
- ❌ Script bloqué par un bloqueur de pub
- ❌ Problème de configuration

---

### ✅ ÉTAPE 2 : Vérifier la console du navigateur

**Sur votre site (n'importe quelle page) :**

1. Appuyez sur **F12** (ouvre les outils développeur)
2. Cliquez sur l'onglet **"Console"**
3. Cherchez les messages qui commencent par :
   ```
   🔍 [Google Analytics] Initialisation...
   📊 [Google Analytics] ID de mesure: G-MWW41TL2L3
   🍪 [Google Analytics] Consentement cookies: accepted
   🚀 [Google Analytics] Chargement du script...
   ✅ [Google Analytics] Script chargé avec succès
   ```

**Ce que vous devez voir :**
- ✅ Si vous voyez `✅ [Google Analytics] Script chargé avec succès` → C'est bon !
- ⚠️ Si vous voyez `⚠️ Cookies non acceptés` → Acceptez les cookies (bandeau en bas)
- ❌ Si vous voyez `❌ Erreur lors du chargement` → Bloqueur de pub actif

---

## 🔧 PROBLÈMES FRÉQUENTS ET SOLUTIONS

### Problème 1️⃣ : "La variable d'environnement n'est pas définie"

**Solution :** C'est NORMAL si vous n'avez pas encore configuré Vercel !

Le site utilise automatiquement l'ID en dur `G-MWW41TL2L3` comme solution de secours.

**Pas besoin de faire quoi que ce soit :** Google Analytics fonctionne déjà avec cet ID.

**Pour info (optionnel) :** Pour utiliser la variable d'environnement dans Vercel :
1. Vercel → Votre projet → Settings → Environment Variables
2. Ajoutez `VITE_GA_MEASUREMENT_ID` = `G-MWW41TL2L3`
3. Redéployez le site

---

### Problème 2️⃣ : "Cookies non acceptés"

**Symptôme :** Le bandeau cookies ne s'affiche plus

**Solution :**
1. Allez sur https://www.mdiagnostic.fr/gestion-cookies
2. Cliquez sur **"Réinitialiser mes choix"**
3. Retournez sur la page d'accueil
4. Le bandeau cookies s'affiche → Cliquez sur **"Accepter"**
5. Rechargez la page

**Important :** Sans accepter les cookies, Google Analytics NE PEUT PAS fonctionner (c'est la loi RGPD).

---

### Problème 3️⃣ : "Script bloqué par un bloqueur de publicité"

**Symptôme :** Vous avez AdBlock, uBlock, Ghostery, Brave, etc.

**Solution temporaire (pour tester) :**
1. **Ouvrez une fenêtre de navigation privée** :
   - Chrome/Edge : `Ctrl+Shift+N` (Windows) ou `Cmd+Shift+N` (Mac)
   - Firefox : `Ctrl+Shift+P`
   - Safari : `Cmd+Shift+N`
2. Allez sur https://www.mdiagnostic.fr
3. Acceptez les cookies
4. Allez sur https://www.mdiagnostic.fr/diagnostic-ga
5. Vérifiez si le script est chargé

**Si ça marche en navigation privée :**
→ Le problème vient du bloqueur de pub (c'est normal, ils bloquent Google Analytics)

**Note :** Vos vrais visiteurs n'auront pas ce problème (sauf s'ils ont un bloqueur).

---

### Problème 4️⃣ : "J'ai modifié la variable dans Vercel mais ça ne change rien"

**Raisons possibles :**

1. **Le site n'a pas été redéployé** :
   - Vercel → Deployments
   - Cliquez sur ⋯ (3 points) → **Redeploy**
   - Attendez que le statut soit **"Ready"**

2. **Cache du navigateur** :
   - Appuyez sur `Ctrl+Shift+Delete` (Windows) ou `Cmd+Shift+Delete` (Mac)
   - Cochez "Cookies" et "Cache"
   - Cliquez sur "Effacer les données"
   - Rechargez le site

3. **Vous regardez l'ancien déploiement** :
   - Attendez 2-3 minutes après le redéploiement
   - Videz le cache du navigateur
   - Rechargez le site

---

## 📊 COMMENT SAVOIR SI ÇA MARCHE ?

### Test en direct (5 minutes)

1. **Ouvrez Google Analytics** : https://analytics.google.com
2. Cliquez sur **"Rapports"** (à gauche)
3. Cliquez sur **"Temps réel"**
4. Dans un autre onglet : ouvrez https://www.mdiagnostic.fr
5. **Acceptez les cookies** si demandé
6. Naviguez sur 2-3 pages (/vente, /contact, /a-propos)
7. **Retournez sur Google Analytics → Temps réel**

**Vous devriez voir :**
```
┌────────────────────────────────┐
│  👥 Utilisateurs actifs         │
│                                 │
│         1                       │
│                                 │
│  📄 Pages vues par URL          │
│  • /                           │
│  • /vente                       │
│  • /contact                     │
│                                 │
│  🌍 France                      │
│  🖥️ Desktop                     │
└────────────────────────────────┘
```

**Si vous voyez "1 utilisateur" :**
→ 🎉 **FÉLICITATIONS ! Google Analytics fonctionne !**

**Si vous ne voyez rien :**
→ Retournez sur https://www.mdiagnostic.fr/diagnostic-ga et suivez les recommandations

---

## 🎯 CHECKLIST COMPLÈTE

Cochez au fur et à mesure :

- [ ] J'ai ouvert https://www.mdiagnostic.fr/diagnostic-ga
- [ ] L'outil de diagnostic s'affiche
- [ ] J'ai regardé les résultats (cartes vertes/rouges/orange)
- [ ] Si "Cookies non acceptés" : j'ai accepté les cookies
- [ ] Si "Script bloqué" : j'ai testé en navigation privée
- [ ] J'ai ouvert la console (F12) et vérifié les messages
- [ ] J'ai vidé le cache de mon navigateur
- [ ] J'ai vérifié Google Analytics → Temps réel
- [ ] Si tout est vert : j'ai navigué sur le site et vérifié que "1 utilisateur" s'affiche

---

## 🆘 SI ÇA NE MARCHE TOUJOURS PAS

**Envoyez-moi ces informations :**

1. **Capture d'écran de** https://www.mdiagnostic.fr/diagnostic-ga
   - Montrez-moi les cartes avec les résultats

2. **Capture d'écran de la console (F12)** :
   - Onglet "Console"
   - Montrez-moi les messages [Google Analytics]

3. **Capture d'écran de Vercel** (si vous avez configuré la variable) :
   - Settings → Environment Variables
   - Montrez-moi la ligne avec VITE_GA_MEASUREMENT_ID

4. **Capture d'écran de Google Analytics** :
   - Administration → Flux de données
   - Montrez-moi votre flux de données avec l'ID

---

## ✅ CE QUI EST DÉJÀ CONFIGURÉ (ne touchez à rien)

- ✅ Le composant GoogleAnalytics est créé et fonctionnel
- ✅ L'ID `G-MWW41TL2L3` est en dur dans le code (solution de secours)
- ✅ Le script se charge automatiquement APRÈS l'acceptation des cookies
- ✅ Le tracking des pages fonctionne automatiquement
- ✅ Le tracking des conversions est configuré
- ✅ Le respect du RGPD est assuré
- ✅ L'outil de diagnostic est accessible sur `/diagnostic-ga`
- ✅ Les messages de débogage s'affichent dans la console

**Vous n'avez RIEN à coder** : tout est prêt !

---

## 🎉 UNE FOIS QUE ÇA MARCHE

**Ce que vous pourrez voir dans Google Analytics :**

- 📊 Nombre de visiteurs en temps réel
- 📄 Pages les plus visitées
- 🌍 Localisation des visiteurs (Soustons, Hossegor, Dax...)
- 📱 Type d'appareil (mobile/desktop)
- 🌐 Navigateurs utilisés
- ⏱️ Temps passé sur le site
- 💰 **Conversions** : devis envoyés, clics sur le téléphone

**Pour voir les conversions :**
- Google Analytics → Rapports → Engagement → Conversions

**Événements trackés automatiquement :**
- `devis_sent` : Quand un visiteur envoie un devis
- `phone_click` : Quand un visiteur clique sur le numéro de téléphone
- `form_submit` : Quand un visiteur envoie le formulaire de contact

---

## 📝 RÉSUMÉ ULTRA-RAPIDE

1. **Ouvrez** https://www.mdiagnostic.fr/diagnostic-ga
2. **Acceptez les cookies** si demandé
3. **Regardez les résultats** et suivez les recommandations
4. **Vérifiez la console** (F12) pour voir les messages
5. **Testez en navigation privée** si vous avez un bloqueur de pub
6. **Vérifiez Google Analytics → Temps réel** en naviguant sur le site

**C'est tout !** 🚀

---

**Questions ? Envoyez-moi des captures d'écran de l'outil de diagnostic !**
