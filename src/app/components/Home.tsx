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
  Phone,
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
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
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
            Depuis le 1er janvier 2023, les logements classés G+ ne peuvent plus être mis en location. Cette interdiction s'étend progressivement :
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
            Le <strong>diagnostic amiante</strong> consiste à rechercher la présence d'amiante dans les matériaux et produits de construction d'un bien immobilier. L'amiante est une fibre minérale naturelle utilisée massivement dans la construction jusqu'en 1997 pour ses propriétés isolantes et sa résistance au feu. Cependant, l'inhalation de fibres d'amiante peut provoquer de graves maladies respiratoires, dont des cancers.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">À quoi sert le diagnostic amiante ?</h4>
          <p className="mb-4">
            Ce diagnostic protège la santé des occupants et des professionnels intervenant sur le bien. Il identifie les matériaux amiantés présents (dalles de sol, faux plafonds, conduits, enduits, toitures en fibrociment) et évalue leur état de conservation.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Quels biens sont concernés ?</h4>
          <p className="mb-4">
            Le diagnostic amiante est <strong>obligatoire pour tous les biens dont le permis de construire a été déposé avant le 1er juillet 1997</strong>, date de l'interdiction totale de l'amiante en France.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du diagnostic</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Absence d'amiante</strong> : validité illimitée</li>
            <li><strong>Présence d'amiante en bon état</strong> : contrôle périodique tous les 3 ans</li>
            <li><strong>Présence d'amiante dégradé</strong> : travaux obligatoires</li>
          </ul>
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
            Le <strong>Constat de Risque d'Exposition au Plomb (CREP)</strong> consiste à mesurer la concentration en plomb dans les revêtements (peintures, enduits) d'un logement. Son ingestion ou inhalation peut provoquer le saturnisme, une intoxication particulièrement dangereuse pour les jeunes enfants et les femmes enceintes.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Quels biens sont concernés ?</h4>
          <p className="mb-4">
            Le diagnostic plomb est <strong>obligatoire pour tous les logements construits avant le 1er janvier 1949</strong>.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité et obligations</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Vente - absence de plomb</strong> : validité illimitée</li>
            <li><strong>Vente - présence de plomb</strong> : validité 1 an</li>
            <li><strong>Location - absence de plomb</strong> : validité illimitée</li>
            <li><strong>Location - présence de plomb</strong> : validité 6 ans</li>
          </ul>
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
            Le <strong>diagnostic électricité</strong> est un contrôle de conformité et de sécurité de l'installation électrique intérieure d'un logement. Ce diagnostic évalue plus de 100 points de contrôle selon la norme en vigueur.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Installations concernées</h4>
          <p className="mb-4">
            Le diagnostic est <strong>obligatoire pour toute installation électrique de plus de 15 ans</strong> lors d'une vente ou d'une location.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du diagnostic</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Vente</strong> : 3 ans à partir de la date de réalisation</li>
            <li><strong>Location</strong> : 6 ans à partir de la date de réalisation</li>
          </ul>
        </>
      ),
    },
    {
      icon: Flame,
      title: "Diagnostic Gaz",
      description:
        "Vérification de la sécurité de l'installation de gaz (gaz de ville ou propane) pour prévenir les risques d'explosion et d'intoxication.",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le diagnostic gaz ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic gaz</strong> est un contrôle obligatoire de l'installation intérieure de gaz. Il vérifie l'état des appareils de chauffage et de production d'eau chaude, la ventilation, l'étanchéité des canalisations et le bon fonctionnement des dispositifs de sécurité.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du diagnostic</h4>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Vente</strong> : 3 ans à partir de la date de réalisation</li>
            <li><strong>Location</strong> : 6 ans à partir de la date de réalisation</li>
          </ul>
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
            Le <strong>diagnostic termites</strong> consiste à rechercher la présence de termites et autres insectes xylophages dans un bâtiment. Les termites peuvent causer des dégâts structurels importants en affaiblissant les charpentes, planchers et menuiseries.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Zones concernées dans les Landes</h4>
          <p className="mb-4">
            Le département des Landes est classé en <strong>zone à risque termites</strong>. Le diagnostic est valide <strong>6 mois</strong> pour une vente immobilière.
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
            L'<strong>État des Risques et Pollutions (ERP)</strong> est un document d'information obligatoire qui informe l'acquéreur ou le locataire sur les risques auxquels le bien immobilier est exposé : inondations, feux de forêt, mouvements de terrain, séismes, radon et pollution des sols.
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité de l'ERP</h4>
          <p className="mb-4">
            L'ERP est <strong>valide 6 mois</strong> pour une vente ou une location.
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
            Le <strong>mesurage loi Carrez</strong> est le calcul de la surface privative d'un lot de copropriété. Obligatoire pour toute <strong>vente d'un lot de copropriété</strong> d'une superficie d'au moins 8 m².
          </p>
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité du mesurage</h4>
          <p className="mb-4">
            Le certificat de surface loi Carrez est <strong>valide sans limitation de durée</strong> tant qu'aucun travaux modifiant la superficie n'est réalisé.
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

  const totalDiagnostics = services.length;

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => Math.min(prev + 1, totalDiagnostics - 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide === totalDiagnostics - 1;

  const getVisibleServices = () => {
    const visible = [];
    if (currentSlide === 0) {
      visible.push({ isEmpty: true, position: -1 });
      visible.push({ ...services[0], originalIndex: 0, position: 0 });
      if (totalDiagnostics > 1) {
        visible.push({ ...services[1], originalIndex: 1, position: 1 });
      }
    } else if (currentSlide === totalDiagnostics - 1) {
      if (totalDiagnostics > 1) {
        visible.push({ ...services[currentSlide - 1], originalIndex: currentSlide - 1, position: -1 });
      }
      visible.push({ ...services[currentSlide], originalIndex: currentSlide, position: 0 });
      visible.push({ isEmpty: true, position: 1 });
    } else {
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

  return (
    <div className="w-full">
      <SEO
        title="Diagnostic Immobilier Soustons Landes 40 | MDIAGNOSTIC"
        description="Diagnostiqueuse certifiée à Soustons (40). DPE, amiante, plomb, électricité, gaz, termites. Intervention 48h sur Hossegor, Capbreton, Dax. ☎️ 07 77 78 26 59 - Devis gratuit."
        keywords="diagnostic immobilier Soustons, diagnostiqueur Landes 40, DPE Hossegor, diagnostic amiante Capbreton, diagnostic plomb Dax, diagnostic électricité Landes, diagnostic gaz, termites Landes, ERP, loi carrez, diagnostiqueuse certifiée 40"
        canonical="https://www.mdiagnostic.fr"
      />

      {/* ── Hero ── */}
      <section className="relative text-white" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="absolute inset-0 opacity-40">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1612380382832-b9f0766cd4bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kZXMlMjBmcmFuY2UlMjBwaW5lJTIwZm9yZXN0JTIwdHJlZXN8ZW58MXx8fHwxNzczMjE5MzIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Forêt de pins des Landes - paysage côte atlantique diagnostic immobilier Soustons"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Diagnostics Immobiliers dans les Landes
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Diagnostiqueuse certifiée à Soustons pour tous vos diagnostics obligatoires
              en toute conformité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                style={{ color: '#818958' }}
              >
                Demander un devis gratuit
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
        {/* Vague de transition hero → services */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="w-full h-16 md:h-24" fill="#f9fafb">
            <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" />
          </svg>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="pt-4 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos Diagnostics
            </h2>
            <p className="text-xl text-gray-600">
              Tous les diagnostics immobiliers obligatoires
            </p>
          </div>

          {/* Carousel */}
          <div className="relative">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {visibleServices
                  .filter(service => {
                    if (isMobile) return service.position === 0;
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
                          opacity: isMobile ? 1 : (isCenter ? 1 : 0.72),
                          scale: isCenter ? 1 : 1,
                          x: 0
                        }}
                        exit={{
                          opacity: 0,
                          scale: isMobile ? 0.8 : (isCenter ? 0.8 : 0.5),
                          x: isMobile ? (direction === 1 ? -300 : 300) : 0
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`bg-white rounded-xl cursor-pointer flex flex-col h-full min-h-[380px] transition-shadow duration-300 ${
                          isCenter ? 'shadow-xl ring-2' : 'shadow-md hover:shadow-lg'
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

          <div className="hidden md:flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: totalDiagnostics }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ backgroundColor: currentSlide === index ? '#818958' : '#d1d5db' }}
                aria-label={`Diagnostic ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Vague services → avantages */}
        <div className="overflow-hidden leading-none">
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" className="w-full h-12 md:h-16 block" fill="white">
            <path d="M0,32 C360,64 1080,0 1440,32 L1440,64 L0,64 Z" />
          </svg>
        </div>
      </section>

      {/* ── Avantages ── */}
      <section className="pb-0 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Pourquoi choisir MDIAGNOSTIC ?
            </h2>
            <p className="text-gray-500 text-lg">Une professionnelle de terrain, proche de vous dans les Landes</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5" style={{ backgroundColor: '#e8ebe0' }}>
                  <advantage.icon className="h-8 w-8" style={{ color: '#818958' }} />
                </div>
                <h3 className="font-semibold text-xl mb-2 text-gray-900">
                  {advantage.title}
                </h3>
                <p className="text-gray-500">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vague de transition avantages → CTA */}
        <div className="relative overflow-hidden leading-none">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-16 md:h-20" fill="#818958">
            <path d="M0,20 C480,72 960,0 1440,50 L1440,72 L0,72 Z" />
          </svg>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-0 text-white" style={{ backgroundColor: '#818958' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Besoin d'un Diagnostic ?
          </h2>
          <p className="text-xl mb-2 opacity-90">
            Contactez-moi pour un devis gratuit et sans engagement
          </p>
          <p className="text-sm opacity-70 mb-8">Intervention dans tout le département des Landes · Réponse sous 24h</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              style={{ color: '#818958' }}
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:0777782659"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = '#818958')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'white')}
            >
              <Phone className="h-4 w-4" />
              07 77 78 26 59
            </a>
          </div>
        </div>

        {/* Vague de transition CTA → avis */}
        <div className="relative overflow-hidden leading-none">
          <svg viewBox="0 0 1440 72" preserveAspectRatio="none" className="w-full h-16 md:h-20" fill="white">
            <path d="M0,50 C360,0 1080,72 1440,20 L1440,72 L0,72 Z" />
          </svg>
        </div>
      </section>

      {/* ── Reviews & FAQ ── */}
      <Reviews />
      <FAQ />

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
    </div>
  );
}
