# 🔧 DÉBOGAGE GOOGLE ANALYTICS - POURQUOI ÇA NE MARCHE PAS ?

**Votre ID** : `G-MWW41TL2L3`

---

## ✅ CHECKLIST RAPIDE (Cochez au fur et à mesure)

- [ ] 1. J'ai ajouté `VITE_GA_MEASUREMENT_ID` dans Vercel
- [ ] 2. La valeur est exactement `G-MWW41TL2L3` (sans espace)
- [ ] 3. J'ai coché : Production, Preview, Development
- [ ] 4. J'ai redéployé le site sur Vercel
- [ ] 5. Le déploiement est terminé (statut "Ready")
- [ ] 6. J'ai ouvert mon site : https://www.mdiagnostic.fr
- [ ] 7. J'ai **accepté les cookies** (bandeau en bas)
- [ ] 8. J'ai navigué sur 2-3 pages
- [ ] 9. J'ai ouvert Google Analytics → En temps réel

**Si TOUT est coché et ça ne marche toujours pas** → Passez aux tests ci-dessous

---

## 🧪 TEST 1 : Vérifier que la variable est bien configurée

### Dans Vercel

1. Allez sur https://vercel.com
2. Ouvrez votre projet
3. **Settings** → **Environment Variables**
4. Vous devez voir :

```
Name: VITE_GA_MEASUREMENT_ID
Value: G-MWW41TL2L3
Environment: Production, Preview, Development
```

**❌ Si vous ne voyez pas cette ligne** :
→ La variable n'est pas enregistrée, ajoutez-la !

**✅ Si vous la voyez** :
→ Passez au test 2

---

## 🧪 TEST 2 : Vérifier que le site est redéployé

### Dans Vercel

1. **Deployments** (onglet en haut)
2. Le dernier déploiement doit être :
   - **Après** l'ajout de la variable
   - Statut : **"Ready"** avec une coche verte ✅

**❌ Si le dernier déploiement est AVANT l'ajout de la variable** :
→ Redéployez le site ! (⋯ → Redeploy)

**✅ Si le déploiement est récent et "Ready"** :
→ Passez au test 3

---

## 🧪 TEST 3 : Vérifier que les cookies sont acceptés

### Sur votre site

1. Ouvrez : https://www.mdiagnostic.fr
2. En bas de la page, vous devez voir un bandeau :
   ```
   "Respect de votre vie privée"
   [Refuser] [Accepter]
   ```

3. Cliquez sur **"Accepter"**

**❌ Si le bandeau n'apparaît pas** :
→ Vous avez déjà répondu. Allez sur `/gestion-cookies` et cliquez sur "Réinitialiser mes choix"

**⚠️ IMPORTANT** : Sans accepter les cookies, Google Analytics ne se charge PAS (respect du RGPD)

**✅ Si vous avez accepté** :
→ Passez au test 4

---

## 🧪 TEST 4 : Vérifier que Google Analytics est chargé (Technique)

### Test dans le navigateur

1. Ouvrez votre site : https://www.mdiagnostic.fr
2. **Acceptez les cookies** si ce n'est pas fait
3. Appuyez sur **F12** (ou clic droit → Inspecter)
4. Allez dans l'onglet **"Network"** (Réseau)
5. Rechargez la page (**F5**)
6. Dans la barre de recherche (filtre en haut), tapez : `gtag`

**✅ Vous devriez voir une ligne** :
```
gtag/js?id=G-MWW41TL2L3     Status: 200
```

**Si vous voyez cette ligne** :
→ Google Analytics est bien chargé ! Le problème vient peut-être de Google Analytics lui-même (voir test 5)

**❌ Si vous ne voyez RIEN** :
→ Le problème vient du code. Passez au test 5

---

## 🧪 TEST 5 : Vérifier les erreurs JavaScript

### Console du navigateur

1. Ouvrez votre site : https://www.mdiagnostic.fr
2. Appuyez sur **F12**
3. Allez dans l'onglet **"Console"**
4. Cherchez des lignes **rouges** (erreurs)

**Si vous voyez des erreurs comme** :
```
❌ Uncaught ReferenceError: gtag is not defined
❌ Failed to load resource: analytics.google.com
❌ VITE_GA_MEASUREMENT_ID is undefined
```

**→ Prenez une capture d'écran et envoyez-la moi !**

**✅ Si vous ne voyez pas d'erreur rouge** :
→ Passez au test 6

---

## 🧪 TEST 6 : Tester en navigation privée

### Mode incognito

1. Ouvrez une **fenêtre de navigation privée** :
   - **Chrome/Edge** : Ctrl+Shift+N (Windows) ou Cmd+Shift+N (Mac)
   - **Firefox** : Ctrl+Shift+P
   - **Safari** : Cmd+Shift+N

2. Allez sur : https://www.mdiagnostic.fr
3. **Acceptez les cookies**
4. Naviguez sur 2-3 pages
5. Retournez sur Google Analytics → En temps réel

**✅ Si ça marche en navigation privée** :
→ Le problème venait du cache de votre navigateur normal

**❌ Si ça ne marche toujours pas** :
→ Passez au test 7

---

## 🧪 TEST 7 : Vérifier dans Google Analytics

### Vérification de la configuration

1. Allez sur https://analytics.google.com
2. Cliquez sur **"Administration"** (⚙️ en bas à gauche)
3. Dans la colonne **"Propriété"**, cliquez sur **"Flux de données"**
4. Cliquez sur votre flux **"Site Web MDIAGNOSTIC"**
5. Vérifiez que :
   - **ID de mesure** : `G-MWW41TL2L3` ✅
   - **URL** : `https://www.mdiagnostic.fr` ✅
   - **Mesure améliorée** : Activée ✅

