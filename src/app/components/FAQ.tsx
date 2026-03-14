import { useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items?: FAQItem[];
  title?: string;
}

const defaultFAQItems: FAQItem[] = [
  {
    question: "À quoi servent les diagnostics immobiliers ?",
    answer: "Les diagnostics immobiliers servent à informer l'acquéreur ou le locataire sur l'état réel du bien : performance énergétique (DPE), présence de matériaux dangereux (amiante, plomb), état des installations (électricité, gaz), risques environnementaux (termites, ERP). Ils protègent les deux parties et sont obligatoires pour toute transaction immobilière.",
  },
  {
    question: "Quels diagnostics sont obligatoires pour vendre un bien dans les Landes ?",
    answer: "Pour vendre un bien dans les Landes, vous devez fournir : le DPE, le diagnostic amiante (si construit avant 1997), le diagnostic plomb (si construit avant 1949), le diagnostic termites, l'État des Risques et Pollutions (ERP), les diagnostics électricité et gaz (si installations de plus de 15 ans), et le mesurage loi Carrez (pour les copropriétés).",
  },
  {
    question: "Quels diagnostics sont obligatoires pour louer un bien ?",
    answer: "Pour la location, vous devez fournir : le DPE, le diagnostic plomb (si construit avant 1949), l'ERP, et les diagnostics électricité et gaz (si installations de plus de 15 ans). Attention : les logements classés G+ ne peuvent plus être loués depuis 2023.",
  },
  {
    question: "Quelle est la durée de validité des diagnostics ?",
    answer: "DPE : 10 ans. Amiante : illimité si absence. Plomb : illimité si absence, sinon 1 an (vente) ou 6 ans (location). Électricit et gaz : 3 ans (vente) ou 6 ans (location). Termites : 6 mois. ERP : 6 mois.",
  },
  {
    question: "Combien de temps dure l'intervention sur place ?",
    answer: "Pour un appartement de 50-70m² : environ 1h à 1h30. Pour une maison de 100-150m² : 2h à 3h. La durée dépend de la surface et du nombre de diagnostics à réaliser.",
  },
  {
    question: "Dois-je être présent pendant le diagnostic ?",
    answer: "Votre présence n'est pas obligatoire, mais recommandée au début pour donner accès à toutes les pièces (combles, cave, garage, compteurs). Vous pouvez ensuite vous absenter. L'intervention peut aussi se faire avec un tiers de confiance.",
  },
  {
    question: "Sur quels secteurs intervenez-vous ?",
    answer: "MDIAGNOSTIC intervient dans toutes les Landes (40) : Soustons, Hossegor, Capbreton, Dax, Biscarrosse, Mimizan, et de nombreuses autres communes. Intervention rapide, généralement sous 48h.",
  },
  {
    question: "Comment se passe la remise du rapport ?",
    answer: "Le rapport vous est envoyé par email au format PDF sécurisé dans les 24 à 48h après l'intervention. Il peut être transmis directement à votre notaire ou agent immobilier. Une version papier est disponible sur demande.",
  },
  {
    question: "Les Landes sont-elles une zone à risque termites ?",
    answer: "Oui, les Landes sont classées en zone à risque termites. Le diagnostic termites est obligatoire pour toute vente dans de nombreuses communes dont Soustons, Dax, Hossegor et Capbreton. Il est valable 6 mois.",
  },
];

export function FAQ({ items = defaultFAQItems, title = "Questions Fréquentes" }: FAQProps) {
  // Generate Schema.org FAQPage
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": items.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    };

    // Remove existing FAQ schema if any
    const existingSchema = document.querySelector('script[data-schema="faq"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Add new schema
    const scriptElement = document.createElement("script");
    scriptElement.setAttribute("type", "application/ld+json");
    scriptElement.setAttribute("data-schema", "faq");
    scriptElement.textContent = JSON.stringify(structuredData);
    document.head.appendChild(scriptElement);

    // Cleanup on unmount
    return () => {
      const schema = document.querySelector('script[data-schema="faq"]');
      if (schema) {
        schema.remove();
      }
    };
  }, [items]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600">
            Tout ce que vous devez savoir sur les diagnostics immobiliers dans les Landes
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg border border-gray-200 px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-white border-2 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            style={{ borderColor: '#818958', color: '#818958' }}
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}