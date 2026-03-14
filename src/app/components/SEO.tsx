import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export function SEO({
  title = "MDIAGNOSTIC - Diagnostic Immobilier Soustons, Landes (40)",
  description = "Diagnostiqueuse immobilière certifiée à Soustons dans les Landes. DPE, amiante, plomb, électricité, gaz, termites. Intervention rapide sur Hossegor, Capbreton, Dax et toutes les Landes dans un rayon de 100 km.",
  keywords = "diagnostic immobilier, diagnostiqueur, DPE, amiante, plomb, électricité, gaz, termites, ERP, loi carrez, loi boutin, Soustons, Landes, Hossegor, Capbreton, Dax, Bayonne, Anglet, Biarritz, 40, 64, diagnostic vente, diagnostic location, diagnostiqueuse certifiée, Saint-Paul-lès-Dax, Tarnos, Seignosse, Saint-Vincent-de-Tyrosse, Vieux-Boucau-les-Bains, Labenne, Ondres, Tosse, Azur, Messanges, Moliets-et-Maa, Léon, Linxe, Saint-Jean-de-Luz, Hendaye, Tyrosse, Peyrehorade, Biscarrosse, Parentis-en-Born, Mimizan, Saint-Geours-de-Maremne, Lit-et-Mixe, Bidart, Guéthary, Ciboure, Urrugne, Ustaritz, Cambo-les-Bains",
  ogImage = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=630&fit=crop",
  canonical,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`
      ) as HTMLMetaElement;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "MDIAGNOSTIC");
    updateMetaTag("robots", "index, follow");

    // Open Graph meta tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", "website", true);
    updateMetaTag("og:image", ogImage, true);
    if (canonical) {
      updateMetaTag("og:url", canonical, true);
    }

    // Twitter Card meta tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkElement) {
        linkElement = document.createElement("link");
        linkElement.rel = "canonical";
        document.head.appendChild(linkElement);
      }
      linkElement.href = canonical;
    }

    // Structured data (Schema.org)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "MDIAGNOSTIC",
      "description": description,
      "url": canonical || "https://www.mdiagnostic.fr",
      "telephone": "+33777782659",
      "email": "contact.mdiagnostic@gmail.com",
      "legalName": "MDIAGNOSTIC",
      "taxID": "FR22100486927",
      "vatID": "FR22100486927",
      "founder": {
        "@type": "Person",
        "name": "Marine DUFFOURG",
        "jobTitle": "Diagnostiqueuse immobilière certifiée"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Soustons",
        "addressRegion": "Landes",
        "postalCode": "40140",
        "addressCountry": "FR"
      },
      "areaServed": [
        // Landes (40) - Dans un rayon de 100 km
        {
          "@type": "City",
          "name": "Soustons"
        },
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
          "name": "Saint-Paul-lès-Dax"
        },
        {
          "@type": "City",
          "name": "Tarnos"
        },
        {
          "@type": "City",
          "name": "Seignosse"
        },
        {
          "@type": "City",
          "name": "Saint-Vincent-de-Tyrosse"
        },
        {
          "@type": "City",
          "name": "Vieux-Boucau-les-Bains"
        },
        {
          "@type": "City",
          "name": "Labenne"
        },
        {
          "@type": "City",
          "name": "Ondres"
        },
        {
          "@type": "City",
          "name": "Tosse"
        },
        {
          "@type": "City",
          "name": "Azur"
        },
        {
          "@type": "City",
          "name": "Messanges"
        },
        {
          "@type": "City",
          "name": "Moliets-et-Maa"
        },
        {
          "@type": "City",
          "name": "Léon"
        },
        {
          "@type": "City",
          "name": "Linxe"
        },
        {
          "@type": "City",
          "name": "Peyrehorade"
        },
        {
          "@type": "City",
          "name": "Biscarrosse"
        },
        {
          "@type": "City",
          "name": "Parentis-en-Born"
        },
        {
          "@type": "City",
          "name": "Mimizan"
        },
        {
          "@type": "City",
          "name": "Saint-Geours-de-Maremne"
        },
        {
          "@type": "City",
          "name": "Lit-et-Mixe"
        },
        // Pyrénées-Atlantiques (64) - Dans un rayon de 100 km
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
          "@type": "City",
          "name": "Saint-Jean-de-Luz"
        },
        {
          "@type": "City",
          "name": "Hendaye"
        },
        {
          "@type": "City",
          "name": "Bidart"
        },
        {
          "@type": "City",
          "name": "Guéthary"
        },
        {
          "@type": "City",
          "name": "Ciboure"
        },
        {
          "@type": "City",
          "name": "Urrugne"
        },
        {
          "@type": "City",
          "name": "Ustaritz"
        },
        {
          "@type": "City",
          "name": "Cambo-les-Bains"
        }
      ],
      "priceRange": "€€",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "43.7516",
        "longitude": "-1.3303"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de diagnostic immobilier",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic de Performance Énergétique (DPE)"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic Amiante"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic Plomb"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic Électricité"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic Gaz"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Diagnostic Termites"
            }
          }
        ]
      }
    };

    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement("script");
      scriptElement.setAttribute("type", "application/ld+json");
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);
  }, [title, description, keywords, ogImage, canonical]);

  return null;
}