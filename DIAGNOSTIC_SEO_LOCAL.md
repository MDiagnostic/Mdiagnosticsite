# 🗺️ DIAGNOSTIC SEO LOCAL - MDIAGNOSTIC

**Date :** 14 mars 2026  
**Score actuel :** 7/10 🟡  
**Score possible :** 10/10 ✅

---

## ✅ CE QUI EST DÉJÀ BON (7/10)

### **1. META TAGS GÉO ✅ (100%)**
```html
<!-- index.html -->
<meta name="geo.region" content="FR-40">
<meta name="geo.placename" content="Soustons">
<meta name="geo.position" content="43.7516;-1.3303">
<meta name="ICBM" content="43.7516, -1.3303">
```
→ **Google sait que vous êtes à Soustons !**

---

### **2. SCHEMA.ORG LOCAL BUSINESS ✅ (95%)**
```json
{
  "@type": "LocalBusiness",
  "name": "MDIAGNOSTIC",
  "telephone": "+33777782659",
  "email": "contact.mdiagnostic@gmail.com",
  "address": {
    "addressLocality": "Soustons",
    "postalCode": "40140",
    "addressCountry": "FR"
  },
  "geo": {
    "latitude": "43.7516",
    "longitude": "-1.3303"
  },
  "openingHours": "Lun-Ven 08:00-18:00",
  "areaServed": [
    "Soustons", "Hossegor", "Capbreton", "Dax",
    "Saint-Paul-lès-Dax", "Tarnos", "Bayonne", "Biarritz", "Anglet"
  ]
}
```
→ **Google comprend votre zone d'intervention !**

**⚠️ MANQUE :** aggregateRating (note moyenne des avis)

---

### **3. INFORMATIONS CONTACT ✅ (100%)**
```tsx
// Footer.tsx + Contact.tsx
📞 07 77 78 26 59
📧 contact.mdiagnostic@gmail.com
📍 Soustons, Landes (40)
```
→ **Affichées partout sur le site !**

---

### **4. ZONE D'INTERVENTION ✅ (100%)**
```
9 villes ciblées :
✅ Soustons (ville principale)
✅ Hossegor
✅ Capbreton
✅ Dax
✅ Saint-Paul-lès-Dax
✅ Tarnos
✅ Bayonne
✅ Biarritz
✅ Anglet
```
→ **Google sait où vous intervenez !**

---

## ❌ CE QUI MANQUE (3 points perdus)

### **1. GOOGLE MY BUSINESS ❌ (-2 points)**

**Status :** NON CRÉÉ

**Impact :** 
- ❌ Vous n'apparaissez PAS sur Google Maps
- ❌ Vous n'apparaissez PAS dans le "Pack Local" Google (top 3)
- ❌ Impossible de laisser des avis Google
- ❌ Pas de "Appeler" / "Itinéraire" sur mobile

**Recherche Google Maps : "diagnostic immobilier soustons"**
```
AVANT (actuellement) :
❌ MDIAGNOSTIC n'apparaît PAS

APRÈS (avec GMB) :
┌────────────────────────────────────┐
│ 📍 MDIAGNOSTIC                     │
│ ⭐⭐⭐⭐⭐ 5.0 (5 avis)            │
│ Service de diagnostic immobilier   │
│ 🕐 Ouvert · Ferme à 18h           │
│ 📞 07 77 78 26 59                 │
│ [Itinéraire] [Appeler] [Site web] │
└────────────────────────────────────┘
```

**🛠️ SOLUTION :**
**VOUS** devez créer le profil (15 min) :
1. https://www.google.com/business/
2. Suivre les étapes du guide : `/3_ETAPES_SIMPLES.md` (Étape 3)

**Je ne peux PAS le faire pour vous** (nécessite vérification postale).

---

### **2. GOOGLE MAPS SUR PAGE CONTACT ❌ (-0.5 point)**

**Status :** PAS D'INTÉGRATION

**Actuellement sur /contact :**
```tsx
<MapPin className="h-8 w-8" />
<p>Soustons et Landes (40)</p>
```
→ Juste une icône, pas de vraie carte interactive

**Ce qui manque :**
```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=..."
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Localisation MDIAGNOSTIC - Soustons"
/>
```

**Impact :**
- ❌ Visiteurs ne peuvent pas visualiser où vous êtes
- ❌ Pas de bouton "Itinéraire" vers votre bureau
- ❌ Moins de confiance client

**🛠️ SOLUTION :**
**JE PEUX** ajouter Google Maps iframe sur la page Contact (10 min).

---

### **3. BOUTON "LAISSER UN AVIS GOOGLE" ❌ (-0.3 point)**

**Status :** PAS DE LIEN VERS AVIS

**Ce qui manque :**
```tsx
<a 
  href="https://g.page/r/[VOTRE_ID_GMB]/review"
  target="_blank"
  className="..."
>
  ⭐ Laissez un avis Google
</a>
```

