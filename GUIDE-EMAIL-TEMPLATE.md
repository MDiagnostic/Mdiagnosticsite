# 📧 Guide d'Installation du Template Email HTML pour EmailJS

## 🎯 Objectif
Remplacer l'email texte basique par un **email HTML professionnel** avec la charte graphique MDIAGNOSTIC (vert olive).

---

## 📋 Étapes d'Installation

### **1️⃣ Accéder au Dashboard EmailJS**

1. Allez sur : [https://dashboard.emailjs.com/admin](https://dashboard.emailjs.com/admin)
2. Connectez-vous avec vos identifiants
3. Dans le menu de gauche, cliquez sur **"Email Templates"**

---

### **2️⃣ Modifier le Template Existant**

1. Cherchez votre template : **`template_e9qy7mf`**
2. Cliquez dessus pour l'ouvrir
3. Vous verrez deux onglets :
   - **"Settings"** (Paramètres)
   - **"Content"** (Contenu)

---

### **3️⃣ Copier le Nouveau Template HTML**

1. Ouvrez le fichier : **`/emailjs-template.html`** (dans ce projet)
2. Copiez **TOUT le contenu** (Ctrl+A puis Ctrl+C)
3. Retournez sur EmailJS → onglet **"Content"**
4. **EFFACEZ tout** le contenu actuel
5. **COLLEZ** le nouveau code HTML
6. Cliquez sur **"Save"** (Sauvegarder) en haut à droite

---

### **4️⃣ Vérifier les Variables**

Le template utilise ces variables (déjà configurées dans votre code) :

| Variable EmailJS | Données du formulaire |
|------------------|----------------------|
| `{{from_name}}` | Nom du client |
| `{{from_email}}` | Email du client |
| `{{phone}}` | Téléphone |
| `{{address}}` | Adresse du bien |
| `{{postal_code}}` | Code postal |
| `{{transaction_type}}` | Type de transaction (vente/location/etc.) |
| `{{property_type}}` | Type de bien (maison/appartement) |
| `{{construction_year}}` | Année de construction |
| `{{surface}}` | Surface en m² |
| `{{rooms}}` | Nombre de pièces |
| `{{electricity_age}}` | Âge de l'électricité |
| `{{gas_installation}}` | Installation gaz |
| `{{diagnostics}}` | Liste des diagnostics demandés |
| `{{existing_diagnostics}}` | Diagnostics déjà possédés |
| `{{message}}` | Message personnalisé du client |

✅ **Toutes ces variables sont déjà envoyées par le code dans `Contact.tsx` (lignes 575-592)**

---

### **5️⃣ Tester l'Email**

1. Dans EmailJS, cliquez sur **"Test it"** (en haut à droite)
2. Remplissez les variables de test
3. Cliquez sur **"Send Test Email"**
4. Vérifiez votre boîte mail `contact.mdiagnostic@gmail.com`

**OU** testez directement depuis votre site :
1. Allez sur votre site → page Contact
2. Remplissez le formulaire de devis
3. Envoyez le formulaire
4. Vérifiez l'email reçu

---

## 🎨 Design de l'Email

### **Caractéristiques visuelles :**

✅ **Couleurs de marque :**
- Vert olive principal : `rgb(129,137,88)`
- Vert olive foncé : `rgb(100,107,60)`
- Dégradé dans l'en-tête

✅ **Sections bien structurées :**
1. 📋 En-tête avec titre
2. 🔔 Alerte "Nouveau client"
3. 👤 Coordonnées du client (fond gris)
4. 🏠 Informations du bien (fond gris)
5. ✅ Diagnostics demandés (fond vert clair)
6. 📄 Diagnostics déjà possédés (fond orange clair)
7. 💬 Message du client (fond gris)
8. 📧 Bouton "Répondre au Client"
9. Footer avec infos MDIAGNOSTIC

✅ **Responsive :**
- Largeur max : 600px
- S'adapte aux mobiles
- Compatible Gmail, Outlook, Apple Mail, etc.

---

## 🔧 Personnalisation (Optionnel)

### **Modifier les couleurs :**

Cherchez et remplacez dans le code HTML :
- `rgb(129,137,88)` → Votre couleur principale
- `rgb(100,107,60)` → Votre couleur secondaire

### **Modifier le texte de l'en-tête :**

Ligne 23 :
```html
<h1>📋 Nouvelle Demande de Devis</h1>
```

### **Modifier le footer :**

Lignes 278-290 :
```html
<p>MDIAGNOSTIC</p>
<p>Diagnostics Immobiliers à Soustons et ses environs</p>
```

---

## ❓ Problèmes Courants

### **L'email n'est pas bien formaté :**
- Vérifiez que vous avez copié **TOUT le code HTML**
- Assurez-vous qu'il n'y a pas de balises manquantes

### **Les variables n'apparaissent pas :**
- Vérifiez que les noms correspondent exactement : `{{from_name}}` (avec doubles accolades)
- Testez depuis le site, pas juste depuis EmailJS

### **L'email arrive en spam :**
- Vérifiez que votre domaine d'envoi est configuré dans EmailJS
- Ajoutez contact.mdiagnostic@gmail.com en contact pour whitelister

---

## 📸 Aperçu

Votre email aura cette structure :

```
╔════════════════════════════════════════╗
║    [EN-TÊTE VERT OLIVE DÉGRADÉ]       ║
║    📋 Nouvelle Demande de Devis        ║
╠════════════════════════════════════════╣
║  🔔 Alerte : Nouveau client            ║
╠════════════════════════════════════════╣
║  👤 COORDONNÉES DU CLIENT              ║
║  Nom : Jean Dupont                     ║
║  Email : jean@example.com              ║
║  Téléphone : 06 12 34 56 78            ║
╠════════════════════════════════════════╣
║  🏠 INFORMATIONS DU BIEN               ║
║  Type : VENTE                          ║
║  Bien : Maison                         ║
║  Surface : 120 m²                      ║
╠════════════════════════════════════════╣
║  ✅ DIAGNOSTICS DEMANDÉS               ║
║  DPE, AMIANTE, ÉLECTRICITÉ             ║
╠════════════════════════════════════════╣
║  📄 DIAGNOSTICS DÉJÀ POSSÉDÉS          ║
║  PLOMB (2023), GAZ (2022)              ║
╠════════════════════════════════════════╣
║  💬 MESSAGE DU CLIENT                  ║
║  "Je souhaite obtenir un devis..."     ║
╠════════════════════════════════════════╣
║       [📧 BOUTON RÉPONDRE]             ║
╠════════════════════════════════════════╣
║          [FOOTER MDIAGNOSTIC]          ║
╚════════════════════════════════════════╝
```

---

## ✅ Checklist Finale

- [ ] J'ai copié le code HTML dans EmailJS
- [ ] J'ai sauvegardé le template
- [ ] J'ai testé l'envoi depuis EmailJS
- [ ] J'ai testé depuis mon site web
- [ ] L'email est bien formaté
- [ ] Toutes les données apparaissent correctement
- [ ] Les couleurs correspondent à ma charte graphique

---

## 🚀 Prochaines Étapes (Optionnel)

1. **Ajouter votre logo** : Uploadez un logo sur un hébergeur d'images et ajoutez-le dans l'en-tête
2. **Email automatique au client** : Créer un second template pour confirmer la réception du devis
3. **SMS de notification** : Intégrer Twilio pour recevoir un SMS à chaque devis

---

**Besoin d'aide ? Ouvrez un ticket ou contactez le support EmailJS.**
