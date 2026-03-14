# 🧪 TESTS DE SÉCURITÉ - CHECKLIST COMPLÈTE

## Comment tester votre site après déploiement

---

## ✅ **1. TESTER LES HEADERS HTTP**

### A. Avec SecurityHeaders.com (Recommandé)
**URL** : https://securityheaders.com

**ÉTAPES** :
1. Aller sur https://securityheaders.com
2. Entrer votre URL : `www.mdiagnostic.fr`
3. Cliquer sur "Scan"

**RÉSULTAT ATTENDU** : **Grade A** ou **A+** 🎯

**Headers à vérifier** :
- ✅ Strict-Transport-Security
- ✅ Content-Security-Policy
- ✅ X-Frame-Options
- ✅ X-Content-Type-Options
- ✅ X-XSS-Protection
- ✅ Referrer-Policy
- ✅ Permissions-Policy

---

### B. Avec curl (Terminal)
```bash
curl -I https://www.mdiagnostic.fr
```

**Vérifier la présence de** :
```
strict-transport-security: max-age=63072000
x-frame-options: SAMEORIGIN
x-content-type-options: nosniff
x-xss-protection: 1; mode=block
```

---

## ✅ **2. TESTER LE RATE LIMITING**

### Test manuel :
1. Aller sur `/contact`
2. Remplir le formulaire rapidement
3. Soumettre **3 fois de suite**
4. À la **4ème tentative** → Message d'erreur : 
   ```
   ⏱️ Trop de tentatives. Veuillez réessayer dans X min XX sec.
   ```

**✅ SUCCÈS** : Si bloqué après 3 tentatives

---

## ✅ **3. TESTER LA SANITISATION (Anti-XSS)**

### A. Test script simple
**Input dans le champ "Nom"** :
```html
<script>alert('XSS')</script>
```

**RÉSULTAT ATTENDU** : 
- ❌ Champ vide ou nettoyé
- ✅ Pas d'alerte JavaScript

---

### B. Test onclick
**Input dans le champ "Message"** :
```html
<img src=x onerror=alert('XSS')>
```

**RÉSULTAT ATTENDU** :
- ❌ Message bloqué
- ✅ Alerte : "Votre message contient des caractères non autorisés"

---

### C. Test iframe
**Input dans le champ "Adresse"** :
```html
<iframe src="https://evil.com"></iframe>
```

**RÉSULTAT ATTENDU** :
- ❌ Bloqué
- ✅ Message d'erreur

---

## ✅ **4. TESTER LA VALIDATION DES FICHIERS**

### A. Fichier trop volumineux
1. Créer un PDF > 5 MB
2. Essayer de l'uploader

**RÉSULTAT ATTENDU** :
```
❌ Le fichier dépasse 5 MB.
```

---

### B. Mauvais format
1. Essayer d'uploader un fichier `.exe`, `.jpg`, `.zip`

**RÉSULTAT ATTENDU** :
```
❌ Le fichier doit être au format PDF.
```

---

### C. Fichier valide
1. Uploader un PDF < 5 MB

**RÉSULTAT ATTENDU** :
```
✅ Fichier accepté
```

---

## ✅ **5. TESTER LA VALIDATION EMAIL**

### Emails invalides :
```
test
test@
@example.com
test @example.com
test@example
```

**RÉSULTAT ATTENDU** : ❌ Refusés

### Emails valides :
```
test@example.com
contact@mdiagnostic.fr
jean.dupont@gmail.com
```

**RÉSULTAT ATTENDU** : ✅ Acceptés

---

## ✅ **6. TESTER LA VALIDATION TÉLÉPHONE**

### Numéros invalides :
```
123
12345678
1234567890
06 12 34
```

**RÉSULTAT ATTENDU** : ❌ Refusés

### Numéros valides :
```
06 12 34 56 78
0612345678
+33 6 12 34 56 78
07 77 78 26 59
```

**RÉSULTAT ATTENDU** : ✅ Acceptés

---

## ✅ **7. TESTER LE HTTPS**

### A. Redirection HTTP → HTTPS
1. Aller sur `http://www.mdiagnostic.fr` (sans le 's')
2. Vérifier la redirection automatique vers `https://`

**RÉSULTAT ATTENDU** : ✅ Redirection automatique

---

### B. Certificat SSL
1. Cliquer sur le cadenas 🔒 dans la barre d'adresse
2. Vérifier "Connexion sécurisée"

**RÉSULTAT ATTENDU** :
```
✅ Connexion sécurisée
✅ Certificat valide
✅ Émis par : Let's Encrypt (ou Vercel)
```

---