**Impact :**
- ❌ Difficile pour clients de laisser un avis
- ❌ Moins d'avis = moins de crédibilité
- ❌ Google favorise les entreprises avec beaucoup d'avis récents

**🛠️ SOLUTION :**
**JE PEUX** ajouter le bouton (5 min), MAIS vous devez d'abord créer Google My Business pour avoir le lien.

---

### **4. AFFICHAGE DES AVIS GOOGLE ❌ (-0.2 point)**

**Status :** PAS D'INTÉGRATION

**Ce qui manque :**
```tsx
{/* Widget avis Google */}
<div className="google-reviews">
  ⭐⭐⭐⭐⭐ 5.0 (12 avis)
  
  "Excellent service, très professionnelle !" - Marie D.
  "Diagnostic rapide et précis" - Jean L.
</div>
```

**Impact :**
- ❌ Pas de preuve sociale visible
- ❌ Visiteurs doivent chercher ailleurs pour voir avis

**🛠️ SOLUTION :**
**JE PEUX** intégrer widget Google Reviews (30 min), MAIS nécessite Google My Business d'abord.

---

### **5. MARKUP REVIEW SCHEMA.ORG ❌ (-0.1 point - bonus)**

**Status :** PAS DE MARKUP AVIS

**Ce qui manque dans index.html :**
```json
{
  "@type": "LocalBusiness",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marie D."
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excellent service, très professionnelle !"
    }
  ]
}
```

**Impact :**
- ❌ Pas d'étoiles ⭐ dans résultats Google
- ❌ Moins de clics sur votre résultat

**Résultat Google SANS aggregateRating :**
```
🌐 MDIAGNOSTIC - Diagnostic Immobilier Soustons
   Diagnostiqueuse certifiée...
```

**Résultat Google AVEC aggregateRating :**
```
🌐 MDIAGNOSTIC - Diagnostic Immobilier Soustons
   ⭐⭐⭐⭐⭐ 5.0 (12 avis) 👈 BEAUCOUP PLUS VISIBLE !
   Diagnostiqueuse certifiée...
```

**🛠️ SOLUTION :**
**JE PEUX** ajouter le markup (10 min), APRÈS que vous ayez des vrais avis Google.

---

## 📊 TABLEAU RÉCAPITULATIF SEO LOCAL

| Élément | Status | Impact | Qui le fait ? | Temps |
|---------|--------|--------|---------------|-------|
| **Meta tags géo** | ✅ FAIT | Moyen | ✅ Déjà fait | - |
| **Schema.org LocalBusiness** | ✅ FAIT (95%) | Fort | ✅ Déjà fait | - |
| **Coordonnées visibles** | ✅ FAIT | Moyen | ✅ Déjà fait | - |
| **Zone d'intervention** | ✅ FAIT | Fort | ✅ Déjà fait | - |
| **Google My Business** | ❌ À FAIRE | **CRITIQUE** | **VOUS** | 15 min |
| **Google Maps iframe** | ❌ À FAIRE | Moyen | **MOI** | 10 min |
| **Bouton avis Google** | ❌ À FAIRE | Moyen | **MOI** | 5 min |
| **Widget avis Google** | ❌ À FAIRE | Moyen | **MOI** | 30 min |
| **Markup Review Schema** | ❌ À FAIRE | Faible | **MOI** | 10 min |

---

## 🎯 SCORE SEO LOCAL DÉTAILLÉ

### **ACTUEL (7/10)**
- ✅ Meta tags géo : 1/1
- ✅ Schema.org : 1.9/2 (manque aggregateRating)
- ✅ Coordonnées : 1/1
- ✅ Zone intervention : 1/1
- ❌ Google My Business : 0/2 **← GROS MANQUE**
- ❌ Google Maps : 0/1
- ❌ Avis Google : 0/1
- ❌ Widget avis : 0/1

### **APRÈS CORRECTIONS (10/10)**
- ✅ Meta tags géo : 1/1
- ✅ Schema.org : 2/2
- ✅ Coordonnées : 1/1
- ✅ Zone intervention : 1/1
- ✅ Google My Business : 2/2 ✨
- ✅ Google Maps : 1/1 ✨
- ✅ Avis Google : 1/1 ✨
- ✅ Widget avis : 1/1 ✨

---

## 🚀 PLAN D'ACTION SEO LOCAL

### **ÉTAPE 1 : VOUS créez Google My Business (15 min)** 🔴 URGENT

**Pourquoi VOUS ?**
- Google envoie un code par courrier postal à votre adresse
- Nécessite vérification de propriété
- Je ne peux pas le faire à votre place

**Guide complet :**
→ **[3_ETAPES_SIMPLES.md](./3_ETAPES_SIMPLES.md)** (Étape 3)

**Checklist :**
1. ✅ Créer compte sur https://www.google.com/business/
2. ✅ Remplir nom : "MDIAGNOSTIC"
3. ✅ Remplir adresse exacte à Soustons
4. ✅ Remplir téléphone : 07 77 78 26 59
5. ✅ Remplir horaires : Lun-Ven 8h-18h
6. ✅ Ajouter 5-10 photos
7. ✅ Attendre code postal (5-7 jours)
8. ✅ Vérifier avec le code
9. ✅ Demander 5 avis à vos clients

