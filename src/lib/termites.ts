/**
 * Base de données des zones à risque termites en France
 * Source : Arrêtés préfectoraux et georisques.gouv.fr
 * 
 * Cette base de données permet de déterminer automatiquement si un bien immobilier
 * est situé en zone à risque termites selon le code postal.
 */

/**
 * Départements où 100% du territoire est classé en zone à risque termites
 */
const DEPARTEMENTS_TERMITES_100_PERCENT = [
  "65", // Hautes-Pyrénées
  "31", // Haute-Garonne
  "11", // Aude
  "81", // Tarn
  "34", // Hérault
  "32", // Gers
  "40", // Landes
  "47", // Lot-et-Garonne
  "33", // Gironde
  "24", // Dordogne
  "46", // Lot
  "12", // Aveyron
  "30", // Gard
  "82", // Tarn-et-Garonne
  "16", // Charente
  "17", // Charente-Maritime
  "85", // Vendée
  "13", // Bouches-du-Rhône
  "2B", // Haute-Corse
  "2A", // Corse-du-Sud
  "72", // Sarthe
  "37", // Indre-et-Loire
  "75", // Paris
  "92", // Hauts-de-Seine
];

/**
 * Département 64 (Pyrénées-Atlantiques) : logique inversée
 * Ces codes postaux sont les SEULS à NE PAS être en zone termites
 * Tous les autres codes postaux du 64 SONT en zone termites
 */
const PYRENEES_ATLANTIQUES_NON_TERMITES = [
  "64490",
  "64470",
  "64570",
  "64660",
  "64260",
  "64800",
  "64440",
  "64120",
  "64560",
  "64320",
];

/**
 * Vérifie si un code postal est en zone à risque termites
 * @param postalCode - Code postal à vérifier (format: "XXXXX")
 * @returns true si le code postal est en zone termites
 */
export function isTermitesZone(postalCode: string): boolean {
  if (!postalCode || postalCode.length !== 5) {
    return false;
  }

  // Extraire le département (2 premiers chiffres ou 2A/2B pour la Corse)
  let departement = postalCode.substring(0, 2);
  
  // Cas spécial : Corse (codes postaux 20XXX)
  if (postalCode.startsWith("20")) {
    const thirdDigit = postalCode.charAt(2);
    if (thirdDigit === "0" || thirdDigit === "1") {
      departement = "2A"; // Corse-du-Sud
    } else {
      departement = "2B"; // Haute-Corse
    }
  }

  // Vérifier si le département est 100% en zone termites
  if (DEPARTEMENTS_TERMITES_100_PERCENT.includes(departement)) {
    return true;
  }

  // Cas spécial : Pyrénées-Atlantiques (64)
  // Logique inversée : tous les codes postaux du 64 sont en zone termites
  // SAUF ceux dans la liste d'exclusion
  if (departement === "64") {
    // Si le code postal est dans la liste d'exclusion, il n'est PAS en zone termites
    if (PYRENEES_ATLANTIQUES_NON_TERMITES.includes(postalCode)) {
      return false;
    }
    // Sinon, il EST en zone termites
    return true;
  }

  // Par défaut, les autres départements ne sont pas en zone termites
  return false;
}

/**
 * Obtient le message d'information sur la zone termites
 * @param postalCode - Code postal
 * @returns Message explicatif
 */
export function getTermitesZoneMessage(postalCode: string): string {
  if (!postalCode) {
    return "";
  }

  if (isTermitesZone(postalCode)) {
    return "✅ Zone à risque termites : diagnostic obligatoire pour la vente (validité 6 mois)";
  }

  return "ℹ️ Zone non classée à risque termites selon les arrêtés préfectoraux";
}

/**
 * Obtient le nom du département à partir du code postal
 * @param postalCode - Code postal
 * @returns Nom du département ou chaîne vide
 */
export function getDepartementName(postalCode: string): string {
  if (!postalCode || postalCode.length !== 5) {
    return "";
  }

  const departementNames: Record<string, string> = {
    "13": "Bouches-du-Rhône",
    "16": "Charente",
    "17": "Charente-Maritime",
    "24": "Dordogne",
    "30": "Gard",
    "31": "Haute-Garonne",
    "32": "Gers",
    "33": "Gironde",
    "34": "Hérault",
    "37": "Indre-et-Loire",
    "40": "Landes",
    "46": "Lot",
    "47": "Lot-et-Garonne",
    "64": "Pyrénées-Atlantiques",
    "65": "Hautes-Pyrénées",
    "72": "Sarthe",
    "75": "Paris",
    "81": "Tarn",
    "82": "Tarn-et-Garonne",
    "85": "Vendée",
    "92": "Hauts-de-Seine",
    "11": "Aude",
    "12": "Aveyron",
    "2A": "Corse-du-Sud",
    "2B": "Haute-Corse",
  };

  let departement = postalCode.substring(0, 2);
  
  // Cas spécial Corse
  if (postalCode.startsWith("20")) {
    const thirdDigit = postalCode.charAt(2);
    departement = (thirdDigit === "0" || thirdDigit === "1") ? "2A" : "2B";
  }

  return departementNames[departement] || "";
}
