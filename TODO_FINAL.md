# ✅ TODO FINAL - ACTIONS À FAIRE

## 🚨 URGENT (Cette semaine)

### 1. Adhérer à CNPM (15 minutes, GRATUIT)
**Obligation légale** : Article L612-1 Code de la consommation  
**Risque** : Amende 3 000€ si absent

**ÉTAPES** :
1. Aller sur : https://www.cnpm-mediation-consommation.eu
2. Cliquer sur "Adhérer"
3. Remplir le formulaire :
   - Raison sociale : MDIAGNOSTIC
   - SIRET : 100 486 927 00013
   - Email : contact.mdiagnostic@gmail.com
4. Recevoir attestation par email
5. ✅ **C'EST FAIT !**

---

### 2. Remplacer numéros certification LCP (5 minutes)
**Fichier** : `/src/app/components/MentionsLegales.tsx`  
**Ligne** : 87-88

**ACTUELLEMENT** :
```
[Vos numéros de certification pour chaque domaine : 
DPE, Amiante, Plomb, Électricité, Gaz, Termites, etc.]
```

**À REMPLACER PAR** :
```
DPE : LCP-XXXXXX
Amiante : LCP-YYYYYY  
Plomb : LCP-ZZZZZZ
Électricité : LCP-AAAAAA
Gaz : LCP-BBBBBB
Termites : LCP-CCCCCC
[vos autres certifications si nécessaire]
```

*(Remplacez XXXXXX par vos vrais numéros de certification)*

---

## 🟡 RECOMMANDÉ (Ce mois)

### 3. Ajouter protection anti-spam (30 minutes)
**Pourquoi ?** Éviter le spam sur vos formulaires

**OPTIONS** :
- **Cloudflare Turnstile** (RGPD-friendly, gratuit)
- **hCaptcha** (alternative Google reCAPTCHA)

**À FAIRE PLUS TARD** : Je peux vous aider à l'implémenter

---

### 4. Tester le site complet
- [ ] Page CGV : `/cgv`
- [ ] Page Mentions Légales (section 10 médiation)
- [ ] Footer (lien CGV)
- [ ] Formulaire de contact
- [ ] Formulaire de devis
- [ ] Bandeau cookies
- [ ] Responsive mobile/tablette

---

## 🟢 OPTIONNEL (Amélioration continue)

### 5. Sécurité avancée
- [ ] Configurer CSP headers (Content Security Policy)
- [ ] Monitoring avec Sentry
- [ ] Tests de charge
- [ ] Audit de pénétration

---

## 📋 CHECKLIST DÉPLOIEMENT VERCEL

Avant de déployer sur Vercel :

- [x] CGV créées et accessibles
- [x] Médiation de la consommation ajoutée
- [x] Footer avec lien CGV
- [x] Mentions légales complètes
- [x] Politique de confidentialité
- [x] Gestion cookies
- [ ] Numéros LCP à jour (PLACEHOLDERS à remplacer)
- [ ] Adhésion CNPM finalisée

**Prêt à déployer** : OUI (même avec placeholders LCP) ✅

---

## 🎯 RÉSUMÉ ULTRA-SIMPLE

**À FAIRE MAINTENANT** :
1. ✅ Adhérer CNPM (15 min, gratuit) → https://www.cnpm-mediation-consommation.eu
2. ✅ Remplacer numéros LCP dans Mentions Légales

**ENSUITE** :
3. Déployer sur Vercel 🚀

**C'EST TOUT !** 😊

---

Besoin d'aide ? Dites-moi ! 💬
