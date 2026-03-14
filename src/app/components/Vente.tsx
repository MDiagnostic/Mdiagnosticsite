import {
  Home,
  Zap,
  Flame,
  Bug,
  Droplet,
  FileText,
  AlertTriangle,
  Ruler,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { SEO } from "./SEO";
import { DiagnosticModal } from "./DiagnosticModal";
import { Link } from "react-router";

export function Vente() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  // Scroll automatique vers l'ancre au chargement
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Petit délai pour s'assurer que le DOM est chargé
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      id: "dpe",
      icon: Home,
      title: "Diagnostic de Performance Énergétique (DPE)",
      description:
        "Évaluation de la consommation énergétique et des émissions de gaz à effet de serre de votre bien. Obligatoire pour toute vente.",
      validity: "10 ans",
      mandatory: "Vente",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le DPE ?</h4>
          <p className="mb-4">
            Le <strong>Diagnostic de Performance Énergétique (DPE)</strong> est un document obligatoire qui évalue la consommation d'énergie et l'impact en termes d'émissions de gaz à effet de serre d'un logement ou d'un bâtiment. Il attribue une note de A (très performant) à G (très énergivore) selon deux critères : la consommation énergétique annuelle et les émissions de CO2.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le DPE pour la vente ?</h4>
          <p className="mb-4">
            Le DPE informe l'acheteur sur la performance énergétique du bien avant l'achat. Il permet d'estimer les futures dépenses énergétiques et d'identifier les travaux d'amélioration à réaliser. Depuis 2021, le DPE est devenu opposable : les informations qu'il contient engagent la responsabilité du vendeur. L'acquéreur peut se retourner contre le vendeur en cas d'erreur manifeste.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Quand doit-il être réalisé ?</h4>
          <p className="mb-4">
            Le DPE doit être <strong>annexé à la promesse de vente</strong> et à l'acte authentique de vente. Il est recommandé de le faire réaliser dès la mise en vente du bien immobilier dans les Landes pour informer les potentiels acquéreurs. Sa validité est de <strong>10 ans</strong>, sauf si des travaux de rénovation énergétique modifient significativement la performance du bien.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Impact sur la vente</h4>
          <p className="mb-3">
            Le DPE influence fortement la décision d'achat et le prix de vente. Les biens bien classés (A, B, C, D) se vendent plus rapidement et à meilleur prix. À l'inverse, les passoires thermiques (F et G) peuvent être difficiles à vendre et nécessitent souvent une décote importante.
          </p>
          <p>
            Le <strong>DPE vente Landes</strong> doit être réalisé par un diagnostiqueur certifié, équipé de logiciels et matériels conformes à la réglementation en vigueur.
          </p>
        </>
      ),
    },
    {
      id: "amiante",
      icon: AlertTriangle,
      title: "Diagnostic Amiante",
      description:
        "Recherche de matériaux et produits contenant de l'amiante dans les biens construits avant le 1er juillet 1997.",
      validity: "Illimitée si négatif, 3 ans si positif",
      mandatory: "Vente",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic amiante ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic amiante</strong> consiste à rechercher la présence d'amiante dans les matériaux et produits de construction d'un bien immobilier. L'amiante est une fibre minérale naturelle utilisée massivement dans la construction jusqu'en 1997 pour ses propriétés isolantes et sa résistance au feu. Cependant, l'inhalation de fibres d'amiante peut provoquer de graves maladies respiratoires, dont des cancers (mésothéliome, cancer broncho-pulmonaire).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Biens concernés et matériaux recherchés</h4>
          <p className="mb-4">
            Le diagnostic est <strong>obligatoire pour tous les biens construits avant le 1er juillet 1997</strong>, date de l'interdiction totale de l'amiante en France. L'amiante peut se trouver dans de nombreux matériaux : dalles de sol, toitures en fibrociment (plaques ondulées), faux plafonds, conduits, enduits, colles, joints, canalisations, bardages extérieurs.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Méthode de diagnostic</h4>
          <p className="mb-4">
            Le diagnostiqueur réalise un repérage visuel complet de tous les matériaux susceptibles de contenir de l'amiante selon les listes A et B réglementaires. En cas de doute, des prélèvements sont effectués et envoyés en laboratoire accrédité COFRAC pour analyse. Le rapport indique la localisation précise des matériaux amiantés, leur état de conservation et les recommandations (surveillance, travaux).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité et conséquences</h4>
          <p className="mb-3">
            La validité du diagnostic amiante dépend du résultat :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Absence d'amiante</strong> : validité illimitée, pas besoin de renouveler le diagnostic</li>
            <li><strong>Présence d'amiante en bon état</strong> : contrôle périodique obligatoire tous les 3 ans</li>
            <li><strong>Présence d'amiante dégradé</strong> : travaux de retrait ou confinement obligatoires</li>
          </ul>
          <p>
            Le <strong>diagnostic amiante vente Landes</strong> protège la santé des futurs occupants et engage la responsabilité du vendeur en cas d'omission.
          </p>
        </>
      ),
    },
    {
      id: "plomb",
      icon: Droplet,
      title: "Constat de Risque d'Exposition au Plomb (CREP)",
      description:
        "Détection de la présence de plomb dans les peintures des logements construits avant le 1er janvier 1949.",
      validity: "Illimitée si négatif, 1 an si positif",
      mandatory: "Vente",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic plomb (CREP) ?</h4>
          <p className="mb-4">
            Le <strong>Constat de Risque d'Exposition au Plomb (CREP)</strong> consiste à mesurer la concentration en plomb dans les revêtements (peintures, enduits) d'un logement. Le plomb était largement utilisé dans les peintures anciennes pour ses propriétés couvrantes et antirouille. Son ingestion ou inhalation peut provoquer le saturnisme, une intoxication particulièrement dangereuse pour les jeunes enfants et les femmes enceintes.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Logements concernés</h4>
          <p className="mb-4">
            Le CREP est <strong>obligatoire pour tous les logements construits avant le 1er janvier 1949</strong>. Cette date correspond à la période où le plomb était massivement utilisé dans les peintures. De nombreuses maisons anciennes dans les Landes, notamment dans les centres-villes de Dax, Soustons et autres communes historiques, sont concernées par cette obligation.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Méthode de mesure</h4>
          <p className="mb-4">
            Le diagnostiqueur utilise un appareil à fluorescence X pour mesurer la concentration en plomb de tous les revêtements du logement : peintures intérieures et extérieures, enduits, volets. Chaque élément peint est analysé pièce par pièce. Si la concentration dépasse 1 mg/cm², le plomb est considéré comme présent et le rapport indique précisément les zones concernées et leur état de dégradation.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité et obligations du vendeur</h4>
          <p className="mb-3">
            La validité du CREP vente dépend du résultat :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Absence de plomb</strong> : validité illimitée, pas de renouvellement nécessaire</li>
            <li><strong>Présence de plomb</strong> : validité de 1 an seulement pour la vente</li>
          </ul>
          <p className="mb-4">
            En cas de présence de plomb dégradé (écailles, poussières), le vendeur doit informer l'acquéreur et peut être tenu de réaliser des travaux de mise en sécurité. Le CREP doit être annexé à la promesse de vente et à l'acte authentique.
          </p>
          <p>
            Le <strong>diagnostic plomb vente Landes (40)</strong> protège juridiquement le vendeur et garantit la sécurité sanitaire de l'acquéreur.
          </p>
        </>
      ),
    },
    {
      id: "electricite",
      icon: Zap,
      title: "Diagnostic Électricité",
      description:
        "Contrôle de la conformité et de la sécurité de l'installation électrique intérieure pour les installations de plus de 15 ans.",
      validity: "3 ans",
      mandatory: "Vente",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic électricité ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic électricité</strong> est un contrôle de conformité et de sécurité de l'installation électrique intérieure d'un logement. Il vérifie que l'installation ne présente pas de danger immédiat pour les occupants (risques d'électrocution, d'électrisation ou d'incendie d'origine électrique). Ce diagnostic évalue plus de 100 points de contrôle selon la norme NF C 16-600.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Installations concernées</h4>
          <p className="mb-4">
            Le diagnostic est <strong>obligatoire pour toute installation électrique de plus de 15 ans</strong> lors d'une vente. De nombreuses maisons et appartements dans les Landes disposent d'installations anciennes nécessitant ce contrôle de sécurité. L'âge de l'installation se calcule à partir de la date de réalisation ou de mise en conformité totale.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Points de contrôle</h4>
          <p className="mb-3">
            Le diagnostiqueur vérifie notamment :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>L'appareil général de commande et de protection (disjoncteur)</li>
            <li>La présence et le bon fonctionnement de dispositifs différentiels</li>
            <li>La prise de terre et la liaison équipotentielle</li>
            <li>L'état du tableau électrique et des circuits</li>
            <li>L'état des prises, interrupteurs et points d'éclairage</li>
            <li>L'absence de matériels vétustes ou inadaptés à l'usage</li>
            <li>L'absence de fils dénudés ou de connexions dangereuses</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Rapport et conséquences</h4>
          <p className="mb-4">
            Le rapport liste les anomalies détectées classées par niveau de gravité. Bien que le vendeur ne soit pas obligé de réaliser les travaux avant la vente, leur mention permet à l'acquéreur d'être informé de l'état réel de l'installation et de prévoir le budget nécessaire à la mise en conformité. La validité du diagnostic est de <strong>3 ans</strong> pour la vente.
          </p>
          <p>
            Le <strong>diagnostic électricité vente Landes</strong> est un gage de transparence et de sécurité pour la transaction immobilière.
          </p>
        </>
      ),
    },
    {
      id: "gaz",
      icon: Flame,
      title: "Diagnostic Gaz",
      description:
        "Vérification de la sécurité de l'installation intérieure de gaz pour les installations de plus de 15 ans.",
      validity: "3 ans",
      mandatory: "Vente",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic gaz ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic gaz</strong> est un contrôle de sécurité de l'installation intérieure de gaz d'un logement (gaz naturel ou propane). Il prévient les risques d'explosion, d'incendie et d'intoxication au monoxyde de carbone. Ce diagnostic est essentiel pour garantir la sécurité des futurs occupants du bien immobilier.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Installations concernées</h4>
          <p className="mb-4">
            Le diagnostic gaz est <strong>obligatoire pour toute installation de gaz de plus de 15 ans</strong> lors de la vente d'un logement. Sont concernés les logements alimentés en gaz de ville (gaz naturel) ou équipés d'une citerne de gaz propane ou butane. L'âge de l'installation se calcule depuis sa mise en service initiale ou sa dernière mise en conformité totale.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Éléments contrôlés</h4>
          <p className="mb-3">
            Le diagnostiqueur certifié vérifie :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>La tuyauterie fixe et ses raccordements</li>
            <li>Le robinet de commande individuel de chaque appareil</li>
            <li>L'étanchéité de l'ensemble de l'installation</li>
            <li>Le système de ventilation et d'aération des locaux</li>
            <li>La combustion des appareils à gaz</li>
            <li>L'évacuation des produits de combustion</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Dangers immédiats et validité</h4>
          <p className="mb-4">
            Si un danger immédiat (DGI) est identifié, le diagnostiqueur peut procéder à la fermeture de tout ou partie de l'installation pour garantir la sécurité. Le rapport classe les anomalies par niveau de gravité et précise les travaux à réaliser. La validité du diagnostic gaz est de <strong>3 ans</strong> pour une vente.
          </p>
          <p>
            Le <strong>diagnostic gaz vente Landes (40)</strong> est obligatoire pour sécuriser la transaction et protéger les futurs occupants.
          </p>
        </>
      ),
    },
    {
      id: "termites",
      icon: Bug,
      title: "État Parasitaire (Termites)",
      description:
        "Recherche de la présence de termites et autres insectes xylophages dans les zones déclarées à risque.",
      validity: "6 mois",
      mandatory: "Vente (zones à risque)",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic termites ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic termites</strong> (ou état parasitaire) recherche la présence de termites et autres insectes xylophages (capricornes, vrillettes, lyctus) dans un bien immobilier. Les termites sont des insectes sociaux qui se nourrissent de bois et de cellulose. Ils peuvent causer des dégâts structurels importants, parfois invisibles de l'extérieur, mettant en péril la solidité du bâtiment.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Zones concernées dans les Landes</h4>
          <p className="mb-4">
            Le diagnostic termites est <strong>obligatoire dans les zones déclarées à risque par arrêté préfectoral</strong>. Les Landes, avec leur climat océanique doux et humide et la présence massive de bois (forêt de pins maritime), sont particulièrement exposées aux termites. De nombreuses communes landaises sont classées en zone à risque, notamment sur la côte (Hossegor, Capbreton, Soustons) et dans l'intérieur du département (Dax, Saint-Paul-lès-Dax).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Méthode de diagnostic</h4>
          <p className="mb-4">
            Le diagnostiqueur recherche les indices de présence de termites : cordonnets (galeries en terre), galeries dans le bois, bois dégradés ou affaiblis, traces d'essaimage (ailes abandonnées). Il inspecte toutes les parties visibles et accessibles du bien : charpente, planchers, plinthes, boiseries, menuiseries, meubles fixes, ainsi que les arbres et souches dans un rayon de 10 mètres. Le sondage du bois permet de détecter les galeries internes.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité et obligations</h4>
          <p className="mb-4">
            La validité du diagnostic termites n'est que de <strong>6 mois</strong> en raison de la rapidité de progression des colonies. En cas de présence de termites, le propriétaire doit effectuer une déclaration en mairie dans le mois suivant la découverte. L'acquéreur, informé de la présence ou non de termites, peut anticiper les éventuels traitements préventifs ou curatifs à mettre en œuvre.
          </p>
          <p>
            Le <strong>diagnostic termites Landes (40)</strong> protège votre patrimoine immobilier et évite les litiges après la vente.
          </p>
        </>
      ),
    },
    {
      id: "erp",
      icon: FileText,
      title: "État des Risques et Pollutions (ERP)",
      description:
        "Information sur les risques naturels, miniers, technologiques, sismiques et radon auxquels le bien est exposé.",
      validity: "6 mois",
      mandatory: "Vente",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que l'ERP ?</h4>
          <p className="mb-4">
            L'<strong>État des Risques et Pollutions (ERP)</strong>, anciennement ERNMT ou ESRIS, est un document d'information obligatoire qui informe l'acquéreur sur les risques auxquels le bien immobilier est exposé. Il recense les risques naturels (inondations, tempêtes, feux de forêt, érosion côtière), miniers, technologiques, sismiques, radon et la pollution des sols (sites BASIAS/BASOL).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Risques spécifiques des Landes (40)</h4>
          <p className="mb-3">
            Dans les Landes, plusieurs risques naturels et technologiques sont particulièrement présents :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Feux de forêt</strong> : massif forestier des Landes de Gascogne (plus grande forêt artificielle d'Europe)</li>
            <li><strong>Tempêtes et vents violents</strong> : exposition de la côte atlantique</li>
            <li><strong>Érosion côtière</strong> : recul du trait de côte sur le littoral (Hossegor, Capbreton, Soustons)</li>
            <li><strong>Inondations</strong> : débordement de cours d'eau ou submersion marine</li>
            <li><strong>Risque sismique</strong> : zone de sismicité faible à modérée (zone 2 ou 3)</li>
            <li><strong>Radon</strong> : présence potentielle de ce gaz radioactif naturel dans certaines zones</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Comment est établi l'ERP ?</h4>
          <p className="mb-4">
            L'ERP est réalisé à partir des arrêtés préfectoraux, des Plans de Prévention des Risques (PPR) et des documents d'information communaux disponibles sur le site Géorisques. Le diagnostiqueur complète le formulaire réglementaire Cerfa en indiquant précisément les risques auxquels le bien est exposé selon sa localisation géographique exacte.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité et annexion</h4>
          <p className="mb-4">
            L'ERP a une validité de <strong>6 mois</strong> et doit donc être à jour au moment de la signature de la promesse de vente et de l'acte authentique. Il doit obligatoirement être annexé au compromis de vente et à l'acte de vente. L'acquéreur a ainsi un droit à l'information complet sur les risques.
          </p>
          <p>
            L'<strong>ERP vente Landes</strong> est un document obligatoire pour toute transaction immobilière dans le département.
          </p>
        </>
      ),
    },
    {
      id: "loi-carrez",
      icon: Ruler,
      title: "Loi Carrez",
      description:
        "Mesurage de la surface privative d'un lot de copropriété. Obligatoire pour la vente de tout lot de copropriété d'une surface supérieure à 8 m².",
      validity: "Illimitée (sauf travaux modifiant la superficie)",
      mandatory: "Vente en copropriété",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que la loi Carrez ?</h4>
          <p className="mb-4">
            Le <strong>mesurage loi Carrez</strong> est obligatoire pour la vente de tout lot de copropriété (appartement, maison en lotissement, local commercial) d'une superficie supérieure à 8 m². Cette loi, en vigueur depuis 1996, protège l'acquéreur en garantissant la surface exacte du bien immobilier vendu. La superficie doit être mentionnée dans la promesse de vente et dans l'acte authentique.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Biens concernés</h4>
          <p className="mb-4">
            Sont concernés par la loi Carrez tous les <strong>lots de copropriété horizontale ou verticale</strong> : appartements dans des immeubles, maisons individuelles en lotissement, locaux commerciaux en copropriété. Les maisons individuelles non en lotissement ne sont pas soumises à la loi Carrez (mais peuvent être soumises à la loi Boutin pour la location).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Méthode de calcul</h4>
          <p className="mb-3">
            La <strong>surface privative loi Carrez</strong> correspond à la superficie des planchers des locaux clos et couverts après déduction :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Des surfaces occupées par les murs, cloisons, marches et cages d'escalier</li>
            <li>Des gaines, embrasures de portes et fenêtres</li>
            <li>Des parties dont la hauteur sous plafond est inférieure à 1,80 m</li>
          </ul>
          <p className="mb-4">
            Les caves, garages, emplacements de stationnement, terrasses, balcons et lots de moins de 8 m² ne sont pas comptabilisés dans la surface Carrez, mais peuvent être mentionnés séparément comme surfaces annexes.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Conséquences en cas d'erreur</h4>
          <p className="mb-4">
            Si la superficie réelle est <strong>inférieure de plus de 5% à celle mentionnée dans l'acte de vente</strong>, l'acquéreur peut exiger une diminution du prix proportionnelle à la différence de surface, dans un délai de 1 an après la signature de l'acte authentique. Un mesurage précis évite donc tout litige et sécurise juridiquement la transaction.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité</h4>
          <p className="mb-4">
            Le mesurage loi Carrez a une <strong>validité illimitée</strong> tant qu'aucun travaux modifiant la superficie du bien n'est réalisé. En cas de réaménagement, agrandissement ou division du lot, un nouveau mesurage doit être effectué.
          </p>
          <p>
            Le <strong>mesurage loi Carrez Landes</strong> doit être réalisé par un professionnel pour garantir sa précision et éviter tout litige.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Diagnostics Obligatoires Vente Immobilière Landes 40 | MDIAGNOSTIC Soustons"
        description="Tous les diagnostics immobiliers obligatoires pour vendre votre bien dans les Landes : DPE, amiante, plomb, électricité, gaz, termites, ERP, loi Carrez. Diagnostiqueuse certifiée à Soustons intervenant sur Hossegor, Capbreton, Dax. Devis gratuit."
        keywords="diagnostic vente Landes, DPE vente Soustons, diagnostic amiante vente Hossegor, diagnostic plomb vente Capbreton, diagnostic électricité vente Dax, diagnostic gaz Landes, termites vente 40, ERP vente, loi Carrez Landes, DDT Landes, dossier diagnostic technique"
        canonical="https://www.mdiagnostic.fr/vente"
      />
      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Diagnostics Obligatoires pour la Vente
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Tous les diagnostics immobiliers obligatoires pour la vente de votre bien sur Soustons et les Landes
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col scroll-mt-20"
                onClick={() => setSelectedService(index)}
              >
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-200">
                        <service.icon className="h-6 w-6" style={{ color: '#818958' }} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2 text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2 text-sm mb-4">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700">
                        Validité :
                      </span>
                      <span className="text-gray-600">
                        {service.validity}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-gray-700">
                        Obligatoire :
                      </span>
                      <span className="text-gray-600">
                        {service.mandatory}
                      </span>
                    </div>
                  </div>
                  
                  <button
                    className="mt-auto inline-flex items-center justify-center font-semibold hover:opacity-80 transition-opacity w-full py-2 rounded-lg"
                    style={{ color: '#818958', backgroundColor: '#f9faf7' }}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService !== null && (
        <DiagnosticModal
          isOpen={selectedService !== null}
          onClose={() => setSelectedService(null)}
          title={services[selectedService].title}
          icon={services[selectedService].icon}
          content={services[selectedService].detailedContent}
        />
      )}

      {/* CTA Devis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Besoin d'un devis pour ces prestations ?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contactez-moi pour obtenir un devis personnalisé et gratuit. J'interviens rapidement sur Soustons et dans toutes les Landes.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: '#818958' }}
            >
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}