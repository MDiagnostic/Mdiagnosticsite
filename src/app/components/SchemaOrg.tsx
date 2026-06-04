import { useLocation } from "react-router";

export function SchemaOrg() {
  const location = useLocation();
  const baseUrl = "https://www.mdiagnostic.fr";

  // Schema LocalBusiness - Informations entreprise
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#organization`,
    "name": "MDIAGNOSTIC",
    "image": [
      "https://i.ibb.co/QjrVGYHz/logo.png",
      "https://i.imgur.com/zwQXabR.jpg",
      "https://i.imgur.com/hCbEGkq.jpeg"
    ],
    "url": baseUrl,
    "telephone": "+33777782659",
    "email": "contact.mdiagnostic@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Soustons",
      "addressLocality": "Soustons",
      "postalCode": "40140",
      "addressRegion": "Nouvelle-Aquitaine",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.7514,
      "longitude": -1.3308
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Hossegor"
      },
      {
        "@type": "City",
        "name": "Capbreton"
      },
      {
        "@type": "City",
        "name": "Dax"
      },
      {
        "@type": "City",
        "name": "Soustons"
      },
      {
        "@type": "City",
        "name": "Bayonne"
      },
      {
        "@type": "City",
        "name": "Anglet"
      },
      {
        "@type": "City",
        "name": "Biarritz"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Landes"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": "Espèces, Carte bancaire, Virement",
    "currenciesAccepted": "EUR",
    "description": "MDIAGNOSTIC, diagnostiqueuse immobilière certifiée LCP basée à Soustons, réalise tous vos diagnostics immobiliers obligatoires dans les Landes (40) et le Pays Basque (64). DPE, amiante, plomb, électricité, gaz, termites, ERP, mesurage Loi Carrez et Loi Boutin.",
    "foundingDate": "2024",
    "knowsAbout": [
      "Diagnostic de Performance Énergétique (DPE)",
      "Diagnostic Amiante",
      "Diagnostic Plomb (CREP)",
      "Diagnostic Électricité",
      "Diagnostic Gaz",
      "Diagnostic Termites",
      "État des Risques et Pollutions (ERP)",
      "Mesurage Loi Carrez",
      "Mesurage Loi Boutin"
    ],
    "slogan": "Votre diagnostiqueur immobilier certifié dans les Landes et le Pays Basque",
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Certification professionnelle",
        "recognizedBy": {
          "@type": "Organization",
          "name": "LCP"
        },
        "name": "Certification LCP n°3340"
      }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "SIRET",
        "value": "100 486 927 00013"
      },
      {
        "@type": "PropertyValue",
        "name": "RCP Allianz",
        "value": "64715683"
      }
    ],
    "mediator": {
      "@type": "Organization",
      "name": "CM2C",
      "url": "https://www.cm2c.net",
      "telephone": "+33189470014",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "49 Rue Ponthieu",
        "addressLocality": "Paris",
        "postalCode": "75008",
        "addressCountry": "FR"
      }
    }
  };

  // Schema Service - Services proposés
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Diagnostic Immobilier",
    "provider": {
      "@id": `${baseUrl}/#organization`
    },
    "areaServed": {
      "@type": "State",
      "name": "Landes et Pyrénées-Atlantiques"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Diagnostics Immobiliers",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnostic de Performance Énergétique (DPE)",
            "description": "Évaluation de la consommation énergétique et des émissions de gaz à effet de serre du logement. Obligatoire pour toute vente ou location.",
            "url": `${baseUrl}/vente#dpe`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnostic Amiante",
            "description": "Repérage des matériaux contenant de l'amiante. Obligatoire pour les biens dont le permis de construire a été déposé avant le 1er juillet 1997.",
            "url": `${baseUrl}/vente#amiante`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnostic Plomb (CREP)",
            "description": "Constat de Risque d'Exposition au Plomb. Obligatoire pour les logements construits avant le 1er janvier 1949.",
            "url": `${baseUrl}/vente#plomb`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnostic Électricité",
            "description": "Vérification de la sécurité des installations électriques de plus de 15 ans.",
            "url": `${baseUrl}/vente#electricite`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnostic Gaz",
            "description": "Contrôle de la sécurité des installations de gaz de ville ou propane de plus de 15 ans.",
            "url": `${baseUrl}/vente#gaz`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diagnostic Termites",
            "description": "Recherche de présence de termites. Obligatoire dans les zones déclarées à risque (toutes les Landes).",
            "url": `${baseUrl}/vente#termites`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "État des Risques et Pollutions (ERP)",
            "description": "Information sur les risques naturels, miniers, technologiques et la pollution des sols.",
            "url": `${baseUrl}/vente#erp`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mesurage Loi Carrez",
            "description": "Calcul de la surface privative d'un bien en copropriété pour la vente.",
            "url": `${baseUrl}/vente#carrez`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mesurage Loi Boutin",
            "description": "Calcul de la surface habitable d'un logement pour la location.",
            "url": `${baseUrl}/location#boutin`
          }
        }
      ]
    }
  };

  // Schema BreadcrumbList - Fil d'Ariane
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": baseUrl
      }
    ]
  };

  // Ajouter le niveau 2 du breadcrumb selon la page
  if (location.pathname !== "/") {
    const pathSegments = location.pathname.split("/").filter(Boolean);
    pathSegments.forEach((segment, index) => {
      breadcrumbSchema.itemListElement.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " "),
        "item": `${baseUrl}/${pathSegments.slice(0, index + 1).join("/")}`
      });
    });
  }

  // Schema FAQPage - Questions fréquentes (si on est sur une page avec FAQ)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Le DPE est-il obligatoire ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, le DPE (Diagnostic de Performance Énergétique) est obligatoire pour toute vente ou mise en location d'un bien immobilier en France. Il doit être annexé au compromis de vente ou au bail de location."
        }
      },
      {
        "@type": "Question",
        "name": "Quelle est la durée de validité d'un diagnostic amiante ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si le diagnostic amiante est négatif (absence d'amiante), il a une durée de validité illimitée. Si de l'amiante est détecté, le diagnostic doit être renouvelé tous les 3 ans."
        }
      },
      {
        "@type": "Question",
        "name": "Quand faut-il faire un diagnostic plomb (CREP) ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Le diagnostic plomb est obligatoire pour tous les logements construits avant le 1er janvier 1949, que ce soit pour une vente ou une location. Il vise à repérer les revêtements contenant du plomb (peintures anciennes)."
        }
      },
      {
        "@type": "Question",
        "name": "Le diagnostic termites est-il obligatoire dans les Landes ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, toutes les communes des Landes (40) sont classées en zone à risque termites. Le diagnostic termites est donc obligatoire pour toute vente immobilière dans le département. Il est valable 6 mois."
        }
      },
      {
        "@type": "Question",
        "name": "Qui paie les diagnostics immobiliers lors d'une vente ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "C'est le vendeur qui doit faire réaliser et payer les diagnostics immobiliers obligatoires. Ils doivent être remis à l'acquéreur avant la signature du compromis de vente."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le délai pour recevoir les rapports de diagnostic ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Les rapports de diagnostic sont remis sous 24 à 48 heures après l'intervention de MDIAGNOSTIC. Ils sont transmis par email au format PDF."
        }
      },
      {
        "@type": "Question",
        "name": "Que faire en cas de litige avec un diagnostic immobilier ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "En cas de litige, vous pouvez faire appel au médiateur de la consommation CM2C (Centre de Médiation de la Consommation de Conciliateurs). Contact : 49 Rue Ponthieu, 75008 Paris, tél. 01 89 47 00 14, www.cm2c.net. Conformément à l'article L612-1 du Code de la consommation, MDIAGNOSTIC garantit un recours gratuit au médiateur de la consommation."
        }
      }
    ]
  };

  return (
    <>
      {/* Schema LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Schema Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      {/* Schema Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Schema FAQ - uniquement sur la page d'accueil */}
      {location.pathname === "/" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
