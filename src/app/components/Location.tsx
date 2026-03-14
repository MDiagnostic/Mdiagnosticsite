import {
  Home,
  Zap,
  Flame,
  Droplet,
  FileText,
  AlertTriangle,
  Ruler,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { SEO } from "./SEO";
import { DiagnosticModal } from "./DiagnosticModal";
import { Link } from "react-router";

export function Location() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Home,
      title: "Diagnostic de Performance Énergétique (DPE)",
      description:
        "Évaluation de la consommation énergétique et des émissions de gaz à effet de serre de votre bien. Obligatoire pour toute location.",
      validity: "10 ans",
      mandatory: "Location",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que le DPE pour la location ?</h4>
          <p className="mb-4">
            Le <strong>Diagnostic de Performance Énergétique (DPE)</strong> est obligatoire depuis 2007 pour toute mise en location d'un logement. Il évalue la consommation d'énergie et l'impact en termes d'émissions de gaz à effet de serre du logement. Le DPE attribue deux notes de A (très performant) à G (très énergivore) : une pour la consommation énergétique annuelle et une pour les émissions de CO2.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Pourquoi est-il important pour le locataire ?</h4>
          <p className="mb-4">
            Le DPE permet au futur locataire d'estimer ses futures dépenses énergétiques avant de signer le bail. C'est un critère de choix majeur pour les locataires qui recherchent un logement économe en énergie. Le DPE doit être affiché sur toute annonce de location immobilière et annexé au contrat de bail.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Interdiction de location des passoires thermiques</h4>
          <p className="mb-3">
            Depuis le 1er janvier 2023, les logements les plus énergivores ne peuvent plus être mis en location. Cette interdiction s'étend progressivement :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>2023</strong> : interdiction des logements G+ (consommation supérieure à 450 kWh/m²/an)</li>
            <li><strong>2025</strong> : interdiction de tous les logements classés G</li>
            <li><strong>2028</strong> : interdiction des logements classés F</li>
            <li><strong>2034</strong> : interdiction des logements classés E</li>
          </ul>
          <p className="mb-4">
            Il est donc essentiel de vérifier la classe énergétique de votre bien avant toute mise en location dans les Landes. Si votre logement est classé F ou G, des travaux de rénovation énergétique seront nécessaires pour pouvoir continuer à le louer.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité</h4>
          <p>
            Le DPE est <strong>valable 10 ans</strong>, sauf si des travaux de rénovation énergétique sont réalisés et modifient significativement la performance du logement. Le <strong>DPE location Landes</strong> doit être réalisé par un diagnostiqueur certifié.
          </p>
        </>
      ),
    },
    {
      icon: AlertTriangle,
      title: "Diagnostic Amiante",
      description:
        "Recherche de matériaux et produits contenant de l'amiante dans les biens construits avant le 1er juillet 1997.",
      validity: "Illimitée si négatif, 3 ans si positif",
      mandatory: "Location",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Diagnostic amiante pour la location</h4>
          <p className="mb-4">
            Pour la <strong>location d'un bien immobilier</strong> construit avant le 1er juillet 1997, le propriétaire doit fournir au locataire un état mentionnant la présence ou l'absence d'amiante. Cette obligation protège la santé des locataires qui occuperont le logement. L'amiante est une substance cancérogène dont l'inhalation peut provoquer de graves maladies respiratoires.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Quels matériaux sont recherchés ?</h4>
          <p className="mb-4">
            Le <strong>diagnostic amiante parties privatives</strong> recherche la présence d'amiante dans les matériaux accessibles du logement : dalles de sol, faux plafonds, conduits, enduits, revêtements muraux, colles à carrelage, joints. Dans les Landes, de nombreuses maisons construites avant 1997 peuvent contenir de l'amiante dans leurs matériaux de construction, notamment les toitures en fibrociment.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Obligations du propriétaire</h4>
          <p className="mb-4">
            En cas de présence d'amiante, le propriétaire doit informer le locataire et assurer un suivi régulier de l'état de conservation des matériaux amiantés. Si l'amiante est dégradé et présente un danger, des travaux de retrait ou de confinement doivent être réalisés avant la mise en location.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité</h4>
          <p className="mb-3">
            La validité du diagnostic amiante dépend du résultat :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Absence d'amiante</strong> : validité illimitée</li>
            <li><strong>Présence d'amiante en bon état</strong> : contrôle tous les 3 ans</li>
            <li><strong>Présence d'amiante dégradé</strong> : travaux obligatoires</li>
          </ul>
          <p>
            Le <strong>diagnostic amiante location Landes</strong> protège la santé des locataires et sécurise le bail.
          </p>
        </>
      ),
    },
    {
      icon: Droplet,
      title: "Constat de Risque d'Exposition au Plomb (CREP)",
      description:
        "Détection de la présence de plomb dans les peintures des logements construits avant le 1er janvier 1949.",
      validity: "Illimitée si négatif, 6 ans si positif",
      mandatory: "Location",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">CREP location : protéger les locataires</h4>
          <p className="mb-4">
            Le <strong>diagnostic plomb location</strong> est obligatoire pour tous les logements construits avant 1949 mis en location. Le CREP protège particulièrement les familles avec enfants contre les risques de saturnisme, une intoxication au plomb dangereuse pour la santé. Le plomb, présent dans les anciennes peintures, peut être ingéré ou inhalé sous forme de poussières ou d'écailles.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Comment se déroule le diagnostic ?</h4>
          <p className="mb-4">
            Le diagnostiqueur mesure avec précision la concentration en plomb de tous les revêtements du logement à l'aide d'un appareil à fluorescence X : peintures intérieures et extérieures, enduits, volets. Chaque élément peint est analysé pièce par pièce. Le rapport indique les zones contenant du plomb et leur état de conservation.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Obligations en cas de présence de plomb</h4>
          <p className="mb-4">
            Si du plomb est détecté et qu'il est dégradé (écailles, poussières), le propriétaire doit réaliser les travaux nécessaires pour supprimer le risque d'exposition avant de mettre le logement en location. Le locataire doit être informé de la présence de plomb, même si celui-ci est en bon état.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité pour la location</h4>
          <p className="mb-3">
            La validité du CREP location diffère de celle pour la vente :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Absence de plomb</strong> : validité illimitée</li>
            <li><strong>Présence de plomb</strong> : validité de 6 ans (contre 1 an pour la vente)</li>
          </ul>
          <p>
            Le <strong>diagnostic plomb location Landes (40)</strong> garantit la sécurité sanitaire des locataires.
          </p>
        </>
      ),
    },
    {
      icon: Zap,
      title: "Diagnostic Électricité",
      description:
        "Contrôle de la conformité et de la sécurité de l'installation électrique intérieure pour les installations de plus de 15 ans.",
      validity: "6 ans",
      mandatory: "Location",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Diagnostic électrique location obligatoire</h4>
          <p className="mb-4">
            Depuis 2018, le <strong>diagnostic électricité location</strong> est obligatoire pour les installations électriques de plus de 15 ans. Ce diagnostic immobilier protège les locataires contre les risques d'électrocution et d'incendie dans les logements loués. Il évalue plus de 100 points de sécurité de l'installation électrique.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité pour la location</h4>
          <p className="mb-4">
            Le <strong>diagnostic électrique</strong> pour la location a une validité de <strong>6 ans</strong> (contre 3 ans pour la vente). Cette durée plus longue tient compte du fait que l'installation reste sous la responsabilité du propriétaire bailleur pendant toute la durée du bail.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Éléments contrôlés</h4>
          <p className="mb-3">
            Le diagnostiqueur contrôle tous les éléments de sécurité de l'installation électrique :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Tableau électrique et disjoncteurs</li>
            <li>Dispositifs différentiels et protection des circuits</li>
            <li>Prise de terre et liaisons équipotentielles</li>
            <li>État des prises et interrupteurs</li>
            <li>Absence de matériels vétustes ou dangereux</li>
            <li>Absence de fils dénudés ou connexions apparentes</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Rapport et anomalies</h4>
          <p className="mb-4">
            Le rapport identifie les anomalies qui pourraient présenter un danger pour les locataires. Bien que le propriétaire ne soit pas obligé de réaliser tous les travaux avant la location, les anomalies graves doivent être corriges pour garantir la sécurité des occupants.
          </p>
          <p>
            Le <strong>diagnostic électricité location Landes</strong> sécurise le bail et protège les locataires.
          </p>
        </>
      ),
    },
    {
      icon: Flame,
      title: "Diagnostic Gaz",
      description:
        "Vérification de la sécurité de l'installation intérieure de gaz pour les installations de plus de 15 ans.",
      validity: "6 ans",
      mandatory: "Location",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Diagnostic gaz location : sécurité des locataires</h4>
          <p className="mb-4">
            Le <strong>diagnostic gaz location</strong> est obligatoire depuis 2018 pour les installations de gaz de plus de 15 ans. Il prévient les risques d'explosion, d'incendie et d'intoxication au monoxyde de carbone dans les logements loués. La validité est de <strong>6 ans</strong> pour la location (contre 3 ans pour la vente).
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Contrôles de sécurité</h4>
          <p className="mb-3">
            Le diagnostiqueur certifié gaz vérifie l'ensemble de l'installation :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Tuyauterie et raccordements</li>
            <li>Robinetterie et étanchéité</li>
            <li>Ventilation des locaux</li>
            <li>Combustion des appareils à gaz</li>
            <li>Évacuation des produits de combustion</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Dangers immédiats</h4>
          <p className="mb-4">
            Le <strong>diagnostic gaz</strong> identifie les dangers immédiats (DGI) nécessitant une intervention urgente et les anomalies à corriger. Si un danger immédiat est détecté, le diagnostiqueur procède à la fermeture de l'installation pour garantir la sécurité. Le propriétaire doit alors faire réaliser les travaux nécessaires avant de pouvoir louer le logement.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Protection juridique</h4>
          <p className="mb-4">
            Le diagnostic gaz protège juridiquement le propriétaire bailleur en cas d'accident. Il démontre que l'installation a été contrôlée par un professionnel certifié et que le locataire a été informé de l'état de l'installation avant la signature du bail.
          </p>
          <p>
            Le <strong>diagnostic gaz location Landes (40)</strong> garantit la conformité et la sécurité de votre bien locatif.
          </p>
        </>
      ),
    },
    {
      icon: FileText,
      title: "État des Risques et Pollutions (ERP)",
      description:
        "Information sur les risques naturels, miniers, technologiques, sismiques et radon auxquels le bien est exposé.",
      validity: "6 mois",
      mandatory: "Location",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">ERP location : informer le locataire</h4>
          <p className="mb-4">
            L'<strong>État des Risques et Pollutions location</strong> est obligatoire pour informer le locataire des risques auxquels le logement est exposé. Ce document doit être annexé au bail et avoir moins de 6 mois au moment de la signature. Le locataire a le droit de connaître les risques naturels et technologiques avant de s'engager.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Risques dans les Landes (40)</h4>
          <p className="mb-3">
            Dans les Landes, l'<strong>ERP</strong> mentionne notamment :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li><strong>Feux de forêt</strong> : risque majeur dans le massif forestier landais</li>
            <li><strong>Tempêtes et vents violents</strong> : exposition de la côte atlantique</li>
            <li><strong>Érosion côtière</strong> : recul du trait de côte (Hossegor, Capbreton, Soustons)</li>
            <li><strong>Inondations</strong> : débordements de cours d'eau ou submersion marine</li>
            <li><strong>Risque sismique</strong> : zone de sismicité faible à modérée</li>
            <li><strong>Radon</strong> : présence potentielle de ce gaz radioactif naturel</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Élaboration du document</h4>
          <p className="mb-4">
            L'ERP est réalisé à partir des arrêtés préfectoraux et des documents d'information communaux disponibles sur Géorisques. Il complète le formulaire réglementaire Cerfa en indiquant précisément les risques selon la localisation du bien. Les cartographies officielles et documents d'information sont joints.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validité et annexion</h4>
          <p className="mb-4">
            L'ERP a une validité de <strong>6 mois</strong> et doit être annexé au contrat de location. En cas de renouvellement du bail, si l'ERP a plus de 6 mois, il doit être mis à jour. Le locataire doit signer une attestation confirmant qu'il a bien pris connaissance des risques.
          </p>
          <p>
            L'<strong>ERP location Landes</strong> assure une information complète du locataire et sécurise juridiquement le bail.
          </p>
        </>
      ),
    },
    {
      icon: Ruler,
      title: "Loi Boutin",
      description:
        "Mesurage de la surface habitable d'un logement destiné à la location. Obligatoire pour la location d'un logement vide (résidence principale).",
      validity: "Illimitée (sauf travaux modifiant la superficie)",
      mandatory: "Location vide",
      detailedContent: (
        <>
          <h4 className="font-semibold text-xl text-gray-900 mb-4">Qu'est-ce que la loi Boutin ?</h4>
          <p className="mb-4">
            Le <strong>mesurage loi Boutin</strong> est obligatoire pour toute location vide (résidence principale) d'un logement. Il calcule la <strong>surface habitable</strong> du logement, qui doit obligatoirement figurer dans le bail de location. Cette loi, en vigueur depuis 2009, protège le locataire en garantissant la superficie exacte du logement loué.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Différence entre surface Boutin et surface Carrez</h4>
          <p className="mb-4">
            La <strong>surface habitable loi Boutin</strong> est différente de la surface Carrez (copropriété). Elle correspond à la superficie des planchers construits après déduction des murs, cloisons, escaliers, gaines, embrasures de portes et fenêtres, ainsi que des parties d'une hauteur inférieure à 1,80 m. Les caves, garages, terrasses, balcons, vérandas et combles non aménagés ne sont pas comptabilisés.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Biens concernés</h4>
          <p className="mb-4">
            Le mesurage loi Boutin est <strong>obligatoire pour la location vide</strong> (bail d'habitation classique) servant de résidence principale au locataire. Il n'est pas obligatoire pour :
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
            <li>Les locations meublées</li>
            <li>Les locations saisonnières</li>
            <li>Les résidences secondaires</li>
            <li>Les logements de fonction</li>
          </ul>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Conséquences en cas d'erreur</h4>
          <p className="mb-4">
            Si la surface réelle est <strong>inférieure de plus de 5%  celle mentionnée dans le bail</strong>, le locataire peut exiger une diminution du loyer proportionnelle à la différence de surface. Cette demande peut être faite à tout moment pendant la durée du bail et s'applique dès la prise d'effet du bail.
          </p>
          
          <h4 className="font-semibold text-xl text-gray-900 mb-4 mt-6">Validit</h4>
          <p className="mb-4">
            Le mesurage loi Boutin a une <strong>validité illimitée</strong> tant qu'aucun travaux modifiant la superficie habitable du logement n'est réalisé. En cas de réaménagement ou d'agrandissement, un nouveau mesurage doit être effectué.
          </p>
          <p>
            Le <strong>mesurage loi Boutin Landes (40)</strong> évite tout litige avec le locataire et sécurise juridiquement le bail de location.
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="w-full">
      <SEO 
        title="Diagnostics Obligatoires Location Immobilière Landes 40 | MDIAGNOSTIC Soustons"
        description="Tous les diagnostics immobiliers obligatoires pour louer votre bien dans les Landes : DPE, amiante, plomb, électricité, gaz, ERP, loi Boutin. Diagnostiqueuse certifiée à Soustons intervenant sur Hossegor, Capbreton, Dax. Conformité location garantie."
        keywords="diagnostic location Landes, DPE location Soustons, diagnostic amiante location Hossegor, CREP location Capbreton, diagnostic électricité location Dax, diagnostic gaz location, ERP location, loi Boutin Landes, surface habitable location, bail location diagnostics"
        canonical="https://www.mdiagnostic.fr/location"
      />
      {/* Header */}
      <section className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, #818958, #6b7148)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Diagnostics Obligatoires pour la Location
          </h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Tous les diagnostics immobiliers obligatoires pour la mise en location de votre bien sur Soustons et les Landes
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col"
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

          {/* Dernier service (Loi Boutin) centré */}
          <div className="mt-8 flex justify-center">
            {(() => {
              const lastService = services[6];
              const IconComponent = lastService.icon;
              return (
                <div
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer flex flex-col w-full lg:w-1/2"
                  onClick={() => setSelectedService(6)}
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-white shadow-sm border border-gray-200">
                          <IconComponent className="h-6 w-6" style={{ color: '#818958' }} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-xl mb-2 text-gray-900">
                          {lastService.title}
                        </h3>
                        <p className="text-gray-600">
                          {lastService.description}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm mb-4">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-700">
                          Validité :
                        </span>
                        <span className="text-gray-600">
                          {lastService.validity}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-700">
                          Obligatoire :
                        </span>
                        <span className="text-gray-600">
                          {lastService.mandatory}
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
              );
            })()}
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