# Configuration du Formulaire de Contact

Le formulaire de contact de votre site web MDIAGNOSTIC utilise **EmailJS** pour envoyer les messages directement vers **contact.mdiagnostic@gmail.com**.

## Étapes de Configuration

### 1. Créer un Compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Cliquez sur **"Sign Up"** pour créer un compte gratuit
3. Confirmez votre adresse email

### 2. Connecter votre Gmail

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez **"Gmail"**
4. Suivez les instructions pour connecter votre compte **contact.mdiagnostic@gmail.com**
5. Notez le **Service ID** (par exemple : `service_abc123`)

### 3. Créer un Template d'Email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template avec ces paramètres :

**Subject:** Nouvelle demande de devis - {{subject}}

**Content:**
```
Nouvelle demande de devis reçue depuis le site MDIAGNOSTIC

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}
Type de diagnostic : {{subject}}

Message :
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de mdiagnostic.fr
```

4. Sauvegardez et notez le **Template ID** (par exemple : `template_xyz789`)

### 4. Obtenir votre Public Key

1. Allez dans **"Account"** → **"General"**
2. Trouvez votre **Public Key** (par exemple : `user_def456`)

### 5. Mettre à Jour le Code

Ouvrez le fichier `/src/app/components/Contact.tsx` et remplacez les valeurs suivantes (lignes 26-28) :

```typescript
const serviceId = "YOUR_SERVICE_ID"; // Remplacer par votre Service ID
const templateId = "YOUR_TEMPLATE_ID"; // Remplacer par votre Template ID
const publicKey = "YOUR_PUBLIC_KEY"; // Remplacer par votre Public Key
```

Par vos vraies valeurs :

```typescript
const serviceId = "service_abc123"; // Votre Service ID
const templateId = "template_xyz789"; // Votre Template ID
const publicKey = "user_def456"; // Votre Public Key
```

### 6. Tester le Formulaire

1. Sauvegardez les modifications
2. Allez sur votre site web
3. Remplissez le formulaire de contact
4. Vérifiez que vous recevez bien l'email sur **contact.mdiagnostic@gmail.com**

## Plan Gratuit EmailJS

Le plan gratuit d'EmailJS permet :
- ✅ 200 emails par mois
- ✅ 2 templates d'email
- ✅ 1 service email

C'est largement suffisant pour un site professionnel de diagnostics immobiliers.

## Support

Si vous rencontrez des problèmes :
- Documentation EmailJS : [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- Support EmailJS : support@emailjs.com

## Sécurité

⚠️ **Important** : Les clés EmailJS (Service ID, Template ID, Public Key) peuvent être exposées dans le code frontend. EmailJS utilise un système de restrictions pour sécuriser votre compte :

1. Dans EmailJS, allez dans **"Security"**
2. Activez **"Allowed Origins"**
3. Ajoutez le domaine de votre site web (par exemple : `https://mdiagnostic.fr`)

Cela empêchera l'utilisation de vos clés depuis d'autres sites web.