**❌ Si l'URL n'est pas la bonne** :
→ Modifiez-la pour mettre `https://www.mdiagnostic.fr`

**✅ Si tout est correct** :
→ Passez au test 8

---

## 🧪 TEST 8 : Attendre un peu (patience !)

### Délai d'activation

- **Temps réel** : Devrait fonctionner **immédiatement**
- **Mais parfois** : Délai de 5-10 minutes

**Solution** :
1. Fermez tous les onglets de votre site
2. Attendez **5 minutes** ⏳
3. Ouvrez un nouvel onglet **en navigation privée**
4. Allez sur https://www.mdiagnostic.fr
5. Acceptez les cookies
6. Naviguez
7. Vérifiez Google Analytics

---

## 🧪 TEST 9 : Vider le cache complet

### Suppression du cache

**Chrome/Edge** :
1. Appuyez sur **Ctrl+Shift+Delete** (Windows) ou **Cmd+Shift+Delete** (Mac)
2. Cochez :
   - ✅ Cookies et autres données de site
   - ✅ Images et fichiers en cache
3. Période : **Toutes les périodes**
4. Cliquez sur **"Effacer les données"**

**Firefox** :
1. **Ctrl+Shift+Delete**
2. Cochez tout
3. Période : **Tout**
4. Cliquez sur **"Effacer maintenant"**

**Puis** :
1. Fermez et rouvrez le navigateur
2. Allez sur https://www.mdiagnostic.fr
3. Acceptez les cookies
4. Vérifiez Google Analytics

---

## 🧪 TEST 10 : Vérifier avec un autre appareil

### Test sur smartphone ou tablette

1. Prenez votre **téléphone**
2. Ouvrez le navigateur (Chrome, Safari)
3. Allez sur : https://www.mdiagnostic.fr
4. **Acceptez les cookies**
5. Naviguez sur 2-3 pages
6. Sur votre ordinateur, vérifiez Google Analytics → En temps réel

**✅ Si vous voyez "1 utilisateur"** :
→ Le problème venait de votre navigateur principal

**❌ Si ça ne marche toujours pas** :
→ Contactez-moi avec une capture d'écran !

---

## 📸 CAPTURES D'ÉCRAN À M'ENVOYER

Si ça ne fonctionne toujours pas, envoyez-moi des captures d'écran de :

1. **Vercel - Environment Variables** :
   - La liste des variables (montrer `VITE_GA_MEASUREMENT_ID`)

2. **Vercel - Deployments** :
   - Le dernier déploiement (montrer la date et le statut)

3. **Votre site - Console (F12)** :
   - Onglet Console (montrer les erreurs en rouge)
   - Onglet Network avec le filtre `gtag`

4. **Google Analytics - Configuration** :
   - Administration → Flux de données → Votre flux

---

## 🆘 PROBLÈMES FRÉQUENTS ET SOLUTIONS

| Problème | Cause | Solution |
|----------|-------|----------|
| "Je ne vois aucune donnée" | Variable pas configurée | Ajouter `VITE_GA_MEASUREMENT_ID` dans Vercel |
| "Je ne vois aucune donnée" | Site pas redéployé | Redéployer le site dans Vercel |
| "Je ne vois aucune donnée" | Cookies refusés | Accepter les cookies sur le site |
| "Le bandeau cookies n'apparaît pas" | Déjà répondu | Aller sur /gestion-cookies et réinitialiser |
| "Erreur dans la console" | Code JavaScript cassé | M'envoyer une capture d'écran |
| "gtag ne se charge pas" | Bloqueur de pub | Désactiver AdBlock/uBlock |

---

## 🚫 BLOQUEURS DE PUBLICITÉ

### AdBlock, uBlock, Ghostery, etc.

**Ces extensions bloquent Google Analytics !**

**Solution** :
1. **Désactivez temporairement** votre bloqueur de pub
2. Rechargez la page
3. Acceptez les cookies
4. Vérifiez si ça fonctionne

**Pour tester sans bloqueur** :
- Utilisez la **navigation privée** (les extensions sont souvent désactivées)

---

## ⏱️ TIMING

- **Après avoir ajouté la variable** : Redéployer le site
- **Après le redéploiement** : Attendre 1-2 minutes
- **Après avoir accepté les cookies** : Immédiat (1-2 secondes)
- **Temps réel dans Google Analytics** : Immédiat (5-10 secondes de délai max)

---

## ✅ SI ÇA MARCHE ENFIN

Vous devriez voir dans Google Analytics :

```
┌──────────────────────────────────────┐
│  👥 Utilisateurs actifs (30 min)     │
│                                      │
│         1                            │
│                                      │
│  🌍 France                           │
│  📍 Nouvelle-Aquitaine               │
│                                      │
│  📄 Pages vues                       │
│  • / (Accueil)                       │
│  • /vente                            │
│  • /contact                          │
│                                      │
│  🖥️ Desktop                          │
│  🌐 Chrome                           │
└──────────────────────────────────────┘
```

---

## 🎉 FÉLICITATIONS !

Une fois que ça marche, vous pourrez voir :
- ✅ Nombre de visiteurs en temps réel
- ✅ Pages visitées
- ✅ Localisation des visiteurs
- ✅ Appareils et navigateurs utilisés
- ✅ **Conversions** (devis envoyés) 💰

---

**Besoin d'aide ? Envoyez-moi des captures d'écran ! 📸**
