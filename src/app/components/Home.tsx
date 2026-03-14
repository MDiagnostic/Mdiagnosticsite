import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  CheckCircle,
  Clock,
  Shield,
  Award,
  FileCheck,
  ArrowRight,
  Home as HomeIcon,
  AlertTriangle,
  Droplet,
  Zap,
  Flame,
  Bug,
  FileText,
  Ruler,
  ChevronLeft,
  ChevronRight,
  Wrench,
} from "lucide-react";
import { SEO } from "./SEO";
import { useState, useEffect } from "react";
import { DiagnosticModal } from "./DiagnosticModal";
import { motion, AnimatePresence } from "motion/react";
import { Reviews } from "./Reviews";
import { FAQ } from "./FAQ";

export function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 pour gauche, 1 pour droite
  const [testingAPI, setTestingAPI] = useState(false);
  const [apiTestResult, setApiTestResult] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Détecter si on est sur mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      icon: HomeIcon,
      title: "Diagnostic de Performance Énergétique (DPE)",
      description:
        "Évaluation de la consommation énergétique et des émissions de gaz à effet de serre de votre bien immobilier.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le DPE ?</h4>
          <p className="mb-4">
            Le <strong>Diagnostic de Performance Énergétique (DPE)</strong> est un document obligatoire qui évalue la consommation d'énergie et l'impact en termes d'émissions de gaz à effet de serre d'un logement ou d'un bâtiment. Il attribue une note de A (très performant) à G (très énergivore) selon deux critères : la consommation énergétique annuelle et les émissions de CO2.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le DPE ?</h4>
          <p className="mb-4">
            Le DPE informe l'acheteur ou le locataire sur la performance énergétique du bien avant toute transaction. Il permet d'estimer les futures dépenses énergétiques et d'identifier les travaux d'amélioration à réaliser. Depuis 2023, le DPE est devenu opposable : les informations qu'il contient engagent la responsabilité du vendeur ou du bailleur.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Obligations et validité</h4>
          <p className="mb-4">
            <strong>Obligatoire</strong> pour toute vente ou location d'un bien immobilier dans les Landes (40). Le DPE doit être annexé à la promesse de vente, à l'acte de vente ou au bail de location. Il est <strong>valide 10 ans</strong> à partir de sa réalisation, sauf si des travaux de rénovation énergétique sont effectués.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Interdiction de location des passoires thermiques</h4>
          <p className="mb-3">
            Depuis le 1er janvier 2023, les logements classés G+ (consommation supérieure à 450 kWh/m²/an) ne peuvent plus être mis en location. Cette interdiction s'étend progressivement :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>2025</strong> : interdiction des logements classés G</li>
            <li><strong>2028</strong> : interdiction des logements classés F</li>
            <li><strong>2034</strong> : interdiction des logements classés E</li>
          </ul>
          <p>
            Il est donc essentiel de faire réaliser un <strong>DPE dans les Landes</strong> pour vérifier la conformité de votre bien avant toute mise en location à Soustons, Hossegor, Capbreton, Dax ou ailleurs dans le département.
          </p>
        </>
      ),
    },
    {
      icon: AlertTriangle,
      title: "Diagnostic Amiante",
      description:
        "Recherche de matériaux et produits contenant de l'amiante, substance dangereuse interdite depuis 1997.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic amiante ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic amiante</strong> consiste à rechercher la présence d'amiante dans les matériaux et produits de construction d'un bien immobilier. L'amiante est une fibre minérale naturelle utilisée massivement dans la construction jusqu'en 1997 pour ses proprits isolantes et sa résistance au feu. Cependant, l'inhalation de fibres d'amiante peut provoquer de graves maladies respiratoires, dont des cancers.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le diagnostic amiante ?</h4>
          <p className="mb-4">
            Ce diagnostic protège la santé des occupants et des professionnels intervenant sur le bien. Il identifie les matériaux amiantés présents (dalles de sol, faux plafonds, conduits, enduits, toitures en fibrociment) et évalue leur état de conservation. En cas de détection, des mesures de surveillance ou de retrait peuvent être nécessaires selon l'état des matériaux.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Quels biens sont concernés ?</h4>
          <p className="mb-4">
            Le diagnostic amiante est <strong>obligatoire pour tous les biens construits avant le 1er juillet 1997</strong>, date de l'interdiction totale de l'amiante en France. Cela concerne la majorité des maisons et appartements anciens dans les Landes, notamment à Soustons, Dax, Hossegor et Capbreton.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du diagnostic</h4>
          <p className="mb-3">
            La validité du diagnostic amiante dépend du résultat :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Absence d'amiante</strong> : validité illimitée, aucune obligation de renouvellement</li>
            <li><strong>Présence d'amiante en bon état</strong> : contrôle périodique tous les 3 ans</li>
            <li><strong>Présence d'amiante dégradé</strong> : travaux obligatoires pour protéger les occupants</li>
          </ul>
          <p>
            Le <strong>diagnostic amiante Landes</strong> est un document essentiel pour la vente et la location de biens anciens.
          </p>
        </>
      ),
    },
    {
      icon: Droplet,
      title: "Diagnostic Plomb (CREP)",
      description:
        "Détection de la présence de plomb dans les peintures, dangereuse pour la santé, notamment chez les enfants.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic plomb (CREP) ?</h4>
          <p className="mb-4">
            Le <strong>Constat de Risque d'Exposition au Plomb (CREP)</strong> consiste à mesurer la concentration en plomb dans les revêtements (peintures, enduits) d'un logement. Le plomb était largement utilisé dans les peintures anciennes pour ses propriétés couvrantes et antirouille. Son ingestion ou inhalation peut provoquer le saturnisme, une intoxication particulièrement dangereuse pour les jeunes enfants et les femmes enceintes.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le diagnostic plomb ?</h4>
          <p className="mb-4">
            Le CREP protège les occupants, notamment les enfants, contre les risques d'intoxication au plomb. Il identifie les surfaces contenant du plomb et évalue leur état de conservation. En cas de présence de plomb dégradé (écailles, poussières), des travaux de mise en sécurité sont obligatoires pour supprimer le risque d'exposition.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Quels biens sont concernés ?</h4>
          <p className="mb-4">
            Le diagnostic plomb est <strong>obligatoire pour tous les logements construits avant le 1er janvier 1949</strong>. Cette date correspond à l'interdiction progressive du plomb dans les peintures. De nombreuses maisons landaises anciennes à Soustons, Dax, Saint-Paul-lès-Dax ou dans le centre historique d'Hossegor sont concernées.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité et obligations</h4>
          <p className="mb-3">
            La validité du CREP dépend de la transaction et du résultat :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Vente - absence de plomb</strong> : validité illimitée</li>
            <li><strong>Vente - présence de plomb</strong> : validité 1 an</li>
            <li><strong>Location - absence de plomb</strong> : validité illimitée</li>
            <li><strong>Location - présence de plomb</strong> : validité 6 ans</li>
          </ul>
          <p>
            Le <strong>diagnostic plomb Landes (40)</strong> est indispensable pour protéger la santé des occupants des biens anciens.
          </p>
        </>
      ),
    },
    {
      icon: Zap,
      title: "Diagnostic Électricité",
      description:
        "Contrôle de la sécurité de l'installation électrique pour prévenir les risques d'électrocution et d'incendie.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic électricité ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic électricité</strong> est un contrôle de conformité et de sécurité de l'installation électrique intérieure d'un logement. Il vérifie que l'installation ne présente pas de danger immédiat pour les occupants (risques d'électrocution, d'électrisation ou d'incendie d'origine électrique). Ce diagnostic évalue plus de 100 points de contrôle selon la norme en vigueur.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le diagnostic électricité ?</h4>
          <p className="mb-4">
            Ce diagnostic protège les occupants contre les accidents électriques domestiques qui causent chaque année de nombreux incendies et électrocutions. Il identifie les anomalies de l'installation (absence de terre, tableaux électriques vétustes, fils dénudés, prises défectueuses) et classe leur dangerosité. L'acquéreur ou le locataire est ainsi informé de l'état de l'installation et des travaux éventuels à prévoir.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Installations concernées</h4>
          <p className="mb-4">
            Le diagnostic est <strong>obligatoire pour toute installation électrique de plus de 15 ans</strong> lors d'une vente ou d'une location. Dans les Landes, de nombreuses résidences secondaires et maisons de village à Soustons, Hossegor, Capbreton ou Dax disposent d'installations anciennes nécessitant ce contrôle.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du diagnostic</h4>
          <p className="mb-3">
            La durée de validité diffère selon le type de transaction :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Vente</strong> : 3 ans à partir de la date de réalisation</li>
            <li><strong>Location</strong> : 6 ans à partir de la date de réalisation</li>
          </ul>
          <p>
            Le <strong>diagnostic électricité Landes</strong> est obligatoire pour sécuriser les transactions immobilières et protéger les occupants.
          </p>
        </>
      ),
    },
    {
      icon: Flame,
      title: "Diagnostic Gaz",
      description:
        "Vérification de la sécurité de l'installation de gaz naturel pour prévenir les risques d'explosion et d'intoxication.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic gaz ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic gaz</strong> est un contrôle obligatoire de l'installation intérieure de gaz naturel d'un logement. Il vérifie l'état des appareils de chauffage et de production d'eau chaude, la ventilation, l'étanchéité des canalisations et le bon fonctionnement des dispositifs de sécurité. Ce diagnostic protège contre les risques d'intoxication au monoxyde de carbone, d'explosion et de fuite de gaz.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le diagnostic gaz ?</h4>
          <p className="mb-4">
            Ce diagnostic identifie les anomalies et les défauts de l'installation susceptibles de provoquer des accidents graves. Les installations vétustes ou mal entretenues peuvent présenter des fuites, une mauvaise combustion ou une ventilation insuffisante. Le diagnostiqueur contrôle plus de 70 points et classe les anomalies selon leur dangerosité (A1, A2, DGI).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Installations concernées</h4>
          <p className="mb-4">
            Le diagnostic gaz est <strong>obligatoire pour toute installation de plus de 15 ans</strong> alimentée en gaz naturel (gaz de ville) lors d'une vente ou d'une location. Dans les Landes, de nombreux logements à Soustons, Dax, Hossegor et Capbreton sont équipés d'installations au gaz nécessitant ce contrôle.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du diagnostic</h4>
          <p className="mb-3">
            La durée de validité dépend du type de transaction :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Vente</strong> : 3 ans à partir de la date de réalisation</li>
            <li><strong>Location</strong> : 6 ans à partir de la date de réalisation</li>
          </ul>
          <p>
            Le <strong>diagnostic gaz Landes</strong> est essentiel pour garantir la sécurité des occupants et la conformité de l'installation.
          </p>
        </>
      ),
    },
    {
      icon: Bug,
      title: "Diagnostic Termites",
      description:
        "Détection de la présence de termites et autres insectes xylophages pouvant détériorer la structure du bâtiment.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic termites ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic termites</strong> (ou état parasitaire) consiste �� rechercher la présence de termites et autres insectes xylophages dans un bâtiment. Les termites se nourrissent de la cellulose du bois et peuvent causer des dégâts structurels importants en affaiblissant les charpentes, planchers, menuiseries et ossatures. Ces insectes agissent de manière discrète et peuvent passer inaperçus pendant des années.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le diagnostic termites ?</h4>
          <p className="mb-4">
            Ce diagnostic protège l'acheteur contre les risques d'effondrement et les coûts importants de traitement et de réparation. Le diagnostiqueur inspecte toutes les parties accessibles du bien (caves, combles, sous-sols) et recherche les indices de présence de termites : galeries, cordonnets, bois dégradés. Si une infestation est détectée, des travaux d'éradication sont nécessaires.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Zones concernées dans les Landes</h4>
          <p className="mb-4">
            Le département des Landes est classé en zone à risque termites. Le diagnostic est <strong>obligatoire dans les zones déclarées par arrêté préfectoral</strong>, ce qui concerne de nombreuses communes dont Soustons, Dax, Hossegor, Capbreton et leurs alentours. Même en dehors de ces zones, le diagnostic est vivement recommandé, notamment pour les constructions anciennes en bois.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du diagnostic</h4>
          <p className="mb-4">
            Le diagnostic termites est <strong>valide 6 mois</strong> pour une vente immobilière. Il doit donc être réalisé au plus près de la signature de l'acte authentique. Pour une location, le diagnostic termites n'est pas obligatoire, mais il peut être exigé par certains bailleurs dans les zones à risque.
          </p>
          <p>
            Le <strong>diagnostic termites Landes (40)</strong> est indispensable pour sécuriser votre transaction immobilière dans une région à risque.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "État des Risques et Pollutions (ERP)",
      description:
        "Information sur les risques naturels, miniers, technologiques, sismiques et la pollution des sols du terrain.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que l'ERP ?</h4>
          <p className="mb-4">
            L'<strong>État des Risques et Pollutions (ERP)</strong>, anciennement appelé ERNMT (État des Risques Naturels, Miniers et Technologiques), est un document d'information obligatoire qui informe l'acqureur ou le locataire sur les risques auxquels le bien immobilier est exposé. Il recense les risques naturels (inondations, mouvements de terrain, feux de forêt), miniers, technologiques, sismiques, radon et la pollution des sols.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert l'ERP ?</h4>
          <p className="mb-4">
            L'ERP permet à l'acquéreur ou au locataire de connaître les risques environnementaux du bien avant la signature du contrat. Cette information est essentielle pour évaluer les contraintes potentielles (risque d'inondation, proximité d'un site industriel, exposition au radon). Le document indique si le bien se situe dans une zone couverte par un Plan de Prévention des Risques (PPR).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Risques dans les Landes</h4>
          <p className="mb-3">
            Dans le département des Landes, les principaux risques identifiés sont :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Inondations</strong> : nombreuses zones inondables le long des cours d'eau (Adour, Courant d'Huchet)</li>
            <li><strong>Feux de forêt</strong> : le massif forestier landais présente un risque incendie élevé en été</li>
            <li><strong>Mouvements de terrain</strong> : argiles et sables peuvent se déplacer selon les secteurs</li>
            <li><strong>Séisme</strong> : risque sismique modéré (zone 3) sur certaines communes</li>
            <li><strong>Radon</strong> : exposition faible à modérée selon les communes</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité de l'ERP</h4>
          <p className="mb-4">
            L'ERP est <strong>valide 6 mois</strong> pour une vente ou une location. Il doit être annexé au compromis de vente ou au bail de location. Le document est établi à partir des informations mises à disposition par la préfecture des Landes et doit mentionner la commune, l'adresse du bien et les risques recensés.
          </p>
          <p>
            L'<strong>ERP Landes</strong> est un document essentiel pour informer sur les risques environnementaux à Soustons, Hossegor, Capbreton, Dax et dans tout le département.
          </p>
        </>
      ),
    },
    {
      icon: Ruler,
      title: "Mesurage Loi Carrez",
      description:
        "Calcul de la surface privative d'un lot de copropriété, obligatoire pour toute vente de bien en copropriété.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le mesurage loi Carrez ?</h4>
          <p className="mb-4">
            Le <strong>mesurage loi Carrez</strong> est le calcul de la surface privative d'un lot de copropriété (appartement, local commercial). Il s'agit de la surface de plancher construite après déduction des surfaces occupées par les murs, cloisons, marches, cages d'escalier, gaines, embrasures de portes et fenêtres. Seules les surfaces dont la hauteur sous plafond est d'au moins 1,80 m sont prises en compte.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert la loi Carrez ?</h4>
          <p className="mb-4">
            La loi Carrez protège l'acquéreur en l'informant précisément de la superficie du bien qu'il achète. Si la surface réelle est inférieure de plus de 5% à la surface annoncée, l'acquéreur peut demander une diminution du prix de vente proportionnelle à la différence constatée, et ce pendant un délai d'un an à compter de la signature de l'acte authentique.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Biens concernés</h4>
          <p className="mb-4">
            Le mesurage loi Carrez est <strong>obligatoire pour toute vente d'un lot de copropriété</strong> d'une superficie d'au moins 8 m². Cela concerne les appartements, les locaux commerciaux, les lots de copropriété horizontale. Les maisons individuelles ne sont pas soumises à la loi Carrez, mais un mesurage loi Boutin peut être exigé pour une location.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du mesurage</h4>
          <p className="mb-4">
            Le certificat de surface loi Carrez est <strong>valide sans limitation de durée</strong> tant qu'aucun travaux modifiant la superficie n'est réalisé (aménagement de combles, création ou suppression de cloisons, agrandissement). En cas de travaux, un nouveau mesurage est obligatoire.
          </p>
          <p>
            Le <strong>mesurage loi Carrez Landes</strong> est indispensable pour toute vente d'appartement à Soustons, Hossegor, Capbreton, Dax ou ailleurs dans le département. MDIAGNOSTIC réalise des mesurages précis et fiables.
          </p>
        </>
      ),
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: "Certifiée et Assurée",
      description:
        "Diagnostiqueuse certifiée avec assurance responsabilité civile professionnelle",
    },
    {
      icon: Clock,
      title: "Intervention Rapide",
      description:
        "Disponibilité sous 48h et remise des rapports dans les délais",
    },
    {
      icon: Shield,
      title: "Connaissance du Territoire",
      description:
        "Expertise locale des Landes et de la côte atlantique",
    },
  ];

  // Carousel logic - scroll by one diagnostic at a time with defined start and end
  const totalDiagnostics = services.length; // 9 diagnostics
  
  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => Math.min(prev + 1, totalDiagnostics - 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Disable buttons at boundaries
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide === totalDiagnostics - 1;

  // Show 3 diagnostics at a time: previous, current (center), next
  const getVisibleServices = () => {
    const visible = [];
    
    // Always ensure center diagnostic is in the middle position
    if (currentSlide === 0) {
      // At start: empty slot, diagnostic 0 (center), diagnostic 1
      visible.push({ isEmpty: true, position: -1 });
      visible.push({ ...services[0], originalIndex: 0, position: 0 });
      if (totalDiagnostics > 1) {
        visible.push({ ...services[1], originalIndex: 1, position: 1 });
      }
    } else if (currentSlide === totalDiagnostics - 1) {
      // At end: diagnostic N-2, diagnostic N-1 (center), empty slot
      if (totalDiagnostics > 1) {
        visible.push({ ...services[currentSlide - 1], originalIndex: currentSlide - 1, position: -1 });
      }
      visible.push({ ...services[currentSlide], originalIndex: currentSlide, position: 0 });
      visible.push({ isEmpty: true, position: 1 });
    } else {
      // Middle: previous, current (center), next
      for (let i = -1; i <= 1; i++) {
        const index = currentSlide + i;
        if (index >= 0 && index < totalDiagnostics) {
          visible.push({ ...services[index], originalIndex: index, position: i });
        }
      }
    }
    
    return visible;
  };

  const visibleServices = getVisibleServices();

  // Test API Google Places function
  const testGoogleAPI = async () => {
    setTestingAPI(true);
    setApiTestResult(null);

    if (!window.google?.maps) {
      setApiTestResult('❌ Google Maps API non chargée. Vérifiez que l\'API est bien configurée dans Reviews.tsx');
      setTestingAPI(false);
      return;
    }

    try {
      // Use new Places API
      const { Place } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
      const place = new Place({ id: "ChIJ2WDD9qJ2FwAR5FokmFKkoMc" });
      
      await place.fetchFields({
        fields: ["displayName", "rating", "userRatingCount", "reviews"],
      });

      setApiTestResult(`✅ SUCCÈS ! ${place.reviews?.length || 0} avis récupérés - Note: ${place.rating}/5`);
    } catch (error: any) {
      // Détection des différentes erreurs
      if (error.message.includes("Requests from referer") && error.message.includes("are blocked")) {
        setApiTestResult(`❌ HTTP Referrer bloqué - Cliquez en bas pour corriger`);
      } else if (error.message.includes("Requests to this API") && error.message.includes("are blocked")) {
        setApiTestResult(`❌ Restrictions d'API - Places API bloquée sur votre clé`);
      } else if (error.message.includes("Places API (New) has not been used") || 
                 (error.message.includes("PERMISSION_DENIED") && error.message.includes("Places API (New)"))) {
        setApiTestResult(`❌ Places API (New) n'est pas activée - Cliquez sur le lien en bas pour l'activer`);
      } else {
        setApiTestResult(`❌ ERREUR : ${error.message}`);
      }
    } finally {
      setTestingAPI(false);
    }
  };

  return (
    <div className="w-full">
      <SEO 
        title="MDIAGNOSTIC - Diagnostic Immobilier Soustons, Hossegor, Capbreton | Landes 40"
        description="Diagnostiqueuse immobilière certifiée à Soustons dans les Landes (40). DPE, amiante, plomb, électricité, gaz, termites. Intervention rapide sur Hossegor, Capbreton, Dax et toutes les Landes dans un rayon de 50 km. Devis gratuit."
        keywords="diagnostic immobilier Soustons, diagnostiqueur Landes 40, DPE Hossegor, diagnostic amiante Capbreton, diagnostic plomb Dax, diagnostic électricité Landes, diagnostic gaz, termites Landes, ERP, loi carrez, diagnostiqueuse certifiée 40"
        canonical="https://www.mdiagnostic.fr"
      />
      {/* Hero Section */}
      <section className="relative text-white" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1612380382832-b9f0766cd4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kZXMlMjBmcmFuY2UlMjBwaW5lJTIwZm9yZXN0JTIwdHJlZXN8ZW58MXx8fHwxNzczMjE5MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Forêt de pins des Landes - paysage côte atlantique diagnostic immobilier Soustons"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Diagnostics Immobiliers dans les Landes
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Diagnostiqueuse certifiée à Soustons pour tous vos diagnostics obligatoires
              en toute conformité
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                style={{ color: '#818958' }}
              >
                Demander un devis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = '#818958'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Diagnostics
            </h2>
            <p className="text-xl text-gray-600">
              Tous les diagnostics immobiliers obligatoires
            </p>
          </div>

          {/* Carousel Container with Side Arrows */}
          <div className="relative">
            {/* Left Arrow - Hidden on mobile */}
            <button
              onClick={prevSlide}
              disabled={isAtStart}
              className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg transition-all ${
                isAtStart ? 'opacity-30 cursor-not-allowed' : 'hover:shadow-xl hover:scale-110'
              }`}
              style={{ color: '#818958' }}
              aria-label="Diagnostic précédent"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleServices
                  .filter(service => {
                    // Sur mobile : afficher uniquement la carte centrale
                    if (isMobile) {
                      return service.position === 0;
                    }
                    // Sur desktop : afficher toutes les cartes (y compris les vides)
                    return true;
                  })
                  .map((service, idx) => {
                    if (service.isEmpty) {
                      return <div key={`empty-${idx}`} className="hidden lg:block" />;
                    }
                    const isCenter = service.position === 0;
                    
                    return (
                      <motion.div
                        key={service.originalIndex}
                        layout
                        initial={{ 
                          opacity: 0, 
                          scale: isMobile ? 0.8 : (isCenter ? 0.8 : 0.5),
                          x: isMobile ? (direction === 1 ? 300 : -300) : 0
                        }}
                        animate={{ 
                          opacity: isMobile ? 1 : (isCenter ? 1 : 0.5), 
                          scale: isCenter ? 1 : 1,
                          x: 0
                        }}
                        exit={{ 
                          opacity: 0, 
                          scale: isMobile ? 0.8 : (isCenter ? 0.8 : 0.5),
                          x: isMobile ? (direction === 1 ? -300 : 300) : 0
                        }}
                        transition={{ 
                          duration: 0.5,
                          ease: "easeInOut"
                        }}
                        className={`bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer flex flex-col h-full min-h-[380px] ${
                          isCenter ? 'ring-2' : ''
                        }`}
                        style={{
                          ringColor: isCenter ? '#818958' : 'transparent',
                        }}
                        onClick={() => setSelectedService(service.originalIndex)}
                      >
                        <div className="p-6 flex flex-col flex-1">
                          <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-200 mb-4">
                            <service.icon className="h-6 w-6" style={{ color: '#818958' }} />
                          </div>
                          <h3 className="font-semibold text-xl mb-2 text-gray-900">
                            {service.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-1">{service.description}</p>
                          <button
                            className="inline-flex items-center justify-center font-semibold hover:opacity-80 transition-opacity w-full py-2 rounded-lg"
                            style={{ color: '#818958', backgroundColor: '#f9faf7' }}
                          >
                            En savoir plus
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
              </AnimatePresence>
            </div>

            {/* Right Arrow - Hidden on mobile */}
            <button
              onClick={nextSlide}
              disabled={isAtEnd}
              className={`hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white shadow-lg transition-all ${
                isAtEnd ? 'opacity-30 cursor-not-allowed' : 'hover:shadow-xl hover:scale-110'
              }`}
              style={{ color: '#818958' }}
              aria-label="Diagnostic suivant"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Mobile Navigation Arrows - Below the carousel */}
            <div className="md:hidden flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                disabled={isAtStart}
                className={`p-3 rounded-full bg-white shadow-lg transition-all ${
                  isAtStart ? 'opacity-30 cursor-not-allowed' : 'hover:shadow-xl active:scale-95'
                }`}
                style={{ color: '#818958' }}
                aria-label="Diagnostic précédent"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <span className="text-gray-600 font-medium">
                {currentSlide + 1} / {totalDiagnostics}
              </span>
              <button
                onClick={nextSlide}
                disabled={isAtEnd}
                className={`p-3 rounded-full bg-white shadow-lg transition-all ${
                  isAtEnd ? 'opacity-30 cursor-not-allowed' : 'hover:shadow-xl active:scale-95'
                }`}
                style={{ color: '#818958' }}
                aria-label="Diagnostic suivant"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Page Indicators - Desktop only */}
          <div className="hidden md:flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalDiagnostics }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-2 h-2 rounded-full transition-all"
                style={{
                  backgroundColor: currentSlide === index ? '#818958' : '#d1d5db'
                }}
                aria-label={`Diagnostic ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi choisir MDIAGNOSTIC ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: '#e8ebe0' }}>
                  <advantage.icon className="h-8 w-8" style={{ color: '#818958' }} />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ backgroundColor: '#818958' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un Diagnostic ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contactez-moi pour un devis gratuit et sans engagement
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: '#818958' }}
          >
            Demander un devis gratuit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
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

      {/* Reviews Section */}
      <Reviews />

      {/* FAQ Section */}
      <FAQ />
    </div>
  );
}