# 🚀 ACTIVATION GOOGLE ANALYTICS - GUIDE PAS À PAS

**Votre ID de mesure** : `G-MWW41TL2L3`

---

## ⚡ ÉTAPE 1 : AJOUTER L'ID DANS VERCEL (2 minutes)

### 1. Ouvrez Vercel dans votre navigateur
```
https://vercel.com
```

### 2. Connectez-vous avec votre compte

### 3. Sélectionnez votre projet
- Cliquez sur le projet **"mdiagnostic"** (ou le nom de votre projet)

### 4. Allez dans les paramètres
- Cliquez sur l'onglet **"Settings"** (en haut)

### 5. Ouvrez les variables d'environnement
- Dans le menu de gauche, cliquez sur **"Environment Variables"**

### 6. Ajoutez la variable Google Analytics
- Cliquez sur le bouton **"Add New"** (en haut à droite)

### 7. Remplissez le formulaire

| Champ | Valeur à entrer |
|-------|-----------------|
| **Name** | `VITE_GA_MEASUREMENT_ID` |
| **Value** | `G-MWW41TL2L3` |
| **Environment** | ✅ Production ✅ Preview ✅ Development (cochez TOUT) |

### 8. Sauvegardez
- Cliquez sur le bouton **"Save"**

✅ **Variable ajoutée !**

---

## 🔄 ÉTAPE 2 : REDÉPLOYER LE SITE (1 minute)

### ⚠️ IMPORTANT : Sans redéploiement, rien ne fonctionnera !

### 1. Allez dans Deployments
- Cliquez sur l'onglet **"Deployments"** (en haut)

### 2. Trouvez le dernier déploiement
- Vous verrez une liste de déploiements
- Le premier de la liste est le plus récent

### 3. Ouvrez le menu
- À droite du dernier déploiement, cliquez sur **⋯** (trois points)

### 4. Redéployez
- Cliquez sur **"Redeploy"**
- Une fenêtre s'ouvre, cliquez sur **"Redeploy"** à nouveau pour confirmer

### 5. Attendez la fin
- Un écran de chargement apparaît
- **Attendez 1-2 minutes** ⏳
- Quand vous voyez **"Ready"** avec une coche verte ✅, c'est bon !

---

## ✅ ÉTAPE 3 : TESTER EN TEMPS RÉEL (1 minute)

### 1. Allez sur Google Analytics
```
https://analytics.google.com
```

### 2. Sélectionnez votre propriété
- Si vous avez plusieurs propriétés, sélectionnez **"Site Web MDIAGNOSTIC"**

### 3. Ouvrez le rapport en temps réel
- Dans le menu de gauche, cliquez sur **"Rapports"**
- Cliquez sur **"En temps réel"** (icône éclair ⚡)

### 4. Ouvrez votre site dans un NOUVEL onglet
```
https://www.mdiagnostic.fr
```

### 5. IMPORTANT : Acceptez les cookies !
- Un bandeau apparaît en bas de la page
- Cliquez sur **"Accepter"**
- **Sans accepter les cookies, Google Analytics ne se charge PAS** (RGPD)

### 6. Naviguez sur le site
- Cliquez sur plusieurs pages :
  - Accueil
  - Vente
  - Contact
  - Services

### 7. Retournez sur Google Analytics
- Vous devriez maintenant voir :

```
┌──────────────────────────────────────┐
│  Utilisateurs actifs dans les        │
│  30 dernières minutes                │
│                                      │
│         1                            │
│                                      │
│  Pages vues récemment                │
│  • /                                 │
│  • /vente                            │
│  • /contact                          │
└──────────────────────────────────────┘
```

---

## 🎉 ÇA MARCHE !

Si vous voyez **"1 utilisateur"** et les pages que vous avez visitées, **c'est bon !** ✅

---

## 🆘 ÇA NE MARCHE PAS ? DÉBOGAGE

### Problème 1 : "Je ne vois toujours rien"