## ✅ **8. TESTER LE CSP (Content Security Policy)**

### Ouvrir la console du navigateur (F12)
1. Aller sur votre site
2. Ouvrir la console (F12 → Console)
3. Chercher des erreurs CSP

**PAS D'ERREURS ATTENDUES** de type :
```
Refused to load... because it violates the Content Security Policy
```

**Si erreurs CSP** → Ajuster le CSP dans `vercel.json`

---

## ✅ **9. TESTER LE CODE POSTAL**

### Codes postaux invalides :
```
123
40
401234
ABCDE
```

**RÉSULTAT ATTENDU** : ❌ Refusés

### Codes postaux valides :
```
40140
75001
33000
40000
```

**RÉSULTAT ATTENDU** : ✅ Acceptés

---

## ✅ **10. TESTER LE BANDEAU SÉCURITÉ**

### Vérifier l'affichage :
1. Aller sur `/contact`
2. Vérifier la présence du bandeau sous le header :
   ```
   🔒 100% Sécurisé - Connexion HTTPS cryptée
   ✅ RGPD Conforme - Vos données protégées
   🛡️ Anti-spam - Protection avancée
   ```

**RÉSULTAT ATTENDU** : ✅ Visible et bien stylé

---

## ✅ **11. TESTER LE RATE LIMITING (Détaillé)**

### Chronométrage :
1. Soumettre le formulaire (Tentative 1) → ✅ OK
2. Soumettre immédiatement (Tentative 2) → ✅ OK
3. Soumettre immédiatement (Tentative 3) → ✅ OK
4. Soumettre immédiatement (Tentative 4) → ❌ **BLOQUÉ**
5. Attendre 5 minutes
6. Soumettre à nouveau → ✅ OK (reset automatique)

**RÉSULTAT ATTENDU** : 
- ✅ Bloqué à la 4ème tentative
- ✅ Déblocage après 5 minutes
- ✅ Affichage du temps restant

---

## ✅ **12. TESTER LA CONFORMITÉ RGPD**

### Vérifier :
- [x] Bandeau cookies s'affiche au premier chargement
- [x] Possibilité de refuser les cookies
- [x] Page `/politique-confidentialite` accessible
- [x] Page `/gestion-cookies` accessible
- [x] Mentions de Supabase, EmailJS, Vercel présentes
- [x] Durées de conservation indiquées
- [x] Email de contact pour exercer ses droits

---

## 📊 **TABLEAU DE BORD DE TEST**

| Test | Statut | Notes |
|------|--------|-------|
| Headers HTTP | ⏳ | À tester sur securityheaders.com |
| HTTPS/SSL | ⏳ | Vérifier le cadenas 🔒 |
| Rate limiting | ⏳ | 3 tentatives max |
| XSS Protection | ⏳ | Essayer `<script>alert(1)</script>` |
| Validation email | ⏳ | Tester emails invalides |
| Validation téléphone | ⏳ | Tester numéros invalides |
| Validation fichiers | ⏳ | PDF > 5 MB = refusé |
| CSP | ⏳ | Pas d'erreurs console |
| Bandeau sécurité | ⏳ | Visible sur /contact |
| RGPD | ⏳ | Bandeau cookies OK |

---

## 🎯 **CHECKLIST DÉPLOIEMENT**

Avant de déployer en production :

- [ ] Tous les tests ci-dessus passent ✅
- [ ] Grade A/A+ sur securityheaders.com
- [ ] HTTPS actif avec certificat valide
- [ ] Bandeau cookies fonctionnel
- [ ] Rate limiting opérationnel
- [ ] Formulaires validés côté client
- [ ] Fichiers PDF < 5 MB uniquement
- [ ] Pas d'erreurs dans la console

---

## 🚀 **APRÈS DÉPLOIEMENT**

### 1. Scanner le site
**Outils gratuits** :
- https://securityheaders.com (Headers)
- https://observatory.mozilla.org (Sécurité globale)
- https://www.ssllabs.com/ssltest/ (SSL)

### 2. Vérifier les logs
**Vercel Dashboard** :
- Vérifier les logs de déploiement
- Pas d'erreurs 500
- Temps de réponse < 1s

### 3. Tester en production
- Formulaire de contact
- Upload de fichiers
- Navigation complète
- Version mobile

---

## 📞 **SUPPORT**

**Problème détecté ?**
1. Noter le test qui échoue
2. Copier le message d'erreur
3. Me contacter avec les détails

**Besoin d'aide pour tester ?**
→ Je peux vous guider étape par étape ! 💬

---

**Bonne chance pour vos tests ! 🧪✅**
