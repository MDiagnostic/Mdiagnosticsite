# 📧 Configuration Complète des Emails MDIAGNOSTIC

## 🎯 Vue d'Ensemble

Vous allez configurer **2 emails automatiques** :

1. **Email pour VOUS** : Recevoir les demandes de devis (déjà configuré)
2. **Email pour le CLIENT** : Confirmation automatique de sa demande (nouveau - optionnel)

---

## 📨 EMAIL 1 : Notification pour MDIAGNOSTIC (VOUS)

### **🎨 Template Professionnel**

**Fichier à utiliser :** `/emailjs-template.html`

**Template ID dans EmailJS :** `template_e9qy7mf` (déjà configuré)

### **📋 Instructions**

1. Allez sur [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Cliquez sur **"Email Templates"**
3. Sélectionnez `template_e9qy7mf`
4. Onglet **"Content"**
5. **Effacez tout** et collez le contenu de `/emailjs-template.html`
6. Cliquez sur **"Save"**

### **✅ Vérification**

**Subject (Sujet) :** 
```
📋 Nouvelle demande de devis - {{from_name}} ({{transaction_type}})
```

**To Email :** 
```
contact.mdiagnostic@gmail.com
```

**From Name :** 
```
MDIAGNOSTIC - Formulaire de Contact
```

**Reply To :** 
```
{{from_email}}
```
*(Important : permet de répondre directement au client)*

---

## 📨 EMAIL 2 : Confirmation pour le CLIENT (Optionnel mais Recommandé)

### **🎨 Template de Confirmation**

**Fichier à utiliser :** `/emailjs-confirmation-client.html`

### **📋 Instructions**

#### **Étape 1 : Créer un nouveau template EmailJS**

1. Allez sur [EmailJS Dashboard](https://dashboard.emailjs.com/admin)
2. Cliquez sur **"Email Templates"**
3. Cliquez sur **"Create New Template"**
4. Donnez-lui un nom : `MDIAGNOSTIC - Confirmation Client`
5. Notez le **Template ID** (exemple: `template_abc123`)

#### **Étape 2 : Configurer le template**

**Settings (Paramètres) :**

- **Template Name :** `MDIAGNOSTIC - Confirmation Client`
- **Subject :** `✅ Demande de devis bien reçue - MDIAGNOSTIC`
- **From Name :** `MDIAGNOSTIC`
- **From Email :** `contact.mdiagnostic@gmail.com`
- **To Email :** `{{from_email}}` ⚠️ **IMPORTANT : Envoyer au client**
- **Reply To :** `contact.mdiagnostic@gmail.com`
- **BCC :** *(laisser vide)*

#### **Étape 3 : Ajouter le contenu HTML**

1. Onglet **"Content"**
2. Copiez le contenu de `/emailjs-confirmation-client.html`
3. Collez-le dans la zone de contenu
4. Cliquez sur **"Save"**

#### **Étape 4 : Modifier le code du site**

Ouvrez `/src/app/components/Contact.tsx` et trouvez la ligne 597 :

**AVANT :**
```typescript
await emailjs.send(serviceId, templateId, templateParams, publicKey);
```

**APRÈS :**
```typescript
// Envoyer l'email à MDIAGNOSTIC (vous)
await emailjs.send(serviceId, templateId, templateParams, publicKey);

// Envoyer l'email de confirmation au client
const confirmationTemplateId = "template_abc123"; // ⚠️ Remplacer par votre Template ID
await emailjs.send(serviceId, confirmationTemplateId, templateParams, publicKey);
```

---

## 🎨 Aperçu des Emails

### **Email pour MDIAGNOSTIC (Vous)**

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   📋 Nouvelle Demande de Devis            ┃
┃   MDIAGNOSTIC - Diagnostics Immobiliers  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  🔔 Action requise : Nouveau client       ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  👤 COORDONNÉES DU CLIENT                 ┃
┃  • Nom : Jean Dupont                      ┃
┃  • Email : jean@example.com               ┃
┃  • Tél : 06 12 34 56 78                   ┃
┃  • Adresse : 15 Rue de la Plage, Hossegor ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  🏠 INFORMATIONS DU BIEN                  ┃
┃  • Transaction : VENTE                    ┃
┃  • Type : Maison                          ┃
┃  • Surface : 120 m²                       ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  ✅ DIAGNOSTICS DEMANDÉS                  ┃
┃  DPE, AMIANTE, ÉLECTRICITÉ, PLOMB         ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  💬 MESSAGE DU CLIENT                     ┃
┃  "Je souhaite vendre ma maison..."        ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃        [📧 RÉPONDRE AU CLIENT]            ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### **Email pour le CLIENT**

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃   ✅ Demande Bien Reçue !                 ┃
┃   Merci pour votre confiance              ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  Bonjour Jean,                            ┃
┃                                           ┃
┃  Nous avons bien reçu votre demande.      ┃
┃  Retour sous 24h ouvrées.                 ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  📋 RÉCAPITULATIF                         ┃
┃  Adresse : 15 Rue de la Plage             ┃
┃  Transaction : Vente                      ┃
┃  Diagnostics : DPE, AMIANTE, ÉLECTRICITÉ  ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  ✅ Intervention sous 48-72h              ┃
┃  ✅ Certifié et assuré                    ┃
┃  ✅ Zone : Soustons et environs           ┃
┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
┃  Pourquoi MDIAGNOSTIC ?                   ┃
┃  🏆 Expert   ⚡ Rapide   💰 Transparent    ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

---

## 🔧 Variables Utilisées

| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{from_name}}` | Nom du client | Jean Dupont |
| `{{from_email}}` | Email du client | jean@example.com |
| `{{phone}}` | Téléphone | 06 12 34 56 78 |
| `{{address}}` | Adresse complète | 15 Rue de la Plage, Hossegor |
| `{{postal_code}}` | Code postal | 40150 |
| `{{transaction_type}}` | Type de transaction | vente / location / copropriete |
| `{{property_type}}` | Type de bien | maison / appartement |
| `{{construction_year}}` | Année de construction | 1985 |
| `{{surface}}` | Surface | 120 m² |
| `{{rooms}}` | Nombre de pièces | 5 pièces |
| `{{electricity_age}}` | Âge électricité | Plus de 15 ans |
| `{{gas_installation}}` | Installation gaz | Oui |
| `{{diagnostics}}` | Diagnostics demandés | DPE, AMIANTE, PLOMB |
| `{{existing_diagnostics}}` | Diagnostics possédés | GAZ (2022), TERMITES (2021) |
| `{{message}}` | Message du client | "Je souhaite un devis..." |

---

## 🧪 Tester les Emails

### **Méthode 1 : Depuis EmailJS (Rapide)**

1. Dashboard EmailJS → Templates
2. Sélectionnez le template
3. Cliquez sur **"Test it"**
4. Remplissez les variables
5. Entrez votre email dans "To Email"
6. Cliquez sur **"Send Test Email"**

### **Méthode 2 : Depuis votre site (Réel)**

1. Allez sur votre site → page Contact
2. Remplissez le formulaire
3. Envoyez
4. Vérifiez vos emails

---

## ✅ Checklist de Configuration

### **Email MDIAGNOSTIC (Vous) :**
- [ ] Template HTML copié dans `template_e9qy7mf`
- [ ] Subject configuré
- [ ] To Email = `contact.mdiagnostic@gmail.com`
- [ ] Reply To = `{{from_email}}`
- [ ] Email testé et reçu

### **Email CLIENT (Optionnel) :**
- [ ] Nouveau template créé dans EmailJS
- [ ] Template ID noté (ex: `template_abc123`)
- [ ] HTML de confirmation copié
- [ ] Subject = "✅ Demande de devis bien reçue - MDIAGNOSTIC"
- [ ] To Email = `{{from_email}}` ⚠️
- [ ] Code modifié dans `Contact.tsx`
- [ ] Email testé et reçu par le client

---

## 💰 Limites EmailJS

| Plan | Emails/mois | Prix |
|------|-------------|------|
| **Gratuit** | 200 | 0€ |
| **Personal** | 1000 | 7€/mois |
| **Professional** | 10 000 | 30€/mois |

**💡 Astuce :** Avec l'email de confirmation client, vous envoyez **2 emails par formulaire** :
- 200 emails gratuits = **100 formulaires/mois** (largement suffisant)

---

## 🎨 Personnalisation

### **Ajouter votre logo :**

1. Uploadez votre logo sur [Imgur](https://imgur.com) ou un hébergeur d'images
2. Copiez l'URL de l'image
3. Dans le template HTML, ajoutez après la ligne 22 :

```html
<img src="VOTRE_URL_LOGO" alt="MDIAGNOSTIC" style="max-width: 200px; margin-bottom: 20px;">
```

### **Modifier les couleurs :**

Cherchez et remplacez dans le code :
- `rgb(129,137,88)` → Votre couleur principale
- `rgb(100,107,60)` → Votre couleur secondaire

---

## 🚀 Améliorations Futures (Optionnel)

1. **Webhook Supabase** : Envoyer des emails automatiques depuis Supabase
2. **Notifications SMS** : Via Twilio pour être alerté immédiatement
3. **Calendrier en ligne** : Permettre au client de prendre RDV directement
4. **Suivi de devis** : Email de relance si pas de réponse après 3 jours

---

## ❓ Problèmes Fréquents

### **Je ne reçois pas les emails :**
- Vérifiez les spams
- Vérifiez que `contact.mdiagnostic@gmail.com` est bien configuré
- Testez depuis EmailJS Dashboard

### **L'email n'est pas bien formaté :**
- Assurez-vous d'avoir copié TOUT le code HTML
- Vérifiez qu'il n'y a pas de balises manquantes
- Testez dans Gmail, Outlook, et Apple Mail

### **Les variables n'apparaissent pas :**
- Vérifiez la syntaxe : `{{from_name}}` (avec doubles accolades)
- Vérifiez que le code dans `Contact.tsx` envoie bien ces variables

### **Le client ne reçoit pas la confirmation :**
- Vérifiez que `To Email = {{from_email}}`
- Vérifiez que le Template ID est correct dans le code
- Testez avec votre propre email d'abord

---

**🎉 Félicitations ! Vos emails sont maintenant professionnels et automatisés.**