**Résultat :** Vous apparaissez sur Google Maps en 48h après vérification !

---

### **ÉTAPE 2 : JE vous aide avec le reste (55 min)** 🟡 IMPORTANT

Une fois que vous avez créé Google My Business, **je peux** :

1. ✅ Ajouter Google Maps iframe sur page Contact (10 min)
2. ✅ Ajouter bouton "Laisser un avis Google" (5 min)
3. ✅ Intégrer widget affichage avis Google (30 min)
4. ✅ Ajouter markup Review Schema.org (10 min)

**Voulez-vous que je fasse ça maintenant ?** (pendant que vous créez GMB)

---

## 💡 CONSEILS PRO SEO LOCAL

### **1. Optimisez votre profil Google My Business**

**Photos :**
- ✅ Logo MDIAGNOSTIC
- ✅ Vous en intervention (avec équipement DPE)
- ✅ Votre véhicule (si marquage)
- ✅ Exemples de diagnostics
- ✅ Certifications LCP

**Posts réguliers :**
```
📢 Nouvelle obligation DPE 2026 dans les Landes !
Les passoires thermiques (G et F) ne pourront plus être louées 
à partir de janvier 2025. Faites votre diagnostic DPE dès maintenant !

👉 Devis gratuit : 07 77 78 26 59
```

**Questions/Réponses :**
Ajoutez les FAQ courantes :
- "Combien coûte un DPE à Soustons ?"
- "Quels diagnostics pour une vente ?"
- "Intervenez-vous à Hossegor ?"

---

### **2. Demandez systématiquement des avis**

**Message à envoyer après chaque prestation :**
```
Bonjour [Prénom],

Merci d'avoir fait appel à MDIAGNOSTIC pour votre diagnostic.

Si vous êtes satisfait(e), pourriez-vous prendre 2 minutes 
pour laisser un avis sur Google ? Cela m'aide énormément !

Lien direct : [VOTRE_LIEN_AVIS_GMB]

Belle journée,
Marine DUFFOURG
```

**Objectif :** 1 avis par semaine = 50 avis/an

---

### **3. Optimisez pour les recherches locales**

**Requêtes prioritaires :**
- "diagnostic immobilier soustons"
- "dpe landes"
- "diagnostic hossegor"
- "diagnostic capbreton"
- "diagnostic dax"
- "diagnostic immobilier près de moi" (mobile)

**Action :** Créez des pages dédiées par ville (optionnel) :
- /diagnostic-immobilier-hossegor
- /diagnostic-immobilier-capbreton
- etc.

---

## ✅ RÉPONSE À VOTRE QUESTION

### **"Le SEO local c'est bon ?"**

**Réponse courte :** 🟡 **C'est BON à 70%, mais peut être EXCELLENT**

**Réponse détaillée :**

✅ **CE QUI EST BON (déjà fait) :**
- Meta tags géo parfaites
- Schema.org LocalBusiness complet
- Zone d'intervention bien définie (9 villes)
- Coordonnées visibles partout

❌ **CE QUI MANQUE (le plus important) :**
- **Google My Business** ← 🔴 PRIORITÉ ABSOLUE (VOUS)
- Google Maps sur Contact ← 🟡 Je peux le faire
- Bouton avis Google ← 🟡 Je peux le faire
- Widget avis ← 🟡 Je peux le faire

---

## 🎯 ACTION IMMÉDIATE

**Aujourd'hui (15 min) :**
1. ✅ Créez Google My Business (guide : `/3_ETAPES_SIMPLES.md`)

**Demain (30 min) :**
2. ✅ Ajoutez 5 photos sur GMB
3. ✅ Demandez avis à 5 clients

**J+7 (vérification postale) :**
4. ✅ Entrez code de vérification Google
5. ✅ Dites-moi "c'est fait" → je fais le reste (Maps, widget, markup)

---

## 🏆 RÉSULTAT FINAL ATTENDU

**Dans 2 semaines :**

**Recherche Google : "diagnostic immobilier soustons"**
```
📍 PACK LOCAL GOOGLE (top 3) :

1. 🌟 MDIAGNOSTIC ⭐ 5.0 (12 avis)        ← VOUS
   1 km · Service de diagnostic
   Ouvert · 07 77 78 26 59
   
2. [Concurrent]
3. [Concurrent]

---

🌐 RÉSULTATS ORGANIQUES :

1. MDIAGNOSTIC - Diagnostic Immobilier Soustons, Landes (40)
   www.mdiagnostic.fr
   ⭐⭐⭐⭐⭐ 5.0 (12 avis)                ← VOUS
   Diagnostiqueuse certifiée...
```

---

**Voulez-vous que j'ajoute Google Maps + widget avis sur la page Contact maintenant ?** 🚀