**Vérifications** :
1. ✅ Avez-vous bien **redéployé** le site sur Vercel ?
2. ✅ Avez-vous **accepté les cookies** sur le site ?
3. ✅ L'ID est-il bien `G-MWW41TL2L3` (sans espace) ?
4. ✅ Attendez 2-3 minutes après le redéploiement

**Solution** : 
- Videz le cache de votre navigateur (Ctrl+F5 ou Cmd+Shift+R)
- Testez en **navigation privée** (Ctrl+Shift+N)

### Problème 2 : "Le bandeau cookies n'apparaît pas"

**Solution** :
- Vous avez peut-être déjà répondu
- Allez dans `/gestion-cookies` sur votre site
- Cliquez sur **"Réinitialiser mes choix"**
- Rechargez la page d'accueil

### Problème 3 : "J'ai accepté les cookies mais rien ne se passe"

**Vérification technique** :
1. Ouvrez votre site : `https://www.mdiagnostic.fr`
2. Appuyez sur **F12** (ou clic droit → Inspecter)
3. Allez dans l'onglet **"Console"**
4. Cherchez des erreurs en rouge
5. Prenez une capture d'écran et envoyez-la moi

### Problème 4 : "Je vois une erreur dans Vercel"

**Cas fréquents** :
- Erreur de build → Le site est peut-être mal déployé
- Erreur 404 → Le domaine n'est pas configuré

**Solution** :
- Envoyez-moi une capture d'écran de l'erreur

---

## 📊 TEST TECHNIQUE AVANCÉ

### Vérifier que Google Analytics est chargé

1. Ouvrez votre site : `https://www.mdiagnostic.fr`
2. Acceptez les cookies
3. Appuyez sur **F12**
4. Allez dans l'onglet **"Network"** (Réseau)
5. Rechargez la page (F5)
6. Dans la barre de recherche (filtre), tapez : `gtag`
7. Vous devriez voir une ligne avec :
   ```
   gtag/js?id=G-MWW41TL2L3
   ```
   
**Si vous voyez cette ligne** → Google Analytics est bien chargé ✅  
**Si vous ne voyez pas cette ligne** → Le problème vient de la configuration

---

## 🔍 VÉRIFICATION DE LA VARIABLE VERCEL

### Assurez-vous que la variable est bien enregistrée

1. Vercel → Settings → Environment Variables
2. Vous devriez voir :

```
┌────────────────────────────────────────────────┐
│ VITE_GA_MEASUREMENT_ID                         │
│ G-MWW41TL2L3                                   │
│ Production, Preview, Development               │
└────────────────────────────────────────────────┘
```

**Si ce n'est pas le cas** → Ajoutez-la à nouveau

---

## ⏱️ DÉLAI D'ACTIVATION

- **Temps réel** : Fonctionne **immédiatement** (après redéploiement)
- **Rapports standards** : 24-48 heures de délai

---

## 📱 APPLICATION MOBILE (Optionnel)

Pour suivre vos stats sur téléphone :

1. **Téléchargez** "Google Analytics" sur l'App Store ou Play Store
2. **Connectez-vous** avec le même compte Gmail
3. **Sélectionnez** votre propriété "Site Web MDIAGNOSTIC"
4. Vous verrez vos stats en temps réel ! 📊

---

## ✅ CHECKLIST COMPLÈTE

- [ ] Variable `VITE_GA_MEASUREMENT_ID` ajoutée dans Vercel
- [ ] Valeur : `G-MWW41TL2L3`
- [ ] Environnements cochés : Production, Preview, Development
- [ ] Site redéployé sur Vercel
- [ ] Déploiement terminé (statut "Ready")
- [ ] Site ouvert : https://www.mdiagnostic.fr
- [ ] Cookies acceptés
- [ ] Navigation sur 2-3 pages
- [ ] Google Analytics ouvert en temps réel
- [ ] "1 utilisateur" visible

---

**Envoyez-moi une capture d'écran si ça ne fonctionne toujours pas ! 📸**
