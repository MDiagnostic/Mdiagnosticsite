# 📧 Configuration des Emails Professionnels MDIAGNOSTIC

## 🎯 Résumé

Vous avez maintenant **deux templates d'emails HTML professionnels** prêts à être installés dans EmailJS pour remplacer vos emails texte basiques.

---

## 📁 Fichiers Créés

| Fichier | Description |
|---------|-------------|
| `emailjs-template.html` | **Email pour VOUS** : Notification de nouvelle demande de devis |
| `emailjs-confirmation-client.html` | **Email pour le CLIENT** : Confirmation automatique (optionnel) |
| `GUIDE-EMAIL-TEMPLATE.md` | Guide d'installation détaillé étape par étape |
| `CONFIGURATION-EMAILS.md` | Configuration complète avec variables et exemples |
| `APERCU-EMAILS.txt` | Aperçu visuel ASCII des emails |

---

## ⚡ Installation Rapide (5 minutes)

### **ÉTAPE 1 : Email pour VOUS (obligatoire)**

1. Ouvrez `emailjs-template.html`
2. Copiez TOUT le contenu (Ctrl+A → Ctrl+C)
3. Allez sur [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
4. Cliquez sur **"Email Templates"**
5. Sélectionnez `template_e9qy7mf`
6. Onglet **"Content"**
7. Effacez tout et collez le nouveau code
8. Cliquez sur **"Save"**

✅ **C'EST FAIT !** Testez en envoyant un formulaire depuis votre site.

---

### **ÉTAPE 2 : Email pour le CLIENT (optionnel mais recommandé)**

1. EmailJS Dashboard → **"Create New Template"**
2. Nom : `MDIAGNOSTIC - Confirmation Client`
3. **Notez le Template ID** (ex: `template_abc123`)
4. Onglet **"Content"** → Copiez le contenu de `emailjs-confirmation-client.html`
5. Onglet **"Settings"** :
   - **To Email :** `{{from_email}}` ⚠️ IMPORTANT
   - **Subject :** `✅ Demande de devis bien reçue - MDIAGNOSTIC`
6. Cliquez sur **"Save"**

**Modifiez le code du site :**

Ouvrez `/src/app/components/Contact.tsx` ligne 597 et ajoutez :

```typescript
// Envoyer l'email à MDIAGNOSTIC (vous)
await emailjs.send(serviceId, templateId, templateParams, publicKey);

// Envoyer l'email de confirmation au client
const confirmationTemplateId = "template_abc123"; // ⚠️ Remplacer par votre Template ID
await emailjs.send(serviceId, confirmationTemplateId, templateParams, publicKey);
```

✅ **C'EST FAIT !** Le client reçoit maintenant une confirmation automatique.

---

## 🎨 Aperçu Visuel

### **Email 1 : Pour VOUS**

```
┌────────────────────────────────────┐
│  [EN-TÊTE VERT OLIVE DÉGRADÉ]     │
│  📋 Nouvelle Demande de Devis      │
├────────────────────────────────────┤
│  🔔 Nouveau client                 │
├────────────────────────────────────┤
│  👤 COORDONNÉES CLIENT             │
│  Nom, Email, Téléphone, Adresse    │
├────────────────────────────────────┤
│  🏠 INFORMATIONS DU BIEN           │
│  Transaction, Type, Surface, etc.  │
├────────────────────────────────────┤
│  ✅ DIAGNOSTICS DEMANDÉS           │
│  DPE, AMIANTE, PLOMB, etc.         │
├────────────────────────────────────┤
│  📄 DIAGNOSTICS DÉJÀ POSSÉDÉS      │
│  GAZ (2022), TERMITES (2021)       │
├────────────────────────────────────┤
│  💬 MESSAGE DU CLIENT              │
│  "Je souhaite un devis..."         │
├────────────────────────────────────┤
│     [📧 RÉPONDRE AU CLIENT]        │
└────────────────────────────────────┘
```

### **Email 2 : Pour le CLIENT**

```
┌────────────────────────────────────┐
│  [EN-TÊTE VERT OLIVE DÉGRADÉ]     │
│  ✅ Demande Bien Reçue !           │
├────────────────────────────────────┤
│  Bonjour Jean,                     │
│  Nous avons bien reçu votre        │
│  demande. Retour sous 24h.         │
├────────────────────────────────────┤
│  📋 RÉCAPITULATIF                  │
│  Adresse, Transaction, Diagnostics │
├────────────────────────────────────┤
│  ✅ Intervention sous 48-72h       │
│  ✅ Certifié et assuré             │
│  ✅ Zone : Soustons et environs    │
├────────────────────────────────────┤
│     [🌐 VISITER NOTRE SITE]        │
├────────────────────────────────────┤
│  Pourquoi MDIAGNOSTIC ?            │
│  🏆 Expert | ⚡ Rapide | 💰 Prix   │
└────────────────────────────────────┘
```

---

## ✨ Caractéristiques

✅ **Design professionnel** avec vos couleurs de marque (vert olive)  
✅ **Responsive** : S'adapte aux mobiles, tablettes et desktop  
✅ **Compatible** : Gmail, Outlook, Apple Mail, Yahoo, etc.  
✅ **Structuré** : Sections claires et faciles à lire  
✅ **Boutons d'action** : "Répondre au client", "Visiter le site"  
✅ **Footer complet** : SIRET, RCP, certifications  
✅ **Variables dynamiques** : Toutes les infos du formulaire  

---

## 🔧 Variables Utilisées

Les templates utilisent **15 variables** automatiquement remplies par votre formulaire :

| Variable | Exemple |
|----------|---------|
| `{{from_name}}` | Jean Dupont |
| `{{from_email}}` | jean@example.com |
| `{{phone}}` | 06 12 34 56 78 |
| `{{address}}` | 15 Rue de la Plage, Hossegor |
| `{{postal_code}}` | 40150 |
| `{{transaction_type}}` | vente |
| `{{property_type}}` | maison |
| `{{construction_year}}` | 1985 |
| `{{surface}}` | 120 m² |
| `{{rooms}}` | 5 pièces |
| `{{electricity_age}}` | Plus de 15 ans |
| `{{gas_installation}}` | Oui |
| `{{diagnostics}}` | DPE, AMIANTE, PLOMB |
| `{{existing_diagnostics}}` | GAZ (2022) |
| `{{message}}` | "Je souhaite un devis..." |

**✅ Toutes ces variables sont déjà configurées dans votre code !**

---

## 🧪 Tester les Emails

### **Méthode 1 : Test depuis EmailJS**
1. Dashboard EmailJS → Templates → `template_e9qy7mf`
2. Cliquez sur **"Test it"**
3. Remplissez les variables
4. Entrez votre email
5. Cliquez sur **"Send Test Email"**

### **Méthode 2 : Test depuis votre site**
1. Allez sur votre site → page Contact
2. Remplissez le formulaire de devis
3. Envoyez
4. Vérifiez votre boîte mail `contact.mdiagnostic@gmail.com`

---

## 💰 Limites EmailJS

| Plan | Emails/mois | Prix | Remarque |
|------|-------------|------|----------|
| **Gratuit** | 200 | 0€ | Suffisant pour démarrer |
| **Personal** | 1000 | 7€/mois | Recommandé si > 100 devis/mois |

**💡 Note :** Avec l'email de confirmation client, vous envoyez 2 emails par formulaire :
- 200 emails gratuits = **100 formulaires/mois**

---

## 🎨 Personnalisation

### **Ajouter votre logo :**

1. Uploadez votre logo sur [Imgur](https://imgur.com)
2. Dans le template HTML, ajoutez après la ligne 22 :

```html
<img src="URL_DE_VOTRE_LOGO" alt="MDIAGNOSTIC" 
     style="max-width: 200px; margin-bottom: 20px;">
```

### **Modifier les couleurs :**

Cherchez et remplacez :
- `rgb(129,137,88)` → Votre couleur principale
- `rgb(100,107,60)` → Votre couleur secondaire

### **Modifier le texte :**

Tous les textes sont modifiables dans les fichiers HTML.

---

## 📚 Documentation Complète

Pour plus de détails, consultez :

1. **`GUIDE-EMAIL-TEMPLATE.md`** : Guide d'installation pas à pas
2. **`CONFIGURATION-EMAILS.md`** : Configuration détaillée des 2 emails
3. **`APERCU-EMAILS.txt`** : Aperçu visuel ASCII des emails

---

## ❓ Problèmes Fréquents

### **Je ne reçois pas les emails**
- Vérifiez les spams
- Vérifiez que `contact.mdiagnostic@gmail.com` est bien configuré dans EmailJS
- Testez depuis le Dashboard EmailJS

### **L'email n'est pas bien formaté**
- Assurez-vous d'avoir copié **TOUT** le code HTML
- Testez dans différents clients email (Gmail, Outlook)

### **Les variables n'apparaissent pas**
- Vérifiez la syntaxe : `{{from_name}}` (avec doubles accolades)
- Vérifiez que le code envoie bien les variables (ligne 575-592 dans Contact.tsx)

### **Le client ne reçoit pas la confirmation**
- Vérifiez que **To Email = `{{from_email}}`** dans les paramètres du template
- Vérifiez que le Template ID est correct dans le code

---

## ✅ Checklist

**Email pour VOUS :**
- [ ] HTML copié dans `template_e9qy7mf`
- [ ] Sauvegardé dans EmailJS
- [ ] Testé depuis EmailJS Dashboard
- [ ] Testé depuis le site web
- [ ] Email bien reçu et bien formaté

**Email pour le CLIENT (optionnel) :**
- [ ] Nouveau template créé
- [ ] HTML copié dans le nouveau template
- [ ] To Email = `{{from_email}}`
- [ ] Template ID ajouté dans Contact.tsx
- [ ] Testé depuis le site web
- [ ] Client reçoit bien la confirmation

---

## 🚀 Améliorations Futures

1. **Ajouter un logo** dans l'en-tête
2. **Email de relance** automatique après 3 jours sans réponse
3. **Notifications SMS** via Twilio
4. **Calendrier en ligne** pour prise de RDV directe
5. **Statistiques** : taux d'ouverture, taux de réponse

---

## 🎉 Résultat Final

Avant | Après
------|-------
Email texte basique sans mise en forme | Email HTML professionnel
Données en vrac | Sections structurées et colorées
Pas de confirmation client | Confirmation automatique (optionnel)
Image amateur | Image de marque professionnelle

---

## 💬 Besoin d'Aide ?

1. Consultez les guides détaillés (`GUIDE-EMAIL-TEMPLATE.md`)
2. Vérifiez la documentation EmailJS
3. Testez dans différents clients email

---

**✨ Félicitations ! Vos emails sont maintenant au niveau professionnel !**
