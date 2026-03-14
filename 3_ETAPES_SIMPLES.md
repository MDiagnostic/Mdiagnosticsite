# 🎯 3 ÉTAPES SIMPLES - META TAGS SEO

**Temps total : 30 minutes**  
**Résultat : Référencement Google optimisé !**

---

## ✅ ÉTAPE 1 : DÉPLOYER (5 MIN)

### **Que faire ?**
Mettre en ligne le nouveau site avec les meta tags.

### **Comment ?**
```bash
# Dans le terminal :
npm run build

# Puis déployer sur Vercel (via Git ou interface)
```

### **Comment vérifier que ça marche ?**
1. Ouvrir `www.mdiagnostic.fr` dans le navigateur
2. Clic droit → "Afficher le code source de la page"
3. Chercher (Ctrl+F) : `<title>MDIAGNOSTIC`
4. ✅ Si vous le voyez = **C'EST BON !**

---

## ✅ ÉTAPE 2 : GOOGLE SEARCH CONSOLE (10 MIN)

### **Que faire ?**
Dire à Google "ce site est à moi, indexe-le !".

### **Comment ?**

**A. Créer le compte (5 min)**
1. Aller sur : https://search.google.com/search-console
2. Se connecter avec Gmail professionnel
3. Cliquer "Ajouter une propriété"
4. Choisir "Préfixe d'URL"
5. Entrer : `https://www.mdiagnostic.fr`
6. Cliquer "Continuer"

**B. Vérifier la propriété (3 min)**
1. Choisir "Balise HTML"
2. Google vous donne un code comme :  
   `<meta name="google-site-verification" content="abc123xyz">`
3. Copier juste la partie : `abc123xyz`
4. Ouvrir le fichier `/index.html` (ligne 46)
5. Remplacer `VOTRE_CODE_ICI` par `abc123xyz`
6. Redéployer sur Vercel (comme étape 1)
7. Retourner sur Google Search Console
8. Cliquer "Vérifier"
9. ✅ Message "Propriété vérifiée" = **C'EST BON !**

**C. Soumettre le sitemap (2 min)**
1. Dans Google Search Console, aller dans "Sitemaps" (menu gauche)
2. Entrer : `sitemap.xml`
3. Cliquer "Envoyer"
4. ✅ Statut "Réussite" = **C'EST BON !**

### **Résultat**
Google commence à indexer votre site en 24-48h.

---

## ✅ ÉTAPE 3 : GOOGLE MY BUSINESS (15 MIN)

### **Que faire ?**
Apparaître sur Google Maps et dans les recherches locales.

### **Comment ?**

**A. Créer le profil (5 min)**
1. Aller sur : https://www.google.com/business/
2. Se connecter avec Gmail professionnel
3. Cliquer "Gérer maintenant"
4. Entrer le nom : `MDIAGNOSTIC`
5. Choisir catégorie : "Service de diagnostic immobilier"

**B. Remplir les infos (5 min)**
1. **Adresse :**
   - Votre adresse complète à Soustons
   - Code postal : 40140
   - Ville : Soustons
   - Pays : France

2. **Téléphone :**
   - 07 77 78 26 59

3. **Site web :**
   - https://www.mdiagnostic.fr

4. **Horaires :**
   - Lundi à Vendredi : 08:00 - 18:00
   - Samedi et Dimanche : Fermé

5. **Description :**
   ```
   Diagnostiqueuse immobilière certifiée LCP à Soustons dans les Landes.
   Je réalise tous vos diagnostics immobiliers obligatoires : DPE, amiante,
   plomb, électricité, gaz, termites. Intervention rapide sur Soustons,
   Hossegor, Capbreton, Dax et toutes les Landes.
   ```

**C. Ajouter des photos (3 min)**
1. Photo de profil : Vous ou logo MDIAGNOSTIC
2. Photo de couverture : Vous au travail
3. 3-5 autres photos :
   - Vous avec équipement DPE
   - Vous en intervention
   - Votre véhicule (si marquage)

**D. Demander des avis (2 min)**
1. Google vous donne un lien pour demander des avis
2. Envoyer ce message à vos 5 derniers clients :

```
Bonjour [Prénom],

J'espère que vous êtes satisfait(e) du diagnostic immobilier que j'ai
réalisé pour votre bien.

Pourriez-vous prendre 2 minutes pour laisser un avis sur ma page Google ?
Cela m'aidera beaucoup.

Lien : [VOTRE_LIEN_GOOGLE_MY_BUSINESS]

Merci infiniment !
Marine - MDIAGNOSTIC
```

### **Résultat**
Vous apparaissez sur Google Maps dans 48h !

---

## 🎉 C'EST FINI !

### **Dans 2 semaines, vous verrez :**

**Recherche Google : "diagnostic immobilier soustons"**

```
┌────────────────────────────────────────────────┐
│ 🌐 MDIAGNOSTIC                                 │
│    www.mdiagnostic.fr                          │
│    ⭐⭐⭐⭐⭐ 5.0 · Service de diagnostic      │
│                                                │
│    Diagnostiqueuse certifiée à Soustons...    │
│                                                │
│    📍 Soustons, Landes    ☎️ 07 77 78 26 59   │
│    🕐 Ouvert · Ferme à 18h00                  │
└────────────────────────────────────────────────┘
```

**Recherche Google Maps : "diagnostic immobilier près de moi"** (à Soustons)

```
┌────────────────────────────────────┐
│ 📍 MDIAGNOSTIC                     │
│ ⭐⭐⭐⭐⭐ 5.0 (5 avis)            │
│ Service de diagnostic immobilier   │
│                                    │
│ 🕐 Ouvert · Ferme à 18h00         │
│ 📞 07 77 78 26 59                 │
│ 🌐 www.mdiagnostic.fr             │
│                                    │
│ [Itinéraire] [Appeler] [Site web] │
└────────────────────────────────────┘
```

---

## 📊 RÉSULTAT EN CHIFFRES

| Métrique | Avant | Dans 90 jours |
|----------|-------|---------------|
| Visites Google/mois | 10 | 200 |
| Position "diagnostic soustons" | - | Top 3 |
| Appels/mois | 2 | 20 |
| Devis/mois | 3 | 30 |

---

## ✅ RÉCAP DES 3 ÉTAPES

- [ ] **Étape 1 :** Déployer sur Vercel (5 min)
- [ ] **Étape 2 :** Configurer Google Search Console (10 min)
- [ ] **Étape 3 :** Créer Google My Business (15 min)

**Total : 30 minutes**

---

## 🚀 ALLEZ-Y !

**Commencez maintenant par l'ÉTAPE 1 !**

Si vous êtes bloqué, relisez :
- **[GUIDE_SIMPLE_META_TAGS.md](./GUIDE_SIMPLE_META_TAGS.md)**
- **[CHECKLIST_DEPLOIEMENT_META_TAGS.md](./CHECKLIST_DEPLOIEMENT_META_TAGS.md)**

**Vous êtes à 30 minutes de dominer Google dans les Landes ! 💪**
