import { VillePage } from "./VillePage";
import { villesData } from "../../data/villes";

// Factory pour créer automatiquement les composants de pages ville
export function createVillePage(villeSlug: string) {
  const villeData = villesData.find(v => v.villeSlug === villeSlug);

  if (!villeData) {
    return null;
  }

  return function VillePageComponent() {
    return <VillePage {...villeData} />;
  };
}

// Export de tous les composants générés
export const Hossegor = createVillePage("hossegor")!;
export const Capbreton = createVillePage("capbreton")!;
export const Dax = createVillePage("dax")!;
export const Soustons = createVillePage("soustons")!;
export const SaintPaulLesDax = createVillePage("saint-paul-les-dax")!;
export const Seignosse = createVillePage("seignosse")!;
export const Labenne = createVillePage("labenne")!;
export const Ondres = createVillePage("ondres")!;
export const Tarnos = createVillePage("tarnos")!;
export const VieuxBoucauLesBains = createVillePage("vieux-boucau-les-bains")!;
export const Messanges = createVillePage("messanges")!;
export const MolietsEtMaa = createVillePage("moliets-et-maa")!;
export const Leon = createVillePage("leon")!;
export const Tosse = createVillePage("tosse")!;
export const Azur = createVillePage("azur")!;
export const SaintVincentDeTyrosse = createVillePage("saint-vincent-de-tyrosse")!;
export const Linxe = createVillePage("linxe")!;
export const Peyrehorade = createVillePage("peyrehorade")!;
export const Biscarrosse = createVillePage("biscarrosse")!;
export const ParentisEnBorn = createVillePage("parentis-en-born")!;
export const Mimizan = createVillePage("mimizan")!;
export const LitEtMixe = createVillePage("lit-et-mixe")!;
export const SaintGeoursDeMaremne = createVillePage("saint-geours-de-maremne")!;
export const Bayonne = createVillePage("bayonne")!;
export const Anglet = createVillePage("anglet")!;
export const Biarritz = createVillePage("biarritz")!;
export const Bidart = createVillePage("bidart")!;
export const Guethary = createVillePage("guethary")!;
export const SaintJeanDeLuz = createVillePage("saint-jean-de-luz")!;
export const Ciboure = createVillePage("ciboure")!;
export const Hendaye = createVillePage("hendaye")!;
export const Urrugne = createVillePage("urrugne")!;
export const Ustaritz = createVillePage("ustaritz")!;
export const CamboLesBains = createVillePage("cambo-les-bains")!;

// Nouvelles villes ajoutées
export const Bias = createVillePage("bias")!;
export const Sanguinet = createVillePage("sanguinet")!;
export const Aureilhan = createVillePage("aureilhan")!;
export const SaintGironsPlage = createVillePage("saint-girons-plage")!;
export const SaintJulienEnBorn = createVillePage("saint-julien-en-born")!;
export const PontonxSurLAdour = createVillePage("pontonx-sur-l-adour")!;
export const Narrosse = createVillePage("narrosse")!;
export const Castets = createVillePage("castets")!;
export const Magescq = createVillePage("magescq")!;
export const Tartas = createVillePage("tartas")!;
export const SaintMartinDeSeignanx = createVillePage("saint-martin-de-seignanx")!;
export const MontDeMarsan = createVillePage("mont-de-marsan")!;
export const SaintPierreDuMont = createVillePage("saint-pierre-du-mont")!;
export const Hagetmau = createVillePage("hagetmau")!;
export const AireSurLAdour = createVillePage("aire-sur-l-adour")!;
export const SaintVincentDePaul = createVillePage("saint-vincent-de-paul")!;
export const Orthevielle = createVillePage("orthevielle")!;
