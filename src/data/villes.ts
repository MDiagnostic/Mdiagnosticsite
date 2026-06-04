export interface VilleData {
  ville: string;
  villeSlug: string;
  departement: string;
  codePostal: string;
  description: string;
  particularites: string[];
  voisines: string[];
}

export const villesData: VilleData[] = [
  // Landes (40) - Principales
  {
    ville: "Hossegor",
    villeSlug: "hossegor",
    departement: "Landes (40)",
    codePostal: "40150",
    description: "Station balnéaire prisée des surfeurs, Hossegor compte de nombreuses villas en bord de mer, résidences secondaires et appartements modernes. MDIAGNOSTIC intervient pour tous vos diagnostics immobiliers à Hossegor : DPE, amiante, plomb, électricité, gaz, termites.",
    particularites: [
      "Zone à risque termites - Diagnostic obligatoire pour toute vente",
      "Nombreuses villas anciennes construites avant 1997 (diagnostic amiante obligatoire)",
      "Proximité océan : importance du diagnostic termites et humidité",
      "Marché immobilier dynamique avec forte demande locative saisonnière"
    ],
    voisines: ["Capbreton", "Seignosse", "Soorts-Hossegor", "Soustons", "Tosse"]
  },
  {
    ville: "Capbreton",
    villeSlug: "capbreton",
    departement: "Landes (40)",
    codePostal: "40130",
    description: "Port de pêche et station balnéaire, Capbreton offre un parc immobilier varié entre maisons traditionnelles landaises et résidences contemporaines. MDIAGNOSTIC réalise tous vos diagnostics à Capbreton dans les meilleurs délais.",
    particularites: [
      "Zone à risque termites du fait de la proximité de la forêt landaise",
      "Nombreux biens anciens nécessitant diagnostic amiante et plomb",
      "Fort développement immobilier avec constructions récentes",
      "Marché locatif saisonnier très actif"
    ],
    voisines: ["Hossegor", "Labenne", "Soustons", "Tarnos", "Ondres"]
  },
  {
    ville: "Dax",
    villeSlug: "dax",
    departement: "Landes (40)",
    codePostal: "40100",
    description: "Première ville thermale de France, Dax dispose d'un patrimoine immobilier ancien et varié : immeubles du centre-ville, villas thermales, résidences modernes. MDIAGNOSTIC intervient sur toute la ville de Dax et son agglomération pour vos diagnostics immobiliers.",
    particularites: [
      "Centre-ville ancien avec bâtiments construits avant 1949 (diagnostic plomb obligatoire)",
      "Nombreux immeubles d'habitation nécessitant DPE et diagnostics techniques",
      "Zone à risque termites - Diagnostic systématique recommandé",
      "Marché locatif dynamique (thermalisme, étudiants)"
    ],
    voisines: ["Saint-Paul-lès-Dax", "Peyrehorade", "Saint-Vincent-de-Tyrosse", "Soustons"]
  },
  {
    ville: "Soustons",
    villeSlug: "soustons",
    departement: "Landes (40)",
    codePostal: "40140",
    description: "Commune dynamique entre lac et océan, Soustons bénéficie d'un marché immobilier attractif. Basée à Soustons, MDIAGNOSTIC connaît parfaitement le territoire et intervient rapidement pour tous vos diagnostics.",
    particularites: [
      "Siège de MDIAGNOSTIC - Intervention ultra-rapide sur la commune",
      "Zone à risque termites - Diagnostic obligatoire",
      "Mix entre habitat ancien et constructions récentes",
      "Proximité du lac marin de Soustons et de l'océan"
    ],
    voisines: ["Hossegor", "Capbreton", "Tosse", "Azur", "Vieux-Boucau-les-Bains"]
  },
  {
    ville: "Saint-Paul-lès-Dax",
    villeSlug: "saint-paul-les-dax",
    departement: "Landes (40)",
    codePostal: "40990",
    description: "Deuxième ville de l'agglomération dacquoise, Saint-Paul-lès-Dax compte de nombreux lotissements récents et quartiers résidentiels. MDIAGNOSTIC intervient pour tous vos diagnostics à Saint-Paul-lès-Dax.",
    particularites: [
      "Zone péri-urbaine avec développement résidentiel important",
      "Nombreuses constructions des années 1970-1990 (diagnostic amiante)",
      "Proximité thermes - Marché locatif actif",
      "Zone à risque termites"
    ],
    voisines: ["Dax", "Tarnos", "Saint-Vincent-de-Tyrosse"]
  },

  // Landes (40) - Côte
  {
    ville: "Seignosse",
    villeSlug: "seignosse",
    departement: "Landes (40)",
    codePostal: "40510",
    description: "Station balnéaire familiale, Seignosse propose un parc immobilier varié de villas et résidences. MDIAGNOSTIC réalise vos diagnostics immobiliers à Seignosse avec expertise locale.",
    particularites: [
      "Zone littorale avec spécificités architecturales landaises",
      "Nombreuses résidences secondaires",
      "Zone à risque termites",
      "Marché locatif saisonnier"
    ],
    voisines: ["Hossegor", "Tosse", "Capbreton", "Azur"]
  },
  {
    ville: "Labenne",
    villeSlug: "labenne",
    departement: "Landes (40)",
    codePostal: "40530",
    description: "Entre océan et Adour, Labenne offre un cadre de vie privilégié avec un parc immobilier attractif. Diagnostics immobiliers à Labenne par MDIAGNOSTIC.",
    particularites: [
      "Labenne-Océan : station balnéaire avec villas",
      "Zone à risque termites",
      "Proximité de Bayonne et Capbreton"
    ],
    voisines: ["Capbreton", "Ondres", "Tarnos"]
  },
  {
    ville: "Ondres",
    villeSlug: "ondres",
    departement: "Landes (40)",
    codePostal: "40440",
    description: "Commune littorale aux portes du Pays Basque, Ondres dispose d'un marché immobilier dynamique. MDIAGNOSTIC intervient à Ondres pour tous vos diagnostics.",
    particularites: [
      "Station balnéaire entre Landes et Pays Basque",
      "Forte demande locative",
      "Zone à risque termites"
    ],
    voisines: ["Labenne", "Tarnos", "Capbreton"]
  },
  {
    ville: "Tarnos",
    villeSlug: "tarnos",
    departement: "Landes (40)",
    codePostal: "40220",
    description: "Ville industrielle et résidentielle aux portes de Bayonne, Tarnos compte un parc immobilier varié. Diagnostics immobiliers à Tarnos par votre expert certifié MDIAGNOSTIC.",
    particularites: [
      "Zone urbaine avec habitat collectif important",
      "Nombreux biens anciens (diagnostic amiante et plomb)",
      "Proximité zone industrielle",
      "Zone à risque termites"
    ],
    voisines: ["Ondres", "Labenne", "Saint-Paul-lès-Dax", "Bayonne"]
  },
  {
    ville: "Vieux-Boucau-les-Bains",
    villeSlug: "vieux-boucau-les-bains",
    departement: "Landes (40)",
    codePostal: "40480",
    description: "Station balnéaire familiale réputée, Vieux-Boucau compte de nombreuses résidences secondaires et locations saisonnières. MDIAGNOSTIC réalise vos diagnostics à Vieux-Boucau.",
    particularites: [
      "Station balnéaire avec forte proportion de résidences secondaires",
      "Marché locatif saisonnier très actif",
      "Zone à risque termites",
      "Proximité du lac marin"
    ],
    voisines: ["Soustons", "Messanges", "Azur", "Moliets-et-Maa"]
  },
  {
    ville: "Messanges",
    villeSlug: "messanges",
    departement: "Landes (40)",
    codePostal: "40660",
    description: "Commune littorale au sud des Landes, Messanges offre plages et forêt de pins. Diagnostics immobiliers à Messanges par MDIAGNOSTIC.",
    particularites: [
      "Station balnéaire avec villas et résidences",
      "Zone à risque termites",
      "Marché immobilier touristique"
    ],
    voisines: ["Vieux-Boucau-les-Bains", "Moliets-et-Maa", "Azur"]
  },
  {
    ville: "Moliets-et-Maa",
    villeSlug: "moliets-et-maa",
    departement: "Landes (40)",
    codePostal: "40660",
    description: "Station balnéaire avec golf renommé, Moliets-et-Maa propose un parc immobilier de qualité. MDIAGNOSTIC intervient à Moliets pour vos diagnostics.",
    particularites: [
      "Golf international - Villas de standing",
      "Résidences de tourisme",
      "Zone à risque termites",
      "Marché immobilier haut de gamme"
    ],
    voisines: ["Messanges", "Vieux-Boucau-les-Bains", "Léon"]
  },
  {
    ville: "Léon",
    villeSlug: "leon",
    departement: "Landes (40)",
    codePostal: "40550",
    description: "Village landais entre lac et océan, Léon conserve un charme authentique. Diagnostics immobiliers à Léon par MDIAGNOSTIC.",
    particularites: [
      "Lac de Léon - Environnement préservé",
      "Habitat traditionnel landais",
      "Zone à risque termites"
    ],
    voisines: ["Moliets-et-Maa", "Linxe", "Lit-et-Mixe"]
  },

  // Landes (40) - Intérieur
  {
    ville: "Tosse",
    villeSlug: "tosse",
    departement: "Landes (40)",
    codePostal: "40230",
    description: "Commune résidentielle proche d'Hossegor, Tosse offre un cadre de vie calme. MDIAGNOSTIC réalise vos diagnostics à Tosse.",
    particularites: [
      "Commune résidentielle proche côte",
      "Habitat pavillonnaire",
      "Zone à risque termites"
    ],
    voisines: ["Soustons", "Hossegor", "Seignosse", "Azur"]
  },
  {
    ville: "Azur",
    villeSlug: "azur",
    departement: "Landes (40)",
    codePostal: "40140",
    description: "Petit village landais proche de Soustons, Azur bénéficie d'un environnement paisible. Diagnostics immobiliers à Azur par MDIAGNOSTIC.",
    particularites: [
      "Village résidentiel calme",
      "Proximité Soustons et côte",
      "Zone à risque termites"
    ],
    voisines: ["Soustons", "Tosse", "Messanges"]
  },
  {
    ville: "Saint-Vincent-de-Tyrosse",
    villeSlug: "saint-vincent-de-tyrosse",
    departement: "Landes (40)",
    codePostal: "40230",
    description: "Commune de l'agglomération dacquoise, Saint-Vincent-de-Tyrosse compte un habitat varié. MDIAGNOSTIC intervient à Saint-Vincent-de-Tyrosse.",
    particularites: [
      "Zone péri-urbaine de Dax",
      "Développement résidentiel",
      "Zone à risque termites"
    ],
    voisines: ["Dax", "Saint-Paul-lès-Dax", "Soustons"]
  },
  {
    ville: "Linxe",
    villeSlug: "linxe",
    departement: "Landes (40)",
    codePostal: "40260",
    description: "Village landais au cœur de la forêt, Linxe propose un habitat traditionnel. Diagnostics immobiliers à Linxe par MDIAGNOSTIC.",
    particularites: [
      "Village forestier landais",
      "Habitat traditionnel",
      "Zone à risque termites élevé"
    ],
    voisines: ["Léon", "Lit-et-Mixe", "Castets"]
  },
  {
    ville: "Peyrehorade",
    villeSlug: "peyrehorade",
    departement: "Landes (40)",
    codePostal: "40300",
    description: "Bastide historique sur les bords du gave, Peyrehorade dispose d'un patrimoine ancien. MDIAGNOSTIC réalise vos diagnostics à Peyrehorade.",
    particularites: [
      "Centre historique ancien (diagnostic plomb souvent nécessaire)",
      "Patrimoine bâti traditionnel",
      "Zone à risque termites",
      "Proximité Pays Basque"
    ],
    voisines: ["Dax", "Saint-Paul-lès-Dax"]
  },
  {
    ville: "Biscarrosse",
    villeSlug: "biscarrosse",
    departement: "Landes (40)",
    codePostal: "40600",
    description: "Grande station balnéaire avec lacs, Biscarrosse offre un marché immobilier dynamique. MDIAGNOSTIC intervient à Biscarrosse pour tous vos diagnostics.",
    particularites: [
      "Station balnéaire majeure des Landes",
      "Biscarrosse-Plage : résidences de vacances",
      "Lacs de Biscarrosse et Parentis",
      "Zone à risque termites",
      "Marché locatif saisonnier très actif"
    ],
    voisines: ["Parentis-en-Born", "Mimizan", "Sanguinet"]
  },
  {
    ville: "Parentis-en-Born",
    villeSlug: "parentis-en-born",
    departement: "Landes (40)",
    codePostal: "40160",
    description: "Ville du bassin d'Arcachon sud, Parentis-en-Born borde le lac éponyme. MDIAGNOSTIC réalise vos diagnostics à Parentis-en-Born.",
    particularites: [
      "Lac de Parentis-Biscarrosse",
      "Zone pétrolière historique",
      "Habitat mixte (permanent et saisonnier)",
      "Zone à risque termites"
    ],
    voisines: ["Biscarrosse", "Mimizan", "Sanguinet"]
  },
  {
    ville: "Mimizan",
    villeSlug: "mimizan",
    departement: "Landes (40)",
    codePostal: "40200",
    description: "Station balnéaire majeure des Landes, Mimizan conjugue plage et forêt. MDIAGNOSTIC intervient à Mimizan et Mimizan-Plage pour vos diagnostics.",
    particularites: [
      "Mimizan-Bourg et Mimizan-Plage : deux secteurs distincts",
      "Station balnéaire réputée",
      "Nombreuses résidences secondaires",
      "Zone à risque termites",
      "Marché immobilier dynamique"
    ],
    voisines: ["Biscarrosse", "Parentis-en-Born", "Lit-et-Mixe"]
  },
  {
    ville: "Lit-et-Mixe",
    villeSlug: "lit-et-mixe",
    departement: "Landes (40)",
    codePostal: "40170",
    description: "Commune littorale des Landes, Lit-et-Mixe offre plages sauvages et forêt. Diagnostics immobiliers à Lit-et-Mixe par MDIAGNOSTIC.",
    particularites: [
      "Cap de l'Homy : site balnéaire préservé",
      "Habitat dispersé",
      "Zone à risque termites"
    ],
    voisines: ["Mimizan", "Léon", "Linxe"]
  },
  {
    ville: "Saint-Geours-de-Maremne",
    villeSlug: "saint-geours-de-maremne",
    departement: "Landes (40)",
    codePostal: "40230",
    description: "Village landais proche de la côte, Saint-Geours-de-Maremne bénéficie d'une situation privilégiée. MDIAGNOSTIC réalise vos diagnostics à Saint-Geours-de-Maremne.",
    particularites: [
      "Proximité Hossegor et Soustons",
      "Habitat résidentiel calme",
      "Zone à risque termites"
    ],
    voisines: ["Soustons", "Tosse", "Saint-Vincent-de-Tyrosse"]
  },

  // Pyrénées-Atlantiques (64)
  {
    ville: "Bayonne",
    villeSlug: "bayonne",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64100",
    description: "Capitale du Pays Basque, Bayonne dispose d'un riche patrimoine immobilier ancien et moderne. MDIAGNOSTIC intervient à Bayonne pour tous vos diagnostics immobiliers obligatoires.",
    particularites: [
      "Centre historique avec immeubles anciens (diagnostic plomb et amiante souvent obligatoires)",
      "Grand et Petit Bayonne : quartiers patrimoniaux",
      "Copropriétés nombreuses (mesurage loi Carrez)",
      "Zone à risque termites",
      "Marché immobilier très actif"
    ],
    voisines: ["Anglet", "Biarritz", "Tarnos", "Ondres"]
  },
  {
    ville: "Anglet",
    villeSlug: "anglet",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64600",
    description: "Entre Bayonne et Biarritz, Anglet offre 11 plages et un cadre de vie prisé. MDIAGNOSTIC réalise vos diagnostics immobiliers à Anglet.",
    particularites: [
      "Ville résidentielle avec nombreuses villas",
      "11 plages de l'Adour à la Chambre d'Amour",
      "Habitat varié (villas, appartements, résidences)",
      "Zone à risque termites",
      "Marché immobilier dynamique"
    ],
    voisines: ["Bayonne", "Biarritz", "Arcangues"]
  },
  {
    ville: "Biarritz",
    villeSlug: "biarritz",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64200",
    description: "Station balnéaire de renommée internationale, Biarritz propose un patrimoine immobilier d'exception. MDIAGNOSTIC intervient à Biarritz pour vos diagnostics.",
    particularites: [
      "Immobilier haut de gamme (villas Belle Époque, appartements vue mer)",
      "Nombreux biens anciens et classés",
      "Copropriétés de prestige",
      "Zone à risque termites",
      "Marché immobilier premium"
    ],
    voisines: ["Anglet", "Bidart", "Arcangues", "Bayonne"]
  },
  {
    ville: "Bidart",
    villeSlug: "bidart",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64210",
    description: "Village basque entre Biarritz et Saint-Jean-de-Luz, Bidart conserve son charme authentique. MDIAGNOSTIC réalise vos diagnostics à Bidart.",
    particularites: [
      "Village typiquement basque",
      "Habitat traditionnel et villas modernes",
      "Plages réputées des surfeurs",
      "Zone à risque termites"
    ],
    voisines: ["Biarritz", "Guéthary", "Arbonne"]
  },
  {
    ville: "Guéthary",
    villeSlug: "guethary",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64210",
    description: "Petit village basque de charme entre Bidart et Saint-Jean-de-Luz, Guéthary séduit par son authenticité. MDIAGNOSTIC intervient à Guéthary.",
    particularites: [
      "Village de pêcheurs préservé",
      "Immobilier recherché (villas basques)",
      "Vue mer prisée",
      "Zone à risque termites"
    ],
    voisines: ["Bidart", "Saint-Jean-de-Luz", "Arbonne"]
  },
  {
    ville: "Saint-Jean-de-Luz",
    villeSlug: "saint-jean-de-luz",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64500",
    description: "Port de pêche et station balnéaire élégante, Saint-Jean-de-Luz offre un marché immobilier attractif. MDIAGNOSTIC réalise vos diagnostics à Saint-Jean-de-Luz.",
    particularites: [
      "Centre-ville historique avec immeubles anciens",
      "Quartier de la plage : villas et résidences",
      "Copropriétés face mer",
      "Zone à risque termites",
      "Marché immobilier dynamique"
    ],
    voisines: ["Ciboure", "Guéthary", "Urrugne", "Hendaye"]
  },
  {
    ville: "Ciboure",
    villeSlug: "ciboure",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64500",
    description: "Village de pêcheurs face à Saint-Jean-de-Luz, Ciboure séduit par son authenticité. MDIAGNOSTIC intervient à Ciboure pour vos diagnostics.",
    particularites: [
      "Port de pêche traditionnel",
      "Maisons de pêcheurs typiques",
      "Vue sur Saint-Jean-de-Luz",
      "Zone à risque termites"
    ],
    voisines: ["Saint-Jean-de-Luz", "Urrugne", "Hendaye"]
  },
  {
    ville: "Hendaye",
    villeSlug: "hendaye",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64700",
    description: "Dernière commune française avant l'Espagne, Hendaye offre plage et montagne. MDIAGNOSTIC réalise vos diagnostics à Hendaye.",
    particularites: [
      "Hendaye-Plage : résidences balnéaires",
      "Proximité frontière espagnole",
      "Habitat varié",
      "Zone à risque termites"
    ],
    voisines: ["Urrugne", "Ciboure", "Saint-Jean-de-Luz"]
  },
  {
    ville: "Urrugne",
    villeSlug: "urrugne",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64122",
    description: "Commune basque entre mer et montagne, Urrugne conjugue patrimoine et nature. MDIAGNOSTIC intervient à Urrugne pour vos diagnostics.",
    particularites: [
      "Socoa : port et fort",
      "Habitat dispersé (quartiers basques)",
      "Proximité Saint-Jean-de-Luz",
      "Zone à risque termites"
    ],
    voisines: ["Saint-Jean-de-Luz", "Hendaye", "Ciboure"]
  },
  {
    ville: "Ustaritz",
    villeSlug: "ustaritz",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64480",
    description: "Village basque de l'intérieur, Ustaritz conserve un charme authentique. MDIAGNOSTIC réalise vos diagnostics à Ustaritz.",
    particularites: [
      "Basque intérieur - Habitat traditionnel",
      "Maisons basques typiques",
      "Proximité Bayonne",
      "Zone à risque termites"
    ],
    voisines: ["Bayonne", "Cambo-les-Bains", "Espelette"]
  },
  {
    ville: "Cambo-les-Bains",
    villeSlug: "cambo-les-bains",
    departement: "Pyrénées-Atlantiques (64)",
    codePostal: "64250",
    description: "Station thermale basque réputée, Cambo-les-Bains offre un cadre verdoyant. MDIAGNOSTIC intervient à Cambo-les-Bains pour vos diagnostics.",
    particularites: [
      "Station thermale - Villas Belle Époque",
      "Villa Arnaga (Edmond Rostand)",
      "Habitat thermal et résidentiel",
      "Zone à risque termites"
    ],
    voisines: ["Ustaritz", "Espelette", "Bayonne"]
  },

  // Landes (40) - Côte Nord (compléments)
  {
    ville: "Bias",
    villeSlug: "bias",
    departement: "Landes (40)",
    codePostal: "40170",
    description: "Commune littorale au nord de Mimizan, Bias offre un cadre naturel préservé. MDIAGNOSTIC réalise vos diagnostics immobiliers à Bias.",
    particularites: [
      "Plage de Contis réputée des surfeurs",
      "Habitat dispersé entre forêt et océan",
      "Zone à risque termites",
      "Marché locatif saisonnier"
    ],
    voisines: ["Mimizan", "Saint-Julien-en-Born", "Lit-et-Mixe"]
  },
  {
    ville: "Sanguinet",
    villeSlug: "sanguinet",
    departement: "Landes (40)",
    codePostal: "40460",
    description: "Bordant le lac de Cazaux-Sanguinet, cette commune offre un cadre de vie privilégié. MDIAGNOSTIC intervient à Sanguinet pour tous vos diagnostics.",
    particularites: [
      "Lac de Cazaux-Sanguinet - Activités nautiques",
      "Nombreuses résidences secondaires",
      "Zone à risque termites",
      "Proximité Biscarrosse et Arcachon"
    ],
    voisines: ["Biscarrosse", "Parentis-en-Born"]
  },
  {
    ville: "Aureilhan",
    villeSlug: "aureilhan",
    departement: "Landes (40)",
    codePostal: "40200",
    description: "Commune résidentielle proche de Mimizan, Aureilhan bénéficie d'un environnement forestier. MDIAGNOSTIC réalise vos diagnostics à Aureilhan.",
    particularites: [
      "Proximité immédiate de Mimizan",
      "Habitat pavillonnaire récent",
      "Zone à risque termites",
      "Cadre forestier landais"
    ],
    voisines: ["Mimizan", "Bias"]
  },
  {
    ville: "Saint-Girons-Plage",
    villeSlug: "saint-girons-plage",
    departement: "Landes (40)",
    codePostal: "40560",
    description: "Station balnéaire familiale au nord des Landes, Saint-Girons-Plage offre plages et forêt. MDIAGNOSTIC intervient à Saint-Girons-Plage.",
    particularites: [
      "Station balnéaire au nord du département",
      "Courant d'Huchet (site naturel classé)",
      "Résidences de vacances",
      "Zone à risque termites"
    ],
    voisines: ["Léon", "Moliets-et-Maa"]
  },
  {
    ville: "Saint-Julien-en-Born",
    villeSlug: "saint-julien-en-born",
    departement: "Landes (40)",
    codePostal: "40170",
    description: "Commune littorale au cœur de la forêt landaise, Saint-Julien-en-Born offre plages sauvages. MDIAGNOSTIC réalise vos diagnostics à Saint-Julien-en-Born.",
    particularites: [
      "Contis-Plage : spot de surf réputé",
      "Forêt domaniale des Landes",
      "Zone à risque termites élevé",
      "Habitat dispersé"
    ],
    voisines: ["Bias", "Lit-et-Mixe", "Mimizan"]
  },

  // Landes (40) - Agglomération dacquoise (compléments)
  {
    ville: "Pontonx-sur-l'Adour",
    villeSlug: "pontonx-sur-l-adour",
    departement: "Landes (40)",
    codePostal: "40465",
    description: "Commune de l'agglomération dacquoise sur les bords de l'Adour. MDIAGNOSTIC intervient à Pontonx-sur-l'Adour pour vos diagnostics.",
    particularites: [
      "Bords de l'Adour - Environnement fluvial",
      "Proximité Dax",
      "Habitat résidentiel et rural",
      "Zone à risque termites"
    ],
    voisines: ["Dax", "Saint-Paul-lès-Dax"]
  },
  {
    ville: "Narrosse",
    villeSlug: "narrosse",
    departement: "Landes (40)",
    codePostal: "40180",
    description: "Commune péri-urbaine de Dax, Narrosse offre un cadre résidentiel calme. MDIAGNOSTIC réalise vos diagnostics à Narrosse.",
    particularites: [
      "Zone résidentielle de l'agglomération dacquoise",
      "Développement pavillonnaire récent",
      "Zone à risque termites",
      "Proximité immédiate de Dax"
    ],
    voisines: ["Dax", "Saint-Paul-lès-Dax", "Saint-Vincent-de-Tyrosse"]
  },

  // Landes (40) - Intérieur (compléments)
  {
    ville: "Castets",
    villeSlug: "castets",
    departement: "Landes (40)",
    codePostal: "40260",
    description: "Bourg landais entre Dax et la côte, Castets offre un cadre de vie rural. MDIAGNOSTIC intervient à Castets pour vos diagnostics.",
    particularites: [
      "Position centrale entre Dax et Hossegor",
      "Habitat traditionnel landais",
      "Zone à risque termites",
      "Marché immobilier résidentiel"
    ],
    voisines: ["Linxe", "Léon", "Saint-Vincent-de-Tyrosse"]
  },
  {
    ville: "Magescq",
    villeSlug: "magescq",
    departement: "Landes (40)",
    codePostal: "40140",
    description: "Village landais réputé pour sa gastronomie, Magescq offre un habitat traditionnel. MDIAGNOSTIC réalise vos diagnostics à Magescq.",
    particularites: [
      "Village gastronomique des Landes",
      "Habitat rural traditionnel",
      "Zone à risque termites",
      "Proximité Soustons"
    ],
    voisines: ["Soustons", "Saint-Vincent-de-Tyrosse"]
  },
  {
    ville: "Tartas",
    villeSlug: "tartas",
    departement: "Landes (40)",
    codePostal: "40400",
    description: "Bastide médiévale sur la Midouze, Tartas conserve un patrimoine historique. MDIAGNOSTIC intervient à Tartas pour vos diagnostics.",
    particularites: [
      "Centre historique ancien (diagnostic plomb souvent nécessaire)",
      "Bastide du 13ème siècle",
      "Zone à risque termites",
      "Marché immobilier de bourg"
    ],
    voisines: ["Dax", "Mont-de-Marsan"]
  },
  {
    ville: "Saint-Martin-de-Seignanx",
    villeSlug: "saint-martin-de-seignanx",
    departement: "Landes (40)",
    codePostal: "40390",
    description: "Commune aux portes de Bayonne, Saint-Martin-de-Seignanx offre un cadre péri-urbain. MDIAGNOSTIC réalise vos diagnostics à Saint-Martin-de-Seignanx.",
    particularites: [
      "Zone péri-urbaine de Bayonne",
      "Développement résidentiel récent",
      "Zone à risque termites",
      "Proximité zones d'activité"
    ],
    voisines: ["Bayonne", "Tarnos", "Ondres"]
  },

  // Landes (40) - Secteur élargi
  {
    ville: "Mont-de-Marsan",
    villeSlug: "mont-de-marsan",
    departement: "Landes (40)",
    codePostal: "40000",
    description: "Préfecture des Landes, Mont-de-Marsan offre un marché immobilier urbain dynamique. MDIAGNOSTIC intervient à Mont-de-Marsan pour tous vos diagnostics.",
    particularites: [
      "Centre-ville historique (diagnostic plomb et amiante fréquents)",
      "Nombreuses copropriétés",
      "Zone à risque termites",
      "Marché locatif actif (étudiants, militaires)",
      "Préfecture - Marché immobilier urbain"
    ],
    voisines: ["Saint-Pierre-du-Mont", "Tartas"]
  },
  {
    ville: "Saint-Pierre-du-Mont",
    villeSlug: "saint-pierre-du-mont",
    departement: "Landes (40)",
    codePostal: "40280",
    description: "Deuxième ville de l'agglomération montoise, Saint-Pierre-du-Mont offre un cadre résidentiel. MDIAGNOSTIC réalise vos diagnostics à Saint-Pierre-du-Mont.",
    particularites: [
      "Zone résidentielle de Mont-de-Marsan",
      "Nombreux lotissements récents",
      "Zone à risque termites",
      "Habitat pavillonnaire dominant"
    ],
    voisines: ["Mont-de-Marsan", "Tartas"]
  },
  {
    ville: "Hagetmau",
    villeSlug: "hagetmau",
    departement: "Landes (40)",
    codePostal: "40700",
    description: "Bastide landaise au cœur de la Chalosse, Hagetmau dispose d'un patrimoine ancien. MDIAGNOSTIC intervient à Hagetmau pour vos diagnostics.",
    particularites: [
      "Bastide chalossaise - Centre historique",
      "Crypte de Saint-Girons (monument classé)",
      "Zone à risque termites",
      "Marché immobilier de bourg rural"
    ],
    voisines: ["Aire-sur-l'Adour", "Peyrehorade"]
  },
  {
    ville: "Aire-sur-l'Adour",
    villeSlug: "aire-sur-l-adour",
    departement: "Landes (40)",
    codePostal: "40800",
    description: "Ville étape sur le chemin de Saint-Jacques, Aire-sur-l'Adour conserve un patrimoine médiéval. MDIAGNOSTIC réalise vos diagnostics à Aire-sur-l'Adour.",
    particularites: [
      "Centre historique médiéval (diagnostic plomb souvent requis)",
      "Cathédrale Saint-Jean-Baptiste",
      "Zone à risque termites",
      "Étape jacquaire"
    ],
    voisines: ["Hagetmau", "Mont-de-Marsan", "Peyrehorade"]
  },
  {
    ville: "Saint-Vincent-de-Paul",
    villeSlug: "saint-vincent-de-paul",
    departement: "Landes (40)",
    codePostal: "40990",
    description: "Village landais célèbre pour son berger devenu saint. MDIAGNOSTIC intervient à Saint-Vincent-de-Paul pour vos diagnostics.",
    particularites: [
      "Village de naissance de Saint Vincent de Paul",
      "Habitat rural traditionnel",
      "Zone à risque termites",
      "Proximité Dax"
    ],
    voisines: ["Dax", "Saint-Paul-lès-Dax", "Peyrehorade"]
  },
  {
    ville: "Orthevielle",
    villeSlug: "orthevielle",
    departement: "Landes (40)",
    codePostal: "40300",
    description: "Commune rurale du Pays d'Orthe, Orthevielle offre un cadre champêtre. MDIAGNOSTIC réalise vos diagnostics à Orthevielle.",
    particularites: [
      "Habitat rural dispersé",
      "Proximité Peyrehorade",
      "Zone à risque termites",
      "Cadre champêtre landais"
    ],
    voisines: ["Peyrehorade", "Saint-Vincent-de-Paul"]
  }
];
