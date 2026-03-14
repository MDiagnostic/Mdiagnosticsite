import { useState } from "react";
import { Mail, Phone, MapPin, Send, Home as HomeIcon, Building, Building2, ChevronRight, CheckCircle, AlertTriangle, X, Upload, FileText, Trash2, Info, Hammer, Eye, Shield } from "lucide-react";
import emailjs from '@emailjs/browser';
import { SEO } from "./SEO";
import { AddressAutocomplete } from "./AddressAutocomplete";
import { saveContactForm, uploadDiagnosticFile } from "../../lib/supabase";
import { sanitizeInput, validateContactForm, detectSuspiciousPatterns, isValidFileSize, isValidFileType } from "../../lib/security";
import { useRateLimit, formatTimeRemaining } from "../../hooks/useRateLimit";

type TransactionType = "vente" | "location" | "copropriete" | "etablissement" | "entreprise" | "construction_neuve" | "";
type PropertyType = "maison" | "appartement" | "immeuble" | "";
type DiagnosticKey = "dpe" | "amiante" | "plomb" | "electricite" | "gaz" | "termites" | "erp" | "loi_carrez" | "loi_boutin" | "dta" | "dtg" | "re2020" | "rt2012";

interface DiagnosticForm {
  transactionType: TransactionType;
  propertyType: PropertyType;
  isNewConstruction: string;
  constructionYear: string;
  surface: string;
  rooms: string;
  electricityAge: string;
  gasInstallation: string;
  postalCode: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  diagnostics: Record<DiagnosticKey, boolean>;
  diagnosticDates: Record<DiagnosticKey, string>;
  diagnosticFiles: Record<DiagnosticKey, File | null>;
}

