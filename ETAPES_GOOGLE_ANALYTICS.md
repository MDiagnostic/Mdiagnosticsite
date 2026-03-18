# 📊 GOOGLE ANALYTICS EN 5 ÉTAPES SIMPLES

---

## ⏱️ Temps total : 10 minutes | 💰 Gratuit

---

## ÉTAPE 1️⃣ : CRÉER VOTRE COMPTE (5 min)

### 🌐 Allez sur Google Analytics
```
https://analytics.google.com
```

### 📝 Remplissez le formulaire

**Compte** :
- Nom du compte : `MDIAGNOSTIC`

**Propriété** :
- Nom de la propriété : `Site Web MDIAGNOSTIC`
- Fuseau horaire : `France - Paris`
- Devise : `Euro (EUR)`

**Flux de données** :
- Plateforme : **Web** (cliquez sur l'icône ordinateur)
- URL : `https://www.mdiagnostic.fr`
- Nom du flux : `Site Web MDIAGNOSTIC`

### ✅ Acceptez les conditions

---

## ÉTAPE 2️⃣ : COPIEZ VOTRE ID (30 secondes)

Après la création, vous verrez :

```
┌─────────────────────────────────┐
│  ID de mesure                   │
│  G-ABC123DEF4                   │
└─────────────────────────────────┘
```

**📋 COPIEZ cet ID** (il commence toujours par `G-`)

---

## ÉTAPE 3️⃣ : AJOUTEZ L'ID DANS VERCEL (2 min)

### 🌍 Allez sur Vercel
```
https://vercel.com
```

### ⚙️ Ouvrez les paramètres

1. Cliquez sur votre projet `mdiagnostic`
2. Cliquez sur **Settings** (Paramètres)
3. Cliquez sur **Environment Variables**

### ➕ Ajoutez la variable

Cliquez sur **Add New** et remplissez :

| Champ | Valeur |
|-------|--------|
| **Name** | `VITE_GA_MEASUREMENT_ID` |
| **Value** | `G-ABC123DEF4` (votre ID copié) |
| **Environment** | ✅ Production ✅ Preview ✅ Development |

Cliquez sur **Save**

---

## ÉTAPE 4️⃣ : REDÉPLOYEZ LE SITE (1 min)

### 🔄 Dans Vercel

1. Allez dans **Deployments**
2. Sur le dernier déploiement, cliquez sur **⋯** (trois points)
3. Cliquez sur **Redeploy**
4. Attendez 1-2 minutes ⏳

---

## ÉTAPE 5️⃣ : TESTEZ ! (1 min)

### ⚡ Vérification en temps réel

1. **Retournez sur Google Analytics**
   ```
   https://analytics.google.com
   ```

2. **Menu de gauche** → **Rapports** → **En temps réel** ⚡

3. **Ouvrez votre site** dans un nouvel onglet
   ```
   https://www.mdiagnostic.fr
   ```

4. **Naviguez** sur 2-3 pages (Accueil, Vente, Contact)

5. **Retournez sur Google Analytics**

### ✅ Vous devriez voir :

```
┌─────────────────────────────────┐
│  👥 Utilisateurs actifs         │
│      1                          │
│                                 │
│  📄 Pages vues récemment        │
│  • / (Accueil)                  │
│  • /vente                       │
│  • /contact                     │
└─────────────────────────────────┘
```

---

## 🎉 C'EST BON !

### 📊 Vous pouvez maintenant voir :

- ✅ Nombre de visiteurs par jour
- ✅ Pages les plus visitées
- ✅ D'où viennent vos visiteurs (Google, Facebook, etc.)
- ✅ Combien de personnes envoient un devis 💰
- ✅ Combien cliquent sur le téléphone 📞

---

## ⚠️ IMPORTANT : Accepter les cookies

Pour que Google Analytics fonctionne, **vous devez accepter les cookies** sur le site !

Si vous refusez les cookies, Google Analytics ne se chargera pas (respect du RGPD).

---

## 🆘 PROBLÈME ?

### "Je ne vois aucune donnée"

✅ **Vérifiez** :
- L'ID commence par `G-` ?
- Vous avez bien redéployé sur Vercel ?
- Vous avez accepté les cookies sur le site ?
- Navigation privée peut aider (Ctrl+Shift+N)

### "Ça ne marche toujours pas"

1. Ouvrez votre site
2. Appuyez sur **F12** (Console développeur)
3. Cherchez des erreurs en rouge
4. Envoyez-moi une capture d'écran 📸

---

## 📱 BONUS : Application mobile

Téléchargez **Google Analytics** sur votre smartphone :

- **iPhone** : App Store → "Google Analytics"
- **Android** : Play Store → "Google Analytics"

**Connectez-vous** avec le même compte Gmail

Vous pourrez voir vos stats en temps réel sur votre téléphone ! 📊

---

## 📚 Pour aller plus loin

Consultez le guide complet :
→ **`/GUIDE_GOOGLE_ANALYTICS.md`**

---

**Besoin d'aide ? Dites-moi ! 💬**