export function Contact() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<DiagnosticForm>({
    transactionType: "",
    propertyType: "",
    isNewConstruction: "",
    constructionYear: "",
    surface: "",
    rooms: "",
    electricityAge: "",
    gasInstallation: "",
    postalCode: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    diagnostics: {
      dpe: false,
      amiante: false,
      plomb: false,
      electricite: false,
      gaz: false,
      termites: false,
      erp: false,
      loi_carrez: false,
      loi_boutin: false,
      dta: false,
      dtg: false,
      re2020: false,
      rt2012: false,
    },
    diagnosticDates: {
      dpe: "",
      amiante: "",
      plomb: "",
      electricite: "",
      gaz: "",
      termites: "",
      erp: "",
      loi_carrez: "",
      loi_boutin: "",
      dta: "",
      dtg: "",
      re2020: "",
      rt2012: "",
    },
    diagnosticFiles: {
      dpe: null,
      amiante: null,
      plomb: null,
      electricite: null,
      gaz: null,
      termites: null,
      erp: null,
      loi_carrez: null,
      loi_boutin: null,
      dta: null,
      dtg: null,
      re2020: null,
      rt2012: null,
    },
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [postalCodeError, setPostalCodeError] = useState("");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [isAddressValidated, setIsAddressValidated] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  
  // 🔒 SÉCURITÉ : Rate limiting (max 3 envois toutes les 5 minutes)
  const { canAttempt, attempt, timeRemaining } = useRateLimit({
    key: 'contact-form-submit',
    maxAttempts: 3,
    windowMs: 300000, // 5 minutes
  });
  
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [modalDiagnostic, setModalDiagnostic] = useState<DiagnosticKey | null>(null);

  // Fonction pour valider le format du code postal
  const isValidPostalCode = (postalCode: string): boolean => {
    // Un code postal français valide contient exactement 5 chiffres
    return /^\d{5}$/.test(postalCode);
  };

  // Fonction pour valider le format de l'email
  const isValidEmail = (email: string): boolean => {
    // Regex pour valider un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Fonction pour valider le format du numéro de téléphone
  const isValidPhoneNumber = (phone: string): boolean => {
    // Format acceptés: xx xx xx xx xx, xx.xx.xx.xx.xx, xxxxxxxxxx
    const formats = [
      /^\d{2}\s\d{2}\s\d{2}\s\d{2}\s\d{2}$/,  // xx xx xx xx xx
      /^\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}$/,  // xx.xx.xx.xx.xx
      /^\d{10}$/                                // xxxxxxxxxx
    ];
    
    return formats.some(format => format.test(phone));
  };

  // Fonction pour formater le numéro de téléphone
  const formatPhoneNumber = (value: string) => {
    // Supprimer tout sauf les chiffres
    const digits = value.replace(/\D/g, '');
    
    // Limiter à 10 chiffres
    const limited = digits.slice(0, 10);
    
    // Formatter avec des points tous les 2 chiffres
    const formatted = limited.match(/.{1,2}/g)?.join('.') || limited;
    
    return formatted;
  };

  // Gérer le changement du téléphone avec formatage
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
    // Réinitialiser l'erreur quand l'utilisateur modifie le champ
    setPhoneError("");
  };
  const [modalDate, setModalDate] = useState("");
  const [modalValidity, setModalValidity] = useState<{ valid: boolean; message: string } | null>(null);

  const isDiagnosticValid = (diagType: DiagnosticKey, date: string): { valid: boolean; message: string } => {
    if (!date) return { valid: false, message: "Date requise" };

    const diagDate = new Date(date);
    const today = new Date();
    const diffTime = today.getTime() - diagDate.getTime();
    const diffMonths = diffTime / (1000 * 3600 * 24 * 30);
    const diffYears = diffTime / (1000 * 3600 * 24 * 365);

    switch (diagType) {
      case "dpe":
        return {
          valid: diffYears < 10,
          message: diffYears < 10 ? `Votre diagnostic est toujours valide (${Math.floor(10 - diffYears)} ans restants)` : "Votre diagnostic n'est plus valide (validité 10 ans)"
        };
      case "electricite":
        const elecValidity = formData.transactionType === "vente" || formData.transactionType === "entreprise" ? 3 : 6;
        return {
          valid: diffYears < elecValidity,
          message: diffYears < elecValidity 
            ? `Votre diagnostic est toujours valide (${Math.floor(elecValidity - diffYears)} ans restants)` 
            : `Votre diagnostic n'est plus valide (validité ${elecValidity} ans)`
        };
      case "gaz":
        const gazValidity = formData.transactionType === "vente" || formData.transactionType === "entreprise" ? 3 : 6;
        return {
          valid: diffYears < gazValidity,
          message: diffYears < gazValidity 
            ? `Votre diagnostic est toujours valide (${Math.floor(gazValidity - diffYears)} ans restants)` 
            : `Votre diagnostic n'est plus valide (validité ${gazValidity} ans)`
        };
      case "termites":
      case "erp":
        return {
          valid: diffMonths < 6,
          message: diffMonths < 6 ? `Votre diagnostic est toujours valide (${Math.floor(6 - diffMonths)} mois restants)` : "Votre diagnostic n'est plus valide (validité 6 mois)"
        };
      case "amiante":
      case "plomb":
        return {
          valid: true,
          message: "Votre diagnostic est toujours valide (validité illimitée si négatif)"
        };
      case "loi_carrez":
      case "loi_boutin":
        return {
          valid: true,
          message: "Votre diagnostic est toujours valide (sauf travaux modifiant la superficie)"
        };
      case "dta":
      case "dtg":
        return {
          valid: diffYears < 10,
          message: diffYears < 10 ? `Votre diagnostic est toujours valide (${Math.floor(10 - diffYears)} ans restants)` : "Votre diagnostic n'est plus valide (validité 10 ans)"
        };
      case "re2020":
      case "rt2012":
        return {
          valid: true,
          message: "Votre attestation est toujours valide (validité illimitée)"
        };
      default:
        return { valid: false, message: "Inconnu" };
    }
  };

  const calculateDiagnostics = () => {
    const diags: Record<DiagnosticKey, boolean> = {
      dpe: false,
      amiante: false,
      plomb: false,
      electricite: false,
      gaz: false,
      termites: false,
      erp: false,
      loi_carrez: false,
      loi_boutin: false,
      dta: false,
      dtg: false,
      re2020: false,
      rt2012: false,
    };

    // Si l'utilisateur ne connaît pas l'année, on considère 1900 par défaut (ancien bâtiment)
    const yearNum = formData.constructionYear === "ne sais pas" 
      ? 1900 
      : parseInt(formData.constructionYear);

    if (formData.transactionType === "vente") {
      diags.dpe = true;
      diags.erp = true;
      if (yearNum && yearNum < 1997) diags.amiante = true;
      if (yearNum && yearNum < 1949) diags.plomb = true;
      if (formData.electricityAge === "oui" || formData.electricityAge === "ne sais pas") diags.electricite = true;
      if (formData.gasInstallation === "oui" || formData.gasInstallation === "ne sais pas") diags.gaz = true;
      if (formData.postalCode && formData.postalCode.startsWith("40")) {
        diags.termites = true;
      }
      if (formData.propertyType === "appartement") {
        diags.loi_carrez = true;
      }
      // Attestations pour constructions neuves
      if (formData.isNewConstruction === "oui") {
        if (yearNum >= 2022) {
          diags.re2020 = true;
        } else if (yearNum >= 2013 && yearNum <= 2021) {
          diags.rt2012 = true;
        }
      }
    } else if (formData.transactionType === "location") {
      diags.dpe = true;
      diags.erp = true;
      if (yearNum && yearNum < 1997) diags.amiante = true;
      if (yearNum && yearNum < 1949) diags.plomb = true;
      if (formData.electricityAge === "oui" || formData.electricityAge === "ne sais pas") diags.electricite = true;
      if (formData.gasInstallation === "oui" || formData.gasInstallation === "ne sais pas") diags.gaz = true;
      diags.loi_boutin = true;
      // Attestations pour constructions neuves
      if (formData.isNewConstruction === "oui") {
        if (yearNum >= 2022) {
          diags.re2020 = true;
        } else if (yearNum >= 2013 && yearNum <= 2021) {
          diags.rt2012 = true;
        }
      }
    } else if (formData.transactionType === "copropriete") {
      diags.dta = true;
      diags.dtg = true;
      diags.dpe = true;
    } else if (formData.transactionType === "entreprise") {
      diags.dpe = true;
      diags.amiante = true;
      if (yearNum && yearNum < 1949) diags.plomb = true;
      if (formData.electricityAge === "oui" || formData.electricityAge === "ne sais pas") diags.electricite = true;
      if (formData.gasInstallation === "oui" || formData.gasInstallation === "ne sais pas") diags.gaz = true;
      diags.erp = true;
      // Attestations pour constructions neuves
      if (formData.isNewConstruction === "oui") {
        if (yearNum >= 2022) {
          diags.re2020 = true;
        } else if (yearNum >= 2013 && yearNum <= 2021) {
          diags.rt2012 = true;
        }
      }
    }

    return diags;
  };

  const handleTransactionSelect = (type: TransactionType) => {
    setFormData({ ...formData, transactionType: type });
    setCurrentStep(2);
  };

  const handlePropertyTypeSelect = (type: PropertyType) => {
    setFormData({ ...formData, propertyType: type });
    setCurrentStep(3);
  };

  const handleConstructionYearSubmit = () => {
    if (formData.constructionYear) {
      setCurrentStep(4);
    }
  };

  const handleInstallationsSubmit = () => {
    const calculatedDiags = calculateDiagnostics();
    setFormData({ ...formData, diagnostics: calculatedDiags });
    setCurrentStep(5);
  };

  const handleCoordonnéesSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Vérifier que le téléphone est valide avant de continuer
    if (!isValidPhoneNumber(formData.phone)) {
      setPhoneError("Format invalide. Utilisez: 06 12 34 56 78, 06.12.34.56.78 ou 0612345678");
      return;
    }
    
    setCurrentStep(6);
  };

  const handleCheckboxClick = (key: DiagnosticKey, allowDirectUncheck: boolean = false) => {
    // Si le diagnostic est coché, on tente de le décocher
    if (formData.diagnostics[key]) {
      // Si c'est un diagnostic non concerné, on permet le décochage direct
      if (allowDirectUncheck) {
        setFormData({
          ...formData,
          diagnostics: {
            ...formData.diagnostics,
            [key]: false,
          },
        });
      } else {
        // Sinon on ouvre la modal pour les diagnostics concernés
        setModalDiagnostic(key);
        setModalDate(formData.diagnosticDates[key] || "");
        setModalValidity(null);
        setShowModal(true);
      }
    } else {
      // Si le diagnostic est décoché, on le recoche
      setFormData({
        ...formData,
        diagnostics: {
          ...formData.diagnostics,
          [key]: true,
        },
      });
    }
  };

  const handleModalDateChange = (date: string) => {
    setModalDate(date);
    if (date && modalDiagnostic) {
      const validity = isDiagnosticValid(modalDiagnostic, date);
      setModalValidity(validity);
    } else {
      setModalValidity(null);
    }
  };

  const handleModalConfirm = () => {
    if (!modalDiagnostic || !modalDate || !modalValidity) return;

    // Si le diagnostic est valide, on peut le décocher
    if (modalValidity.valid) {
      setFormData({
        ...formData,
        diagnostics: {
          ...formData.diagnostics,
          [modalDiagnostic]: false,
        },
        diagnosticDates: {
          ...formData.diagnosticDates,
          [modalDiagnostic]: modalDate,
        },
      });
      setShowModal(false);
      setModalDiagnostic(null);
      setModalDate("");
      setModalValidity(null);
    } else {
      // Si le diagnostic n'est pas valide, on ferme la modale sans décocher
      setShowModal(false);
      setModalDiagnostic(null);
      setModalDate("");
      setModalValidity(null);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setModalDiagnostic(null);
    setModalDate("");
    setModalValidity(null);
  };

  const handleFileUpload = (key: DiagnosticKey, file: File | null) => {
    setFormData({
      ...formData,
      diagnosticFiles: {
        ...formData.diagnosticFiles,
        [key]: file,
      },
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 🔒 SÉCURITÉ 1 : Vérifier le rate limiting
    if (!canAttempt) {
      alert(`⏱️ Trop de tentatives. Veuillez réessayer dans ${formatTimeRemaining(timeRemaining)}.`);
      return;
    }
    
    // 🔒 SÉCURITÉ 2 : Valider toutes les données côté client
    const validation = validateContactForm({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      postalCode: formData.postalCode,
      address: formData.address,
      message: formData.message,
    });
    
    if (!validation.isValid) {
      const firstError = Object.values(validation.errors)[0];
      alert(`❌ Erreur de validation : ${firstError}`);
      return;
    }
    
    // 🔒 SÉCURITÉ 3 : Détecter les patterns suspects
    const allInputs = [
      formData.name,
      formData.email,
      formData.phone,
      formData.address,
      formData.message,
    ].join(' ');
    
    if (detectSuspiciousPatterns(allInputs)) {
      alert('❌ Votre message contient des caractères non autorisés. Veuillez vérifier votre saisie.');
      return;
    }
    
    // 🔒 SÉCURITÉ 4 : Valider les fichiers
    for (const [key, file] of Object.entries(formData.diagnosticFiles)) {
      if (file) {
        if (!isValidFileSize(file, 5)) {
          alert(`❌ Le fichier ${key.toUpperCase()} dépasse 5 MB.`);
          return;
        }
        if (!isValidFileType(file, ['application/pdf'])) {
          alert(`❌ Le fichier ${key.toUpperCase()} doit être au format PDF.`);
          return;
        }
      }
    }
    
    // ✅ Vérifier que la case "J'accepte" est cochée
    if (!consentAccepted) {
      setConsentError(true);
      setSending(false);
      // Scroll vers la case à cocher
      document.getElementById('consent-final')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }
    
    // 🔒 SÉCURITÉ 5 : Incrémenter le compteur de tentatives
    if (!attempt()) {
      alert(`⏱️ Trop de tentatives. Veuillez réessayer dans ${formatTimeRemaining(timeRemaining)}.`);
      return;
    }
    
    setSending(true);
    setError(false);
    setConsentError(false);

    // ✅ Configuration EmailJS
    const serviceId = "service_2oggjym";
    const templateId = "template_e9qy7mf";
    const publicKey = "tRktfvibn3pSBbAWD";

    // Vérifier si EmailJS est configuré
    const isEmailJSConfigured = serviceId !== "YOUR_SERVICE_ID" && 
                                templateId !== "YOUR_TEMPLATE_ID" && 
                                publicKey !== "YOUR_PUBLIC_KEY";

    try {
      const selectedDiags = Object.entries(formData.diagnostics)
        .filter(([_, value]) => value)
        .map(([key]) => key.toUpperCase())
        .join(", ");

      // ✅ ÉTAPE 1 : Uploader les fichiers vers Supabase Storage
      const uploadedFilesUrls: Record<string, string> = {};
      const filesWithUrls: string[] = [];
      
      for (const [key, file] of Object.entries(formData.diagnosticFiles)) {
        if (file) {
          const url = await uploadDiagnosticFile(file, key, formData.email);
          if (url) {
            uploadedFilesUrls[key] = url;
            filesWithUrls.push(`${key.toUpperCase()}: ${url}`);
          }
        }
      }

      const existingDiags = Object.entries(formData.diagnostics)
        .filter(([key, value]) => !value && formData.diagnosticDates[key as DiagnosticKey])
        .map(([key]) => {
          const diagKey = key as DiagnosticKey;
          const fileUrl = uploadedFilesUrls[key];
          const datePart = formData.diagnosticDates[diagKey];
          const filePart = fileUrl ? ` - Fichier: ${fileUrl}` : '';
          return `${key.toUpperCase()} (possédé - date: ${datePart}${filePart})`;
        })
        .join(", ");

      // Préparer les données pour Supabase
      const selectedDiagsArray = Object.entries(formData.diagnostics)
        .filter(([_, value]) => value)
        .map(([key]) => key);

      const existingDiagsObject: Record<string, string> = {};
      Object.entries(formData.diagnostics)
        .filter(([key, value]) => !value && formData.diagnosticDates[key as DiagnosticKey])
        .forEach(([key]) => {
          existingDiagsObject[key] = formData.diagnosticDates[key as DiagnosticKey];
        });

      // 🔒 SÉCURITÉ 6 : Sanitiser toutes les données avant sauvegarde
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone),
        address: sanitizeInput(formData.address),
        postal_code: sanitizeInput(formData.postalCode),
        transaction_type: formData.transactionType,
        property_type: formData.propertyType,
        is_new_construction: formData.isNewConstruction,
        construction_year: sanitizeInput(formData.constructionYear),
        surface: sanitizeInput(formData.surface),
        rooms: sanitizeInput(formData.rooms),
        electricity_age: sanitizeInput(formData.electricityAge),
        gas_installation: sanitizeInput(formData.gasInstallation),
        message: sanitizeInput(formData.message),
        diagnostics_needed: selectedDiagsArray,
        existing_diagnostics: existingDiagsObject,
      };
      
      // Sauvegarder dans Supabase (optionnel - ne bloque pas l'envoi de l'email)
      try {
        await saveContactForm(sanitizedData);
        console.log("✅ Données sauvegardées dans Supabase");
      } catch (error) {
        // Ne pas bloquer l'envoi de l'email si Supabase échoue (c'est normal si la table n'est pas encore créée)
        // L'erreur est déjà loggée dans supabase.ts, pas besoin de la réafficher ici
      }

      // MODE TEST : Afficher les données dans la console
      if (!isEmailJSConfigured) {
        console.log("");
        console.log("╔══════════════════════════════════════════════════════════════╗");
        console.log("║                                                              ║");
        console.log("║         🧪  MODE TEST - FORMULAIRE VALIDÉ !  ✅              ║");
        console.log("║                                                              ║");
        console.log("╚══════════════════════════════════════════════════════════════╝");
        console.log("");
        console.log("📧 DESTINATAIRE : contact.mdiagnostic@gmail.com");
        console.log("");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("👤 COORDONNÉES CLIENT :");
        console.log("  Nom :", formData.name);
        console.log("  Email :", formData.email);
        console.log("  Téléphone :", formData.phone);
        console.log("  Adresse :", formData.address);
        console.log("  Code postal :", formData.postalCode);
        console.log("");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("🏠 INFORMATIONS DU BIEN :");
        console.log("  Transaction :", formData.transactionType);
        console.log("  Type de bien :", formData.propertyType || "N/A");
        console.log("  Année de construction :", formData.constructionYear || "N/A");
        console.log("  Surface :", formData.surface, "m²");
        console.log("  Pièces :", formData.rooms);
        console.log("  Âge électricité :", formData.electricityAge || "N/A");
        console.log("  Installation gaz :", formData.gasInstallation || "N/A");
        console.log("");
        console.log("━���━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("📋 DIAGNOSTICS DEMANDÉS :");
        console.log("  ", selectedDiags || "Aucun");
        console.log("");
        console.log("✅ DIAGNOSTICS DÉJÀ POSSÉDÉS :");
        console.log("  ", existingDiags || "Aucun");
        console.log("");
        console.log("💬 MESSAGE :");
        console.log("  ", formData.message || "Aucun message");
        console.log("");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("");
        console.log("✅ FORMULAIRE VALIDÉ EN MODE TEST !");
        console.log("");
        console.log("📌 PROCHAINE ÉTAPE :");
        console.log("   Pour recevoir les emails automatiquement, configurez");
        console.log("   vos clés EmailJS dans Contact.tsx (lignes 433-435).");
        console.log("");
        console.log("╚══════════════════════════════════════════════════════════════╝");
        console.log("");
      } else {
        // MODE PRODUCTION : Envoyer par EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          address: formData.address,
          transaction_type: formData.transactionType,
          property_type: formData.propertyType,
          construction_year: formData.constructionYear,
          surface: formData.surface + " m²",
          rooms: formData.rooms + " pièces",
          electricity_age: formData.electricityAge,
          gas_installation: formData.gasInstallation,
          postal_code: formData.postalCode,
          diagnostics: selectedDiags,
          existing_diagnostics: existingDiags || "Aucun",
          message: formData.message,
          to_email: 'contact.mdiagnostic@gmail.com'
        };

        console.log("📧 DONNÉES ENVOYÉES À EMAILJS :", templateParams);
        console.log("📎 FICHIERS UPLOADÉS :", uploadedFilesUrls);

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
        console.log("✅ Email envoyé avec succ��s via EmailJS !");
      }
      
      setSubmitted(true);
      setSending(false);
      
      setTimeout(() => {
        setSubmitted(false);
        setCurrentStep(1);
        setConsentAccepted(false);
        setConsentError(false);
        setFormData({
          transactionType: "",
          propertyType: "",
          isNewConstruction: "",
          constructionYear: "",
          surface: "",
          rooms: "",
          electricityAge: "",
          gasInstallation: "",
          postalCode: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          diagnostics: {
            dpe: false,
            amiante: false,
            plomb: false,
            electricite: false,
            gaz: false,
            termites: false,
            erp: false,
            loi_carrez: false,
            loi_boutin: false,
            dta: false,
            dtg: false,
            re2020: false,
            rt2012: false,
          },
          diagnosticDates: {
            dpe: "",
            amiante: "",
            plomb: "",
            electricite: "",
            gaz: "",
            termites: "",
            erp: "",
            loi_carrez: "",
            loi_boutin: "",
            dta: "",
            dtg: "",
            re2020: "",
            rt2012: "",
          },
          diagnosticFiles: {
            dpe: null,
            amiante: null,
            plomb: null,
            electricite: null,
            gaz: null,
            termites: null,
            erp: null,
            loi_carrez: null,
            loi_boutin: null,
            dta: null,
            dtg: null,
            re2020: null,
            rt2012: null,
          },
        });
      }, 5000);
    } catch (err) {
      console.error("Erreur lors de l'envoi:", err);
      setError(true);
      setSending(false);
    }
  };

  const getDiagnosticLabel = (key: DiagnosticKey): string => {
    const labels: Record<DiagnosticKey, string> = {
      dpe: "DPE (Diagnostic de Performance Énergétique)",
      amiante: "Amiante",
      plomb: "Plomb (CREP)",
      electricite: "Électricité",
      gaz: "Gaz",
      termites: "Termites",
      erp: "ERP (État des Risques et Pollutions)",
      loi_carrez: "Loi Carrez (Mesurage)",
      loi_boutin: "Loi Boutin (Mesurage)",
      dta: "DTA (Dossier Technique Amiante)",
      dtg: "DTG (Diagnostic Technique Global)",
      re2020: "Attestation RE2020 (fin de chantier)",
      rt2012: "Attestation RT 2012 (fin de chantier)",
    };
    return labels[key];
  };

  // Fonction pour obtenir tous les diagnostics pertinents selon la situation
  const getAllRelevantDiagnostics = (): DiagnosticKey[] => {
    const allDiags: DiagnosticKey[] = [];
    // Si l'utilisateur ne connaît pas l'année, on considère 1900 par défaut (ancien bâtiment)
    const yearNum = formData.constructionYear === "ne sais pas" 
      ? 1900 
      : parseInt(formData.constructionYear);

    if (formData.transactionType === "construction_neuve") {
      // Pour construction neuve, uniquement les attestations
      if (yearNum >= 2022) {
        allDiags.push("re2020");
      } else if (yearNum >= 2013) {
        allDiags.push("rt2012");
      }
    } else if (formData.transactionType === "vente") {
      allDiags.push("dpe", "erp");
      if (yearNum && yearNum < 1997) allDiags.push("amiante");
      if (yearNum && yearNum < 1949) allDiags.push("plomb");
      if (formData.electricityAge === "oui" || formData.electricityAge === "ne sais pas") allDiags.push("electricite");
      if (formData.gasInstallation === "oui" || formData.gasInstallation === "ne sais pas") allDiags.push("gaz");
      if (formData.postalCode && formData.postalCode.startsWith("40")) allDiags.push("termites");
      if (formData.propertyType === "appartement") allDiags.push("loi_carrez");
    } else if (formData.transactionType === "location") {
      allDiags.push("dpe", "erp", "loi_boutin");
      if (yearNum && yearNum < 1997) allDiags.push("amiante");
      if (yearNum && yearNum < 1949) allDiags.push("plomb");
      if (formData.electricityAge === "oui" || formData.electricityAge === "ne sais pas") allDiags.push("electricite");
      if (formData.gasInstallation === "oui" || formData.gasInstallation === "ne sais pas") allDiags.push("gaz");
    } else if (formData.transactionType === "copropriete") {
      allDiags.push("dta", "dtg", "dpe");
    } else if (formData.transactionType === "entreprise") {
      allDiags.push("dpe", "amiante", "erp");
      if (yearNum && yearNum < 1949) allDiags.push("plomb");
      if (formData.electricityAge === "oui" || formData.electricityAge === "ne sais pas") allDiags.push("electricite");
      if (formData.gasInstallation === "oui" || formData.gasInstallation === "ne sais pas") allDiags.push("gaz");
    }

    return allDiags;
  };

  // Fonction pour obtenir TOUS les diagnostics possibles (pour affichage complet)
  const getAllPossibleDiagnostics = (): DiagnosticKey[] => {
    return ["dpe", "amiante", "plomb", "electricite", "gaz", "termites", "erp", "loi_carrez", "loi_boutin", "dta", "dtg", "re2020", "rt2012"];
  };

  // Fonction pour obtenir tous les diagnostics possibles selon le type de transaction
  const getAllPossibleDiagnosticsForTransaction = (): DiagnosticKey[] => {
    if (formData.transactionType === "construction_neuve") {
      return ["re2020", "rt2012"];
    } else if (formData.transactionType === "vente") {
      return ["dpe", "erp", "amiante", "plomb", "electricite", "gaz", "termites", "loi_carrez"];
    } else if (formData.transactionType === "location") {
      return ["dpe", "erp", "loi_boutin", "amiante", "plomb", "electricite", "gaz"];
    } else if (formData.transactionType === "copropriete") {
      return ["dta", "dtg", "dpe"];
    } else if (formData.transactionType === "entreprise") {
      return ["dpe", "amiante", "erp", "plomb", "electricite", "gaz"];
    }
    return [];
  };

  // Fonction pour vérifier si un diagnostic est pertinent pour la situation actuelle
  const isRelevantDiagnostic = (key: DiagnosticKey): boolean => {
    return getAllRelevantDiagnostics().includes(key);
  };

  // Fonction pour expliquer pourquoi un diagnostic n'est pas concerné
  const getWhyNotRelevant = (key: DiagnosticKey): string => {
    const yearNum = formData.constructionYear === "ne sais pas" 
      ? 1900 
      : parseInt(formData.constructionYear);

    switch (key) {
      case "amiante":
        if (yearNum >= 1997) return "Votre bien a été construit après juillet 1997";
        return "Non requis pour votre situation";
      case "plomb":
        if (yearNum >= 1949) return "Votre bien a été construit après 1949";
        return "Non requis pour votre situation";
      case "electricite":
        if (formData.electricityAge === "non") return "Votre installation électrique a moins de 15 ans";
        return "Non requis pour votre situation";
      case "gaz":
        if (formData.gasInstallation === "non") return "Votre bien n'a pas d'installation de gaz";
        return "Non requis pour votre situation";
      case "termites":
        if (formData.postalCode && !formData.postalCode.startsWith("40")) return "Votre bien n'est pas situé en zone à risque termites";
        return "Non requis pour votre situation";
      case "loi_carrez":
        if (formData.propertyType === "maison") return "La Loi Carrez concerne les biens en copropriété (surtout appartements)";
        return "Non requis pour votre situation";
      case "loi_boutin":
        return "La Loi Boutin concerne uniquement les locations";
      case "dta":
      case "dtg":
        return "Le DTA/DTG concerne uniquement les copropriétés";
      case "re2020":
        return "Attestation de fin de chantier pour les constructions neuves (permis à partir de 2022)";
      case "rt2012":
        return "Attestation de fin de chantier pour les constructions neuves (permis 2013-2021)";
      case "erp":
        return "Non requis pour votre situation";
      default:
        return "Non requis pour votre situation";
    }
  };

  return (
    <div className="w-full">
      {/* Modal de validation */}
      {showModal && modalDiagnostic && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4" style={{ backgroundColor: 'rgba(129, 137, 88, 0.1)' }}>
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Diagnostic existant
              </h3>
              <button
                onClick={handleModalClose}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-gray-700 mb-4">
                <strong>{getDiagnosticLabel(modalDiagnostic)}</strong>
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Vous avez déjà ce diagnostic ? Indiquez la date de réalisation pour vérifier sa validité :
              </p>

              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Date du diagnostic *
              </label>
              <input
                type="date"
                value={modalDate}
                onChange={(e) => handleModalDateChange(e.target.value)}
                className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all"
                style={{ borderColor: '#e8ebe0' }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
              />

              {modalValidity && (
                <div className={`mt-4 p-4 rounded-lg border-2 ${modalValidity.valid ? 'bg-green-50 border-green-500' : 'bg-red-50 border-red-500'}`}>
                  <div className="flex items-center gap-2">
                    {modalValidity.valid ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    )}
                    <p className={`font-semibold ${modalValidity.valid ? 'text-green-800' : 'text-red-800'}`}>
                      {modalValidity.message}
                    </p>
                  </div>
                  {!modalValidity.valid && (
                    <p className="text-sm text-red-700 mt-2">
                      Vous devrez refaire ce diagnostic. Il restera coché dans votre demande.
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="flex gap-3 justify-end">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
              >
                Annuler
              </button>
              <button
                onClick={handleModalConfirm}
                disabled={!modalDate || !modalValidity}
                className="px-4 py-2 rounded-lg font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#818958' }}
                onMouseEnter={(e) => (!modalDate || !modalValidity) ? null : e.currentTarget.style.backgroundColor = '#6b7148'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#818958'}
              >
                {modalValidity?.valid ? "Confirmer" : "J'ai compris"}
              </button>
            </div>
          </div>
        </div>
      )}

      <SEO 
        title="Devis Gratuit - Diagnostic Immobilier Soustons | MDIAGNOSTIC"
        description="Demandez votre devis gratuit de diagnostic immobilier en ligne. Formulaire en 6 étapes pour vente, location ou copropriété. Intervention rapide sur Soustons, Hossegor, Capbreton, Dax et toutes les Landes (40)."
        keywords="devis diagnostic immobilier Landes, devis gratuit DPE Soustons, diagnostic amiante prix, tarif diagnostic location, devis diagnostic vente, prix diagnostic Landes 40, diagnostiqueur Hossegor"
        canonical="https://www.mdiagnostic.fr/contact"
      />

      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Demande de Devis</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Obtenez un devis personnalisé en quelques étapes simples
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white py-6 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {(formData.transactionType === "construction_neuve" 
              ? [
                  { num: 1, label: "Situation" },
                  { num: 2, label: "Caractéristiques" },
                  { num: 3, label: "Localisation" },
                  { num: 4, label: "Coordonnées" },
                  { num: 5, label: "Récapitulatif" },
                ]
              : [
                  { num: 1, label: "Situation" },
                  { num: 2, label: "Type de bien" },
                  { num: 3, label: "Construction" },
                  { num: 4, label: "Installations" },
                  { num: 5, label: "Coordonnées" },
                  { num: 6, label: "Récapitulatif" },
                ]
            ).map((step, index) => (
              <div key={step.num} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      currentStep >= step.num
                        ? "text-white"
                        : "bg-gray-200 text-gray-400"
                    }`}
                    style={currentStep >= step.num ? { backgroundColor: '#818958' } : {}}
                  >
                    {currentStep > step.num ? (
                      <CheckCircle className="h-6 w-6" />
                    ) : (
                      step.num
                    )}
                  </div>
                  <span className={`text-xs mt-2 text-center hidden sm:block ${
                    currentStep >= step.num ? "font-semibold" : "text-gray-400"
                  }`} style={currentStep >= step.num ? { color: '#818958' } : {}}>
                    {step.label}
                  </span>
                </div>
                {index < (formData.transactionType === "construction_neuve" ? 4 : 5) && (
                  <div
                    className={`h-1 flex-1 mx-2 ${
                      currentStep > step.num ? "" : "bg-gray-200"
                    }`}
                    style={currentStep > step.num ? { backgroundColor: '#818958' } : {}}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            
            {/* Étape 1: Type de transaction */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Déterminer la situation du bien
                  </h2>
                  <p className="text-gray-600">
                    Sélectionnez le type de transaction concernée
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr">
                  <button
                    onClick={() => handleTransactionSelect("vente")}
                    className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-left group h-full"
                    style={{ borderColor: '#e8ebe0' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#ffebee' }}>
                        <HomeIcon className="h-6 w-6" style={{ color: '#c62828' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-gray-900">Vente</h3>
                        <p className="text-sm text-gray-600">Diagnostics pour vendre un bien</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-700" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleTransactionSelect("location")}
                    className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-left group h-full"
                    style={{ borderColor: '#e8ebe0' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#fff3e0' }}>
                        <Building className="h-6 w-6" style={{ color: '#e65100' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-gray-900">Location</h3>
                        <p className="text-sm text-gray-600">Diagnostics pour louer un bien</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-700" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleTransactionSelect("copropriete")}
                    className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-left group h-full"
                    style={{ borderColor: '#e8ebe0' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e3f2fd' }}>
                        <Building2 className="h-6 w-6" style={{ color: '#1565c0' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-gray-900">Copropriété</h3>
                        <p className="text-sm text-gray-600">DTA, DTG pour syndic</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-700" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleTransactionSelect("entreprise")}
                    className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-left group h-full"
                    style={{ borderColor: '#e8ebe0' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e8ebe0' }}>
                        <Building className="h-6 w-6" style={{ color: '#818958' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-gray-900">Entreprise / Autre</h3>
                        <p className="text-sm text-gray-600">Diagnostics selon réglementation en vigueur</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-700" />
                    </div>
                  </button>

                  <button
                    onClick={() => handleTransactionSelect("construction_neuve")}
                    className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-left group md:col-span-2 h-full"
                    style={{ borderColor: '#e8ebe0' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#e0f2f1' }}>
                        <Hammer className="h-6 w-6" style={{ color: '#00695c' }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl text-gray-900">Construction Neuve</h3>
                        <p className="text-sm text-gray-600">Attestations RE2020 ou RT 2012 pour fin de chantier</p>
                      </div>
                      <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-gray-700" />
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Étape 2: Type de bien */}
            {currentStep === 2 && formData.transactionType !== "construction_neuve" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Type de bien ?
                  </h2>
                  <p className="text-gray-600">
                    {formData.transactionType === "entreprise" 
                      ? "Quel type de local professionnel ?"
                      : "Quel est le type de votre bien immobilier ?"}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {formData.transactionType === "entreprise" ? (
                    <>
                      <button
                        onClick={() => handlePropertyTypeSelect("maison")}
                        className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-center group"
                        style={{ borderColor: '#e8ebe0' }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      >
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                          <Building className="h-8 w-8" style={{ color: '#1565c0' }} />
                        </div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">Bureaux</h3>
                        <p className="text-sm text-gray-600">Espaces de bureaux</p>
                      </button>

                      <button
                        onClick={() => handlePropertyTypeSelect("appartement")}
                        className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-center group"
                        style={{ borderColor: '#e8ebe0' }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      >
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#fff3e0' }}>
                          <Building2 className="h-8 w-8" style={{ color: '#e65100' }} />
                        </div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">Ateliers</h3>
                        <p className="text-sm text-gray-600">Locaux industriels</p>
                      </button>

                      <button
                        onClick={() => handlePropertyTypeSelect("immeuble")}
                        className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-center group"
                        style={{ borderColor: '#e8ebe0' }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      >
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                          <HomeIcon className="h-8 w-8" style={{ color: '#818958' }} />
                        </div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">Autre</h3>
                        <p className="text-sm text-gray-600">Autre type de local</p>
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handlePropertyTypeSelect("maison")}
                        className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-center group"
                        style={{ borderColor: '#e8ebe0' }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      >
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#fff3e0' }}>
                          <HomeIcon className="h-8 w-8" style={{ color: '#e65100' }} />
                        </div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">Maison</h3>
                        <p className="text-sm text-gray-600">Maison individuelle</p>
                      </button>

                      <button
                        onClick={() => handlePropertyTypeSelect("appartement")}
                        className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-center group"
                        style={{ borderColor: '#e8ebe0' }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      >
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#e3f2fd' }}>
                          <Building className="h-8 w-8" style={{ color: '#1565c0' }} />
                        </div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">Appartement</h3>
                        <p className="text-sm text-gray-600">Logement en copropriété</p>
                      </button>

                      <button
                        onClick={() => handlePropertyTypeSelect("immeuble")}
                        className="p-6 border-2 rounded-lg hover:shadow-lg transition-all text-center group"
                        style={{ borderColor: '#e8ebe0' }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      >
                        <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: '#f3e5f5' }}>
                          <Building2 className="h-8 w-8" style={{ color: '#6a1b9a' }} />
                        </div>
                        <h3 className="font-semibold text-xl text-gray-900 mb-2">Immeuble</h3>
                        <p className="text-sm text-gray-600">Immeuble complet</p>
                      </button>
                    </>
                  )}
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}

            {/* Étape 2 Construction Neuve: Caractéristiques du bien */}
            {currentStep === 2 && formData.transactionType === "construction_neuve" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Caractéristiques du bien
                  </h2>
                  <p className="text-gray-600">
                    Informations sur votre construction neuve
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Type de bien */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Type de bien *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: "maison" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.propertyType === "maison"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.propertyType === "maison" ? { backgroundColor: '#818958' } : {}}
                      >
                        Maison
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: "appartement" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.propertyType === "appartement"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.propertyType === "appartement" ? { backgroundColor: '#818958' } : {}}
                      >
                        Appartement
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, propertyType: "immeuble" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.propertyType === "immeuble"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.propertyType === "immeuble" ? { backgroundColor: '#818958' } : {}}
                      >
                        Immeuble
                      </button>
                    </div>
                  </div>

                  {/* Année de construction */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Année de construction *
                    </label>
                    <input
                      type="number"
                      min="2013"
                      max={new Date().getFullYear() + 2}
                      value={formData.constructionYear}
                      onChange={(e) => setFormData({ ...formData, constructionYear: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Ex: 2024"
                    />
                    {formData.constructionYear && (
                      <p className="text-xs text-gray-600 mt-2 bg-blue-50 p-2 rounded border-l-2 italic" style={{ borderColor: '#818958' }}>
                        💡 {parseInt(formData.constructionYear) >= 2022 
                          ? "Attestation RE2020 nécessaire (construction à partir de 2022)" 
                          : parseInt(formData.constructionYear) >= 2013 
                            ? "Attestation RT 2012 nécessaire (construction de 2013 à 2021)"
                            : "Année de construction trop ancienne pour une attestation RE2020/RT2012"}
                      </p>
                    )}
                  </div>

                  {/* Surface habitable */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Surface habitable (m²) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.surface}
                      onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Ex: 120"
                    />
                  </div>

                  <button
                    onClick={() => setCurrentStep(3)}
                    disabled={!formData.propertyType || !formData.constructionYear || parseInt(formData.constructionYear) < 2013 || !formData.surface}
                    className="w-full text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#818958' }}
                    onMouseEnter={(e) => {
                      if (!formData.propertyType || !formData.constructionYear || parseInt(formData.constructionYear) < 2013 || !formData.surface) return;
                      e.currentTarget.style.backgroundColor = '#6b7148';
                    }}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#818958'}
                  >
                    Continuer
                  </button>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3 Construction Neuve: Localisation */}
            {currentStep === 3 && formData.transactionType === "construction_neuve" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Localisation du bien
                  </h2>
                  <p className="text-gray-600">
                    Où se situe votre construction ?
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Adresse complète */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse du bien *
                    </label>
                    <AddressAutocomplete
                      value={formData.address}
                      onChange={(address) => setFormData({ ...formData, address })}
                      onValidationChange={(isValid) => setIsAddressValidated(isValid)}
                      placeholder="Ex: 12 avenue de l'Océan, 40140 Soustons"
                      required
                      hideWarning
                    />
                  </div>

                  {/* Code postal */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Code postal *
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength={5}
                      value={formData.postalCode}
                      onChange={(e) => {
                        // N'accepter que les chiffres
                        const value = e.target.value;
                        if (value === '' || /^\d+$/.test(value)) {
                          setFormData({ ...formData, postalCode: value });
                          setPostalCodeError("");
                        }
                      }}
                      onKeyPress={(e) => {
                        // Bloquer toute saisie qui n'est pas un chiffre
                        if (!/\d/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: postalCodeError ? '#dc2626' : '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = postalCodeError ? '#dc2626' : '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = postalCodeError ? '#dc2626' : '#e8ebe0'}
                      placeholder="Ex: 40140"
                    />
                    {postalCodeError && (
                      <p className="text-sm text-red-600 mt-2">{postalCodeError}</p>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      // Vérifier que le code postal est valide
                      if (!formData.postalCode || formData.postalCode.length !== 5 || !isValidPostalCode(formData.postalCode)) {
                        setPostalCodeError("Le code postal doit contenir exactement 5 chiffres");
                        return;
                      }
                      setPostalCodeError("");
                      setCurrentStep(4);
                    }}
                    disabled={!formData.address || !isAddressValidated || !formData.postalCode || formData.postalCode.length !== 5}
                    className="w-full text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#818958' }}
                    onMouseEnter={(e) => {
                      if (!formData.address || !isAddressValidated || !formData.postalCode || formData.postalCode.length !== 5) return;
                      e.currentTarget.style.backgroundColor = '#6b7148';
                    }}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#818958'}
                  >
                    Continuer
                  </button>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}

            {/* Étape 4 Construction Neuve: Vos informations */}
            {currentStep === 4 && formData.transactionType === "construction_neuve" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Vos informations
                  </h2>
                  <p className="text-gray-600">
                    Pour finaliser votre demande d'attestation
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  {/* Nom */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Ex: Jean Dupont"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          const email = e.target.value;
                          setFormData({ ...formData, email });
                          setIsEmailValid(isValidEmail(email));
                        }}
                        className="w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none transition-all text-lg"
                        style={{ borderColor: isEmailValid && formData.email ? '#22c55e' : '#e8ebe0' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = isEmailValid && formData.email ? '#22c55e' : '#818958'}
                        onBlur={(e) => e.currentTarget.style.borderColor = isEmailValid && formData.email ? '#22c55e' : '#e8ebe0'}
                        placeholder="Ex: jean.dupont@email.com"
                      />
                      {isEmailValid && formData.email && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500 pointer-events-none" />
                      )}
                    </div>
                    {formData.email && !isEmailValid && (
                      <p className="text-xs text-red-600 mt-1">Format d'email invalide</p>
                    )}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: phoneError ? '#dc2626' : '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = phoneError ? '#dc2626' : '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = phoneError ? '#dc2626' : '#e8ebe0'}
                      placeholder="Ex: 06.12.34.56.78"
                    />
                    {phoneError && (
                      <p className="text-sm text-red-600 mt-2">{phoneError}</p>
                    )}
                  </div>

                  {/* Message optionnel */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message ou informations complémentaires (optionnel)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg resize-none"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Ex: Date prévisionnelle de fin de chantier, informations complémentaires..."
                    />
                  </div>

                  <button
                    onClick={() => {
                      // Vérifier que le téléphone est valide
                      if (!isValidPhoneNumber(formData.phone)) {
                        setPhoneError("Format invalide. Utilisez: 06 12 34 56 78, 06.12.34.56.78 ou 0612345678");
                        return;
                      }
                      
                      // Calculer l'attestation nécessaire
                      const yearNum = parseInt(formData.constructionYear);
                      const newDiags = { ...formData.diagnostics };
                      if (yearNum >= 2022) {
                        newDiags.re2020 = true;
                        newDiags.rt2012 = false;
                      } else if (yearNum >= 2013) {
                        newDiags.re2020 = false;
                        newDiags.rt2012 = true;
                      }
                      setFormData({ ...formData, diagnostics: newDiags, isNewConstruction: "oui" });
                      setCurrentStep(5);
                    }}
                    disabled={!formData.name || !formData.email || !isEmailValid || !formData.phone || !!phoneError}
                    className="w-full text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#818958' }}
                    onMouseEnter={(e) => {
                      if (!formData.name || !formData.email || !isEmailValid || !formData.phone || phoneError) return;
                      e.currentTarget.style.backgroundColor = '#6b7148';
                    }}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#818958'}
                  >
                    Continuer vers le récapitulatif
                  </button>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}

            {/* Étape 3: Date de construction, surface et nombre de pièces */}
            {currentStep === 3 && formData.transactionType !== "construction_neuve" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Caractéristiques du bien
                  </h2>
                  <p className="text-gray-600">
                    Indiquez les informations du bien immobilier
                  </p>
                </div>

                <div className="max-w-md mx-auto space-y-4">

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Année de construction *
                    </label>
                    <div className="space-y-3">
                      <input
                        type="number"
                        min="1800"
                        max={new Date().getFullYear()}
                        value={formData.constructionYear === "ne sais pas" ? "" : formData.constructionYear}
                        onChange={(e) => setFormData({ ...formData, constructionYear: e.target.value })}
                        onClick={() => {
                          // Si "je ne sais pas" est activé, on réinitialise au clic dans le champ
                          if (formData.constructionYear === "ne sais pas") {
                            setFormData({ ...formData, constructionYear: "" });
                          }
                        }}
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg cursor-pointer"
                        style={{ borderColor: '#e8ebe0', backgroundColor: formData.constructionYear === "ne sais pas" ? '#f3f4f6' : 'white' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                        placeholder="Ex: 1985"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ 
                          ...formData, 
                          constructionYear: formData.constructionYear === "ne sais pas" ? "" : "ne sais pas" 
                        })}
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.constructionYear === "ne sais pas"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.constructionYear === "ne sais pas" ? { backgroundColor: '#818958' } : {}}
                      >
                        Je ne sais pas
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Surface habitable (m²) *
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={formData.surface}
                      onChange={(e) => setFormData({ ...formData, surface: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Ex: 85"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nombre de pièces *
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={formData.rooms}
                      onChange={(e) => setFormData({ ...formData, rooms: e.target.value })}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Ex: 4"
                    />
                    <p className="text-xs text-gray-600 mt-2 bg-gray-50 p-2 rounded border-l-2 italic" style={{ borderColor: '#818958' }}>
                      💡 Pièces principales uniquement (chambres, salon, séjour, bureau). Excluez cuisine, salle de bain, WC et couloirs.
                    </p>
                  </div>

                  <button
                    onClick={handleConstructionYearSubmit}
                    disabled={!formData.constructionYear || !formData.surface || !formData.rooms}
                    className="w-full text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#818958' }}
                    onMouseEnter={(e) => (!formData.constructionYear || !formData.surface || !formData.rooms) ? null : e.currentTarget.style.backgroundColor = '#6b7148'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#818958'}
                  >
                    Continuer
                  </button>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}

            {/* Étape 4: Installations + Zone Termites */}
            {currentStep === 4 && formData.transactionType !== "construction_neuve" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Installations + Zone Termites
                  </h2>
                  <p className="text-gray-600">
                    Informations sur les installations du bien
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-6">
                  <div className="bg-white border-2 rounded-lg p-6" style={{ borderColor: '#e8ebe0' }}>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">
                      Installation électrique de plus de 15 ans ?
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => setFormData({ ...formData, electricityAge: "oui" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.electricityAge === "oui"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.electricityAge === "oui" ? { backgroundColor: '#818958' } : {}}
                      >
                        Oui
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, electricityAge: "non" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.electricityAge === "non"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.electricityAge === "non" ? { backgroundColor: '#818958' } : {}}
                      >
                        Non
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, electricityAge: "ne sais pas" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.electricityAge === "ne sais pas"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.electricityAge === "ne sais pas" ? { backgroundColor: '#818958' } : {}}
                      >
                        Je ne sais pas
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border-2 rounded-lg p-6" style={{ borderColor: '#e8ebe0' }}>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">
                      Installation de gaz de plus de 15 ans ?
                    </h3>
                    <div className="grid grid-cols-3 gap-3">
                      <button
                        onClick={() => setFormData({ ...formData, gasInstallation: "oui" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.gasInstallation === "oui"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.gasInstallation === "oui" ? { backgroundColor: '#818958' } : {}}
                      >
                        Oui
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, gasInstallation: "non" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.gasInstallation === "non"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.gasInstallation === "non" ? { backgroundColor: '#818958' } : {}}
                      >
                        Non
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, gasInstallation: "ne sais pas" })}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          formData.gasInstallation === "ne sais pas"
                            ? "text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        style={formData.gasInstallation === "ne sais pas" ? { backgroundColor: '#818958' } : {}}
                      >
                        Je ne sais pas
                      </button>
                    </div>
                  </div>

                  <div className="bg-white border-2 rounded-lg p-6" style={{ borderColor: '#e8ebe0' }}>
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">
                      Code postal du bien
                    </h3>
                    <input
                      type="text"
                      inputMode="numeric"
                      value={formData.postalCode}
                      onChange={(e) => {
                        // N'accepter que les chiffres
                        const value = e.target.value;
                        if (value === '' || /^\d+$/.test(value)) {
                          setFormData({ ...formData, postalCode: value });
                        }
                      }}
                      onKeyPress={(e) => {
                        // Bloquer toute saisie qui n'est pas un chiffre
                        if (!/\d/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all text-lg"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Ex: 40140"
                      maxLength={5}
                    />
                    <p className="text-sm text-gray-600 mt-2">
                      Nécessaire pour déterminer si le bien est en zone à risque termites
                    </p>
                  </div>

                  <button
                    onClick={handleInstallationsSubmit}
                    disabled={!formData.electricityAge || !formData.gasInstallation || !formData.postalCode || formData.postalCode.length !== 5}
                    className="w-full text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#818958' }}
                    onMouseEnter={(e) => (!formData.electricityAge || !formData.gasInstallation || !formData.postalCode || formData.postalCode.length !== 5) ? null : e.currentTarget.style.backgroundColor = '#6b7148'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#818958'}
                  >
                    Continuer
                  </button>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}

            {/* Étape 5: Coordonnées */}
            {currentStep === 5 && formData.transactionType !== "construction_neuve" && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    Vos informations
                  </h2>
                  <p className="text-gray-600">
                    Pour continuer vers le récapitulatif
                  </p>
                </div>

                <form onSubmit={handleCoordonnéesSubmit} className="max-w-2xl mx-auto space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all"
                        style={{ borderColor: '#e8ebe0' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                        onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                        placeholder="Votre nom"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all"
                        style={{ borderColor: phoneError ? '#dc2626' : '#e8ebe0' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = phoneError ? '#dc2626' : '#818958'}
                        onBlur={(e) => e.currentTarget.style.borderColor = phoneError ? '#dc2626' : '#e8ebe0'}
                        placeholder="06.12.34.56.78"
                      />
                      {phoneError && (
                        <p className="text-sm text-red-600 mt-2">{phoneError}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          const email = e.target.value;
                          setFormData({ ...formData, email });
                          setIsEmailValid(isValidEmail(email));
                        }}
                        className="w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none transition-all"
                        style={{ borderColor: isEmailValid && formData.email ? '#22c55e' : '#e8ebe0' }}
                        onFocus={(e) => e.currentTarget.style.borderColor = isEmailValid && formData.email ? '#22c55e' : '#818958'}
                        onBlur={(e) => e.currentTarget.style.borderColor = isEmailValid && formData.email ? '#22c55e' : '#e8ebe0'}
                        placeholder="votre@email.fr"
                      />
                      {isEmailValid && formData.email && (
                        <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-green-500 pointer-events-none" />
                      )}
                    </div>
                    {formData.email && !isEmailValid && (
                      <p className="text-xs text-red-600 mt-1">Format d'email invalide</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adresse du bien *
                    </label>
                    <AddressAutocomplete
                      value={formData.address}
                      onChange={(address) => setFormData({ ...formData, address })}
                      onValidationChange={(isValid) => setIsAddressValidated(isValid)}
                      placeholder="Commencez à taper l'adresse du bien..."
                      required
                      hideWarning
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message complémentaire
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-all resize-none"
                      style={{ borderColor: '#e8ebe0' }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#818958'}
                      onBlur={(e) => e.currentTarget.style.borderColor = '#e8ebe0'}
                      placeholder="Informations complémentaires, délais souhaités..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!isAddressValidated || !isEmailValid}
                    className="w-full text-white px-8 py-3 rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#818958' }}
                    onMouseEnter={(e) => {
                      if (!isAddressValidated || !isEmailValid) return;
                      e.currentTarget.style.backgroundColor = '#6b7148';
                    }}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#818958'}
                  >
                    Continuer vers le récapitulatif
                  </button>
                </form>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(4)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}

            {/* Étape 5 Construction Neuve / ��tape 6 Flux Normal: Récapitulatif */}
            {((currentStep === 5 && formData.transactionType === "construction_neuve") || (currentStep === 6 && formData.transactionType !== "construction_neuve")) && (
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">
                    {formData.transactionType === "construction_neuve" 
                      ? "Récapitulatif de votre demande d'attestation" 
                      : "Récapitulatif des diagnostics"}
                  </h2>
                  <p className="text-gray-600">
                    Vérifiez et modifiez si nécessaire
                  </p>
                </div>

                <div className="max-w-2xl mx-auto space-y-4">
                  {submitted && (
                    <div className="mb-6 p-6 bg-green-50 border-2 border-green-500 rounded-lg text-green-900">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="font-bold text-lg mb-2">✅ Demande envoyée avec succès !</p>
                          <p className="text-sm mb-3">
                            Vos informations ont été transmises. Je vous répondrai dans les plus brefs délais.
                          </p>
                          <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
                            <p className="font-semibold text-blue-900 mb-1">🧪 Mode Test activé</p>
                            <p className="text-blue-800 text-xs">
                              Les données sont affichées dans la console (F12). Pour recevoir les emails par EmailJS, configurez vos clés dans Contact.tsx (lignes 433-435).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700">
                      <p className="font-semibold">Erreur lors de l'envoi</p>
                      <p className="text-sm">
                        Veuillez réessayer plus tard ou me contacter directement.
                      </p>
                    </div>
                  )}

                  {/* Diagnostics concernés par la situation */}
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                    <h3 className="font-semibold text-lg mb-4" style={{ color: '#818958' }}>
                      {formData.transactionType === "construction_neuve" 
                        ? "Attestation nécessaire" 
                        : "Diagnostics concernés par votre situation"}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {formData.transactionType === "construction_neuve"
                        ? "Attestation requise pour votre construction neuve selon l'année de construction."
                        : "Ces diagnostics sont recommandés pour votre projet. Vous pouvez décocher ceux que vous possédez déjà et qui sont encore valides."}
                    </p>
                    <div className="space-y-4">
                      {getAllRelevantDiagnostics().map((key) => {
                        const isChecked = formData.diagnostics[key];
                        const hasDate = formData.diagnosticDates[key];
                        const hasFile = formData.diagnosticFiles[key];

                        return (
                          <div key={key} className={`bg-white rounded-lg p-4 border-2 ${isChecked ? 'border-green-500' : 'border-green-300 bg-green-50'}`}>
                            <label className="flex items-start gap-3 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => handleCheckboxClick(key)}
                                className="w-5 h-5 rounded mt-1"
                                style={{ accentColor: '#818958' }}
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-gray-900 font-medium">{getDiagnosticLabel(key)}</span>
                                  {isChecked && (
                                    <span className="px-2 py-1 text-xs font-semibold rounded" style={{ backgroundColor: '#818958', color: 'white' }}>
                                      À réaliser
                                    </span>
                                  )}
                                  {!isChecked && !hasDate && (
                                    <span className="px-2 py-1 text-xs font-semibold rounded" style={{ backgroundColor: '#818958', color: 'white' }}>
                                      Recommandé
                                    </span>
                                  )}
                                </div>
                                
                                {!isChecked && hasDate && (
                                  <div className="text-sm text-gray-600 bg-green-50 px-3 py-2 rounded border border-green-200">
                                    <div className="flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-600" />
                                      <span className="text-green-700 font-medium">Diagnostic possédé - Valide</span>
                                    </div>
                                    <p className="text-gray-600 mt-1">Date : {new Date(hasDate).toLocaleDateString('fr-FR')}</p>
                                  </div>
                                )}

                                {!isChecked && hasFile && (
                                  <div className="mt-2 space-y-2">
                                    <div className="flex items-center gap-2 text-sm text-blue-700 bg-blue-50 px-3 py-2 rounded border border-blue-200">
                                      <FileText className="h-4 w-4" />
                                      <span>Fichier joint : {hasFile.name}</span>
                                      <button
                                        onClick={(e) => {
                                          e.preventDefault();
                                          const fileUrl = URL.createObjectURL(hasFile);
                                          window.open(fileUrl, '_blank');
                                        }}
                                        className="ml-auto text-blue-600 hover:text-blue-800 flex items-center gap-1"
                                        title="Visualiser le document"
                                      >
                                        <Eye className="h-4 w-4" />
                                      </button>
                                      <button
                                        onClick={() => handleFileUpload(key, null)}
                                        className="text-red-600 hover:text-red-800"
                                        title="Supprimer le fichier"
                                      >
                                        <Trash2 className="h-4 w-4" />
                                      </button>
                                    </div>
                                    
                                    {/* Prévisualisation si c'est une image */}
                                    {hasFile.type.startsWith('image/') && (
                                      <div className="border-2 rounded-lg overflow-hidden" style={{ borderColor: '#e8ebe0' }}>
                                        <img 
                                          src={URL.createObjectURL(hasFile)} 
                                          alt="Prévisualisation du document" 
                                          className="w-full h-auto max-h-48 object-contain bg-gray-50"
                                        />
                                      </div>
                                    )}
                                  </div>
                                )}

                                {!isChecked && hasDate && !hasFile && (
                                  <div className="mt-2">
                                    <label className="block">
                                      <div className="flex items-center gap-2 px-4 py-2 border-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-all"
                                        style={{ borderColor: '#e8ebe0' }}
                                      >
                                        <Upload className="h-4 w-4" style={{ color: '#818958' }} />
                                        <span className="text-sm font-medium" style={{ color: '#818958' }}>
                                          Joindre le diagnostic (optionnel)
                                        </span>
                                        <input
                                          type="file"
                                          accept=".pdf,.jpg,.jpeg,.png"
                                          className="hidden"
                                          onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) handleFileUpload(key, file);
                                          }}
                                        />
                                      </div>
                                    </label>
                                  </div>
                                )}
                              </div>
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Autres diagnostics non concernés - masqué pour construction neuve */}
                  {formData.transactionType !== "construction_neuve" && (
                    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-4 text-gray-700">
                        Autres diagnostics disponibles
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Ces diagnostics ne sont pas nécessaires pour votre situation actuelle, mais vous pouvez les cocher si vous souhaitez les réaliser.
                      </p>
                      <div className="space-y-4">
                        {getAllPossibleDiagnosticsForTransaction()
                          .filter((key) => !isRelevantDiagnostic(key))
                          .map((key) => {
                            const isChecked = formData.diagnostics[key];
                            return (
                              <div key={key} className={`bg-white rounded-lg p-4 border-2 ${isChecked ? 'border-green-500' : 'border-gray-300'} opacity-70`}>
                                <label className="flex items-start gap-3 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleCheckboxClick(key, true)}
                                    className="w-5 h-5 rounded mt-1"
                                    style={{ accentColor: '#818958' }}
                                  />
                                  <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                      <span className="text-gray-700 font-medium">{getDiagnosticLabel(key)}</span>
                                      {isChecked ? (
                                        <span className="px-2 py-1 text-xs font-semibold rounded" style={{ backgroundColor: '#818958', color: 'white' }}>
                                          À réaliser
                                        </span>
                                      ) : (
                                        <span className="px-2 py-1 text-xs font-semibold rounded bg-gray-300 text-gray-600">
                                          Non concerné
                                        </span>
                                      )}
                                    </div>
                                    {!isChecked && (
                                      <div className="flex items-start gap-2 mt-2 text-sm text-gray-600 bg-blue-50 px-3 py-2 rounded border border-blue-200">
                                        <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-blue-900">{getWhyNotRelevant(key)}</span>
                                      </div>
                                    )}
                                  </div>
                                </label>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  )}

                  <div className={`flex items-start gap-3 p-4 rounded-lg ${consentError ? 'bg-red-50 border-2 border-red-300' : 'bg-gray-50'}`}>
                    <input
                      type="checkbox"
                      id="consent-final"
                      checked={consentAccepted}
                      onChange={(e) => {
                        setConsentAccepted(e.target.checked);
                        if (e.target.checked) setConsentError(false);
                      }}
                      className="mt-1 w-5 h-5 rounded"
                      style={{ accentColor: '#818958' }}
                    />
                    <label htmlFor="consent-final" className="text-sm text-gray-600">
                      J'accepte que mes données soient utilisées pour me recontacter concernant ma demande et je confirme l'exactitude des informations fournies *
                    </label>
                  </div>
                  
                  {consentError && (
                    <div className="flex items-center gap-2 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 text-sm font-medium animate-pulse">
                      <AlertTriangle className="h-5 w-5" />
                      <span>Vous devez accepter les conditions pour envoyer votre demande</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <button
                      type="submit"
                      disabled={sending}
                      className="w-full text-white px-8 py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                      style={{ backgroundColor: '#ff6b35' }}
                      onMouseEnter={(e) => sending ? null : e.currentTarget.style.backgroundColor = '#e65a2b'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff6b35'}
                    >
                      {sending ? (
                        <div className="animate-spin h-6 w-6 border-t-2 border-white rounded-full" />
                      ) : (
                        <Send className="h-6 w-6" />
                      )}
                      Envoyer la demande
                    </button>
                  </form>

                  <p className="text-sm text-gray-500 text-center">
                    * Champs obligatoires - Réponse sous 24h
                  </p>
                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setCurrentStep(formData.transactionType === "construction_neuve" ? 4 : 5)}
                    className="text-gray-600 hover:text-gray-900 font-semibold"
                  >
                    ← Retour
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Besoin d'aide ?
            </h2>
            <p className="text-gray-600">
              N'hésitez pas à me contacter directement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                <Phone className="h-8 w-8" style={{ color: '#818958' }} />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-600">07 77 78 26 59</p>
              <p className="text-sm text-gray-500 mt-1">Lun - Ven : 8h00 - 18h00</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                <Mail className="h-8 w-8" style={{ color: '#818958' }} />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">contact.mdiagnostic@gmail.com</p>
              <p className="text-sm text-gray-500 mt-1">Réponse sous 24h</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                <MapPin className="h-8 w-8" style={{ color: '#818958' }} />
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-2">Zone</h3>
              <p className="text-gray-600">Soustons et Landes (40)</p>
              <p className="text-sm text-gray-500 mt-1">Côte atlantique</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}